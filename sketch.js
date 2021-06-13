var bgImg;
var crosshairImg, crosshair, circleImg, circleImg;
var bottleImg, bottle, bottle1, bottle2;
var gunSound;
var specialBottle;


function preload() {
 bgImg = loadImage("green bg.jpg")

 
 //specialBottle = loadAnimation("../SPECIAL BOTTLE/super-bottle-unscreen-0.png", "../SPECIAL BOTTLE/super-bottle-unscreen-1.png","../SPECIAL BOTTLE/super-bottle-unscreen-2.png","../SPECIAL BOTTLE/super-bottle-unscreen-3.png", "../SPECIAL BOTTLE/super-bottle-unscreen-4.png","../SPECIAL BOTTLE/super-bottle-unscreen-5.png","../SPECIAL BOTTLE/super-bottle-unscreen-6.png","../SPECIAL BOTTLE/super-bottle-unscreen-7.png","../SPECIAL BOTTLE/super-bottle-unscreen-8.png","../SPECIAL BOTTLE/super-bottle-unscreen-9.png","../SPECIAL BOTTLE/super-bottle-unscreen-10.png","../SPECIAL BOTTLE/super-bottle-unscreen-11.png","../SPECIAL BOTTLE/super-bottle-unscreen-12.png","../SPECIAL BOTTLE/super-bottle-unscreen-13.png","../SPECIAL BOTTLE/super-bottle-unscreen-14.png","../SPECIAL BOTTLE/super-bottle-unscreen-15.png","../SPECIAL BOTTLE/super-bottle-unscreen-16.png","../SPECIAL BOTTLE/super-bottle-unscreen-17.png","../SPECIAL BOTTLE/super-bottle-unscreen-18.png","../SPECIAL BOTTLE/super-bottle-unscreen-19.png");
  
crosshairImg = loadImage("crosshair.png");
circleImg = loadImage("red_circle.png");

bottleImg = loadImage("bottle.png");
gunSound = loadSound("GunShot.mp3");

  
}

function setup() {
  createCanvas(700,500);
 
  

  
bottle = createSprite(250, 317, 10, 10)
bottle.addImage(bottleImg);
bottle.scale = 0.3;
bottle.setCollider("rectangle", 0, -25, 100, 420);


bottle1 = createSprite(350, 317, 10, 10)
bottle1.addImage(bottleImg);
bottle1.scale = 0.3;
bottle1.setCollider("rectangle", 0, -25, 100, 420);


bottle2 = createSprite(450, 317, 10, 10)
bottle2.addImage(bottleImg);
bottle2.scale = 0.3;
bottle2.setCollider("rectangle", 0, -25, 100, 420);


bottle3 = createSprite(150, 317, 10, 10)
bottle3.addImage(bottleImg);
bottle3.scale = 0.3;
bottle3.setCollider("rectangle", 0, -25, 100, 420);


bottle4 = createSprite(550, 317, 10, 10)
bottle4.addImage(bottleImg);
bottle4.scale = 0.3;
bottle4.setCollider("rectangle", 0, -25, 100, 420);


bottle5 = createSprite(50, 317, 10, 10)
bottle5.addImage(bottleImg);
bottle5.scale = 0.3;
bottle5.setCollider("rectangle", 0, -25, 100, 420);



bottle6 = createSprite(650, 317, 10, 10)
bottle6.addImage(bottleImg);
bottle6.scale = 0.3;
bottle6.setCollider("rectangle", 0, -25, 100, 420);


//-----------------------------------------------------------

bottle7 = createSprite(350, 173, 10, 10)
bottle7.addImage(bottleImg);
bottle7.scale = 0.3;
bottle7.setCollider("rectangle", 0, -25, 100, 420);


bottle8 = createSprite(250, 173, 10, 10)
bottle8.addImage(bottleImg);
bottle8.scale = 0.3;
bottle8.setCollider("rectangle", 0, -25, 100, 420);


bottle9 = createSprite(450, 173, 10, 10)
bottle9.addImage(bottleImg);
bottle9.scale = 0.3;
bottle9.setCollider("rectangle", 0, -25, 100, 420);


bottle10 = createSprite(150, 173, 10, 10)
bottle10.addImage(bottleImg);
bottle10.scale = 0.3;
bottle10.setCollider("rectangle", 0, -25, 100, 420);


bottle11 = createSprite(550, 173, 10, 10)
bottle11.addImage(bottleImg);
bottle11.scale = 0.3;
bottle11.setCollider("rectangle", 0, -25, 100, 420);


crosshair = createSprite(350, 250, 10, 10)
crosshair.addImage(crosshairImg);
crosshair.scale = 0.2;

circle = createSprite(350, 250, 10, 10)
circle.addImage(circleImg);
circle.scale = 0.1;
}

function draw() {
  background(bgImg);

  fill("brown");
  rect(0, 375, 800, 130);
  rect(25, 230, 650, 20)

  crosshair.x = World.mouseX;
  crosshair.y = World.mouseY;

  circle.x = World.mouseX;
  circle.y = World.mouseY;

  if(mousePressedOver(bottle)){
    gunSound.play();
  }

  if(mousePressedOver(bottle1)){
    gunSound.play();
  }

  if(mousePressedOver(bottle2)){
    gunSound.play();
  }

  if(mousePressedOver(bottle3)){
    gunSound.play();
  }

  if(mousePressedOver(bottle4)){
    gunSound.play();
  }

  if(mousePressedOver(bottle5)){
    gunSound.play();
  }

  if(mousePressedOver(bottle6)){
    gunSound.play();
  }

  if(mousePressedOver(bottle7)){
    gunSound.play();
  }

  if(mousePressedOver(bottle8)){
    gunSound.play();
  }

  if(mousePressedOver(bottle9)){
    gunSound.play();
  }

  if(mousePressedOver(bottle10)){
    gunSound.play();
  }

  if(mousePressedOver(bottle11)){
    gunSound.play();
  }

  drawSprites();

 
  fill("white")
  textSize(25);
text("NOTE : Bottle Shooter(Test Mode)",150, 25)
}