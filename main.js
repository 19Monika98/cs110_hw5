const canvas = document.getElementById("canvas");
const context = canvas.getContext("2d");

const points = [];

const color = ()=>{
  return `rgb(${Math.floor(Math.random()*255)-50},${Math.floor(Math.random()*255)-50},${Math.floor(Math.random()*255)-50})`
}

const Rect = function(){
  this.x = Math.floor(Math.random()*(canvas.width-100))+50;
  this.y = Math.floor(Math.random()*(canvas.height-100))+50;
  this.width = Math.floor(Math.random()*50);
  this.height = Math.floor(Math.random()*50);
  this.speedY = 1;
  this.speedX = 1;
  this.color = color();
}

const draw = ()=>{
  context.clearRect(0,0,canvas.width, canvas.height);
  points.forEach((point)=>{
    context.fillStyle = point.color;
    context.fillRect(point.x, point.y, point.width, point.height);
  });
}

for (let i=0; i<=8; i++){
  points.push(new Rect());
}

setInterval(()=>{
  draw();
  points.forEach((point)=>{
    if (point.x+point.width > canvas.width || point.x < 0)
      point.speedX *= -1;
    if (point.y+point.height > canvas.height || point.y < 0)
      point.speedY *= -1;
    point.x += point.speedX;
    point.y += point.speedY;
  });
},30)
