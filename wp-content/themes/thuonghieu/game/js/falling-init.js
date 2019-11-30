var e_initgame = document.getElementsByClassName('init-game')[0];

var e_filter = e_initgame.getElementsByClassName('filter')[0];

var e_audio = e_initgame.getElementsByClassName('audio')[0];

var e_game = e_initgame.getElementsByClassName('game')[0];

e_initgame.style.height = _height_screen+"px";

//console.log(urlblog);

e_initgame.getElementsByClassName('filter')[0].style.height = _height_screen+"px";

var count = 0;

window.onload = init_variable;

var obj_btn_start, count_play = 0;

function init_variable(){
  var _over = getCookie("over");
  if(!isRealValues(_over)){
    setCookie("over",'1',3);
  }
  _over = getCookie("over");
  count_play = parseInt(count_play);
  if(_over === '1' && count_play == 0){
      count_play++;
      obj_btn_start = new createbutton(e_filter,"btn-start","Bắt đầu",'startGame()');
  }else if(_over === '1' && count_play > 0 ){
      count_play++;
      obj_btn_start = new createbutton(e_filter,"btn-start","Chơi lại",'restart()');
  }
  else{
    e_filter.getElementsByClassName('over')[0].innerHTML ='<span class="no-more">Quý khách đã hết lượt chơi!</span>';
  }
  //startOpenGift();
  return;
}

var _width_screen = document.documentElement.clientWidth*0.98;

var _height_screen = document.documentElement.clientHeight*0.9;

var onresize = function() {

   _width_screen = document.body.clientWidth;

   _height_screen = document.body.clientHeight;

}

window.addEventListener("resize", onresize);

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

    this.limitDialog = 0;

    this.count = 0;

    this.topwin = 0;

    this.timeinterval = 0;

    e_game.appendChild(this.canvas);

    this.interval = setInterval(this.namefunc, 20);

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

    },

  getnamefunc : function(_namefunc){

    this.namefunc = _namefunc;

  }

}

function everyinterval(n) {

  if ((myGameArea.frameNo / n) % 1 == 0) {return true;}

  return false;

}

var btn_restart,btn_open_gift;

var myObstacles = [];

var pushed = [];

var myScore;

var myBackground,music_hit,music_background;

var resultboard,boardscore,txt_brdscore,txt_brdscore_get,txt_brdscore_lost,txt_brdscore_count;
var noel_ride;
//console.log(urlblog + "/game/images/background-noel1.jpg");

function startGame() {

  //e_cover_game.style.display ="none";

  //e_btn_start.style.display = "none";

  // while (e_audio.hasChildNodes()) {  

  //   e_audio.removeChild(e_audio.firstChild);

  // }

  //obj_btn_start.removebutton();

  clear_button();

  init_sound();

  myBackground = new component(_width_screen, _height_screen,  urlblog + "/game/images/background-noel1.jpg", 0, 0, "background");

  myScore = new component("30px", "Consolas", "black", 0, 40, "text");

  boardscore = new component(300, 300, "white", ((_width_screen/2)-150), _height_screen/3,'',"resizewidth",300);

  txt_brdscore = new component("bold 30px", "Arial", "black",((_width_screen/2)-100), _height_screen/3+50, "text","resizewidth",300);

  txt_brdscore_get = new component("30px", "Consolas", "black", ((_width_screen/2)-100), _height_screen/3+100, "text");

  txt_brdscore_lost = new component("30px", "Consolas", "black", ((_width_screen/2)-100), _height_screen/3+150, "text");

  txt_brdscore_count = new component("30px", "Consolas", "black", ((_width_screen/2)-100), _height_screen/3+200, "text");
  noel_ride = new component(390, 208,  urlblog + "/game/images/noel_ride.gif", 0, ((_width_screen/2)-100), "image");
  myObstacles = []; // it is very important to do this before starting the game

  pushed = [];

  if(_width_screen < 768){

    resultboard = new component(300, 300, "black", _width_screen/2-150, _height_screen/5, "board");

    //text_restart = new component("20px", "Arial", "black", _width_screen/2-35, _height_screen/5+255, "text");

    //btn_restart.push(new component(100, 40, "#FFFFFF", (_width_screen/2-50), _height_screen/5+230));

    //text_open_gift = new component("20px", "Arial", "black", _width_screen/2-35, _height_screen/5+255, "text");

    //btn_open_gift.push(new component(100, 40, "#FFFFFF", (_width_screen/2-50), _height_screen/5+230));



  }else {

    resultboard = new component(300, 300, "black", _width_screen/2-150, _height_screen/5, "board");

    //text_restart = new component("20px", "Arial", "black", _width_screen/2-35, _height_screen/5+255, "text");

    //btn_restart.push(new component(100, 40, "#FFFFFF", (_width_screen/2-50), _height_screen/5+230));

    //text_open_gift = new component("20px", "Arial", "black", _width_screen/2-35, _height_screen/5+255, "text");

    //btn_open_gift.push(new component(100, 40, "#FFFFFF", (_width_screen/2-50), _height_screen/5+280));

  }

  myGameArea.getnamefunc(updateGameArea);

  myGameArea.start();

}

function clear_game_area(){

  while (e_game.hasChildNodes()) {  

    e_game.removeChild(e_game.firstChild);

  }

}

function clear_button(){

  while (e_filter.hasChildNodes()) {  

    e_filter.removeChild(e_filter.firstChild);

  }

}

function clear_sound(){

  while (e_audio.hasChildNodes()) {  

    e_audio.removeChild(e_audio.firstChild);

  }

}



function init_sound(){

  var exit_music_background = e_audio.getElementsByClassName("music-background")[0];

  if(!exit_music_background){

    music_background = new sound(e_audio, urlblog + "/game/sound/We_Wish_You_a_Merry_Christmas.mp3","music-background",0.3);

  }

  music_background.play();

  var exit_music_hit = e_audio.getElementsByClassName("music-hit")[0];

  if(!exit_music_hit){

    music_hit = new sound(e_audio, urlblog + "/game/sound/ring1.mp3","music-hit",1);

  }

  var exit_msgameover = e_audio.getElementsByClassName("music-game-over")[0];

   if(!exit_msgameover){

      msgameover = new sound(e_audio, urlblog + "/game/sound/game_over.mp3","music-game-over",1);

   }

   var exit_mswinner = e_audio.getElementsByClassName("music-winner")[0];

   if(!exit_mswinner){

       mswinner = new sound(e_audio, urlblog + "/game/sound/winner.mp3","music-winner",1);

   }

   var exit_music_drop = e_audio.getElementsByClassName("music-drop")[0];

   if(!exit_music_drop){

      music_drop = new sound(e_audio, urlblog + "/game/sound/lost.mp3","music-drop",0.3);

   }

}

function restart() {

    myGameArea.stop();

    myGameArea.clear();

    startGame();

}



//var _src ='game/images/hop-qua.png';

function component(width, height, color, x, y, type, type_speed, row, col) {

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

  this.row = row;

  this.column = col;

  this.break = false;

  this.text = "";

  this.alpha = 1;

  this.gift = 0;

  this.update = function(){

    ctx = myGameArea.context;

    if (this.type == "text") {

      ctx.font = this.width + " " + this.height;

      //ctx.font = this.column;

      ctx.fillStyle = 'rgba(0, 0, 0,'+this.alpha+')';

      //ctx.fillStyle = color;

      ctx.fillText(this.text, this.x, this.y);

    } else if (type == "image"|| type == "background") {

      ctx.globalAlpha = this.alpha;

      ctx.drawImage(this.image,this.x,this.y,this.width, this.height);

      if (type == "background") {

            ctx.drawImage(this.image, this.x + this.width, this.y,this.width, this.height);

        }

    }

    else if (type == "board") {

        ctx.fillStyle = "#FFFFFF";

        ctx.globalAlpha = 0.8;

        //ctx.fillStyle = "rgba(255, 255, 255, 0.5)";

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

      ctx.globalAlpha = 0.7;

      ctx.fillRect(this.x, this.y, this.width, this.height);

      ctx.globalAlpha = 1;

      ctx.strokeStyle = color;

      ctx.strokeRect(this.x, this.y, this.width, this.height);

    }

  }

  this.newPos = function() {  

    if(this.typespeed == "gravity"){ 

      this.gravitySpeed += this.gravity;

      this.x += this.speedX;

      this.y += this.speedY + this.gravitySpeed;

      this.hitBottom();

    } else if(this.type == "background") {

      if (this.x == -(this.width)) {

        this.x = 0;

      }

    } else if(this.typespeed == "gift") {

        this.gravitySpeed += this.gravity;

        this.x += this.speedX;

        this.y += this.speedY;

        //this.y += this.speedY + this.gravitySpeed;

        this.giftbreak();

    } else if(this.typespeed == "resizewidth") {

        this.x += this.speedX;

        this.y += this.speedY;

        this.width += 4;

        this.resizewidth();

    } else{

      this.x += this.speedX;

      this.y += this.speedY;

    }

  }

  this.resizewidth = function(){

   var limit_width = this.row;

    if (this.width > limit_width){

        this.width = limit_width;

    }

  }

  this.giftbreak = function(){

   var limit_top = this.row;

  // console.log(limit_top,this.y,this.row);

    if (this.y < limit_top){

        this.y = limit_top;

        this.break = true;

    }

  }

  this.hitBottom = function() {

    var rockbottom = (myGameArea.canvas.height - this.height);

    if (this.y > rockbottom) {

      this.y = rockbottom;

      this.hitbot = true;

      this.gravitySpeed = -(this.gravitySpeed * this.bounce);

      // if(!this.got){

      //   this.height -= 2;

      //   this.width -= 2;

      //   this.x = this.x + 0.6;

      // } 

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

function sound(appendelement,src,_class,_volume) {

    this.sound = document.createElement("audio");

    this.sound.src = src;

    this.sound.setAttribute("class", _class);

    this.sound.setAttribute("preload", "auto");

    this.sound.setAttribute("controls", "none");

    this.sound.volume = _volume;

    this.sound.style.display = "none";

    appendelement.appendChild(this.sound);

    this.play = function(){

      this.sound.play();

    }

    this.stop = function(){

      this.sound.pause();

    }

}

function createbutton(_appendelement,_class,_text,_function) {

  this.class = _class;

  this.appendelement = _appendelement;

  var exit_button = _appendelement.getElementsByClassName(_class)[0];

  if(!this.exit_button){

    this.btn = document.createElement("button");

    this.btn.setAttribute("class", this.class);

    this.btn.setAttribute("onclick", _function);

    this.btn.innerHTML = _text;

    this.appendelement.appendChild(this.btn);

    this.removebutton = function(){

      var exit_button = this.appendelement.getElementsByClassName(this.class)[0];

        if(exit_button){

          exit_button.remove();

        }

    }

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

               music_hit.play();

          }

      }

      if(myObstacles[i].hitbot&&!myObstacles[i].got){

         if(!exitpushed(i)){

            myGameArea.failed += 1;

            pushed.push(i);

            music_drop.play();

         }     

    }

  }



    myGameArea.clear();

    //myBackground.speedX = -1;

    myBackground.newPos();    

    myBackground.update();

    myGameArea.frameNo += 1;

    myGameArea.gravitySpeed = 0.01;

    myGameArea.timeinterval = 50;

    if (myGameArea.frameNo == 1 || everyinterval(myGameArea.timeinterval)) {

        w = myGameArea.canvas.width-100;

        min_w = 30;

        max_w = w;

        x = Math.floor(Math.random()*(max_w-min_w+1)+min_w); 

        minGap = 50;

        maxGap = 100;

        gap = Math.floor(Math.random()*(maxGap-minGap+1)+minGap);

        myObstacles.push(new component(gap, gap,  urlblog + "/game/images/gift_box1.png", x, 0, "image","gravity"));

    }

    if(myGameArea.frameNo > 500){

        myGameArea.timeinterval = 40;

        myGameArea.gravitySpeed = 0.05;

    }else if(myGameArea.frameNo > 1000){

      myGameArea.timeinterval = 30;

      myGameArea.gravitySpeed = 0.005;

    }else {

      myGameArea.timeinterval = 20;

      myGameArea.gravitySpeed = 0.0005;

    }

    for (i = 0; i < myObstacles.length; i += 1) {

      myObstacles[i].y += 1;

      //myObstacles[i].gravitySpeed += 0.01;

      if(myObstacles[i].got){

        myObstacles[i].alpha -=0.1;

        if(myObstacles[i].alpha < 0){

            myObstacles[i].alpha = 0;

        }      

      }

      myObstacles[i].gravitySpeed += myGameArea.gravitySpeed;

      myObstacles[i].newPos();

      myObstacles[i].update();

    }

    if(myGameArea.frameNo > 1500){

          if(myGameArea.score > myGameArea.failed){

              mswinner.play();

              music_background.stop();

              txt_brdscore.text = "Xin chúc mừng!";

              boardscore.update();

              txt_brdscore.update();

              obj_btn_open_gift = new createbutton(e_filter,"btn-open-gift","Mở quà",'opengift()');

              count = myGameArea.score - myGameArea.failed;

              if(count > 8){

                  count = 9;

              }

              myGameArea.count = count;   

              txt_brdscore_get.text = "Nhận: "+ myGameArea.score + " quà";

              txt_brdscore_lost.text = "Mất: "+ myGameArea.failed + " quà";

              txt_brdscore_count.text = "Bạn có: "+ count + " lần";

              txt_brdscore_get.update();

              txt_brdscore_lost.update();

              txt_brdscore_count.update();

              myGameArea.stop();

              return;

            }else {      

              msgameover.play();

              music_background.stop();

              txt_brdscore.text = "Hừm, tiếc quá!";

              boardscore.update();

              txt_brdscore.update();

              obj_btn_restart = new createbutton(e_filter,"btn-restart","Chơi lại",'restart()');

              count = 0;

              myGameArea.count = count;

              txt_brdscore_get.text = "Nhận: "+ myGameArea.score + " quà";

              txt_brdscore_lost.text = "Mất: "+ myGameArea.failed + " quà";

              txt_brdscore_count.text = "Bạn có: "+ count + " lần";

              txt_brdscore_get.update();

              txt_brdscore_lost.update();

              txt_brdscore_count.update();

              myGameArea.stop();

              return;

            }

    }
    noel_ride.update();
    myScore.text = "SCORE: " + myGameArea.score+ " failed: "+ myGameArea.failed+" frameNo: "+myGameArea.frameNo;
    myScore.update();
}



