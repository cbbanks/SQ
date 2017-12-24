class Screen{
  constructor(){
    this.ctx=document.querySelector("#cvs").getContext('2d');
  }
  blank(){
    this.ctx.fillStyle="black";
    this.ctx.fillRect(0,0,1280,720);
  }

  draw(){
    this.blank();
  }


}

export default Screen;
