class Box extends BaseClass {
  constructor(x, y){
    super(x,y,20,50);
    
    this.Visiblity = 255;
  }

 display(){
  // console.log(this.body.speed);
   if(this.body.speed < 7){
    super.display();
   }
   else{
    push();
   World.remove(world, this.body); 
     
     this.Visiblity = this.Visiblity - 5;
     tint(255,this.Visiblity);
  
     pop();
      
   }
   
 }



};