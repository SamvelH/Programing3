var matrix = [];
var side = 40;
var grassArr = [];
var xotakerner = [];
var gishatichner = [];
var amenakerner = [];
var virusArr = [];

function setup() {
    for(var y = 0; y < 17; y++){
        matrix.push([]);
        for(var x = 0; x < 17; x++){
            matrix[y].push(0);
        }
    }
    for(var i = 0; i < 60; i++){
        var rndX = Math.floor(random(matrix[0].length));
        var rndY = Math.floor(random(matrix.length));
        matrix[rndY][rndX]=1;
    }
    for(var i = 0; i < 6; i++){
        var rndX = Math.floor(random(matrix[0].length));
        var rndY = Math.floor(random(matrix.length));
        matrix[rndY][rndX]=2;
    }
    for(var i = 0; i < 3; i++){
        var rndX = Math.floor(random(matrix[0].length));
        var rndY = Math.floor(random(matrix.length));
        matrix[rndY][rndX]=3;
    }
    for(var i = 0; i < 2; i++){
        var rndX = Math.floor(random(matrix[0].length));
        var rndY = Math.floor(random(matrix.length));
        matrix[rndY][rndX]=4;
    }
    for(var i = 0; i < 1; i++){
        var rndX = Math.floor(random(matrix[0].length));
        var rndY = Math.floor(random(matrix.length));
        matrix[rndY][rndX]=5;
    }

    frameRate(5);
    createCanvas(matrix[0].length * side+1, matrix.length * side+1);
    background('#acacac');

    for(var y = 0; y < matrix.length; ++y){
        for(var x = 0; x < matrix[y].length; ++x){
            if(matrix[y][x] == 1){
                grassArr.push(new Grass(x,y));
            }
            else if(matrix[y][x] == 2){
                xotakerner.push(new Xotaker(x,y));
            }
            else if(matrix[y][x] == 3){
                gishatichner.push(new Gishatich(x,y));
            }
            else if(matrix[y][x] == 4){
                amenakerner.push(new Amenaker(x,y));
            }
            else if(matrix[y][x] == 5){
                virusArr.push(new Virus(x,y));
            }
        }
    }
}

function draw() {
    for (var y = 0; y < matrix.length; y++) {
        for (var x = 0; x < matrix[y].length; x++) {

            if (matrix[y][x] == 1) {
                fill("green");
                rect(x * side, y * side, side, side);
            }
            else if (matrix[y][x] == 0) {
                fill("#acacac");
                rect(x * side, y * side, side, side);
            }
            else if (matrix[y][x] == 2) {
                fill("yellow");
                rect(x * side, y * side, side, side);
            }
            else if (matrix[y][x] == 3) {
                fill("red");
                rect(x * side, y * side, side, side);
            }
            else if (matrix[y][x] == 4) {
                fill("#641");
                rect(x * side, y * side, side, side);
            }
            else if (matrix[y][x] == 5) {
                fill("#d1a");
                rect(x * side, y * side, side, side);
            }
        }
    }

    for(var i in grassArr){
        grassArr[i].bazmanal();
    }
    for(var i in xotakerner){
        xotakerner[i].bazmanal();
        if(!xotakerner[i].utel()){
            xotakerner[i].sharjvel();
        }
        xotakerner[i].mahanal();
    }
    for(var i in gishatichner){
        gishatichner[i].bazmanal();
        if(!gishatichner[i].utel()){
            gishatichner[i].sharjvel();
            if(gishatichner[i].energy>0){
                gishatichner[i].energy--;
            }
        }
        gishatichner[i].mahanal();
    }
    for(var i in amenakerner){
        amenakerner[i].bazmanal();
        if(!amenakerner[i].utel()){
            amenakerner[i].sharjvel();
        }
        amenakerner[i].mahanal();
    }
    for(var i in virusArr){
        virusArr[i].bazmanal();
        virusArr[i].mahanal();
    }




    if(grassArr.length<=0 && virusArr.length<=10){
        var rndX = Math.floor(random(matrix[0].length));
        var rndY = Math.floor(random(matrix.length));
        if(matrix[rndX][rndY]==0){
        matrix[rndY][rndX]=1;
        grassArr.push(new Grass(rndX,rndY));}
    }
    if(xotakerner.length<=1 && virusArr.length<=30){
        var rndX = Math.floor(random(matrix[0].length));
        var rndY = Math.floor(random(matrix.length));
        if(matrix[rndX][rndY]==1){
        matrix[rndY][rndX]=2;
        xotakerner.push(new Xotaker(rndX,rndY));}
    }
    if(gishatichner.length<=1 && virusArr.length<=30){
        var rndX = Math.floor(random(matrix[0].length));
        var rndY = Math.floor(random(matrix.length));
        if(matrix[rndX][rndY]==0){
        matrix[rndY][rndX]=3;
        gishatichner.push(new Gishatich(rndX,rndY));}
    }
    if(amenakerner.length<=0 && virusArr.length<=30){
        var rndX = Math.floor(random(matrix[0].length));
        var rndY = Math.floor(random(matrix.length));
        if(matrix[rndX][rndY]==1){
        matrix[rndY][rndX]=4;
        amenakerner.push(new Amenaker(rndX,rndY));}
    }
    if(virusArr.length<=0 && grassArr.length>=20){
        var rndX = Math.floor(random(matrix[0].length));
        var rndY = Math.floor(random(matrix.length));
        matrix[rndY][rndX]=5;
        virusArr.push(new Virus(rndX,rndY));
    }
}
