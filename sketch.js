var BG
var titleSlide,titleSlideI
var gameState="Start"
var next
function preload()
{
	BG=loadImage("Background.png")
titleSlideI=loadImage("TitleSlide.gif")
}
function setup() {
createCanvas(windowWidth, windowHeight); 
next= new button("Next",width/1.1,height/1.25)

}
function draw() {
  background(BG);
   
  
  
  if(gameState==="Start"){
image(titleSlideI,width-width,height-height,width,height)
}
 
 drawSprites();
}
function windowResized(){
	resizeCanvas(windowWidth,windowHeight)

}