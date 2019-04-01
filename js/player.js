class Player {
  constructor(name,initialX,initialY){
  this.name = name
  this.x = initialX
  this.y = initialY
  document.onkeydown = event => {
    console.log(event.keyCode)
    if (event.keyCode === 37) { // left
      this.x++
    }
    if (event.keyCode === 39) { // right
      this.x--
    }
    if (event.keyCode === 38) { // left
      this.y--
    }
    if (event.keyCode === 40) { // left
      this.y++
    }
  }
}
}
draw(ctx){
  ctx.save()

  ctx.fillStyle = "green"
  ctx.lineWidth = 5
  //draw circle
  ctx.beginPath()
  ctx.arc(this.x,this.y,this.radius,0,2*Math.PI)
  ctx.fill()
  ctx.stroke()


  ctx.restore()
}

  moveUp(){
    this.x--
  }
  moveDown(){
    this.x--
  
  }
  moveLeft(){
    this.y--

  }
  moveRight(){
    this.y++
 
}
update() {
}
}