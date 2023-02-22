import {_s} from './store.js';
export const player = {
    tick() {
        _s.playerXv += (_s.keyPresses.includes('arrowright')-_s.keyPresses.includes('arrowleft'))*_s.WALK_SPEED;
        _s.playerXv *= _s.WALK_RESISTANCE;
        //_s.playerYv += _s.GRAVITY;
        //if (_s.keyPresses.includes('arrowup')) _s.playerYv = _s.JUMP_HEIGHT;
        _s.playerYv += (_s.keyPresses.includes('arrowup')-_s.keyPresses.includes('arrowdown'))*_s.WALK_SPEED;
        _s.playerYv *= _s.WALK_RESISTANCE
        _s.playerX += _s.playerXv;
        _s.playerY += _s.playerYv;
        if (this.collide(!0)) console.log('collide', _s.playerY);
        _s.ctx.drawImage(_s.sprites,0,192,16,16,_s.playerX+_s.camX,-_s.playerY-_s.camY,64,64)
    },

    collide(match) {
        let tile = _s.gridmap[~~(-_s.playerY/_s.DRAW_TILE_HEIGHT)][~~(-_s.playerX/_s.DRAW_TILE_WIDTH)];
        return match[0]=='!' ? tile!=match : tile==match;
    }
}
