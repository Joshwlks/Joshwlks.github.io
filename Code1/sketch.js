var font;
var vehicles1 = [];
var vehicles2 = [];
  
function preload() { 
  font = loadFont('ChunkFive-Regular.otf'); 
} 
   
//  Canvas area and color  
function setup() { 
  createCanvas(displayWidth, displayHeight); 
  background(51);
  textFont(font)
  textSize(75); 
  fill(255); 
  noStroke();
  textAlign(CENTER,TOP);
  text('Welcome to joshwilkins.co.uk', 683, 50);
  
  textSize(100);
  textAlign(RIGHT);
  text('Blog', 320, 500);
	
  textSize(100);
  textAlign(LEFT);
  text('Other', 1024.5, 500);

var pts1 = font.textToPoints('Projects', width/2-100, height/2, 192);
var pts2 = font.textToPoints('Solutions', width/2 - 200, height/2, 192);

  
	  for (var i = 0; i < pts1.length; i++){
		var pt = pts1[i];
		var vehicle = new Vehicle(pt.x, pt.y);
		vehicles1.push(vehicle);
		//stroke(255);
		//strokeWeight(8);
		//point(pt.x, pt.y);
		}

	  for (var i = 0; i < pts2.length; i++){
		var pt = pts2[i];
		var vehicle = new Vehicle(pt.x, pt.y);
		vehicles2.push(vehicle);
		//stroke(255);
		//strokeWeight(8);
		//point(pt.x, pt.y);
		} 

}  


	



function draw() {
	background(51);
	  for(var i = 0; i < vehicles1.length; i++){
		var v1 = vehicles1[i];
		v1.behaviours();
		v1.update();
		v1.show();
		}

	  	for(var i = 0; i < vehicles2.length; i++){
		var v2 = vehicles2[i];
		v2.behaviours();
		v2.update();
		v2.show();
		} 
	
} 

