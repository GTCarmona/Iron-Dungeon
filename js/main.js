const canvas = document.querySelector("canvas")
const ctx = canvas.getContext("2d")

const CANVAS_WIDTH = canvas.width
const CANVAS_HEIGHT = canvas.height

let spriteImg = new Image()
spriteImg.src = "Tiles and sprites/dungeon 512x512.png"

let room = new Room(room1)




function drawEverything () {
  room.draw(ctx)
//ctx.clearRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT)

}


function animation() {
  drawEverything()
  window.requestAnimationFrame(animation)
}
animation()