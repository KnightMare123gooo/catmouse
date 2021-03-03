
function preload() {
    bg.setAnimation("baground");
    Mouse1.setAnimation("Mouse1");
    Mouse1.scale = 0.2;
    Mouse2.setAnimation("Mouse2");
    Mouse2.scale = 0.2;
    Mouse3.setAnimation("Mouse3");
    Mouse3.scale = 0.2;
    cat.setAnimation("Cat");
    cat.scale = 0.25;
    youwin.setAnimation("youwin.jpeg");
    youwin.scale = 0.3;
}

function setup(){
    createCanvas(1000,800);
    
    var mousecount = 3;
    var SCORE = 0;
    var bg = createSprite(200, 200);
    

    var Mouse1 = createSprite(60, 300);
    var Mouse2 = createSprite(250, 350);
    var Mouse3 = createSprite(300, 200);
    var cat = createSprite(60, 90);

    youwin.visible = false;
}

function draw() {

    background(255);
    fill("red");
  textSize(20);
  text("mousecount:", 20, 50);
  text(mousecount, 140, 50);
  fill("red");
  textSize(20);
  text("SCORE:", 20, 30);
  text(SCORE, 100, 30);

    drawSprites();
}


function keyPressed(){

  if (mousePressedOver(cat)) {
    cat.x = World.mouseX;
    cat.y = World.mouseY;
  }
  if (cat.isTouching(Mouse1)) {
    Mouse1.destroy();
    mousecount = mousecount - 1;
    SCORE = SCORE + 1;
  }
  if (cat.isTouching(Mouse2)) {
    Mouse2.destroy();
    mousecount = mousecount - 1;
    SCORE = SCORE + 1;
  }
  if (cat.isTouching(Mouse3)) {
    Mouse3.destroy();
    mousecount = mousecount - 1;
    SCORE = SCORE + 1;
  }
  if (mousecount == 0 && SCORE == 3) {
    youwin.visible = true;
  }


}
