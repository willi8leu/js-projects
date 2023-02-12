import {level} from "./level.js";

const canvas = document.querySelector('#canvas'),
    ctx = canvas.getContext('2d'),
    tiles = document.querySelector('#tiles'),
    TILEMAP_WIDTH = 20,
    TILEMAP_HEIGHT = 20,
    TILE_WIDTH = 16,
    TILE_HEIGHT = 16,
    DRAW_TILE_WIDTH = 64,
    DRAW_TILE_HEIGHT = 64,
    GRIDMAP_WIDTH = 4,
    GRIDMAP_HEIGHT = 4,
    mod = (a,b) => ((a%b)+b)%b
let gridmap = [[1,1,1,1],[1,1,1,1],[1,1,1,1],[1,1,1,1]],
    camX = 0,
    camY = 0;

export {canvas,ctx,tiles,TILEMAP_WIDTH,TILEMAP_HEIGHT,TILE_WIDTH,TILE_HEIGHT,DRAW_TILE_WIDTH,DRAW_TILE_HEIGHT,GRIDMAP_WIDTH,GRIDMAP_HEIGHT,gridmap,camX,camY,mod};

canvas.width = innerWidth;
canvas.height = innerHeight;
ctx.imageSmoothingEnabled = false;

function gameLoop() {
    level.drawTiles();
    ctx.strokeStyle = 'purple';
    ctx.beginPath();
    ctx.moveTo(500,100);
    ctx.lineTo(500+(3*64),100);
    ctx.lineTo(500+(3*64),100+(3*64));
    ctx.lineTo(500,100+(3*64))
    ctx.lineTo(500,100);
    ctx.stroke();
    //this.requestAnimationFrame(gameLoop);
}

onload = () => {gameLoop()};