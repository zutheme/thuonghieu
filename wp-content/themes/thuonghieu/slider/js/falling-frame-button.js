//window.onload = startGame;
var _width_screen = document.documentElement.clientWidth;
var _height_screen = document.documentElement.clientHeight;
var onresize = function() {
   _width_screen = document.body.clientWidth;
   _height_screen = document.body.clientHeight;
}
window.addEventListener("resize", onresize);
var e_initgame = document.getElementsByClassName('init-game')[0];
e_initgame.style.height = _height_screen+"px";
e_initgame.getElementsByClassName('filter')[0].style.height = _height_screen+"px";
var myGameArea = {
  canvas : document.createElement("canvas"),
  start : function() {
    this.canvas.width = _width_screen;
    this.canvas.height = _height_screen;
    this.canvas.style.cursor = "crosshair";
    this.frameNo = 0;
    this.score = 0;
    this.failed = 0;
    this.hitbott = 0;
    this.context = this.canvas.getContext("2d");
    this.mouse_move = false;
    this.mouse_clicked = false;
    this.note = "";
    this.gravitySpeed = 0;
    e_initgame.appendChild(this.canvas);
    this.interval = setInterval(updateGameArea, 20);
    window.addEventListener('mousemove', function (e) {
      myGameArea.mouse_move = true;
      myGameArea.x = e.pageX;
      myGameArea.y = e.pageY;
    });
    window.addEventListener('touchmove', function (e) {
      myGameArea.mouse_move = true;
      myGameArea.x = e.touches[0].screenX;
      myGameArea.y = e.touches[0].screenY;
    });
    window.addEventListener('mousedown', function (e) {
      myGameArea.mouse_clicked = true;
      myGameArea.x = e.pageX;
      myGameArea.y = e.pageY;
    })
    window.addEventListener('mouseup', function (e) {
      myGameArea.mouse_clicked = false;
      myGameArea.x = false;
      myGameArea.y = false;
    })
    window.addEventListener('touchstart', function (e) {
      myGameArea.x = e.pageX;
      myGameArea.y = e.pageY;
    })
    window.addEventListener('touchend', function (e) {
      myGameArea.mouse_clicked = false;
      myGameArea.x = false;
      myGameArea.y = false;
    })
  },
  clear : function() {
    this.context.clearRect(0, 0, this.canvas.width, this.canvas.height);
  },
  stop : function() {
      clearInterval(this.interval);
    }
}
function everyinterval(n) {
  if ((myGameArea.frameNo / n) % 1 == 0) {return true;}
  return false;
}
var btn_restart = [],btn_open_gift = [];
var text_restart,text_open_gift;
var myObstacles = [];
var pushed = [];
var event = [];
var myScore;
var myBackground,mySound,myMusic;
var resultboard;
var e_cover_game = document.getElementsByClassName("filter")[0];
e_btn_start = e_cover_game.getElementsByClassName("btn-start")[0];
var e_init_game = document.getElementsByClassName("init-game")[0];
function startGame() {
  //e_cover_game.style.display ="none";
  //e_btn_start.style.display = "none";
  var msbg = e_init_game.getElementsByClassName("music-background")[0];
  if(!msbg){
    myMusic = new sound("game/sound/We_Wish_You_a_Merry_Christmas.mp3","music-background",0.3);
  }
  myMusic.play();
  myBackground = new component(_width_screen, _height_screen, "game/images/background-noel1.jpg", 0, 0, "background");
  myScore = new component("30px", "Consolas", "black", 0, 40, "text");
  //myGamePiece = new component(30, 30, "game/images/gift_box1.png", 10, 120, "image");
  var mshit = e_init_game.getElementsByClassName("music-hit")[0];
  if(!mshit){
    mySound = new sound("game/sound/get_gift.mp3","music-hit",1);
  }
  var e_game_over = e_init_game.getElementsByClassName("music-game-over")[0];
  if(! e_game_over ){
    msgameover = new sound("game/sound/game_over.mp3","music-game-over",1);
  }
  var e_winner = e_init_game.getElementsByClassName("music-winner")[0];
  if(! e_winner ){
    mswinner = new sound("game/sound/winner.mp3","music-hit",1);
  }
  var mswalk = e_init_game.getElementsByClassName("music-walk")[0];
  if(!mswalk){
    soundwalk = new sound("game/sound/lost.mp3","music-walk",0.3);
  }
  
  myObstacles = []; // it is very important to do this before starting the game
  pushed = [];
  event = [];
  btn_restart = [];
  btn_open_gift = [];
  if(_width_screen < 768){
    resultboard = new component(300, 300, "black", _width_screen/2-150, _height_screen/5, "board");
    text_restart = new component("20px", "Arial", "black", _width_screen/2-35, _height_screen/5+255, "text");
    btn_restart.push(new component(100, 40, "#FFFFFF", (_width_screen/2-50), _height_screen/5+230));
    text_open_gift = new component("20px", "Arial", "black", _width_screen/2-35, _height_screen/5+255, "text");
    btn_open_gift.push(new component(100, 40, "#FFFFFF", (_width_screen/2-50), _height_screen/5+230));

  }else {
    resultboard = new component(300, 300, "black", _width_screen/2-150, _height_screen/5, "board");
    text_restart = new component("20px", "Arial", "black", _width_screen/2-35, _height_screen/5+255, "text");
    //btn_restart.push(new component(100, 40, "#FFFFFF", (_width_screen/2-50), _height_screen/5+230));
    text_open_gift = new component("20px", "Arial", "black", _width_screen/2-35, _height_screen/5+255, "text");
    //btn_open_gift.push(new component(100, 40, "#FFFFFF", (_width_screen/2-50), _height_screen/5+280));
  }
  myGameArea.start();
}
function restart() {
    myGameArea.stop();
    myGameArea.clear();
    startGame();
}
var _src ='game/images/hop-qua.png';

function component(width, height, color, x, y, type, type_speed) {
  this.typespeed = type_speed;
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
  this.gravity = 0.01;
  this.gravitySpeed = 0;
  this.bounce = 0.38;
  this.got = false;
  this.hitbot = false;
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
    else if (type == "board") {
        ctx.fillStyle = "#FFFFFF";
        ctx.globalAlpha = 0.8;
        ctx.fillRect(this.x, this.y, this.width, this.height);
        ctx.fillStyle = "#000";
        ctx.font = "bolder 30px Arial";
        ctx.textAlign = "center";
        var _congrate = myGameArea.note;
        //var len = this.note.length*23;
        ctx.fillText(_congrate, this.x+(_congrate.length*23/2), this.y+40);
        ctx.textAlign = "center";
        ctx.font = "300 20px Arial";
        var _result = "Kết quả";
        ctx.fillText(_result, this.x+(_result.length*40)/2, this.y+80);
        ctx.font = "300 18px Arial";
        ctx.textAlign = "left";
        ctx.fillText("Nhận:", this.x+15, this.y+120);
        ctx.fillText(myGameArea.score, this.x+80, this.y+120);
        ctx.fillText("Mất:", this.x+15, this.y+160);
        ctx.fillText(myGameArea.failed, this.x+80, this.y+160);
    } else{
      ctx.fillStyle = color;
      //ctx.fillRect(this.x, this.y, this.width, this.height);
      ctx.fillStyle = "black";
      ctx.strokeRect(this.x, this.y, this.width, this.height);
    }
  }
  this.newPos = function() {  
    if(this.typespeed == "gravity"){ 
      this.gravitySpeed += this.gravity;
      this.x += this.speedX;
      this.y += this.speedY + this.gravitySpeed;
      this.hitBottom();
    }else{
      this.x += this.speedX;
      this.y += this.speedY;
    }
    if (this.type == "background") {
      if (this.x == -(this.width)) {
        this.x = 0;
      }
    }
  }
  this.hitBottom = function() {
    var rockbottom = (myGameArea.canvas.height - this.height);
    if (this.y > rockbottom) {
      this.y = rockbottom;
      this.hitbot = true;
      this.gravitySpeed = -(this.gravitySpeed * this.bounce);
      if(!this.got){
        this.height -= 2;
        this.width -= 2;
        this.x = this.x + 0.6;
      } 
    }
  }
   this.hover = function() {
    var myleft = this.x;
    var myright = this.x + (this.width);
    var mytop = this.y;
    var mybottom = this.y + (this.height);
    var hover = false;
    if(myGameArea.mouse_move){
      if ((myleft < myGameArea.x) && (myGameArea.x < myright) && (mytop < myGameArea.y) && ( myGameArea.y < mybottom )) {
        hover = true;
      }
    }
    return hover;
  }
  this.clicked = function() {
    var myleft = this.x;
    var myright = this.x + (this.width);
    var mytop = this.y;
    var mybottom = this.y + (this.height);
    var clicked = false;
    if(myGameArea.mouse_clicked){
      if ((myleft < myGameArea.x) && (myGameArea.x < myright) && (mytop < myGameArea.y) && ( myGameArea.y < mybottom )) {
        //this.gravitySpeed += 0.5;
        clicked = true;
      }
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
    if((mybottom < othertop) || (mytop > otherbottom) || (myright < otherleft) || (myleft > otherright)) {
        crash = false;
    }
    return crash;
  }
}
function sound(src,_class,_volume) {
  this.sound = document.createElement("audio");
  this.sound.src = src;
  this.sound.setAttribute("class", _class);
  this.sound.setAttribute("preload", "auto");
  this.sound.setAttribute("controls", "none");
  this.sound.volume = _volume;
  this.sound.style.display = "none";
  e_initgame.appendChild(this.sound);
  this.play = function(){
    this.sound.play();
  }
  this.stop = function(){
    this.sound.pause();
  }
}
function isPlaying(audelem) { return !audelem.paused; }
function exitpushed(i){
    var exist = false; 
    for (j = 0; j < pushed.length; j += 1) { 
      if(pushed[j]==i){
        exist = true;
      }  
    }
    return exist;
}
function updateGameArea() {  
  var x, y,w;
  for (i = 0; i < myObstacles.length; i += 1) {
    if (myGameArea.x && myGameArea.y) {
        if(myObstacles[i].hover()){
            myGameArea.canvas.style.cursor = "pointer";
          }else{
            myGameArea.canvas.style.cursor = "crosshair";
          }
      }
    if (myGameArea.x && myGameArea.y) {
        if(myObstacles[i].clicked()&&!myObstacles[i].got&&!myObstacles[i].hitbot){
               myGameArea.score+=1;
               myObstacles[i].got = true;
               mySound.play();
          }
      }
      if(myObstacles[i].hitbot&&!myObstacles[i].got){
         if(!exitpushed(i)){
            myGameArea.failed += 1;
            pushed.push(i);
            var mswalk = e_init_game.getElementsByClassName("music-walk")[0];
            if(mswalk){
                if(!isPlaying(mswalk)){
                  soundwalk.play();
                }
            }  
         }     
    }
  }
  
   for (i = 0; i < btn_restart.length; i += 1) {
      if (myGameArea.x && myGameArea.y) {
            if(btn_restart[i].clicked()){
                //restart();
                console.log("restart");
                //return;
              }
          }
    }
    for (i = 0; i < btn_open_gift.length; i += 1) {
      if (myGameArea.x && myGameArea.y) {
            if(btn_open_gift[i].clicked()){
                console.log("open gift");
                //return;
              }
          }
      }
    myGameArea.clear();
    //myBackground.speedX = -1;
    myBackground.newPos();    
    myBackground.update();
    myGameArea.frameNo += 1;
    myGameArea.gravitySpeed = 0.01;
    if (myGameArea.frameNo == 1 || everyinterval(50)) {
      if(myGameArea.frameNo < 1000){
        w = myGameArea.canvas.width-100;
        min_w = 10;
        max_w = w;
        x = Math.floor(Math.random()*(max_w-min_w+1)+min_w); 
        minGap = 10;
        maxGap = 100;
        gap = Math.floor(Math.random()*(maxGap-minGap+1)+minGap);
        myObstacles.push(new component(gap, gap, "game/images/gift_box1.png", x, 0, "image","gravity"));
      }
      if(myGameArea.frameNo > 1000){
        btn_restart.push(new component(100, 40, "blue", (_width_screen/2-50), _height_screen/5+230));
        //text_open_gift = new component("20px", "Arial", "black", _width_screen/2-35, _height_screen/5+255, "text");
        btn_open_gift.push(new component(100, 40, "yellow", (_width_screen/2-50), _height_screen/5+280));
      }
    }
    for (i = 0; i < myObstacles.length; i += 1) {
      myObstacles[i].y += 1;
      //myObstacles[i].gravitySpeed += 0.01;
      myObstacles[i].gravitySpeed += myGameArea.gravitySpeed;
      myObstacles[i].newPos();
      myObstacles[i].update();
    }
    if(myGameArea.frameNo > 1000){
          if(myGameArea.score > myGameArea.failed){
              if(myGameArea.frameNo < 1005){
                mswinner.play();
              }
              myMusic.stop();
              myGameArea.note = "Xin chúc mừng!";
              resultboard.update();
              //text_open_gift.text = "Mở quà"
              //text_open_gift.update();    
              //btn_open_gift.update();
              for (i = 0; i < btn_open_gift.length; i += 1) {
                      if(btn_open_gift[i].clicked()){
                          //restart();
                          btn_open_gift[i].update();
                          //return;
                        }
              }  
              //myGameArea.stop();
              //return;
            }else {      
              //msgameover.play();
              myMusic.stop();
              myGameArea.note = "Hừm, tiếc quá!";
              resultboard.update();
              //text_restart.text = "Chơi lại"
              //text_restart.update();  
              //btn_restart.update();
               for (i = 0; i < btn_restart.length; i += 1) {
                      if(btn_restart[i].clicked()){
                          //restart();
                          btn_restart[i].update();
                          //return;
                        }
              }
              //myGameArea.stop();
              //return;
            }
    }
    
    myScore.text = "SCORE: " + myGameArea.score+ " failed: "+ myGameArea.failed+" frameNo: "+myGameArea.frameNo;
    myScore.update();
}

