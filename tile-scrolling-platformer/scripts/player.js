import {_s} from './store.js';
export const player = {
    tick() {
        _s.playerXv += (_s.keyPresses.includes('arrowright')-_s.keyPresses.includes('arrowleft'))*_s.WALK_SPEED
        _s.playerXv *= _s.WALK_RESISTANCE;
        _s.playerYv += _s.GRAVITY;
        if (_s.keyPresses.includes('arrowup')) _s.playerYv = _s.JUMP_HEIGHT;
        _s.playerX += _s.playerXv;
        _s.playerY += _s.playerYv;
        if (this.collide(111)) console.log('collide', _s.playerY);
        _s.ctx.drawImage(_s.sprites,0,192,16,16,_s.playerX,-_s.playerY+_s.DRAW_GRIDMAP_HEIGHT*_s.DRAW_TILE_HEIGHT,64,64)
    },

    collide(match) {
        return _s.gridmap[~~(_s.playerY/_s.DRAW_PLAYER_HEIGHT)][~~(_s.playerX/_s.DRAW_GRIDMAP_WIDTH)] == match;
    }
}