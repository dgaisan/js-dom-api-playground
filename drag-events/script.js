window.addEventListener('DOMContentLoaded', domContentLoaded);

let statusElement;

function domContentLoaded() {
  const draggableElements = document.querySelectorAll('.draggableElement');
  const dropAreas = document.querySelectorAll('.dropZone');

  statusElement = document.querySelector('#statusBar .status');

  draggableElements.forEach((element) => {
    element.addEventListener('dragstart', handleDragStart);
  });

  dropAreas.forEach((area) => {
    area.addEventListener('dragover', handleDragover);
    area.addEventListener('drop', handleDrop);
  });
}

function handleDragStart(event) {
  const { dataTransfer } = event;

  dataTransfer.setData('application/my-app', event.target.id);
  dataTransfer.effectAllowed = 'move';
}

function handleDragover(event) {
  event.preventDefault();
  
  event.dataTransfer.dropEffect = 'move';
  statusElement.innerText = 'An element is being dragged...';
}
function handleDrop(event) {
  event.preventDefault();

  const data = event.dataTransfer.getData('application/my-app');
  event.target.appendChild(document.getElementById(data));
  statusElement.innerText = '';
}
