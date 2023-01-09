window.addEventListener('DOMContentLoaded', domContentLoaded);

function domContentLoaded() {
  const draggableElement = document.getElementById('p1');
  const dropArea = document.getElementById('target');

  draggableElement.addEventListener('dragstart', handleDragStart);
  dropArea.addEventListener('dragover', handleDragover);
  dropArea.addEventListener('drop', handleDrop);
}

function handleDragStart(event) {
  const { dataTransfer } = event;

  dataTransfer.setData('application/my-app', event.target.id);
  dataTransfer.effectAllowed = 'move';
}

function handleDragover(event) {
    console.info('handleDragover...');
  event.preventDefault();
  event.dataTransfer.dropEffect = 'move';
}
function handleDrop(event) {
  event.preventDefault();
  console.info('handleDrop...');
  
  const data = event.dataTransfer.getData('application/my-app');
  event.target.appendChild(document.getElementById(data));
}
