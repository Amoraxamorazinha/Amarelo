function setup( ){
   createCanvas (400, 400);
   background(220);
  
}

function draw( ) {
  // Rosto
  fill (300,350, 0);
  ellipse (200, 200, 200, 200);

  
  // Olhos
  
  fill (7)
  
ellipse (160, 180, 20, 20);
  ellipse (240, 180, 20, 20);
  
  
  // Boca
  
  noFill ( );
  stroke(0);
  strokeWeight(5);
  arc(200, 200, 100, 50, 0, PI);
}