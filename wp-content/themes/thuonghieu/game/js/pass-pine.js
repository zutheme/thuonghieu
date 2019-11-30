//window.onload = startGame;
var _width_screen = screen.width*0.98;
var _height_screen = screen.height*0.8; 
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
    this.canvas.style.cursor = "block"; //hide the original cursor
    this.frameNo = 0;
    this.context = this.canvas.getContext("2d");
    e_initgame.appendChild(this.canvas);
    this.interval = setInterval(updateGameArea, 20);
    // window.addEventListener('mousemove', function (e) {
    //   myGameArea.x = e.pageX;
    //   myGameArea.y = e.pageY;
    // });
    // window.addEventListener('touchmove', function (e) {
    //   myGameArea.x = e.touches[0].screenX;
    //   myGameArea.y = e.touches[0].screenY;
    // });
    window.addEventListener('mousedown', function (e) {
      myGameArea.x = e.pageX;
      myGameArea.y = e.pageY;
    })
    window.addEventListener('mouseup', function (e) {
      myGameArea.x = false;
      myGameArea.y = false;
    })
    window.addEventListener('touchstart', function (e) {
      myGameArea.x = e.pageX;
      myGameArea.y = e.pageY;
    })
    window.addEventListener('touchend', function (e) {
      myGameArea.x = false;
      myGameArea.y = false;
    })
  },
  clear : function() {
    this.context.clearRect(0, 0, this.canvas.width, this.canvas.height);
  },
  stop : function() {
      clearInterval(this.interval);
    },
  restart : function() {
      this.interval = setInterval(updateGameArea, 20);
    }  
}
function everyinterval(n) {
  if ((myGameArea.frameNo / n) % 1 == 0) {return true;}
  return false;
}
var myGamePiece,myUpBtn,myDownBtn,myLeftBtn,myRightBtn;
var myObstacle;
var myObstacles = [];
var myScore;
var myBackground;
var mySound;
var myMusic;
var e_cover_game = document.getElementsByClassName("filter")[0];
e_btn_start = e_cover_game.getElementsByClassName("btn-start")[0];
var e_init_game = document.getElementsByClassName("init-game")[0];
function startGame() {
  e_cover_game.style.display ="none";
  e_btn_start.style.display = "none";
  var msbg = e_init_game.getElementsByClassName("music-background")[0];
  if(!msbg){
    myMusic = new sound("game/sound/We_Wish_You_a_Merry_Christmas.mp3","music-background");
  }
  myMusic.play();
  myBackground = new component(_width_screen, _height_screen, "game/images/background-noel1.jpg", 0, 0, "background");
  myGamePiece = new component(30, 30, "red", _width_screen/8, _height_screen/2);
  myUpBtn = new component(30, 30, "blue", 50, 10);
  myDownBtn = new component(30, 30, "blue", 50, 70);
  myLeftBtn = new component(30, 30, "blue", 20, 40);
  myRightBtn = new component(30, 30, "blue", 80, 40);
  myObstacle = new component(10, 200, "green", 300, 120);
  myScore = new component("30px", "Consolas", "black", _width_screen/2, 40, "text");
  myGamePiece = new component(30, 30, "game/images/gift_box1.png", 10, 120, "image");
  var mshit = e_init_game.getElementsByClassName("music-hit")[0];
  if(!mshit){
    mySound = new sound("game/sound/Crash_with_Hiss.mp3","music-hit");
  }
  
  //bntstart = new component("30px", "Consolas", "black", _width_screen/2, _height_screen/2, "text");
  myObstacles = []; // it is very important to do this before starting the game
  myGameArea.start();
}
function restart() {
    myGameArea.stop();
    myGameArea.clear();
    startGame();
}
var _src ='game/images/hop-qua.png';

function component(width, height, color, x, y, type) {
  this.type = type;
  if (type == "image"|| type == "background") {
      this.image = new Image();
      this.image.src = color;
    }
  this.width = width;
  this.height = height;
  this.x = x;
  this.y = y;
  this.speedX = 0;
  this.speedY = 0;
  this.color = color;
  this.update = function(){
    ctx = myGameArea.context;
    if (this.type == "text") {
      ctx.font = this.width + " " + this.height;
      ctx.fillStyle = color;
      ctx.fillText(this.text, this.x, this.y);
    } else if (type == "image"|| type == "background") {
      ctx.drawImage(this.image,this.x,this.y,this.width, this.height);
      if (type == "background") {
            ctx.drawImage(this.image, this.x + this.width, this.y,this.width, this.height);
        }
    } 
    else{
      ctx.fillStyle = color;
      ctx.fillRect(this.x, this.y, this.width, this.height);
    }
  }
  this.newPos = function() {
    this.x += this.speedX;
    this.y += this.speedY;
    if (this.type == "background") {
      if (this.x == -(this.width)) {
        this.x = 0;
      }
    }
  }
  this.clicked = function() {
    var myleft = this.x;
    var myright = this.x + (this.width);
    var mytop = this.y;
    var mybottom = this.y + (this.height);
    var clicked = true;
    if ((mybottom < myGameArea.y) || (mytop > myGameArea.y) || (myright < myGameArea.x) || (myleft > myGameArea.x)) {
      clicked = false;
    }
    return clicked;
  }
  this.crashWith = function(otherobj) {
    var myleft = this.x;
    var myright = this.x + (this.width);
    var mytop = this.y;
    var mybottom = this.y + (this.height);
    var otherleft = otherobj.x;
    var otherright = otherobj.x + (otherobj.width);
    var othertop = otherobj.y;
    var otherbottom = otherobj.y + (otherobj.height);
    var crash = true;

    if ((mybottom < othertop) ||
    (mytop > otherbottom) ||
    (myright < otherleft) ||
    (myleft > otherright)) {
      crash = false;
    }
    return crash;
  }
  this.stopmove = function(){
      this.speedX = 0;
      this.x = 0;
  }
}
function sound(src,_class) {
  this.sound = document.createElement("audio");
  this.sound.src = src;
  this.sound.setAttribute("class", _class);
  this.sound.setAttribute("preload", "auto");
  this.sound.setAttribute("controls", "none");
  this.sound.volume = 0.9;
  this.sound.style.display = "none";
  e_initgame.appendChild(this.sound);
  //document.body.appendChild(this.sound);
  this.play = function(){
    this.sound.play();
  }
  this.stop = function(){
    this.sound.pause();
  }
}
function updateGameArea() {
   //myGameArea.clear();
  if (myGameArea.x && myGameArea.y) {
    if (myUpBtn.clicked()) {
      myGamePiece.y -= 1;
      //myGamePiece.image.src = "game/images/hop-qua.png";
    }
    if (myDownBtn.clicked()) {
      myGamePiece.y += 1;
      //myGamePiece.image.src = "game/images/nap-qua.png";
    }
    if (myLeftBtn.clicked()) {
      myGamePiece.x += -1;
    }
    if (myRightBtn.clicked()) {
      myGamePiece.x += 1;
      
    }
    if (myGamePiece.clicked()) {
      myGamePiece.color = 'blue';
    }else{
      myGamePiece.color = 'red';
    }
    
  }
 
  var x, y;
  for (i = 0; i < myObstacles.length; i += 1) {
    if (myGamePiece.crashWith(myObstacles[i])) {
      mySound.play();
      myMusic.stop();
      e_cover_game.style.display ="block";
      e_btn_start.style.display = "block";
      e_btn_start.style.marginLeft = "45%";
      myGameArea.stop();
      return;
    }
  }
  //if (myGamePiece.crashWith(myObstacle)) {
    //myGameArea.stop();
    //myObstacle.stopmove();
  //} else {
    myGameArea.clear();
    myBackground.speedX = -1;
    myBackground.newPos();    
    myBackground.update();
    myGameArea.frameNo += 1;

    if (myGameArea.frameNo == 1 || everyinterval(150)) {
      x = myGameArea.canvas.width;
      minHeight = _height_screen/5;
      maxHeight = _height_screen/2;
      height = Math.floor(Math.random()*(maxHeight-minHeight+1)+minHeight);
      minGap = _height_screen/4;
      maxGap = _height_screen/2;
      gap = Math.floor(Math.random()*(maxGap-minGap+1)+minGap);
      myObstacles.push(new component(10, height, "green", x, 0));
      myObstacles.push(new component(10, x - height - gap, "green", x, height + gap));
    }
    for (i = 0; i < myObstacles.length; i += 1) {
      myObstacles[i].x += -1;
      myObstacles[i].newPos();
      myObstacles[i].update();
    }
   
    myScore.text = "SCORE: " + myGameArea.frameNo;
    myScore.update();
    myUpBtn.update();
    myDownBtn.update();
    myLeftBtn.update();
    myRightBtn.update();
    myGamePiece.newPos();
    myGamePiece.update();
}

