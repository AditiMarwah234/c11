var weight = [35,38,42,45,43,34,36,41,48,32];
var sum = 0
function setup() {
  createCanvas(400,400);
for (var i = 0; i<weight.length;i++) {
  sum+=weight[i]
}
console.log(sum/weight.length)
}

function draw() 
{
  background(30);
}

 

