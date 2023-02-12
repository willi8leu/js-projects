import * as main from "./index.js";

export const level = {
    drawTiles: function() {
        let sx = main.mod(main.camX,main.DRAW_TILE_WIDTH)-500, sy = main.mod(main.camY,main.DRAW_TILE_HEIGHT)-100; //"start" x and y, x and y of tiles overlapping w/ border
        let ox = ~~(main.camX/main.DRAW_TILE_WIDTH), oy = ~~(main.camY/main.DRAW_TILE_HEIGHT); //"offset" x and y, distance tilex and tiley away from origin
        for (let y=0; y<main.GRIDMAP_HEIGHT; y++) {
            for (let x=0; x<main.GRIDMAP_WIDTH; x++) {
                main.ctx.drawImage(main.tiles,(main.gridmap[y-oy][x-ox]%main.TILEMAP_WIDTH)*main.TILE_WIDTH,
                    ~~(main.gridmap[y-oy][x-ox]/main.TILEMAP_HEIGHT)*main.TILE_HEIGHT,
                    main.TILE_WIDTH,main.TILE_HEIGHT,
                    (x*main.DRAW_TILE_WIDTH)-sx,(y*main.DRAW_TILE_HEIGHT)-sy,main.DRAW_TILE_WIDTH,main.DRAW_TILE_HEIGHT);
            }
        }
    }
}