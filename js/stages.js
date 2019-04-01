
class Room {
  constructor(roomNum) {
    this.map = roomNum
    this.tileSizeHeight = 8
    this.tileSizeWidth = 8
    //* Math.floor((row**2+col)%3)
  }
  draw(ctx) {
    for (var row = 0;row < this.map.length; row++) {
      for (var col = 0; col < this.map[row].length; col++) {
        if (this.map[row][col] === 1) {
          let sx = 8 // floor tiles
          let sy = 0
          ctx.drawImage(spriteImg, sx, sy, 8, 8, col*this.tileSizeHeight, row*this.tileSizeWidth, this.tileSizeHeight, this.tileSizeWidth)
        }
        else if (this.map[row][col] === 2) {
          let sx = 16 // floor tiles
          let sy = 0
          ctx.drawImage(spriteImg, sx, sy, 8, 8, col*this.tileSizeHeight, row*this.tileSizeWidth, this.tileSizeHeight, this.tileSizeWidth)
        }
        else if (this.map[row][col] === 3) {
          let sx = 24 // floor tiles
          let sy = 0
          ctx.drawImage(spriteImg, sx, sy, 8, 8, col*this.tileSizeHeight, row*this.tileSizeWidth, this.tileSizeHeight, this.tileSizeWidth)
        }
        else if (this.map[row][col] === 4) {
          let sx = 32 // floor tiles
          let sy = 0
          ctx.drawImage(spriteImg, sx, sy, 8, 8, col*this.tileSizeHeight, row*this.tileSizeWidth, this.tileSizeHeight, this.tileSizeWidth)
        }
        else if (this.map[row][col] === 5) {
          let sx = 40 // floor tiles
          let sy = 0
          ctx.drawImage(spriteImg, sx, sy, 8, 8, col*this.tileSizeHeight, row*this.tileSizeWidth, this.tileSizeHeight, this.tileSizeWidth)
        }
        else if (this.map[row][col] === 6) {
          let sx = 0 // floor tiles
          let sy = 8
          ctx.drawImage(spriteImg, sx, sy, 8, 8, col*this.tileSizeHeight, row*this.tileSizeWidth, this.tileSizeHeight, this.tileSizeWidth)
        }
        else if (this.map[row][col] === 7) {
          let sx = 8// floor tiles
          let sy = 8
          ctx.drawImage(spriteImg, sx, sy, 8, 8, col*this.tileSizeHeight, row*this.tileSizeWidth, this.tileSizeHeight, this.tileSizeWidth)
        }
        else if (this.map[row][col] === 8) {
          let sx = 16 // floor tiles
          let sy = 8
          ctx.drawImage(spriteImg, sx, sy, 8, 8, col*this.tileSizeHeight, row*this.tileSizeWidth, this.tileSizeHeight, this.tileSizeWidth)
        }
        else if (this.map[row][col] === 9) {
          let sx = 8 // floor tiles
          let sy = 16
          ctx.drawImage(spriteImg, sx, sy, 8, 8, col*this.tileSizeHeight, row*this.tileSizeWidth, this.tileSizeHeight, this.tileSizeWidth)
        }
        else if (this.map[row][col] === 10) {
          let sx = 16 // floor tiles
          let sy = 16
          ctx.drawImage(spriteImg, sx, sy, 8, 8, col*this.tileSizeHeight, row*this.tileSizeWidth, this.tileSizeHeight, this.tileSizeWidth)
        }
        else if (this.map[row][col] === 11) {
          let sx = 24 // floor tiles
          let sy = 16
          ctx.drawImage(spriteImg, sx, sy, 8, 8, col*this.tileSizeHeight, row*this.tileSizeWidth, this.tileSizeHeight, this.tileSizeWidth)
        }
        else if (this.map[row][col] === 12) {
          let sx = 32 // floor tiles
          let sy = 16
          ctx.drawImage(spriteImg, sx, sy, 8, 8, col*this.tileSizeHeight, row*this.tileSizeWidth, this.tileSizeHeight, this.tileSizeWidth)
        }
        else if (this.map[row][col] === 13) {
          let sx = 40 // floor tiles
          let sy = 16
          ctx.drawImage(spriteImg, sx, sy, 8, 8, col*this.tileSizeHeight, row*this.tileSizeWidth, this.tileSizeHeight, this.tileSizeWidth)
        }
        else if (this.map[row][col] === 14) {
          let sx = 0 // floor tiles
          let sy = 24
          ctx.drawImage(spriteImg, sx, sy, 8, 8, col*this.tileSizeHeight, row*this.tileSizeWidth, this.tileSizeHeight, this.tileSizeWidth)
        }
        else if (this.map[row][col] === 15) {
          let sx = 8 // floor tiles
          let sy = 24
          ctx.drawImage(spriteImg, sx, sy, 8, 8, col*this.tileSizeHeight, row*this.tileSizeWidth, this.tileSizeHeight, this.tileSizeWidth)
        }
        else if (this.map[row][col] === 16) {
          let sx = 16 // floor tiles
          let sy = 24
          ctx.drawImage(spriteImg, sx, sy, 8, 8, col*this.tileSizeHeight, row*this.tileSizeWidth, this.tileSizeHeight, this.tileSizeWidth)
        }
        else if (this.map[row][col] === 17) {
          let sx = 24 // floor tiles
          let sy = 24
          ctx.drawImage(spriteImg, sx, sy, 8, 8, col*this.tileSizeHeight, row*this.tileSizeWidth, this.tileSizeHeight, this.tileSizeWidth)
        }
        else if (this.map[row][col] === 18) {
          let sx = 32 // floor tiles
          let sy = 24
          ctx.drawImage(spriteImg, sx, sy, 8, 8, col*this.tileSizeHeight, row*this.tileSizeWidth, this.tileSizeHeight, this.tileSizeWidth)
        }
        else if (this.map[row][col] === 19) {
          let sx = 40 // floor tiles
          let sy = 24
          ctx.drawImage(spriteImg, sx, sy, 8, 8, col*this.tileSizeHeight, row*this.tileSizeWidth, this.tileSizeHeight, this.tileSizeWidth)
        }
        else if (this.map[row][col] === 20) {
          let sx = 32 // floor tiles
          let sy = 32
          ctx.drawImage(spriteImg, sx, sy, 8, 8, col*this.tileSizeHeight, row*this.tileSizeWidth, this.tileSizeHeight, this.tileSizeWidth)
        }
      }
    }
  }
}


var room1 =  [ //ROM 1

  [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
  [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
  [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
  [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
  [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
  [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
  [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
  [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
  [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
  [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
  [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
  [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
  [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
  [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
  [0,0,0,1,2,3,1,2,1,3,1,6,7,7,7,7,7,7,7,7,7,7,7,7,8,1,2,3,1,2,1,3,1,0,0,0,0,0,0,0,0],
  [0,0,0,0,11,0,11,0,0,20,0,0,0,0,0,0,0,0,0,0,0,0,0,0,11,0,11,0,0,20,0,0,0,0,0,0,0,0,0],
  [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
  [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
  [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
    
  
]