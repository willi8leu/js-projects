const canvas = document.querySelector('#canvas'),
      ctx = canvas.getContext('2d'),
      CANVAS_WIDTH = canvas.width = innerWidth,
      CANVAS_HEIGHT = canvas.height = innerHeight,
      tiles = document.querySelector('#tiles'),
      div = document.querySelector('#div'),
      TILE_WIDTH = 16,
      TILE_HEIGHT = 16,
      DRAW_TILE_WIDTH = 48,
      DRAW_TILE_HEIGHT = 48,
      TILEMAP_WIDTH = 20,
      TILEMAP_HEIGHT = 20,
      GRID_WIDTH = 10,
      GRID_HEIGHT = 10;

let gridmap = new Array(GRID_HEIGHT).fill();
gridmap = gridmap.map(() => new Array(GRID_WIDTH).fill());
gridmap = gridmap.map(row => row.map(el => ~~(Math.random()*TILEMAP_WIDTH*TILEMAP_HEIGHT)));
//div.innerHTML = JSON.stringify(gridmap);
let debug=[];

function gameLoop() {
    drawCanvas();
    //this.requestAnimationFrame(gameLoop);
}

function drawCanvas() {
    for (let y=0; y<GRID_HEIGHT; y++) {
        for (let x=0; x<GRID_WIDTH; x++) {
            lerpImage(tiles,gridmap[y][x]%TILEMAP_WIDTH*TILE_WIDTH,
                          ~~(gridmap[y][x]/TILEMAP_WIDTH)*TILE_HEIGHT,TILE_WIDTH,TILE_HEIGHT,
                          x*DRAW_TILE_WIDTH,y*DRAW_TILE_HEIGHT,DRAW_TILE_WIDTH,DRAW_TILE_HEIGHT);
        }
    }
}

function lerpImage(img,sx,sy,sw,sh,dx,dy,dw,dh) {
    for (let soY=sy, deY=dy; soY<sh+sy; soY++, deY+=dh/sh) {
        for (let soX=sx, deX=dx; soX<sw+sx; soX++, deX+=dw/sw) {
            ctx.drawImage(img,soX,soY,1,1,deX,deY,dw/sw,dh/sh);
        }
    }
}

onload = () => {gameLoop()};
//ctx.fillRect(0,0,100,100);