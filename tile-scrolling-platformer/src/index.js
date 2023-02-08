const canvas = document.querySelector('#canvas'),
      ctx = canvas.getContext('2d'),
      CANVAS_WIDTH = canvas.width = innerWidth,
      CANVAS_HEIGHT = canvas.height = innerHeight,
      tiles = document.querySelector('#tiles'),
      characters = document.querySelector('#characters'),
      background = document.querySelector('#background'),
      div = document.querySelector('#div');

onload = function gameLoop() {
    for (let y=0; y<CANVAS_HEIGHT/18; y++) {
        for (let x=0; x<CANVAS_WIDTH/18; x++) {
            randX = Math.floor(Math.random()*20)*18;
            randY = Math.floor(Math.random()*9)*18;
            ctx.drawImage(tilemap,randX,randY,18,18,x*18,y*18,18,18);
        }
    }
    //this.requestAnimationFrame(gameLoop);
}