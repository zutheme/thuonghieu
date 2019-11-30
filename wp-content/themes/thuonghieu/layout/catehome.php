<section class="cateHomeWrap">
    <div class="container">
        <div class="contentwrap">
            <div class="infoCate">
                <div section=".cateHomeWrap" data="-200" class="paralax-hor">
                    <h2>Dịch vụ<br><span>nổi bật</span></h2>
                    <p><?php echo esc_attr( get_option('option-desc') ); ?></p>
                    <div class="dragMouse">
                        <img src="<?php bloginfo('template_directory');?>/assets/images/mouse.png">
                        <p><img src="<?php bloginfo('template_directory');?>/assets/images/ar-drag-l.png"><span>Trượt để khám phá</span><img src="<?php bloginfo('template_directory');?>/assets/images/ar-drag-r.png"></p>
                    </div>
                </div>
            </div>
            <ul section=".cateHomeWrap" data="200" class="listCateHome paralax-hor">
                 <?php $team_query = new WP_Query( array(
                    'post_type' => 'services',
                    'posts_per_page' => 4,
                    //'orderby'   => 'meta_value',
                    'order' => 'asc',
                    'tax_query' => array(
                        array (
                            'taxonomy' => 'group',
                            'field' => 'slug',
                            'terms' => 'dich-vu',
                        )
                    ),
                )); 
            if ($team_query->have_posts()) {
              while ($team_query->have_posts()) {
                $team_query->the_post();  
                $id = get_the_ID();
                $link = get_post_meta( $id, 'link', true );
                $thumbnail = wp_get_attachment_image_src( get_post_thumbnail_id($id), 'full', false );
                 ?> 
                    <li>
                        <div class="item cate-1">
                            <div class="ico"><img src="<?php bloginfo('template_directory');?>/assets/images/b.gif"></div>
                            <h2><?php the_title(); ?></h2>
                            <div class="content">
                                <div class="img" style="background: url(<?php echo $thumbnail[0]; ?>) center">
                                    <img src="<?php bloginfo('template_directory');?>/assets/images/thumb-cate.gif">
                                </div>
                                <div class="copy">
                                    <p><?php the_excerpt(); ?></p>
                                    <a class="btn-2" href="<?php echo esc_attr( get_option('option-readmore-1') ); ?>">Xem thêm</a>
                                </div>
                            </div>
                            <a class="link" href="#"></a>
                        </div>
                    </li>
                 <?php } 
                } ?>
                <li></li>
            </ul>
        </div>
    </div>
</section>