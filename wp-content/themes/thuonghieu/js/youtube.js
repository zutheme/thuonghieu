var initloadyoutube = false;
var index_play = 0;
var _play_ready = false;
var _api_ready = false;
var playlist = ['BzfHFP8OCRM','QB5Ytz9RuvE','J0brmOCD8CM','WHCugZXzGtE','CagYKzAQhQs'];
//var playlist = ['zEpoO4x_LZ8'];
var player;
var _width = (window.innerWidth > 0) ? window.innerWidth : screen.width;
var _height = (window.innerHeight > 0) ? window.innerHeight : screen.height;
var maxHeightvideo = 400;
if(_width > _height ) {
  maxHeightvideo = _height*0.7;
}else{
  maxHeightvideo = _width*0.7;
}
if(_width < 768){
  maxHeightvideo = 360;
}else{
  maxHeightvideo = 400;
}
//2. This code loads the IFrame Player API code asynchronously.
function inityoutube(){
      var tag = document.createElement('script');

      tag.src = "https://www.youtube.com/iframe_api";

      var firstScriptTag = document.getElementsByTagName('script')[0];

      firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

      // 3. This function creates an <iframe> (and YouTube player)

      //    after the API code downloads.   
       //var playlist = ['zEpoO4x_LZ8','QB5Ytz9RuvE','J0brmOCD8CM','WHCugZXzGtE','CagYKzAQhQs'];
       window.onYouTubeIframeAPIReady = function(events) {
        player = new YT.Player('player', {

          height: maxHeightvideo,

          width: '100%',

          //playerVars: { 'autoplay': 1, 'controls': 0 },

          playerVars: {

            autoplay: 1,

            color: 'white', 

            rel: 0,

            controls: 0,
            playsinline: 1,
            playlist: playlist.join(','),

          },

          events: {

            'onReady': onPlayerReady,

            'onStateChange': onPlayerStateChange

          }

        });
       }
      
}
      var previousIndex = 0;

      // function onYouTubeIframeAPIReady() {

      //   player = new YT.Player('player', {

      //     height: maxHeightvideo,

      //     width: '100%',

      //     //playerVars: { 'autoplay': 1, 'controls': 0 },

      //     playerVars: {

      //     	autoplay: 1,

      //       color: 'white', 

      //       rel: 0,

      //       controls:0,

      //       playlist: playlist.join(','),

      //     },

      //     events: {

      //       'onReady': onPlayerReady

      //       //'onStateChange': onPlayerStateChanges

      //     }

      //   });

      // }

      //onYouTubeIframeAPIReady(idv);

      // 4. The API will call this function when the video player is ready.

      function onPlayerReady(event) {

        event.target.playVideo();
        _play_ready = true;
        index_play = 0;

      }

      // 5. The API calls this function when the player's state changes.

      //    The function indicates that when playing a video (state=1),

      //    the player should play for six seconds and then stop.

      var done = false;

      function onPlayerStateChanges(event) {

        if (event.data == YT.PlayerState.PLAYING && !done) {

          //setTimeout(stopVideo, 100);

          //stopVideo();

          done = true;

        }

      }

      function onPlayerStateChange(event) {

        if (event.data == YT.PlayerState.PLAYING && !done) {

          setTimeout(stopVideo, 6000);

          done = true;

        }

        if(event.data == -1 || event.data == 0) {

                    // get current video index

                    var index = player.getPlaylistIndex();

                    var le = player.getPlaylist().length-1;

                    // update when playlists do not match

                    if(player.getPlaylist().length != playlist.length) {

                        // update playlist and start playing at the proper index

                        player.loadPlaylist(playlist, previousIndex+1);

                    }

                    /*

                    keep track of the last index we got

                    if videos are added while the last playlist item is playing,

                    the next index will be zero and skip the new videos

                    to make sure we play the proper video, we use "last index + 1"

                    */

                    //console.log(player.getPlaylist().length+","+playlist.length);

                    previousIndex = index;

                }

    }

    function stopVideo() {

        player.stopVideo();

    }

    function pauseVideo(){

     	player.pauseVideo();

    }

 

    function play_index(index) {

        player.playVideoAt(index);        

    }

 //var _player = document.getElementById("player");
 var element = document.getElementById("video-container");
 var _stateplay = 0;
 var rect,height=0;
 function scrollplay(){
        if(index_play < 0 ){
            return false;
        }    
        rect = element.getBoundingClientRect();
        if(_play_ready){
            _stateplay = player.getPlayerState();
            //console.log(_stateplay);
        }
        height = window.innerHeight+200;
        if(rect.top < 0 || rect.bottom > height && initloadyoutube){
             //e_bgimg.style.display = "none";
              if(_stateplay == 1){
                  pauseVideo();
                  //console.log('pause');
                 }
        }else{
            if(!initloadyoutube){
              inityoutube();
              initloadyoutube = true;
              //onYouTubeIframeAPIReady();
            }else if( _stateplay == 2 || _stateplay == 5 && initloadyoutube ){
                  play_index(index_play);
                  //console.log('play');
            }  
        }
}

window.addEventListener("scroll", scrollplay,false);     

Element.prototype.hasClass = function(className) {

    return this.className && new RegExp("(^|\\s)" + className + "(\\s|$)").test(this.className);

};

//var top = 0;
var inittawk = false;
var Tawk_API=Tawk_API||{}, Tawk_LoadStart=new Date();
function loadtawkto(){
var s1=document.createElement("script"),s0=document.getElementsByTagName("script")[0];
s1.async=true;
s1.src='https://embed.tawk.to/5b31d475d0b5a54796822c62/default';
s1.charset='UTF-8';
s1.setAttribute('crossorigin','*');
s0.parentNode.insertBefore(s1,s0);
}
var rect_window,height_window;
function scrollwindow(){
        rect_top = window.pageYOffset;
        height_window = window.innerHeight/3;
        if(rect_top > height_window){
            if(!inittawk){
              loadtawkto();
              inittawk
            }
        }
}
window.addEventListener("scroll", scrollwindow,false); 

      