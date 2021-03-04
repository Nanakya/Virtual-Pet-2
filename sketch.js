//Create variables here
var dog,dogImg,dogImg1;
var database,foodStock,foodS,lastFed;


function preload() {
dogImg=loadImage("dogImg.png");
dogImg1=loadImage("dogImg1.png");
}

function setup() {
  createCanvas(500,500);
  database=firebase.database();
  dog=createSprite(250,300,150,150);
  dog.addImage(dogImg);
  dog.scale=0.15;
  foodStock=database.ref('Food');
  foodStock.on("value",readStock);
  textSize(20);  
}


function draw() {  
background("white");
if(keyWentDown(UP_ARROW)) {
  writeStock(foodS);
  dog.addImage(dogImg1);
}
drawSprites();
  //add styles here

}

function readStock(data) {
  foodS=data.val();
}

function writeStock(x) {
  if(x<=0) {
    x=0;
  }
  else{
    x=x-1;
  }
  database.ref('/').update({
    Food:x
  })
}

