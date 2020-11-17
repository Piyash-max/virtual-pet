var dog, happyDog, database, foodS, foodStock;


function preload()
{
	happyDog = loadImage("images/dogImg.png")
}

function setup() {
  database=firebase.database();
  createCanvas(500, 500);

  foodStock=database.ref('food');
  foodStock.on("value",readStock)
  image(happyDog,250,250,100,100);
}


function draw() { 
  background(46, 139, 87); 
  if(keyWentDown(UP_ARROW)){
    writeStocks(foodS);
    dog.addImage(happyDog)
  }
 drawSprites();
}
function readStock(data){
  foodS=data.val();
}

function writeStocks(x){
  if(x<=0){
    x=0;
  }
  else{
    x=x-1
  }
  database.ref('/').update({
    Food:x
  })
}

