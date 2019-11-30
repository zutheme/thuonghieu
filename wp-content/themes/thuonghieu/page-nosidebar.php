<?php

/**
 *  Template Name: No sidebar
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
get_header();
?>
 <!-- Section: Blog -->
    <section class="blog-post">
      <div class="container">
        <div class="row">
          <div class="col-sm-12 entry-content">
            <div class="row">
              <div class="col-md-12">
              <?php custom_breadcrumbs(); ?>
              </div>
            </div>
              <?php
              while ( have_posts() ) :
                the_post();
                get_template_part( 'template-parts/content','nosidebar');
              endwhile; // End of the loop.
              ?>
          </div>
          
        </div>
      </div>
    </section> 
<?php
get_footer();
?>

