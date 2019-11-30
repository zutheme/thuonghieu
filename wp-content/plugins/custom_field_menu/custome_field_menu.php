<?php  defined( 'ABSPATH' ) or die( 'No script kiddies please!' );

/*

 * Plugin Name: Custom Field menu

 * Plugin URI: http://zutheme.com

 * Description: Custom Field menu

 * Version: 1.0.2

 * Author: hatazu

 * Author URI: http://zutheme.com

 * License: GPL2

 */

include("menu_width_description.php");
add_action('wp_update_nav_menu_item', 'custom_nav_update',10, 3);

function custom_nav_update($menu_id, $menu_item_db_id, $args ) {

    if ( is_array($_REQUEST['menu-item-custom']) ) {

        $custom_value = $_REQUEST['menu-item-custom'][$menu_item_db_id];

        update_post_meta( $menu_item_db_id, '_menu_item_custom', $custom_value );

    }

}



/*

 * Adds value of new field to $item object that will be passed to     Walker_Nav_Menu_Edit_Custom

 */

add_filter( 'wp_setup_nav_menu_item','custom_nav_item' );

function custom_nav_item($menu_item) {

    $menu_item->custom = get_post_meta( $menu_item->ID, '_menu_item_custom', true );

    return $menu_item;

}



add_filter( 'wp_edit_nav_menu_walker', 'custom_nav_edit_walker',10,2 );

function custom_nav_edit_walker($walker,$menu_id) {

    return 'Walker_Nav_Menu_Edit_Custom';

}


//include("submenu_support.php");
include("wpdocs_walker_submenu.php");
add_action("admin_enqueue_scripts", "custom_field_menu_enqueue");

function custom_field_menu_enqueue() {

	    global $typenow;

	        wp_enqueue_media();

	        // Registers and enqueues the required javascript.

	        wp_register_script( 'hatazu_custom_field_menu', plugin_dir_url( __FILE__ ) . 'js/hatazu_custom_field_menu.js', array(), '1.0.5', true );

	        wp_localize_script( 'hatazu_custom_field_menu', 'meta_image',

	            array(

	                'title' => __( 'Choose or Upload an Image', 'prfx-textdomain' ),

	                'button' => __( 'Use this image', 'prfx-textdomain' ),

	            )

	        );

	        wp_enqueue_script( 'hatazu_custom_field_menu' );

}

?>