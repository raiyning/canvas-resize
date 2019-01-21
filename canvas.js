var canvas = document.querySelector('canvas');
console.log(canvas);

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

var c = canvas.getContext('2d');
/*
c.fillStyle = 'rgba(0,0,255.6)'
c.fillRect(300, 20, 100, 100);
c.fillStyle = 'rgba(255,0,100.6)'
c.fillRect(100, 100, 100, 100);
c.fillStyle = 'rgba(0,255,0.6)'
c.fillRect(400, 500, 100, 100);
console.log(canvas);
//creating line
c.beginPath();
c.moveTo(50, 300);
c.lineTo(300, 100);//more lines to extend
c.lineTo(400, 600);//more lines created
c.strokeStyle = "fff"
c.stroke();

//arc
for (var i = 0; i < 5; i++) {
  c.beginPath();
  x = Math.random() * window.innerWidth;
  y = Math.random() * window.innerHeight;
  c.arc(x, y, 30, 0, Math.PI * 2, false);
  c.stroke();
}

*/

//animated circle
var x = 200
var y = 200
var dx = 1;
var dy = 1;
var radius = 30;
function animate() {
  requestAnimationFrame(animate);
  c.clearRect(0, 0, innerWidth, innerHeight)

  c.beginPath();
  //x = Math.random() * window.innerWidth;
  y = Math.random() * window.innerHeight;
  c.arc(x, y, radius, 0, Math.PI * 2, false);
  c.strokeStyle = "yellow";
  c.stroke();
  console.log("yo");
  if (x + radius > innerWidth || x - radius < 0) {
    dx = -dx;
  }
  x += dx;
  if (y + radius > innerWidth || y - radius < 0) {
    dy = -dy;
  }
  y += dy;
}

animate();