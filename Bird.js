class Bird extends BaseClass {
  constructor(x,y){
    super(x,y,50,50);
    this.image = loadImage("sprites/bird.png");
    this.smokeImg= loadImage("sprites/smoke.png")
    this.track = []
  }

  display() {
    //this.body.position.x = mouseX;
    //this.body.position.y = mouseY;
//track=[[200,200],[210,180],[]......]
//position[1]//track[0][1]
    super.display();
    if(this.body.position.x>250 && this.body.velocity.x>5){
      var position=[this.body.position.x,this.body.position.y]
      this.track.push(position);
  
      for(var i=0;i<this.track.length;i++){
       image(this.smokeImg,this.track[i][0],this.track[i][1]); 
      }
  
    }
   


  }
}
