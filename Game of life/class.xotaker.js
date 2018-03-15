class Xotaker{
    constructor(x,y){
        this.x = x;
        this.y = y;
        this.energy = 5;
        this.energyB = 0;
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
        this.index = 2;
    }
    yntrelVandak(ch) {
        this.stanalNorKordinatner();
        var found = [];
        for (var i in this.directions) {
            var x = this.directions[i][0];
            var y = this.directions[i][1];
            if (x >= 0 && x < matrix[0].length && y >= 0 && y < matrix.length){
                if (matrix[y][x] == ch) {
                    found.push(this.directions[i]);
                }
            }
        }
        return found;
    }
    stanalNorKordinatner() {
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
    }
    sharjvel() {
        var datarkVandakner = this.yntrelVandak(0);
        var norVandak = random(datarkVandakner);
        if(norVandak){
            matrix[this.y][this.x]=0;
            matrix[norVandak[1]][norVandak[0]]=2;
            this.x = norVandak[0];
            this.y = norVandak[1];
            if(this.energy>0){
                this.energy--;
                this.energyB=0;
            }
        }
    }
    utel() {
        var xototVandakner = this.yntrelVandak(1);
        var norVandak = random(xototVandakner);
        if(norVandak){
            matrix[this.y][this.x]=0;
            matrix[norVandak[1]][norVandak[0]]=2;
            this.x = norVandak[0];
            this.y = norVandak[1];
            for(var i in grassArr){
                if(grassArr[i].x==this.x && grassArr[i].y==this.y){
                    grassArr.splice(i,1);
                    break;
                }
            }
            if(this.energy<5){
                this.energy++;
            }
            this.energyB++;
            return true;
        }
    }
    mahanal() {
        if(this.energy==0){
            for(var i in xotakerner){
                if(xotakerner[i].x==this.x && xotakerner[i].y==this.y){
                    xotakerner.splice(i,1);
                    matrix[this.y][this.x]=0;
                    break;
                }
            } 
        }
    }
    bazmanal() {
        if(this.energyB>=5){
            var bazmanaluVandakner = this.yntrelVandak(1);
            var norVandak = random(bazmanaluVandakner);
            if(!norVandak){
                bazmanaluVandakner = this.yntrelVandak(0);
                norVandak = random(bazmanaluVandakner);
            }
            else if(norVandak){
                var x = norVandak[0];
                var y = norVandak[1];
                for(var i in grassArr){
                    if(grassArr[i].x==x && grassArr[i].y==y){
                        grassArr.splice(i,1);
                        break;
                    }
                }
                var norXotaker = new Xotaker(x,y);
                xotakerner.push(norXotaker);
                matrix[y][x]=2;
                this.energyB=0;
            }
        }
    }
}