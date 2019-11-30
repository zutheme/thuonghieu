<section class="newsHomeWrap">
    <div section=".newsHomeWrap" data="200" class="container paralax">
        <a href="tin-tuc-su-kien.htm">
            <h2 class="title">Tin tức và sự kiện</h2>
        </a>
        <ul class="newsHomeList">
    <?php $team_query = new WP_Query( array(
                'post_type' => 'post',
                'posts_per_page' => 3,
                'tax_query' => array(
                    array (
                        'taxonomy' => 'category',
                        'field' => 'slug',
                        'terms' => 'tin-tuc',
                    )
                ),
            )); 
        if ($team_query->have_posts()) {
          while ($team_query->have_posts()) {
            $team_query->the_post();  
            $id = get_the_ID();
            //$idyoutube = get_post_meta( $id, 'id-youtube', true );
            $thumbnail = wp_get_attachment_image_src( get_post_thumbnail_id($id), 'full', false );
             ?>        
                <li>
                    <div class="itemNews">
                        <div class="img">
                            <div style="background: url('<?php echo $thumbnail[0]; ?>') center"></div>
                            <img src="<?php echo $thumbnail[0]; ?>">
                        </div>
                        <div class="copy">
                            <h4></h4>
                            <h3><?php the_title(); ?></h3>
                                <!-- <p></p> -->
                        </div>
                        <a class="link" href="<?php the_permalink(); ?>"><?php //the_title(); ?></a>
                    </div>
                </li>

        <?php } 
        } ?>
    
        </ul>
        <div class="btn-wrap">
            <a class="btn-2" href="tin-tuc-su-kien.htm">Xem t&#7845;t c&#7843;</a>
        </div>
    </div>
</section>