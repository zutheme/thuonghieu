<?php
/**
 *  Template Name: Game Dung de qua roi
 *
 * This is the template that displays all pages by default.
 * Please note that this is the WordPress construct of pages
 * and that other 'pages' on your WordPress site may use a
 * different template.
 *
 * @link https://developer.wordpress.org/themes/basics/template-hierarchy/
 *
 * @package eleaning
 */
?>
<!DOCTYPE html>
<html>
<head>

  <meta charset="<?php bloginfo( 'charset' ); ?>">

  <meta name="viewport" content="width=device-width, initial-scale=1">

  <meta property="og:url"                content="http://thammyvienthienkhue.vn/dung-de-qua-roi/" />

  <meta property="og:title"              content="Đừng để quà rơi" />

  <meta property="og:image"              content="<?php bloginfo('template_directory');?>/game/images/dung-de-qua-roi.jpg" />

  <meta property="og:type"               content="article" />

  <meta property="og:description"        content="Noel tràn ngập quà, tràn ngập niềm vui, hãy hòa cùng không khí đón noel tham my vien thien khue để chơi vui trúng lớn với giải thưởng hấp dận giá trị" />

  <meta property="fb:app_id" content="168231173842748" />

 <link rel="stylesheet" href="<?php bloginfo('template_directory');?>/game/css/hatazu_game.css?v=1.8.2">
 <!-- Google Tag Manager -->
  <script>(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
  new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
  j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
  'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
  })(window,document,'script','dataLayer','GTM-PBKL22K');</script>
  <!-- End Google Tag Manager -->
</head>
<body>
  <!-- Google Tag Manager (noscript) -->
<noscript><iframe src="https://www.googletagmanager.com/ns.html?id=GTM-PBKL22K"
height="0" width="0" style="display:none;visibility:hidden"></iframe></noscript>
<!-- End Google Tag Manager (noscript) -->
<div class="mdgame">
  <div class="init-game">
    <div class="audio"></div> 
     <div class="game"></div>
    <div class="filter">
    	<div class="last-screen">
    		<h3>Chào mừng bạn tham gia trò chơi</h3>
    		<p class="titlegame">"Nắm bắt vận may- Nhận quà đầy tay!"</p>
    		<p>Giáng sinh này, ông già Noel sẽ mang những hộp quà xinh xắn của Thiên Khuê ban phát khắp nhân gian. Đừng bỏ lỡ cơ hội bắt lấy quà rơi, vì biết đâu, bạn có thể sẽ trở thành chủ nhân của chiếc <span class="titlegame">iphone</span> hay sở hữu chiếc <span class="titlegame">Ipad</span>.</p><p>* Lưu ý: Phải Nhanh tay- Lẹ mắt! Đừng để số quà rơi nhiều hơn số quà bạn lấy được nhé! Cứ 10 điểm bạn sẽ được 1 lượt mở quà!</p>
    		<p class="continue" style="display: none;"></p>
    		<p><a class="btn bnt-share" style="position:relative;display: none;width: 100px;margin-right: auto;margin-left: auto;" href="javascript:void(0)">Chia sẻ</a><p class="over">Hãy nhấn vào nút <span class="begin">"bắt đầu"</span> để cùng hòa vào không khí noel tràn ngập quà tặng</p> 	
    	</div>    	
    </div>
  </div>
</div>

<script>var urlblog = '<?php bloginfo('template_directory'); ?>';
var urlhome ='<?php echo get_home_url(); ?>';</script>
<script src="<?php bloginfo('template_directory');?>/game/js/cookie.js?v=0.0.9"></script>
<script src="<?php bloginfo('template_directory');?>/game/js/falling.js?v=3.5.3"></script>
<script src="<?php bloginfo('template_directory');?>/game/js/opengift.js?v=1.4.3"></script>
<script src="<?php bloginfo('template_directory');?>/game/js/register.js?v=0.0.5.0"></script>
<script>

  var button;

  var userInfo;

  window.fbAsyncInit = function() {

    FB.init({

      appId      : '168231173842748',

      xfbml      : true,

      version    : 'v3.0'

    });

    FB.AppEvents.logPageView();
  };



  (function(d, s, id){

     var js, fjs = d.getElementsByTagName(s)[0];

     if (d.getElementById(id)) {return;}

     js = d.createElement(s); js.id = id;

     js.src = "https://connect.facebook.net/en_US/sdk.js";

     fjs.parentNode.insertBefore(js, fjs);

   }(document, 'script', 'facebook-jssdk'));

  //document.getElementById('shareBtn').onclick = function() {
  document.getElementsByClassName("bnt-share")[0].onclick = function() {
    FB.ui({

      method: 'share',

      display: 'popup',

      href: 'https://thammyvienthienkhue.vn/dung-de-qua-roi',

    }, function(response){
      if (response && !response.error_message) {
          console.log('Posting completed.');
          setCookie("over",'1',3);
          init_variable();
        } else {
          console.log('Error while posting.');
        }
    });
}

</script>
 <script async src="https://www.googletagmanager.com/gtag/js?id=UA-139180193-1"></script>
      <script>
        window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments);}
        gtag('js', new Date());

        gtag('config', 'UA-139180193-1');
      </script>
</body>
</html>