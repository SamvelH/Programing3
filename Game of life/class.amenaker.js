class Amenaker{
    constructor(x,y){
        this.x = x;
        this.y = y;
        this.energy = 20;
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
        this.index = 4;
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
            matrix[norVandak[1]][norVandak[0]]=4;
            this.x = norVandak[0];
            this.y = norVandak[1];
            if(this.energy>0){
                this.energy--;
            }
        }
    }
    utel() {
        var uteluVandakner = this.yntrelVandak(1);
        var norVandak = random(uteluVandakner);
        if(norVandak){
            matrix[this.y][this.x]=0;
            matrix[norVandak[1]][norVandak[0]]=4;
            this.x = norVandak[0];
            this.y = norVandak[1];
            for(var i in grassArr){
                if(grassArr[i].x==this.x && grassArr[i].y==this.y){
                    grassArr.splice(i,1);
                    break;
                }
            }
            if(this.energy<20){
                this.energy++;
            }
            this.energyB++;
            return true;
        }
        else if(!norVandak){
            uteluVandakner = this.yntrelVandak(2);
            norVandak = random(uteluVandakner);
            if(norVandak){
                matrix[this.y][this.x]=0;
                matrix[norVandak[1]][norVandak[0]]=4;
                this.x = norVandak[0];
                this.y = norVandak[1];
                for(var i in xotakerner){
                    if(xotakerner[i].x==this.x && xotakerner[i].y==this.y){
                        xotakerner.splice(i,1);
                        break;
                    }
                }
                if(this.energy<20){
                    this.energy+=2;
                }
                this.energyB+=2;
                return true;
            }
        }
    }
    mahanal() {
        if(this.energy==0){
            for(var i in amenakerner){
                if(amenakerner[i].x==this.x && amenakerner[i].y==this.y){
                    amenakerner.splice(i,1);
                    matrix[this.y][this.x]=0;
                    break;
                }
            } 
        }
    }
    bazmanal() {
        if(this.energyB>=20){
            var bazmanaluVandakner = this.yntrelVandak(0);
            var norVandak = random(bazmanaluVandakner);
            if(norVandak){
                var x = norVandak[0];
                var y = norVandak[1];
                var norAmenaker = new Amenaker(x,y);
                amenakerner.push(norAmenaker);
                matrix[y][x]=4;
                this.energyB=0;
            }
        }
    }
}