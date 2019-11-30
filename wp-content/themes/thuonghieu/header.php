<?php
/**
 * The header for our theme
 *
 * This is the template that displays all of the <head> section and everything up until <div id="content">
 *
 * @link https://developer.wordpress.org/themes/basics/template-files/#template-partials
 *
 * @package thienkhue
 */

?>
<!doctype html>
<html <?php language_attributes(); ?> xmlns="https://www.w3.org/1999/xhtml" xmlns:fb="https://www.facebook.com/2008/fbml">
<head>
	<meta charset="<?php bloginfo( 'charset' ); ?>">
	<meta name="viewport" content="width=device-width, initial-scale=1">
  <meta http-equiv="Cache-control" content="public">
	<link rel="profile" href="https://gmpg.org/xfn/11">
	<!-- Latest compiled and minified CSS -->
  <link rel="shortcut icon" href="<?php bloginfo('template_directory');?>/images/favicon.png">
  <!-- new style -->
  <!-- <link rel="stylesheet" href="<?php //bloginfo('template_directory');?>/css/menu-bootstrap.min.css?v=0.0.7">  -->
  <link rel="stylesheet" href="<?php bloginfo('template_directory');?>/assets/css/main.css?v=0.0.2.2">
  <link rel="stylesheet" href="<?php bloginfo('template_directory');?>/assets/css/styles.css">
  <!-- <link rel="stylesheet" href="<?php //bloginfo('template_directory');?>/font-awesome-4.7.0/css/font-awesome.min.css"> -->
  <!-- end new style -->
  <!-- Google Tag Manager -->
	<script>(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
	new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
	j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
	'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
	})(window,document,'script','dataLayer','GTM-PBKL22K');</script>
  <!-- End Google Tag Manager -->
  
  <?php wp_head(); ?>
</head>

<body <?php //body_class(); ?>>
 <!-- Google Tag Manager (noscript) -->
<noscript><iframe src="https://www.googletagmanager.com/ns.html?id=GTM-PBKL22K"
height="0" width="0" style="display:none;visibility:hidden"></iframe></noscript>
<!-- End Google Tag Manager (noscript) -->
<?php get_template_part( 'layout/menu-header'); 
  //Eng Menu 
if ( is_front_page() || is_home() ) { ?>
  <main id="pHome">
<?php }elseif (is_singular()) { ?>
  <main id="pNewsDetail">
<?php } ?> 