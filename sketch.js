var helicopterIMG, helicopterSprite
var packageSprite,package1Sprite,package2Sprite,packageIMG,package1IMG,package2IMG;
var packageBody,packageBody1,packageBody1,ground
var line1,line2,line3
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	helicopterIMG=loadImage("helicopter.png")
	packageIMG=loadImage("package.png")
	

}

function setup() {
	createCanvas(800, 700);
	rectMode(CENTER);
	
	engine = Engine.create();
	world = engine.world;

	packageSprite=createSprite(width/2, 80, 10,10);
	packageSprite.addImage(packageIMG)
	packageSprite.scale=0.2


	helicopterSprite=createSprite(width/2, 200, 10,10);
	helicopterSprite.addImage(helicopterIMG)
	helicopterSprite.scale=0.6

	groundSprite=createSprite(width/2, height-35, width,10);
	groundSprite.shapeColor=color(255)

	//line1=createSprite(width/2,height-50,200,20)
	//line1.shapeColor=color("red")
	//line2=createSprite(510,610,200,20)
	//line2.shapeColor=color("red")
	//line3=createSprite(310,610,200,20)
	//line3.shapeColor=color("red")



	packageBody = Bodies.circle(width/2 , 200 , 5 , {restitution:0, isStatic:true});
	World.add(world, packageBody);


	//Create a Ground
	ground = Bodies.rectangle(width/2, 650, width, 10 , {isStatic:true} );
 	World.add(world, ground);
boxPosition=width/2-100
boxY=610
boxLeftSprite=createSprite(boxPosition,boxY,20,100)
boxLeftSprite.shapeColor=("red")
boxLeftBody=Bodies.rectangle(boxPosition+20,boxY,20,100,{isStatic:true})
World.add(world,boxLeftBody)
boxBottomSprite=createSprite(boxPosition+100,boxY+40,200,20)
boxBottomSprite.shapeColor=("red")
boxBottomBody=Bodies.rectangle(boxPosition+100,boxY+25,200,20,{isStatic:true})
World.add(world,boxBottomBody)
boxRightSprite=createSprite(boxPosition+200,boxY,20,100)
boxRightSprite.shapeColor=("red")
boxRightBody=Bodies.rectangle(boxPosition+180,boxY,20,100,{isStatic:true})
World.add(world,boxRightBody)
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  packageSprite.x= packageBody.position.x 
  packageSprite.y= packageBody.position.y 

  drawSprites();
 
}

function keyPressed() {
 if (keyCode === DOWN_ARROW) {
   Matter.Body.setStatic(packageBody,false)
}

if (keyCode === LEFT_ARROW) {
	helicopterSprite.x=helicopterSprite.x-20
	translate1={x:-20,y:0}
	Matter.Body.translate(packageBody,translate1)
 }

 if (keyCode === RIGHT_ARROW) {
	helicopterSprite.x=helicopterSprite.x+20
	translate1={x:+20,y:0}
	Matter.Body.translate(packageBody,translate1)
 }

}



