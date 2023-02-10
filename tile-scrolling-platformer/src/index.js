import Level from './level.js';

const canvas = document.querySelector('#canvas'),
      ctx = canvas.getContext('2d'),
      CANVAS_WIDTH = canvas.width = innerWidth,
      CANVAS_HEIGHT = canvas.height = innerHeight,
      tiles = document.querySelector('#tiles'),
      div = document.querySelector('#div'),
      TILE_WIDTH = 16,
      TILE_HEIGHT = 16,
      DRAW_TILE_WIDTH = 64,
      DRAW_TILE_HEIGHT = 64,
      TILEMAP_WIDTH = 20,
      TILEMAP_HEIGHT = 20,
      GRID_WIDTH = 10,
      GRID_HEIGHT = 10;

ctx.imageSmoothingEnabled = false;

let gridmap = new Array(GRID_HEIGHT).fill();
gridmap = gridmap.map(() => new Array(GRID_WIDTH).fill());
gridmap = gridmap.map(row => row.map(el => ~~(Math.random()*TILEMAP_WIDTH*TILEMAP_HEIGHT)));
//div.innerHTML = JSON.stringify(gridMap);
const level = new Level(ctx,tiles,gridmap,GRID_WIDTH,GRID_HEIGHT,TILE_WIDTH,TILE_HEIGHT,DRAW_TILE_WIDTH,DRAW_TILE_HEIGHT,TILEMAP_WIDTH);

function gameLoop() {
    level.drawTiles();
    //this.requestAnimationFrame(gameLoop);
}

onload = () => {gameLoop()};