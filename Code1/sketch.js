var font;
var vehicles1 = [];
var vehicles2 = [];
  
function preload() { 
  font = loadFont('ChunkFive-Regular.otf'); 
} 
   
//  Canvas area and color
function centerCanvas() {
  var x = (windowWidth - width) / 2;
  var y = (windowHeight - height) / 2;
  cnv.position(x, y);
}

function setup() { 
  var wW = windowWidth; 
  var wH = windowHeight;
  cnv = createCanvas(wW, wH); 
  cnv.style('display', 'block');
  textFont(font);
  
  textSize(250);
  var c ='Coming';
  var s ='Soon';
  var cW = textWidth(c);
  var sW = textWidth(s);
  
  

var pts1 = font.textToPoints('Coming', wW/2 - cW/2, wH/2, 250);
var pts2 = font.textToPoints('Soon', wW/2 - sW/2, wH/2 + 200, 250);

  
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
