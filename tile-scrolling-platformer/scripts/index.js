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

console.log(_s);
console.log(_s.canvas.width,(_s.GRIDMAP_WIDTH-1)*_s.DRAW_TILE_WIDTH);

function gameLoop() {
    _s.ctx.clearRect(0,0,_s.canvas.width,_s.canvas.height);
    level.drawTiles();
    //level.camBounds();
    _s.div.innerHTML = JSON.stringify(_s.keyPresses)+`, ${_s.playerX}, ${_s.playerY}`;
    requestAnimationFrame(gameLoop);
}
onload = () => {gameLoop()};