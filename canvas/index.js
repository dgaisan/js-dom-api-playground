(function init() {
  const canvas = document.getElementById("stage");

  if (!canvas.getContext) {
    console.error("Canvas is not supported.");
    return;
  }

  const ctx = canvas.getContext("2d");

  drawSquares(ctx);
  drawCircles(ctx);

  function drawCircles(ctx) {
    ctx.save();
    ctx.beginPath();
    ctx.fillStyle = "red";
    ctx.arc(25, 50, 10, 0, 2 * Math.PI);
    ctx.stroke();
    ctx.restore();
  }

  function drawSquares(ctx) {
    ctx.save();
    ctx.fillStyle = "rgb(0, 100, 0)";
    ctx.fillRect(5, 5, 20, 20);

    ctx.fillStyle = "#B00000";
    ctx.fillRect(10, 10, 20, 20);

    ctx.fillStyle = "blue";
    ctx.fillRect(15, 15, 20, 20);

    ctx.fillStyle = "rgba(0, 200, 0.8)";
    ctx.fillRect(50, 5, 20, 20);

    ctx.fillStyle = "rgba(255, 0, 0.5)";
    ctx.fillRect(55, 10, 20, 20);

    ctx.fillStyle = "rgba(0, 0, 200, 0.5)";
    ctx.fillRect(60, 15, 20, 20);

    ctx.lineWidth = 2;
    ctx.strokeStyle = "green";
    ctx.strokeRect(95, 5, 20, 20);

    ctx.strokeStyle = "rgb(150, 0, 0)";
    ctx.strokeRect(100, 10, 20, 20);

    ctx.strokeStyle = "rgb(0, 0, 255)";
    ctx.strokeRect(105, 15, 20, 20);
    ctx.restore();
  }
})();
