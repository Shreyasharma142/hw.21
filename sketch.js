

var wall, thickness
var bullet,speed,width;



function setup() {
  createCanvas(1600,400);
  speed=random(223,321);
  width=random(30,52);

  thickness=random(22,83);

  bullet=createSprite(50,200,50,5);
  bullet.velocityX= speed;
  bullet.shapeColor=color(225);

 

  wall=createSprite(1200,1200, thickness,height/2);
  wall.shapeColor=color(230,230,230);
  //wall.shapeColor=color(80,80,80);
 

}

function draw() {
  background(0);  

  //bullet.sprite.collide(wall,sprite,calculateDefirmtion);
  if(hasCollided(bullet,wall))
  {
                bullet.velocityX=0;
                var damage=0.5 * weight * speed * speed/(thickness *thickness *thickness);

                if(dame>10)
                {
                    wall.shapeColor=color(255,0,0);

                }
  }
  
  drawSprites();
}


function hasCollided(lbullet, lwall)
{
          bulletRightEdge=lbullet.x +bullet.width;
          wallLeftEdge=lwall.x;
          if(bulletRightEdge>=wallLeftEdge)
          {
                return true
          }
          return false;
}
