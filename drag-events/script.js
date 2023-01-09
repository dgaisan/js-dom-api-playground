window.addEventListener("DOMContentLoaded", domContentLoaded);

let statusElement, imagePreviewElement;

function domContentLoaded() {
  const draggableElements = document.querySelectorAll(".draggableElement");
  const dropAreas = document.querySelectorAll(".dropZone");
  const fileArea = document.querySelector(".fileArea");

  statusElement = document.querySelector("#statusBar .status");
  imagePreviewElement = document.querySelector(".imagePreview");

  draggableElements.forEach((element) => {
    element.addEventListener("dragstart", handleDragStart);
  });

  dropAreas.forEach((area) => {
    area.addEventListener("dragover", handleDragover);
    area.addEventListener("drop", handleDrop);
  });

  fileArea.addEventListener("dragover", cancelDefaults);
  fileArea.addEventListener("dragstart", cancelDefaults);
  fileArea.addEventListener("drop", handleFileDrop);
}

function handleDragStart(event) {
  const { dataTransfer } = event;

  dataTransfer.setData("application/my-app", event.target.id);
  dataTransfer.effectAllowed = "move";
  setDragImage(event);
}

function cancelDefaults(event) {
    event.stopPropagation();
    event.preventDefault();
}

function handleDragover(event) {
  event.preventDefault();

  event.dataTransfer.dropEffect = "move";
  statusElement.innerText = "An element is being dragged...";
}
function handleDrop(event) {
  event.preventDefault();

  const data = event.dataTransfer.getData("application/my-app");
  event.target.appendChild(document.getElementById(data));
  statusElement.innerText = "";
}

function handleFileDrop(event) {
    cancelDefaults(event);
    const { dataTransfer } = event;
    if (dataTransfer && dataTransfer.files) {
        handleFiles(dataTransfer.files)
    }
}

function handleFiles(files) {
  for (let i = 0; i < files.length; i++) {
    const file = files[i];

    if (!file.type.startsWith("image/")) {
      continue;
    }

    const img = document.createElement("img");
    img.classList.add("obj");
    img.file = file;
    imagePreviewElement.appendChild(img); // Assuming that 'preview' is the div output where the content will be displayed.

    const reader = new FileReader();
    reader.onload = (e) => {
      img.src = e.target.result;
    };
    reader.readAsDataURL(file);
  }
}

function setDragImage(event) {
    const canvas = document.createElement("canvas");
    canvas.width = canvas.height = 50;
  
    const ctx = canvas.getContext("2d");
    ctx.lineWidth = 4;
    ctx.moveTo(0, 0);
    ctx.lineTo(50, 50);
    ctx.moveTo(0, 50);
    ctx.lineTo(50, 0);
    ctx.stroke();
  
    const dt = event.dataTransfer;
    dt.setData("text/plain", "Data to Drag");
    dt.setDragImage(canvas, 25, 25);
  }
