/*

    |||||||||||||      |||||||||
         |||        |||         |||
         |||        |||         |||
         |||        |||         |||
         |||        |||         |||
   ||    |||        |||     //  |||
    ||   |||        |||      // |||
     |||||||           ||||||||//
                                 //


*/

let maze = document.querySelector('#asta');
let a_w = maze.offsetWidth;
let a_h = maze.offsetHeight;

let flag1 = 0;
let flag2 = 0;
let s1 = document.getElementById('s1');
let s2 = document.getElementById('s2');
//     ||||||||
//   |||      |||
//  |||
//  |||   |||||||
//   |||      |||
//    |||||||||

let randomValues = [];
let a = 0;
let b = 0;
let cols = 30;
let rows = 30;
let endIx = cols - 1;
let endIy = 0;
let dig = true;
let ranlim = 0.27;

for(let i = 0; i < 900; i++){
  randomValues[i] = Math.random();
}

function ran1() {
return randomValues[a++];
}

function ran2() {
return randomValues[b++];
}

function createC1(){
  p5_1.createCanvas(a_w,a_h);
}
function createC2(){
  p5_2.createCanvas(a_w,a_h);
}



// |||||||   |||||||||
// ||     |  |
// ||     |  |
// |||||||   |||||||||
// ||                |
// ||                |
// ||        |||||||||


  var sketch1 = function(p){
    p.cols = cols;
    p.rows = rows;
    p.grid = new Array(p.cols);
    p.noSolution = false;
    p.openSet = [];
    p.closeSet = [];
    p.start;
    p.end;
    p.w,p.h;
    p.path = [];


    p.rmFromArr = function (arr,elt){
    for( let i = arr.length -1; i >= 0 ; i--){
      if(arr[i] === elt){
        arr.splice(i , 1);
      }
    }
  }

  p.heuristic = function (a,b){
  //d = p.dist(a.i, a.j, b.i, b.j);
  d = abs(a.i - b.i) + abs(a.j - b.j);
return d;
}

p.Spot = function  (i,j){
this.i = i;
this.j = j;
this.f = 0;
this.g = 0;
this.h = 0;
this.neighbours = [];
this.previous;
this.wall = false;

  if(ran1() < ranlim){
    this.wall = true;
  }

this.show = function(col) {
  p.fill(col);
  if(this.wall){
    p.fill(0);
  }
  p.noStroke();
  p.rect(this.i * p.w,this.j * p.h, p.w - 1 , p.h - 1);
}
p.heuristic = function (a,b){
d = p.dist(a.i, a.j, b.i, b.j);
//  d = abs(a.i - b.i) + abs(a.j - b.j);
return d;
}
this.addNeighbours = function(grid){
    i = this.i;
    j = this.j;

  if(i < p.cols - 1){
    this.neighbours.push(grid[i + 1][j]);
  }
  if(i > 0){
    this.neighbours.push(grid[i - 1][j]);
  }
  if(j < p.rows - 1){
    this.neighbours.push(grid[i][j + 1]);
  }
  if(j > 0){
    this.neighbours.push(grid[i][j - 1]);
  }

if(dig){

  if(i > 0 && j > 0){
    this.neighbours.push(grid[i - 1][j - 1]);
  }
  if(i > 0 && j < p.rows - 1){
    this.neighbours.push(grid[i - 1][j + 1]);
  }
  if(i < p.cols -1 && j > 0){
    this.neighbours.push(grid[i + 1][j - 1]);
  }
  if(i < p.cols - 1 && j < p.rows - 1){
    this.neighbours.push(grid[i + 1][j + 1]);
  }
}


}


}

    p.setup = function (){
      createC1();
      console.log('Dijkstra');

      p.w = p.width / p.cols;
    p.h = p.height /p.rows;


      for (  let i = 0; i < p.cols; i++ ) {
          p.grid[i] = new Array(p.rows);
      }

      for ( let i = 0; i < p.cols; i++ ) {
        for(  let j = 0; j < p.rows; j++ ){
          p.grid[i][j] = new p.Spot(i,j);
      }
    }

    for (  let i = 0; i < p.cols; i++ ) {
      for( let j = 0; j < p.rows; j++ ){
        p.grid[i][j].addNeighbours(p.grid);
    }
  }

    //console.log(p.grid);
    p.start = p.grid[0][0];
    p.end = p.grid[endIx][endIy];
    p.start.wall = false;
    p.end.wall = false;

    p.openSet.push(p.start);


  }


    p.draw = function (){

      if(p.openSet.length > 0){

          p.winner = 0;

        for( let i = 0; i < p.openSet.length; i++){
          if(p.openSet[i].f < p.openSet[p.winner].f){
            p.winner = i;
          }
        }

          p.current = p.openSet[p.winner];

        if(p.current === p.end){
          p.noLoop();
          let a_block = p.closeSet.length;
            s1.innerHTML = 'Total Nodes Explored : ' + a_block;
            console.log('astar' + p.path.length);
          console.log("Done");
        }

        p.rmFromArr(p.openSet,p.current);
        //p.openSet.remove(current);
        p.closeSet.push(p.current);

          p.neighbours = p.current.neighbours;
        for( let i = 0; i < p.neighbours.length ; i++){
            p.neighbour = p.neighbours[i];

          if(!p.closeSet.includes(p.neighbour) && !p.neighbour.wall){
              p.tempG = p.current.g + 1;

              p.newPath = false;
            if(p.openSet.includes(p.neighbour)){
                if(p.tempG < p.neighbour.g){
                  p.neighbour.g = p.tempG;
                  p.newPath = true;
                }
            } else {
              p.neighbour.g = p.tempG;
              p.newPath = true;
              p.openSet.push(p.neighbour);
            }

            if(p.newPath){
            p.neighbour.h = p.heuristic(p.neighbour,p.end);
            p.neighbour.f = p.neighbour.g + p.neighbour.h;
            p.neighbour.previous = p.current;
            }
          }

        }


        //keepGoing
      }else {
        console.log("No Solution");
        s1.innerHTML = 'No Solution';
        p.noSolution = true;
        p.noLoop();
        //p.noSolution
      }


      p.background(0);

      for( let i = 0; i < p.cols; i++){
        for( let j = 0; j < p.cols; j++){
          p.grid[i][j].show(p.color(230, 238, 255));
        }
      }

      for( let i = 0; i < p.closeSet.length; i++){
        p.closeSet[i].show(p.color(255, 170, 140));
      }

      for( let i = 0; i < p.openSet.length; i++){
        p.openSet[i].show(p.color(0, 255, 0));
      }

      if(!p.noSolution){
        //print path
        p.path = [];
          p.temp = p.current;
        p.path.push(p.temp);

        while(p.temp.previous){
          p.path.push(p.temp.previous);
          p.temp = p.temp.previous;
        }
    }
      for( let i = 0; i < p.path.length; i++){
        p.path[i].show(p.color(0, 0, 255));
      }

  }

}

var sketch2 = function(p){
  p.cols = 30;
  p.rows = 30;
  p.grid = new Array(p.cols);
  p.noSolution = false;
  p.openSet = [];
  p.closeSet = [];
  p.start;
  p.end;
  p.w,p.h;
  p.path = [];


  p.rmFromArr = function (arr,elt){
  for( let i = arr.length -1; i >= 0 ; i--){
    if(arr[i] === elt){
      arr.splice(i , 1);
    }
  }
}

p.heuristic = function (a,b){
d = p.dist(a.i, a.j, b.i, b.j);
//  d = abs(a.i - b.i) + abs(a.j - b.j);
return d;
}

p.Spot = function  (i,j){
this.i = i;
this.j = j;
this.f = 0;
this.g = 0;
this.h = 0;
this.neighbours = [];
this.previous;
this.wall = false;

  if(ran2() < ranlim){
    this.wall = true;
  }


this.show = function(col) {
  p.fill(col);
  if(this.wall){
    p.fill(0);
  }
  p.noStroke();
  p.rect(this.i * p.w,this.j * p.h, p.w - 1 , p.h - 1);
}
p.heuristic = function (a,b){
d = p.dist(a.i, a.j, b.i, b.j);
//  d = abs(a.i - b.i) + abs(a.j - b.j);
return d;
}
this.addNeighbours = function(grid){
    i = this.i;
    j = this.j;

  if(i < p.cols - 1){
    this.neighbours.push(grid[i + 1][j]);
  }
  if(i > 0){
    this.neighbours.push(grid[i - 1][j]);
  }
  if(j < p.rows - 1){
    this.neighbours.push(grid[i][j + 1]);
  }
  if(j > 0){
    this.neighbours.push(grid[i][j - 1]);
  }


if(dig){

  if(i > 0 && j > 0){
    this.neighbours.push(grid[i - 1][j - 1]);
  }
  if(i > 0 && j < p.rows - 1){
    this.neighbours.push(grid[i - 1][j + 1]);
  }
  if(i < p.cols -1 && j > 0){
    this.neighbours.push(grid[i + 1][j - 1]);
  }
  if(i < p.cols - 1 && j < p.rows - 1){
    this.neighbours.push(grid[i + 1][j + 1]);
  }
}



}


}

  p.setup = function (){
    createC2();
    console.log('A*');

    p.w = p.width / p.cols;
  p.h = p.height /p.rows;


    for (  let i = 0; i < p.cols; i++ ) {
        p.grid[i] = new Array(p.rows);
    }

    for ( let i = 0; i < p.cols; i++ ) {
      for(  let j = 0; j < p.rows; j++ ){
        p.grid[i][j] = new p.Spot(i,j);
    }
  }

  for (  let i = 0; i < p.cols; i++ ) {
    for( let j = 0; j < p.rows; j++ ){
      p.grid[i][j].addNeighbours(p.grid);
  }
}

  //console.log(p.grid);
  p.start = p.grid[0][0];
  p.end = p.grid[endIx][endIy];
  p.start.wall = false;
  p.end.wall = false;

  p.openSet.push(p.start);


}


  p.draw = function (){

    if(p.openSet.length > 0){

        p.winner = 0;

      for( let i = 0; i < p.openSet.length; i++){
        if(p.openSet[i].f < p.openSet[p.winner].f){
          p.winner = i;
        }
      }

        p.current = p.openSet[p.winner];

      if(p.current === p.end){
        p.noLoop();
        var d_block =  p.closeSet.length;
        s2.innerHTML = 'Total Nodes Explored : ' + d_block;
        console.log('astar' + p.path.length);
        console.log("Done");
      }

      p.rmFromArr(p.openSet,p.current);
      //p.openSet.remove(current);
      p.closeSet.push(p.current);

        p.neighbours = p.current.neighbours;
      for( let i = 0; i < p.neighbours.length ; i++){
          p.neighbour = p.neighbours[i];

        if(!p.closeSet.includes(p.neighbour) && !p.neighbour.wall){
            p.tempG = p.current.g + 1;

            p.newPath = false;
          if(p.openSet.includes(p.neighbour)){
              if(p.tempG < p.neighbour.g){
                p.neighbour.g = p.tempG;
                p.newPath = true;
              }
          } else {
            p.neighbour.g = p.tempG;
            p.newPath = true;
            p.openSet.push(p.neighbour);
          }

          if(p.newPath){
          p.neighbour.h = p.heuristic(p.neighbour,p.end);
          p.neighbour.f = p.neighbour.g;
          p.neighbour.previous = p.current;
          }
        }

      }


      //keepGoing
    }else {
      console.log("No Solution");
      s2.innerHTML = 'No Solution';
      p.noSolution = true;
      p.noLoop();
      //p.noSolution
    }


    p.background(0);

    for( let i = 0; i < p.cols; i++){
      for( let j = 0; j < p.cols; j++){
        p.grid[i][j].show(p.color(230, 238, 255));
      }
    }

    for( let i = 0; i < p.closeSet.length; i++){
      p.closeSet[i].show(p.color(255, 170, 140));
    }

    for( let i = 0; i < p.openSet.length; i++){
      p.openSet[i].show(p.color(0, 255, 0));
    }

    if(!p.noSolution){
      //print path
      p.path = [];
        p.temp = p.current;
      p.path.push(p.temp);

      while(p.temp.previous){
        p.path.push(p.temp.previous);
        p.temp = p.temp.previous;
      }
  }
    for( let i = 0; i < p.path.length; i++){
      p.path[i].show(p.color(0, 0, 255));
    }

}

}
var p5_1 = new p5(sketch1,'asta');
var p5_2 = new p5(sketch2,'dijks');
