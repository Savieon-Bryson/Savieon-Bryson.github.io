var dimal=1;

function setup() {
  createCanvas(500, 500,WEBGL);
  background("#003366");
}

function draw() {
  ellipse(random(-width/2,width/2),random(-height/2,height/2),20,20);
  
  fill("#000000");
  stroke("#-aaade3");
  strokeWeight(15);
  ellipse(mouseX,mouseY,50,50);
  
  push();
  rotateY(millis() / 1000);
  plane(50, 50);
  pop();
  fill("#add8ed");
  stroke("#ffff00");
  strokeWeight(10);
  
  ellipse(mouseX,mouseY,dimal,dimal);
  fill("#0000");
  ellipse(random(-width/2,width/2),random(-height/2,height/2),20,20);
  textSize(20);
  textFont("Georgia");
  textStyle(ITALIC);
  textAlign(CENTER);
  text("hey",40,40); 
  console.log(dimal);
}

function mousePressed(){                                       if(dimal>50){
  dimal=1;
  }else{
   dimal=dimal+5;
}
}