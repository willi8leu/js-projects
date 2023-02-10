export default class {
    constructor(ctx,tiles,gridmap,GRID_WIDTH,GRID_HEIGHT,TILE_WIDTH,TILE_HEIGHT,DRAW_TILE_WIDTH,DRAW_TILE_HEIGHT,TILEMAP_WIDTH) {
        this.ctx = ctx, this.tiles = tiles, this.gridmap = gridmap,
        this.GRID_WIDTH = GRID_WIDTH, this.GRID_HEIGHT = GRID_HEIGHT,
        this.TILE_WIDTH = TILE_WIDTH, this.TILE_HEIGHT = TILE_HEIGHT,
        this.DRAW_TILE_WIDTH = DRAW_TILE_WIDTH, this.DRAW_TILE_HEIGHT = DRAW_TILE_HEIGHT,
        this.TILEMAP_WIDTH = TILEMAP_WIDTH;
    }
    
    drawTiles() {
        for (let y=0; y<this.GRID_HEIGHT; y++) {
            for (let x=0; x<this.GRID_WIDTH; x++) {
                this.ctx.drawImage(this.tiles,this.gridmap[y][x]%this.TILEMAP_WIDTH*this.TILE_WIDTH,
                    ~~(this.gridmap[y][x]/this.TILEMAP_WIDTH)*this.TILE_HEIGHT,this.TILE_WIDTH,this.TILE_HEIGHT,
                    x*this.DRAW_TILE_WIDTH,y*this.DRAW_TILE_HEIGHT,this.DRAW_TILE_WIDTH,this.DRAW_TILE_HEIGHT);
            }
        }
    }
}