<?php
/**
 * The template for displaying all single posts
 *
 * @link https://developer.wordpress.org/themes/basics/template-hierarchy/#single-post
 *
 * @package elearning
 */
get_header();
?>
  <?php //custom_breadcrumbs();?>
  <?php //get_curent_parent_cat(); ?>
  
	<?php
	while ( have_posts() ) :
		the_post();
		get_template_part( 'template-parts/content', get_post_type() );
		// If comments are open or we have at least one comment, load up the comment template.
		?>
    
    <?php 
      if ( comments_open() || get_comments_number() ) :
		      //comments_template();
          //comments_template( '/comments-default.php' );
		  endif; ?>
      
	<?php endwhile; ?>
  <?php get_template_part( 'template-parts/relative'); ?>
<?php
get_footer();
?>