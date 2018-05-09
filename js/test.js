
// loads the basic funtions and updates the game
(function () {
  var requestAnimationFrame = window.requestAnimationFrame || window.mozRequestAnimationFrame || window.webkitRequestAnimationFrame || window.msRequestAnimationFrame;
  window.requestAnimationFrame = requestAnimationFrame;
})();

var canvas = document.getElementById("canvas");
var ctx = canvas.getContext("2d");
console.log("watefuk");
var canvasWidth = 1000;
var canvasHeight = 400;
canvas.width = canvasWidth;
canvas.height = canvasHeight;

function update() {

  ctx.clearRect(0, 0, canvas.width, canvas.height);


  ctx.closePath();
  requestAnimationFrame(update);
}


update();
