<?php  defined( 'ABSPATH' ) or die( 'No script kiddies please!' ); ?>
<?php
/* Plugin Name: hatazu option
 * Plugin URI: http://hatazu.com
 * Description: option by javascript.
 * Version: 1.0.1
 * Author: hatazu
 * Author URI: http://hatazu.com
 * License: GPL2
 */
add_action('admin_menu', 'option_menu');
function option_menu() {
    add_menu_page('option Settings', 'option', 'administrator', 'option-settings', 'option_menu_settings_page', 'dashicons-admin-generic');
}
function option_menu_settings_page() {
    include('option_admin.php');
}
function option_menu_settings() {
    register_setting( 'option-settings-group', 'option-title-1');
    register_setting( 'option-settings-group', 'option-desc-1');
    register_setting( 'option-settings-group', 'option-image-1');
    register_setting( 'option-settings-group', 'option-readmore-1');
    register_setting( 'option-settings-group', 'option-title-2');
    register_setting( 'option-settings-group', 'option-desc-2');
    register_setting( 'option-settings-group', 'option-image-2');
    register_setting( 'option-settings-group', 'option-readmore-2');
}
add_action( 'admin_init', 'option_menu_settings' );
include("widget.php"); 
//include('option_box.php');
//add_action( 'wp_footer', 'option_box');
//add_shortcode( 'form_reg', 'short_form_reg_widget' );

function hatazu_images_option_enqueue() {
    global $typenow;
        wp_enqueue_media();
        // Registers and enqueues the required javascript.
        wp_register_script( 'hatazu_images_option', plugin_dir_url( __FILE__ ) . 'js/hatazu_images_option.js', array(), '1.0.6', true );
        wp_localize_script( 'hatazu_images_option', 'meta_image',
            array(
                'title' => __( 'Choose or Upload an Image', 'prfx-textdomain' ),
                'button' => __( 'Use this image', 'prfx-textdomain' ),
            )
        );
        wp_enqueue_script( 'hatazu_images_option' );
}
add_action( 'admin_enqueue_scripts', 'hatazu_images_option_enqueue');

// function hatazu_option_menu_script() 
// {
//     //css
//     wp_enqueue_style('hatazu_option_style', plugin_dir_url(__FILE__) . 'css/hatazu_option.css',array(), '0.1.5', 'all');
//     //jquery
//     wp_enqueue_script('hatazu_option_menu.js', plugin_dir_url(__FILE__) .'js/hatazu_option.js', array(), '0.0.2', true );
// } 
//add_action("wp_enqueue_scripts", "hatazu_option_menu_script");?>