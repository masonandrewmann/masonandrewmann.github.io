//colors
// color water = color(0, 40, 255);
// color sky = color(255, 18, 169);
// color wavesColor  = color(255, 247, 0);
// var water = color(0, 40, 255);
// var sky = color(255, 18, 169);
// var wavesColor  = color(255, 247, 0);

//font variables
var italics;
var swimFont;

//text to write
var jeff = ">(((˚›";
var waves = "^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^";
var itsaFish = "its a fish";
var s = "s";
var w = "w";
var i2 = "i";
var m = "m";

//fish movement
var jLoc = 0;
var jSpd = 2;

//bubble arrays
var bubbleDensity = 10;
var bubbleX = new Array(bubbleDensity);
var bubbleY = new Array(bubbleDensity);
var bubbleSize = new Array(bubbleDensity);
var bubbleSpd = new Array(bubbleDensity);

// top left text arrays
var textNum = 20;
var textR = new Array(bubbleDensity);
var textG = new Array(bubbleDensity);
var textB = new Array(bubbleDensity);

function setup(){
  createCanvas(1000,1000);
  background(200);
  italics = loadFont('Optima-Italic.otf');
  swimFont = loadFont('Trattatello.ttf');
  textSize(64);
  drawOcean();

  for(var i = 0; i < bubbleDensity; i++){
  bubbleX[i] = random(0, 1000);
  bubbleY[i] = 800.0;
  bubbleSize[i] = random(20, 40);
  bubbleSpd[i] = random(1, 5);
  }

  for(var i = 0; i < textNum; i++){
  textR[i] = random(150,255);
  textG[i] = random(100, 255);
  textB[i] = random(100, 255);
  }
}


function draw(){

}
function draw(){
  //backdrop
  drawOcean();
  
  //jeff
  fill(0);
  textSize(64);
  text(jeff, jLoc, 400); 
  jLoc = jLoc + jSpd;
  if(jLoc > 1000) jLoc = -200;
  
  //bubbles
    fill(255, 0);
    stroke(41, 255, 239);
    strokeWeight(3);
 for( var i = 0; i < bubbleDensity; i++){
    ellipse(bubbleX[i], bubbleY[i], bubbleSize[i], bubbleSize[i]);
    bubbleY[i] = bubbleY[i] - bubbleSpd[i];
    var end = round(random (200, 500));
    if(bubbleY[i] < end) bubbleY[i] = 1000;
  }
}

function drawOcean(){
  background(0, 40, 255);
  fill(255, 18, 169);
  stroke(255, 18, 169);
  rect(0,0,1000,200);
  
  noStroke();
  textFont(swimFont, 80);
  text(s, 800, 500);
  text(w, 784, 560);
  text(i2, 790, 635);
  text(m, 775, 695);
  
  textFont(italics, 64);
  // //its a fish
  var transparency = 255;
  var startX = 20;
  var startY = 100;
  for(var i = 0; i < textNum; i++){
    fill(textR[i], textG[i], textB[i], transparency);
    text(itsaFish, startX, startY);
    startX = startX + 20;
    startY = startY + 20;
    transparency = transparency - 16;
  }
}