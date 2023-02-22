import {_s} from './store.js';
import {level} from './level.js';
import {player} from './player.js';

_s.canvas.width = innerWidth-19;
_s.canvas.height = innerHeight-38;
_s.ctx.imageSmoothingEnabled = false;

_s.DRAW_GRIDMAP_WIDTH = Math.ceil(_s.canvas.width/_s.DRAW_TILE_WIDTH)+1;
_s.DRAW_GRIDMAP_HEIGHT = Math.ceil(_s.canvas.height/_s.DRAW_TILE_HEIGHT)+1;
_s.GRIDMAP_WIDTH = 50;
_s.GRIDMAP_HEIGHT = 50;

onkeydown = (event) => {if (!_s.keyPresses.includes(event.key.toLowerCase())) _s.keyPresses.push(event.key.toLowerCase())};
onkeyup = (event) => {_s.keyPresses.splice(_s.keyPresses.indexOf(event.key.toLowerCase()),1)};

level.generateLevel();
_s.camX = _s.DRAW_TILE_WIDTH;
_s.camY = (_s.GRIDMAP_HEIGHT*_s.DRAW_TILE_HEIGHT)-_s.canvas.height;
_s.playerX = _s.DRAW_TILE_WIDTH;
_s.playerY = _s.GRIDMAP_HEIGHT*_s.DRAW_TILE_HEIGHT;

console.log(_s);
console.log(_s.gridmap);
console.log(_s.camX,_s.camY);

function gameLoop() {
    _s.ctx.clearRect(0,0,_s.canvas.width,_s.canvas.height);
    level.drawTiles();
    player.tick();
    //level.camBounds();
    _s.div.innerHTML = JSON.stringify(_s.keyPresses)+`, ${Math.trunc(_s.playerX+_s.camX)}, ${Math.trunc(-_s.playerY-_s.camY)}, ${~~(_s.playerX/_s.DRAW_TILE_WIDTH)}, ${~~(_s.playerY/_s.DRAW_TILE_HEIGHT)}, ${_s.gridmap[~~(-_s.playerY/_s.DRAW_TILE_HEIGHT)][~~(-_s.playerX/_s.DRAW_TILE_WIDTH)]}`;
    requestAnimationFrame(gameLoop);
}
onload = () => {gameLoop()};
