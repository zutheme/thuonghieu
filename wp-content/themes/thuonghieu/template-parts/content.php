<?php
/**
 * Template part for displaying posts
 *
 * @link https://developer.wordpress.org/themes/basics/template-hierarchy/
 *
 * @package eleaning
 */
?>
<?php
  // $id_post = get_the_ID();
  // $thumbnail = wp_get_attachment_image_src( get_post_thumbnail_id($id_post), 'medium', false );
  //  if(!$thumbnail){
  //    $rand = rand(0,4);
  //    $_thumbnail = no_thumbnail_url."no-thumbnail".$rand.".jpg";
  // }else{
  //   $_thumbnail = $thumbnail[0];
  // }
if ( is_single() ) :
  wpb_set_post_views($id_post);  
?>
<section class="newsWrap stagger-up">
    <div class="container">
       <?php custom_breadcrumbs();?>
        <!-- <div class="breadcrumb">
            <a href="#"><i class="fas fa-home"></i></a> <i class="fas fa-chevron-right"></i>
            <a href="#">Tin t&#7913;c s&#7921; ki&#7879;n</a> <i class="fas fa-chevron-right"></i>
            <p>Tin Công nghi&#7879;p</p>
        </div> -->
        <div class="infoNews">
            <h2><?php the_title(); ?></h2>
           <!--  <p><i class="far fa-clock"></i>23-11-2019</p> -->
        </div>
        <div class="content">
             <?php the_content(); ?> 
        </div>
        <div class="sharePost">

            <p>Chia s&#7867;:</p>
            <a class="fb" href="#" target="_blank"><i class="fab fa-facebook-f"></i></a>
            <a class="gp" href="#" target="_blank"><i class="fab fa-google-plus-g"></i></a>
            
        </div>
    </div>
</section>

<?php else : ?>
  <div class="col-sm-12 expert">
    <div class="row">
     <div class="col-sm-4 col-xs-4 img-thumb text-left">
        <div class="row"> 
          <a class="thumb" href="<?php the_permalink(); ?>"><img src="<?php echo $_thumbnail; ?>" alt="<?php the_title(); ?>"></a>
        </div>
      </div>
      <div class="col-sm-8 col-xs-8 desc text-left">
        <h3 class="expert-title"><a href="<?php the_permalink(); ?>"><?php the_title(); ?></a></h3>
        <p class="desc-hidden"><?php the_excerpt_max_charlength(400); ?></p>
      </div>
    </div>
  </div>
<?php endif;?>         

