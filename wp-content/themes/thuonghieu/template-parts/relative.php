<section section=".newsHomeWrap" data="200" class="newsHomeWrap paralax">
    <div class="container">
        <h2 class="title">Tin khác</h2>
        <ul class="newsHomeList">
            <?php
          $cat_slug = get_curent_slug();
          $args = array(
          'category_name'  => $cat_slug,
          'post_type' => 'post',
          'posts_per_page' => '3'
          );                                                                           
          $team_query = new WP_Query($args);
         if ($team_query->have_posts()) {
          while ($team_query->have_posts()) {
            $team_query->the_post();  
            $id = get_the_ID();
            $thumbnail = wp_get_attachment_image_src( get_post_thumbnail_id($id), 'full', false );
            //$price = get_post_meta( $id, 'meta-unit-price', true );              
             if(!$thumbnail){
              $_thumbnail = no_thumbnail;
            }else{
              $_thumbnail = $thumbnail[0];
            }
           ?>
           <li>
            <div class="itemNews">
                <div class="img">
                    <div style="background: url('<?php echo $_thumbnail; ?>') center"></div>
                     <img src="<?php echo $_thumbnail; ?>">
                </div>
                <div class="copy">
                    <!-- <h4>Tin Công nghi&#7879;p</h4> -->
                    <h3><?php the_title(); ?></h3>
                        <!-- <p>21-11-2019</p> -->
                </div>
                <a class="link" href="<?php the_permalink(); ?>"></a>
            </div>
        </li>
           
           <?php 
              }
          } else {
              echo "nothing found";
          } ?>
        </ul>
    </div>
</section>