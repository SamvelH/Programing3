class Virus{
    constructor(x,y){
        this.x=x;
        this.y=y;
        this.multiply=0;
        this.mah=2;
        this.directions = [
            [this.x - 1, this.y - 1],
            [this.x    , this.y - 1],
            [this.x + 1, this.y - 1],
            [this.x - 1, this.y    ],
            [this.x + 1, this.y    ],
            [this.x - 1, this.y + 1],
            [this.x    , this.y + 1],
            [this.x + 1, this.y + 1]
        ];
        this.index = 5;
    }
    yntrelVandak(ch) {
        var found = [];
        for (var i in this.directions) {
            var x = this.directions[i][0];
            var y = this.directions[i][1];
            if (x >= 0 && x < matrix[0].length && y >= 0 && y < matrix.length){
                if (matrix[y][x] == ch || (ch == -1 && matrix[y][x] != 0)) {
                    found.push(this.directions[i]);
                }
            }
        }
        return found;
    }
    bazmanal() {
        var arg = 1; 
        this.multiply++;

        var varakeluVandakner = this.yntrelVandak(-1);
        var norVandak = random(varakeluVandakner);

        if(this.multiply >= arg && norVandak){
            var norVirus = new Virus(norVandak[0], norVandak[1]);
            virusArr.push(norVirus);
            matrix[norVandak[1]][norVandak[0]] = 5;
            this.multiply = 0;

            for(var i in grassArr){
                if(grassArr[i].x==norVandak[0] && grassArr[i].y==norVandak[1]){
                    grassArr.splice(i,1);
                    break;
                }
            }
            for(var i in xotakerner){
                if(xotakerner[i].x==norVandak[0] && xotakerner[i].y==norVandak[1]){
                    xotakerner.splice(i,1);
                    break;
                }
            }
            for(var i in gishatichner){
                if(gishatichner[i].x==norVandak[0] && gishatichner[i].y==norVandak[1]){
                    gishatichner.splice(i,1);
                    break;
                }
            }
            for(var i in amenakerner){
                if(amenakerner[i].x==norVandak[0] && amenakerner[i].y==norVandak[1]){
                    amenakerner.splice(i,1);
                    break;
                }
            }
        }
    }
    mahanal() {
        this.mah--;
        if(this.mah<=0) {
            for(var i in virusArr){
                if(virusArr[i].x==this.x && virusArr[i].y==this.y){
                    virusArr.splice(i,1);
                    matrix[this.y][this.x]=0;
                    break;
                }
            }
        }
    }
}