window.onload = startGame;
var _width_screen = screen.width/2;
var _height_screen = screen.height/2; 
var onresize = function() {
   _width_screen = document.body.clientWidth;
   _height_screen = document.body.clientHeight;
}
window.addEventListener("resize", onresize);

var e_initgame = document.getElementsByClassName('init-game')[0];
var myGameArea = {
  canvas : document.createElement("canvas"),
  start : function() {
    this.canvas.width = _width_screen;
    this.canvas.height = _height_screen;
    this.context = this.canvas.getContext("2d");
    e_initgame.appendChild(this.canvas);
    this.interval = setInterval(updateGameArea, 20);
     window.addEventListener('keydown', function (e) {
          myGameArea.keys = (myGameArea.keys || []);
          myGameArea.keys[e.keyCode] = (e.type == "keydown");
      })
      window.addEventListener('keyup', function (e) {
          myGameArea.keys[e.keyCode] = (e.type == "keydown");            
      })
  },
  clear : function() {
    this.context.clearRect(0, 0, this.canvas.width, this.canvas.height);
  }
}
var myGamePiece;
function startGame() {
  myGameArea.start();
  myGamePiece = new component(30, 30, "red", _width_screen/2, _height_screen/2);
}
var _src ='game/images/hop-qua.png';

function component(width, height, color, x, y) {
  this.width = width;
  this.height = height;
  this.x = x;
  this.y = y;
  this.speedX = 0;
  this.speedY = 0;
  this.update = function(){
    ctx = myGameArea.context;
    ctx.fillStyle = color;
    ctx.fillRect(this.x, this.y, this.width, this.height);
  }
  this.newPos = function() {
    this.x += this.speedX;
    this.y += this.speedY;
  }
}

function updateGameArea() {
   myGameArea.clear();
  myGamePiece.speedX = 0;
  myGamePiece.speedY = 0;    
  if (myGameArea.keys && myGameArea.keys[37]) {myGamePiece.speedX = -1; }
  if (myGameArea.keys && myGameArea.keys[39]) {myGamePiece.speedX = 1; }
  if (myGameArea.keys && myGameArea.keys[38]) {myGamePiece.speedY = -1; }
  if (myGameArea.keys && myGameArea.keys[40]) {myGamePiece.speedY = 1; }
    myGamePiece.newPos();    
    myGamePiece.update();
}

function moveup() {
  myGamePiece.speedY -= 1;
}

function movedown() {
  myGamePiece.speedY += 1;
}

function moveleft() {
  myGamePiece.speedX -= 1;
}

function moveright() {
  myGamePiece.speedX += 1;
}
function stopMove() {
  myGamePiece.speedX = 0;
  myGamePiece.speedY = 0;
}