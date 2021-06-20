let x = 100;
let y = 100;
// 1 -| up to down 2 - | down to up  3 - -- left to right  4 - -- right to left  5 - I ćwiartka bot  6 - III ćw bot  7 - II cw top  8-  IV ćw top
// 9 - I ćw top 10 - III ćw top  11 - II ćw bot  12 - IV ćw bot
/*let points =[[0,0,0,30,0,30,0,30],[0,0,0,-30,0,-30,0,-30],[0,0,30,0,30,0,30,0],[0,0,-30,0,-30,0,-30,0],
              [0,0,-6,-18,-12,-24,-30,-30],[0,0,-18,-6,-24,-12,-30,-30],
              [0,0,-18,6,-24,12,-30,30],[0,0,-6,18,-12,24,-30,30],
              [0,0,18,6,24,12,30,30],[0,0,6,18,12,24,30,30],
              [0,0,6,-18,12,-24,30,-30],[0,0,18,-6,24,-12,30,-30]];
*/
let BigLines = [];
BigLines.lenght = 75;
class Line{
  constructor(x,y,point){
    this.x=x;
    if(x<0)
      this.x=900;
    else if(x>900)
      this,x=0;
    this.y=y;
    if(y<0)
      this.y=600;
    else if (y>600)
      this.y=0;
    this.point=point;
  }  
}
class BigLine{
  constructor(line){
    this.lines=[];
    this.lines.length=5;
    this.lines[0]=line;
    this.color = [(Math.floor(Math.random() * 256)),(Math.floor(Math.random() * 256)),(Math.floor(Math.random() * 256))];
  }
  step(point){
    //if(isNaN(this.lines[0])) return 0;
    var i,help;
    help =[];
    help.length=10;
    if(this.lines[0].point>=4){
      help[0]=new Line(this.lines[0].x+pointsArcPoint[this.lines[0].point-4][0]*SIZE,this.lines[0].y+pointsArcPoint[this.lines[0].point-4][1]*SIZE,point);
    } else{
      help[0]=new Line (this.lines[0].x+points[this.lines[0].point][0]*SIZE,this.lines[0].y+points[this.lines[0].point][1]*SIZE,point);
    }
    for(i=8;i>=0;i--){
      //console.log(i+"     "+this.lines[i]);
    if(typeof this.lines[i]=== 'undefined') continue;
      if(this.lines[i].point>=4){
        help[i+1]=new Line(this.lines[i].x,this.lines[i].y,this.lines[i].point);
      } else{
        help[i+1]=new Line (this.lines[i].x,this.lines[i].y,this.lines[i].point);
      }
    }
    this.lines=help;
  }
  draw(){
    var i;
    for(i=0;i<10;i++){
      if(this.lines[i]==null) continue;
      if(this.lines[i].point>=4){
        stroke(this.color[0],this.color[1],this.color[2]);
        arc(pointsArcs[this.lines[i].point-4][0]*SIZE+this.lines[i].x,pointsArcs[this.lines[i].point-4][1]*SIZE+this.lines[i].y,SIZE*2,SIZE*2,arcs[this.lines[i].point-4][0],arcs[this.lines[i].point-4][1]);
      }else{
        stroke(this.color[0],this.color[1],this.color[2]);
        line(this.lines[i].x,this.lines[i].y,points[this.lines[i].point][0]*SIZE+this.lines[i].x,points[this.lines[i].point][1]*SIZE+this.lines[i].y);
      }
    }
  }
}
function setup() {
  var parent = createCanvas(900,600);
  parent.parent('playground');
  frameRate(10);
  var i;
  for(i=0;i<75;i++){
    BigLines[i]= new BigLine(new Line((Math.floor(Math.random() * 55)+3)*SIZE,(Math.floor(Math.random() * 35)+3)*SIZE,Math.floor(Math.random() * 12)));
  }
}
let points = [[0,1],[0,-1],[1,0],[-1,0]];
let pointsArcs = [[-1,0],[0,-1],[0,1],[-1,0],[0,1],[1,0],[1,0],[0,-1]];
let pointsArcPoint=[[-1,-1],[-1,-1],[-1,1],[-1,1],[1,1],[1,1],[1,-1],[1,-1]];
let arcs = [[3*Math.PI/2,0],[Math.PI/2,Math.PI],[Math.PI,Math.PI*3/2],[0,Math.PI/2],
            [3*Math.PI/2,0],[Math.PI/2,Math.PI],[Math.PI,Math.PI*3/2],[0,Math.PI/2]];
const SIZE=15;

function randomCurve(x,y,prevoius){
  var result;
  var ran = Math.floor(Math.random() * 12)
}

function draw(){
  
  //var lines = new BigLine(new Line (90,90,9));
  background(230);
  noFill();
  strokeWeight(2);
  var i;
  BigLines.forEach(l=>{
    l.draw();
    var ran = Math.floor(Math.random() * 12);
    l.step(ran);
  });
  
  // for (i=0;i<15;i++){
  //   line.draw();   
  //   var ran = Math.floor(Math.random() * 12);
  //   line.step(ran);
  // }
}

// function draw() {
//   background(235);
//   noFill();
//   strokeWeight(1);
//   stroke(0);
//   //line(0,0,50,50);
//   var i;
//   for(i=0;i<8;i++){
//       stroke(20*i);
//       //curve(50+points[i][0],50+points[i][1],50+points[i][2],50+points[i][3],50+points[i][4],50+points[i][5],50+points[i][6],50+points[i][7]);
//       //beginShape();
//       // curveVertex(50+points[i][0], 50+points[i][1]);
//       // curveVertex(50+points[i][0],50+points[i][1]);
//       // curveVertex(50+points[i][2], 50+points[i][3]);
//       // curveVertex(50+points[i][4], 50+points[i][5]);
//       // curveVertex(50+points[i][6], 50+points[i][7]);
//       // curveVertex(50+points[i][6], 50+points[i][7]);
//       //endShape();
//       //
//       arc(pointsArcs[i][0]*SIZE+50,pointsArcs[i][1]*SIZE+50,SIZE*2,SIZE*2,arcs[i][0],arcs[i][1]);
//   }
//   for(i=0;i<4;i++){
//     line(50,50,points[i][0]*SIZE+50,points[i][1]*SIZE+50);
//   }
// }

