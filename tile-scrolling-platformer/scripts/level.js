import {_s} from './store.js';
export const level = {
    generateLevel() {
        let solid = new Array(_s.GRIDMAP_WIDTH).fill(111),
            wall = new Array(_s.GRIDMAP_WIDTH).fill(0);
        wall[0] = 11, wall[wall.length-1] = 11;
        _s.gridmap = [solid,...new Array(_s.GRIDMAP_HEIGHT-2).fill(wall),solid];
    },
    
    drawTiles() {
        let sx = _s.mod(_s.camX,_s.DRAW_TILE_WIDTH), sy = _s.mod(_s.camY,_s.DRAW_TILE_HEIGHT); //"start" x and y, x and y of tiles overlapping w/ border
        let ox = ~~(_s.camX/_s.DRAW_TILE_WIDTH), oy = ~~(_s.camY/_s.DRAW_TILE_HEIGHT); //"offset" x and y, distance tilex and tiley away from origin
        let tile;
        for (let y=0; y<_s.DRAW_GRIDMAP_HEIGHT; y++) {
            for (let x=0; x<_s.DRAW_GRIDMAP_WIDTH; x++) {
                try {tile = _s.gridmap[y+oy][x+ox]}
                catch (e) {tile = 0}
                _s.ctx.drawImage(_s.tiles,(tile%_s.TILEMAP_WIDTH)*_s.TILE_WIDTH,
                    ~~(tile/_s.TILEMAP_HEIGHT)*_s.TILE_HEIGHT,
                    _s.TILE_WIDTH,_s.TILE_HEIGHT,
                    (x*_s.DRAW_TILE_WIDTH)-sx,(y*_s.DRAW_TILE_HEIGHT)-sy,_s.DRAW_TILE_WIDTH,_s.DRAW_TILE_HEIGHT);
            }
        }
    },

    camBounds() {
        switch(true) {
            case _s.camX < _s.DRAW_TILE_WIDTH:
                _s.camX = _s.DRAW_TILE_WIDTH;
                break;
            case _s.camX > ((_s.GRIDMAP_WIDTH-1)*_s.DRAW_TILE_WIDTH)-_s.canvas.width:
                _s.camX = ((_s.GRIDMAP_WIDTH-1)*_s.DRAW_TILE_WIDTH)-_s.canvas.width;
                break;
        }
        switch(true) {
            case _s.camY < _s.DRAW_TILE_HEIGHT:
                _s.camY = _s.DRAW_TILE_HEIGHT;
                break;
            case _s.camY > (_s.GRIDMAP_HEIGHT*_s.DRAW_TILE_HEIGHT)-_s.canvas.height:
                _s.camY = (_s.GRIDMAP_HEIGHT*_s.DRAW_TILE_HEIGHT)-_s.canvas.height;
                break;
        }
    }
}