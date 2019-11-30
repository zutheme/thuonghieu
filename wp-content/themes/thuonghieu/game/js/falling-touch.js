var e_initgame = document.getElementsByClassName('init-game')[0];

var e_filter = e_initgame.getElementsByClassName('filter')[0];

var e_audio = e_initgame.getElementsByClassName('audio')[0];

var e_game = e_initgame.getElementsByClassName('game')[0];

e_initgame.style.height = _height_screen+"px";

e_initgame.getElementsByClassName('filter')[0].style.height = _height_screen+"px";
var count = 0;
window.onload = init_variable;
var obj_btn_start, count_play = 0;
function init_variable(){
  var _over = getCookie("over");
  if(!isRealValues(_over)){
    setCookie("over",'1',3);
  }
  setCookie("over",'1',3);
  _over = getCookie("over");
  count_play = parseInt(count_play);
  if(_over === '1' && count_play == 0){
      //count_play++;    
      obj_btn_start = new createbutton(e_filter,"btn-start","Bắt đầu",'startGame()');
  }else if(_over === '1' && count_play > 0 ){ 
      obj_btn_start = new createbutton(e_filter,"btn-restart","Chơi lại",'restart()');
  }
  else{
    e_filter.getElementsByClassName('bnt-share')[0].style.display = "block";
    e_filter.getElementsByClassName('continue')[0].style.display = "block";
    e_filter.getElementsByClassName('continue')[0].innerHTML = '<span class="like">Like,share</span> để có lượt chơi mới';
    e_filter.getElementsByClassName('over')[0].innerHTML ='<span class="no-more">Quý khách đã hết lượt chơi!</span>';
  }
  return;
}

var _width_screen = document.documentElement.clientWidth;

var _height_screen = document.documentElement.clientHeight;

var onresize = function() {
   _width_screen = document.body.clientWidth;
   _height_screen = document.body.clientHeight;
}

window.addEventListener("resize", onresize);
/*include global variable*/
var btn_restart,btn_open_gift;

var myObstacles = [];

var pushed = [];
var snowflake = [];
var myScore;

var myBackground,music_hit,music_background;

var resultboard,boardscore,txt_brdscore,txt_brdscore_get,txt_brdscore_lost,txt_brdscore_count,txt_score_change;
var noel_ride, board_noel_ride, txt_noel_ride1, txt_noel_ride2; 
var w_board_noel_ride, h_board_noel_ride;
/*end include variable*/
/*resize width, height*/
var _width_resize = 0, _height_resize = 0, _width_noel_ride = 0, _height_noel_ride = 0,_rsheight_boardscore = 0;
var background_resize;
if(_width_screen < 768){
    _height_resize = _height_screen/2;
    _width_screen = _width_screen;
    _height_screen = _height_screen*0.95;
    e_initgame.style.height = (_height_screen)+"px";
    _width_noel_ride = 200, _height_noel_ride = 200;
    _background_resize = urlblog + "/game/images/background-noel-mobile.jpg";
    _rsheight_boardscore = _height_screen/8;
    _font_myScore = '18px';
    _font_txt_brdscore = 'bold 18px';
    w_boardscore = 300, h_boardscore = 400;
    w_board_noel_ride = 300, h_board_noel_ride = 120;
}else{
    _width_noel_ride = 500, _height_noel_ride = 500;
    _height_resize = _height_screen/4;
    _width_screen = _width_screen*0.983;
    _height_screen = _height_screen*0.995;
    e_initgame.style.height = (_height_screen)+"px";
    _background_resize = urlblog + "/game/images/background-noel1.jpg";
    _rsheight_boardscore = _height_screen/3;
    _font_myScore = '30px';
    _font_txt_brdscore = 'bold 18px';
    w_boardscore = 300, h_boardscore = 400;
    w_board_noel_ride = 300, h_board_noel_ride = 120;
}
/*end resize width*/
/*resize layout*/

/*end resize layou*/
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
    this.speedY = 0;
    this.gravitySpeed = 0;

    this.limitDialog = 0;

    this.count = 0;

    this.topwin = 0;

    this.timeinterval = 0;

    e_game.appendChild(this.canvas);

    this.interval = setInterval(this.namefunc, 20);

    this.canvas.addEventListener('mousemove', function (e) {

      myGameArea.mouse_move = true;

      myGameArea.x = e.pageX;

      myGameArea.y = e.pageY;

    }, false);

    // this.canvas.addEventListener('touchmove', function (e) {

    //   myGameArea.mouse_move = true;

    //   myGameArea.x = e.touches[0].screenX;

    //   myGameArea.y = e.touches[0].screenY;

    // }, false);

    this.canvas.addEventListener('mousedown', function (e) {

      myGameArea.mouse_clicked = true;

      myGameArea.x = e.pageX;

      myGameArea.y = e.pageY;

    },false);

    this.canvas.addEventListener('mouseup', function (e) {

      myGameArea.mouse_clicked = false;

      myGameArea.x = false;

      myGameArea.y = false;

    }, false);

    // this.canvas.addEventListener('touchstart', function (e) {

    //   myGameArea.mouse_clicked = true;
    //   myGameArea.x = e.pageX;

    //   myGameArea.y = e.pageY;

    // },false);handleStart
    
    this.canvas.addEventListener("touchstart", handleStart, false);
    this.canvas.addEventListener("touchend", handleEnd, false);
   // this.canvas.addEventListener('touchend', function (e) {

   //    myGameArea.mouse_clicked = false;

   //    myGameArea.x = false;

   //    myGameArea.y = false;

   //  },false);

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
function handleEnd(evt){
   evt.preventDefault();
      myGameArea.mouse_clicked = false;
      myGameArea.x = false;
      myGameArea.y = false;
}
function handleStart(evt) {
  evt.preventDefault();
    myGameArea.mouse_clicked = true;
    myGameArea.x = e.pageX;
    myGameArea.y = e.pageY;
}

function everyinterval(n) {
  if ((myGameArea.frameNo / n) % 1 == 0) {return true;}
  return false;
}

function startGame() {
  clear_button();
  init_sound();
  //e_filter
 //element.parentNode.removeChild(element);
  count_play++;
  myBackground = new component(_width_screen, _height_screen,  _background_resize , 0, 0, "background");
  myScore = new component(_font_myScore, "Consolas", "black", 40, 40, "text");
  boardscore = new component(w_boardscore, h_boardscore , "white", ((_width_screen/2)-150), _rsheight_boardscore,'',"resizewidth",300);
  txt_brdscore = new component("bold 30px", "Arial", "black",((_width_screen/2)-100), _rsheight_boardscore+50, "text","resizewidth",300);
  txt_brdscore_get = new component("28px", "Consolas", "black", ((_width_screen/2)-100), _rsheight_boardscore+100, "text");
  txt_brdscore_lost = new component("28px", "Consolas", "black", ((_width_screen/2)-100), _rsheight_boardscore+150, "text");
  txt_score_change = new component("28px", "Consolas", "black", ((_width_screen/2)-100), _rsheight_boardscore+200, "text");
  txt_brdscore_head = new component("18px", "Consolas", "black", ((_width_screen/2)-100-30), _rsheight_boardscore+250, "text");
  txt_brdscore_count = new component("28px", "Consolas", "black", ((_width_screen/2)-100), _rsheight_boardscore+300, "text");
  noel_ride = new component( _width_noel_ride, _height_noel_ride , urlblog + "/game/images/noel_ride2.png", 0, _height_screen-_height_resize, "image");
  board_noel_ride = new component( w_board_noel_ride, h_board_noel_ride , "white", ((_width_screen/2)-150), _rsheight_boardscore,'',"resizewidth",300);
  txt_noel_ride1 = new component("18px", "Consolas", "black", ((_width_screen/2)-100-30), _rsheight_boardscore+40, "text");
  txt_noel_ride2 = new component("18px", "Consolas", "black", ((_width_screen/2)-100-30), _rsheight_boardscore+80, "text");
  myObstacles = []; 
  snowflake = [];
  pushed = [];
  myGameArea.getnamefunc(updateGameArea);
  myGameArea.start();
  myGameArea.timeinterval = 40;
  myGameArea.speedY = 0.2;
  myGameArea.gravitySpeed = 0.01;
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
      if(noel_ride.x < _width_screen){
         noel_ride.x += 1;
         noel_ride.y -= 1;
         noel_ride.speedY -= 0.002;
         noel_ride.speedX += 0.002;
         noel_ride.newPos();
         noel_ride.update();
         
         if(noel_ride.y < (_height_screen/2) && noel_ride.y < (_height_screen/2)-30){
            txt_noel_ride1.text = "Kích thật nhiều vào hộp quà ";
            txt_noel_ride2.text = "để nhận thật nhiều điểm nhé!";
            //board_noel_ride.width += 1;
            board_noel_ride.newPos();
            board_noel_ride.update();
            if(noel_ride.y < (_height_screen/2)-10){
              if(txt_noel_ride1.alpha == 1){
                txt_noel_ride1.alpha = 0;
                txt_noel_ride2.alpha = 0;
              }else if(txt_noel_ride1.alpha > 1){
                txt_noel_ride1.alpha = 1;
                txt_noel_ride2.alpha = 1;
              }else{
                txt_noel_ride1.alpha += 0.1;
                txt_noel_ride2.alpha += 0.1;
              }
            }
            board_noel_ride.update();
            txt_noel_ride1.update();
            txt_noel_ride2.update();
         }
      }

    if(myGameArea.frameNo > 500) {
      if(myGameArea.frameNo % 50 == 0){
        if(myGameArea.timeinterval > 0){
            myGameArea.timeinterval -=1;
            myGameArea.speedY += 0.09;
            //myGameArea.gravitySpeed += 0.01;
        }else{
          myGameArea.timeinterval = 10;
        }
      }
    }
    //console.log(myGameArea.timeinterval);
    //snowflake
    if (myGameArea.frameNo == 1 || everyinterval(5)){      
        w = myGameArea.canvas.width-100;
        min_w = 30;
        max_w = w;

        x = Math.floor(Math.random()*(max_w-min_w+1)+min_w); 

        minGap = 5;

        maxGap = 10;

        gap = Math.floor(Math.random()*(maxGap-minGap+1)+minGap);

        snowflake.push(new component(gap, gap,  urlblog + "/game/images/snowflake.png", x, 0, "image","gravity"));
    }
     for (i = 0; i < snowflake.length; i += 1) {
      snowflake[i].y += 1;
      //snowflake[i].gravitySpeed = myGameArea.gravitySpeed;
      snowflake[i].speedY = myGameArea.speedY;
      snowflake[i].newPos();
      snowflake[i].update();
    } 
    //end snowflake
    if(myGameArea.frameNo > 500) {
      if(everyinterval(myGameArea.timeinterval)){
        w = myGameArea.canvas.width-100;
        min_w = 30;
        max_w = w;
        x = Math.floor(Math.random()*(max_w-min_w+1)+min_w); 
        minGap = 50;
        maxGap = 100;
        gap = Math.floor(Math.random()*(maxGap-minGap+1)+minGap);
        myObstacles.push(new component(gap, gap,  urlblog + "/game/images/gift_box1.png", x, 0, "image","gravity"));
      }
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
      myObstacles[i].gravitySpeed = myGameArea.gravitySpeed;
      myObstacles[i].speedY = myGameArea.speedY;
      myObstacles[i].newPos();
      myObstacles[i].update();

    }
      count = myGameArea.score - myGameArea.failed;
      count = Math.floor(count/10);    
    if(myGameArea.frameNo > 2000){
        if(count > 0){
              mswinner.play();
              music_background.stop();
              txt_brdscore.text = "Xin chúc mừng!";
              boardscore.update();
              txt_brdscore.update();
              obj_btn_open_gift = new createbutton(e_filter,"btn-open-gift","Mở quà",'opengift()');
              myGameArea.count = count;
              txt_brdscore_get.text = "Nhận: "+ myGameArea.score + " quà";
              txt_brdscore_lost.text = "Mất: "+ myGameArea.failed + " quà";
              txt_score_change.text ="Điểm: "+ (myGameArea.score - myGameArea.failed);
              txt_brdscore_head.text = "Mỗi 10 điểm đổi 1 lần mở";
              txt_brdscore_count.text = "Bạn có: "+ count + " lần";
              txt_brdscore_get.update();
              txt_brdscore_lost.update();
              txt_score_change.update();
              txt_brdscore_count.update();
              txt_brdscore_head.update();
              myGameArea.stop();
              return;
            }else {
              setCookie("over",'0',3);      
              msgameover.play();
              music_background.stop();
              txt_brdscore.text = "Tiếc quá!";
              boardscore.update();
              txt_brdscore.update();
              var inputElement = document.createElement('a');
                 inputElement.setAttribute("href", urlhome + "/dung-de-qua-roi/");
                inputElement.setAttribute("class", "btn btn-play-again");
                inputElement.innerHTML = "Chơi lại";
              e_filter.appendChild(inputElement);

              count = 0;

              myGameArea.count = count;

              txt_brdscore_get.text = "Nhận: "+ myGameArea.score + " quà";

              txt_brdscore_lost.text = "Mất: "+ myGameArea.failed + " quà";

              txt_score_change.text ="Điểm: "+ (myGameArea.score - myGameArea.failed);
              txt_brdscore_head.text = "Mỗi 10 điểm đổi 1 lần mở quà";
              txt_brdscore_count.text = "Bạn có: "+ count + " lần";

              txt_brdscore_get.update();

              txt_brdscore_lost.update();
              txt_score_change.update();
              txt_brdscore_count.update();
              txt_brdscore_head.update();
              myGameArea.stop();

              return;

            }

    }
    myScore.text = "Nhận:" + myGameArea.score+ " Mất:"+ myGameArea.failed+' Lượt:'+ count +" Time:"+Math.floor((myGameArea.frameNo/50))+'s';
    myScore.update();
}

/*
// Set up touch events for mobile, etc
canvas.addEventListener("touchstart", function (e) {
        mousePos = getTouchPos(canvas, e);
  var touch = e.touches[0];
  var mouseEvent = new MouseEvent("mousedown", {
    clientX: touch.clientX,
    clientY: touch.clientY
  });
  canvas.dispatchEvent(mouseEvent);
}, false);
canvas.addEventListener("touchend", function (e) {
  var mouseEvent = new MouseEvent("mouseup", {});
  canvas.dispatchEvent(mouseEvent);
}, false);
canvas.addEventListener("touchmove", function (e) {
  var touch = e.touches[0];
  var mouseEvent = new MouseEvent("mousemove", {
    clientX: touch.clientX,
    clientY: touch.clientY
  });
  canvas.dispatchEvent(mouseEvent);
}, false);
// Prevent scrolling when touching the canvas
document.body.addEventListener("touchstart", function (e) {
  if (e.target == canvas) {
    e.preventDefault();
  }
}, false);
document.body.addEventListener("touchend", function (e) {
  if (e.target == canvas) {
    e.preventDefault();
  }
}, false);
document.body.addEventListener("touchmove", function (e) {
  if (e.target == canvas) {
    e.preventDefault();
  }
}, false);
*/

