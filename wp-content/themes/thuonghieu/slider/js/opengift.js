var strhtmlform = '<form class="frm-register">'

        +'<h3>Đăng ký nhận quà tặng</h3>'

        +'<input type="text" name="fullname" class="control fullname" value="" placeholder="Họ tên">'

        +'<input type="number" name="phone" class="control phone" value="" placeholder="Điện thoại">'

        +'<div class="sel">'

        +'<select class="control local-service" name="sellocal">'

        +'<option value="0">Chọn khu vực</option>'

        +'<option value="1">TP.Hồ Chí Minh</option>'

        +'<option value="2">Bình Dương</option>'

        +'<option value="3">Đồng Nai</option>'

        +'</select>'

        +'</div>'

        +'<div class="btn-area">'

        +  '<a class="btn btn-reg-gift" href="javascript:void(0);" onclick="reg_register()">Xác nhận</a>'

        + '<img class="loading" style="display: none;margin-left: auto;margin-right: auto; width: 40px;height: auto;margin-top: 15px;" src="' + urlblog + '/game/images/loading.gif">'

        +'<p class="note-result"></p>'

        +'</div>'

+'</form>';

//console.log(urlblog);

function init_sound_open_gift(){

  var exit_music_bgopengift = e_audio.getElementsByClassName("music-bgopengift")[0];

  if(!exit_music_bgopengift){

    music_background = new sound(e_audio, urlblog + "/game/sound/HappyChristmas.mp3","music-bgopengift",0.3);

  }

  music_background.play();

  var exit_music_correct = e_audio.getElementsByClassName("music-correct")[0];

  if(!exit_music_correct){

    music_correct = new sound(e_audio, urlblog + "/game/sound/correct.mp3","music-correct",1);

  }

  var exit_music_incorrect = e_audio.getElementsByClassName("music-incorrect")[0];

   if(!exit_music_incorrect){

      music_incorrect = new sound(e_audio, urlblog + "/game/sound/incorrect.mp3","music-incorrect",1);

   }

   var exit_music_click = e_audio.getElementsByClassName("music-click")[0];

   if(!exit_music_click){

       music_click = new sound(e_audio, urlblog + "/game/sound/click.mp3","music-click",1);

   }

   var exit_music_unlucky = e_audio.getElementsByClassName("music-unlucky")[0];

   if(!exit_music_unlucky){

      music_unlucky = new sound(e_audio, urlblog + "/game/sound/unlucky.mp3","music-unlucky",0.3);

   }

}

function opengift(){

    myGameArea.stop();

    myGameArea.clear();

    startOpenGift();

}

function reopengift() {

    myGameArea.stop();

    myGameArea.clear();

    startOpenGift();

}

/*resize width, height*/

var _width_box_gift, _height_box_gift;

var _width_cover_box, _height_cover_box;
var _rsheight_boardgift,_font_noteScore,_rs_height;
if(_width_screen < 768){
    _width = (_width_screen/3.3);
   _width_box_gift = _width;
   _height_box_gift =_width;
   _width_cover_box = _width;
   _height_cover_box = _width;
   _rsheight_boardgift = _height_screen/6;
   _font_noteScore = '18px';
   _font_open_gift = 'bold 18px';
}else{
    _width = (_width_screen/10);
   _width_box_gift = _width;
   _height_box_gift =_width;
   _width_cover_box = _width;
   _height_cover_box = _width;
   _rsheight_boardgift = _height_screen/3;
   _font_noteScore = '30px';
   _font_open_gift = 'bold 18px';
}

/*end resize width*/

var btn_restart,btn_open_gift;

var myGiftBoxs = [],myGiftCovers = [];

var pushed = [];

var noteScore;

var myScores = [];



var x1 = (_width_screen/2) - ((_width/2)+_width);

var y1 = (_height_screen/2) - ((_width/2)+_width);

var xi = 0;

var yi = 0;

var distant = 0,rsboardgift,w_rsbgift=300,w_rsbgift=300;

var myBackgroundGift,music_hit,music_background;

var result_open_gift,voucher;

var toplimitgift = 0;

var count_open = 0,txt_yourtopwin,lstframegift = 0;
var voucher_winner,last_voucher;
function startOpenGift() {

  clear_button();

  clear_sound();

  clear_game_area();

  init_sound_open_gift();

  init_board();

  myGiftBoxs = [];

  myGiftCovers = [];

  pushed = [];

  myScores = [];
 
  for (var i = 0; i < 3; i++) {

    for (var j = 0; j < 3; j++) {

       xi = x1+(j*(_width+distant));

       yi = y1+(i*(_width+distant));

       myGiftBoxs.push(new component(_width_box_gift, _height_box_gift,  urlblog + "/game/images/hop-qua.png", xi , yi , "image","gift", yi-85 , j ));

       myGiftCovers.push(new component(_width_cover_box, _height_cover_box,  urlblog + "/game/images/nap-qua.png", xi , yi-40, "image","gift", yi-85 ,j));

    }

  }



  myGameArea.getnamefunc(updateGiftArea);

  count_open = myGameArea.count;

  myGameArea.start();
  console.log(myGameArea.endGame);
  myGameArea.endGame = false;
  myGameArea.count = count_open;

}

function init_board(){

  myBackgroundGift = new component(_width_screen, _height_screen,  urlblog + "/game/images/background-snow.jpg", 0, 0, "background");

  noteScore = new component(_font_noteScore, "Consolas", "black", 10, 25, "text");

  result_open_gift = new component("bold 18px", "Arial", "black",((_width_screen/2+distant)-110), _rsheight_boardgift+50, "text");

  rsboardgift = new component(w_rsbgift, w_rsbgift, "white", ((_width_screen/2+distant)-150), _rsheight_boardgift,'',"resizewidth",w_rsbgift);

  countremain = new component("18px", "Consolas", "black",((_width_screen/2+distant)-100), _rsheight_boardgift+90, "text");

  voucher = new component("18px", "Consolas", "black",((_width_screen/2+distant)-100),_rsheight_boardgift+130, "text");

  txt_yourtopwin = new component("18px", "Consolas", "black",((_width_screen/2+distant)-100), _rsheight_boardgift+90, "text");

}

function updateGiftArea() {  

  var x, y,w;

  /*begin for*/

  for (i = 0; i < myGiftBoxs.length; i += 1) {

      if (myGameArea.x && myGameArea.y) {

          if(myGiftBoxs[i].hover()){

              myGameArea.canvas.style.cursor = "pointer";

            }else{

              myGameArea.canvas.style.cursor = "crosshair";

            }

        }

      if (myGameArea.x && myGameArea.y) {

          if(myGiftBoxs[i].clicked()&&!myGiftBoxs[i].got){

              if(0 < myGameArea.count){

                  myGameArea.score+=1;

                  myGameArea.count -= 1;

                  myGiftCovers[i].speedY = -5;

                  myGiftCovers[i].gravitySpeed = 0; 

                  myGiftBoxs[i].got = true;

                  music_click.play();

                  countremain.text = "Bạn còn "+myGameArea.count + " lượt mở quà";

                  countremain.alpha = 0;

              }else{
                   result_open_gift.text = "Hết lượt rồi nhé!";
                   result_open_gift.width = "bold 20px";
                   result_open_gift.alpha = 1;              
                   music_incorrect.play();
              }

            }

        }

        if(myGiftCovers[i].break){
           if(!exitpushed(i)){
              pushed.push(i);
              var max = 9000;
              var min = 800;
              var vl_voucher = (Math.floor(Math.random()*(max-min+1)+min));
              if(vl_voucher < 1000){
              	  vl_voucher = 500;
              }else if(vl_voucher < 1500){
              	  vl_voucher = 1000;
              }else if(vl_voucher < 2000){
              	 vl_voucher = 3000;
              }else if(vl_voucher < 2500){
              	 vl_voucher = 4000;
              }
              
              myGameArea.limitDialog = myGameArea.frameNo+100;
              if(vl_voucher == 500 || vl_voucher == 1000 || vl_voucher == 3000 || vl_voucher == 4000 ){	
                 result_open_gift.text = "Wow, chúc mừng bạn!";
                 if(vl_voucher == 500){
                 	voucher.text = vl_voucher+".000 đồng";
                 }else{
                 	voucher.text = (vl_voucher/1000)+".000.000 đồng";
                 }
                 myScores.push(vl_voucher);
                 rsboardgift.width = 0;
                 //rsboardgift.height = _rsheight_boardgift/2;
                 result_open_gift.alpha = 0;
                 music_correct.play();
                 voucher.alpha = 0;
                 voucher_winner = new component(250, 187.5,  urlblog + '/game/images/gift/gift-'+vl_voucher+'.jpg', ((_width_screen/2)-125),_rsheight_boardgift+100, "image");
                 //ctx.fillStyle = "rgba(255, 255, 255, 0.5)";
              }else{
                //myGameArea.limitDialog = myGameArea.frameNo+300;
                 result_open_gift.text = "Tiếc quá!";               
                 voucher.text = "";
                 rsboardgift.width = 0;
                 //rsboardgift.height = _rsheight_boardgift;
                 voucher_winner = new component(250, 187.5,  urlblog + '/game/images/gift/gift-0.jpg', ((_width_screen/2)-125),_rsheight_boardgift+100, "image");
                 result_open_gift.alpha = 0;
                 myGameArea.failed += 1;
                 music_unlucky.play();
              }
           }
       }

    }

    /*end begin loop*/

    myGameArea.clear();

    myBackgroundGift.newPos();    

    myBackgroundGift.update();

    for (i = 0; i < myGiftBoxs.length; i += 1) {

      myGiftBoxs[i].update();

      myGiftCovers[i].newPos();

      myGiftCovers[i].update();

    }

    myGameArea.frameNo += 1;

    noteScore.text = "lượt:" + myGameArea.count+ " failed: "+ myGameArea.failed+" frameNo:"+myGameArea.frameNo;

    noteScore.update();

    if(myGameArea.count == 0){

      lstframegift = 0;

    }

    if(myGameArea.limitDialog > 0 && myGameArea.frameNo < (myGameArea.limitDialog - lstframegift)){
        rsboardgift.width += 1;
        rsboardgift.newPos();
        rsboardgift.update();
        //if(myGameArea.frameNo > myGameArea.limitDialog-10){
          if(result_open_gift.alpha < 1){
            result_open_gift.alpha += 0.1;
            countremain.alpha += 0.1;
            voucher.alpha += 0.1;
            voucher_winner.alpha +=0.1;
          }
        //}
        result_open_gift.newPos();
        result_open_gift.update();
        countremain.newPos();
        countremain.update();
        voucher.newPos();
        voucher.update();
        voucher_winner.newPos();
        voucher_winner.update();
    }
    /*het luot mo*/
    if(myGameArea.count == 0 && myGameArea.frameNo > ((myGameArea.limitDialog - lstframegift))){
      if (typeof myScores !== 'undefined' && myScores.length > 0) {
            myGameArea.topwin = maxarray(myScores);
            //myGameArea.topwin = 0;
       }
       /*end game*/   
          if(myGameArea.topwin > 0){ 
              rsboardgift.width += 1;
              //rsboardgift.height = _rsheight_boardgift;
              result_open_gift.text ="Giải thưởng cao nhất";
              result_open_gift.alpha = 1;
              //voucher.text = myGameArea.topwin+".000 đồng";
               if(myGameArea.topwin == 500){
                 	voucher.text = myGameArea.topwin+".000 đồng";
                 }else{
                 	voucher.text = (myGameArea.topwin/1000)+".000.000 đồng";
                 }
              if( !myGameArea.endGame) {            
                  var inputElement = document.createElement('a');
                    inputElement.setAttribute("href", "javascript:void(0);");
                    inputElement.setAttribute("class", "btn btn-get-gift");
                    inputElement.innerHTML = "Nhận quà";
                    inputElement.addEventListener('click', function(){
                        clear_button();
                        clear_game_area();
                        e_filter.appendChild(createElementFromHTML(strhtmlform));
                    });

                  e_filter.appendChild(inputElement);
                  var inputElement = document.createElement('a');
                  inputElement.setAttribute("href", urlhome + "/dung-de-qua-roi/");
                  inputElement.setAttribute("class", "btn btn-play-again");
                  inputElement.innerHTML = "Chơi lại";
                  e_filter.appendChild(inputElement);
                  myGameArea.endGame = true;
                  //voucher_winner.push(new component(300, 200,  urlblog + '/game/images/gift/qua-'+myGameArea.topwin+'.jpg', ((_width_screen/2)-200),_rsheight_boardgift+170, "image","resizewidth"));
                  last_voucher = new component(250, 187.5,  urlblog + '/game/images/gift/gift-'+myGameArea.topwin+'.jpg', ((_width_screen/2)-125),_rsheight_boardgift+100, "image");
                }        
                
            }else{
              result_open_gift.text ="";
              voucher.text = "Chúc bạn may mắn";
              if( !myGameArea.endGame) { 
                  e_filter.appendChild(createElementFromHTML(note_playgain));
                  myGameArea.endGame = true;  
                  voucher_winner = new component(250, 187.5,  urlblog + '/game/images/gift/gift-0.jpg', ((_width_screen/2)-125),_rsheight_boardgift+100,"image");
                  
                }   
              }
            //if(myGameArea.frameNo > ((myGameArea.limitDialog - lstframegift))){
              if(result_open_gift.alpha < 1){
                result_open_gift.alpha += 0.1;
                voucher.alpha += 0.1;
                last_voucher.alpha += 0.1;
              }
            //}      
            //txt_yourtopwin = new component("18px", "Consolas", "black",((_width_screen/2+distant)-100), _rsheight_boardgift+90, "text");
            result_open_gift.width = "18px";
            voucher.width = "bold 22px";
            voucher.y = _rsheight_boardgift+80;
            rsboardgift.newPos();
            rsboardgift.update();
            last_voucher.newPos();
	          last_voucher.update();
            voucher.newPos();
            voucher.update();
            result_open_gift.newPos();
            result_open_gift.update();
            

    }
    if(myGameArea.frameNo > 2100){
        myGameArea.stop();
        return; 
    }
    /*end het luot mo*/

}

/*end update open gift*/

function maxarray(array){

  if (typeof array !== 'undefined' && array.length > 0) {

    var max = 0;

    for (var i = 0; i < array.length; i++) {

      if(array[i] > max){

        max = array[i];

      }

    }

    return max;

  }

  return 0;

}



function createElementFromHTML(htmlString) {

  var div = document.createElement('div');

  div.innerHTML = htmlString.trim();

  // Change this to div.childNodes to support multiple top-level nodes

  return div.firstChild; 

}