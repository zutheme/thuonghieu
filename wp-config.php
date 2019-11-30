<?php
/**
 * The base configuration for WordPress
 *
 * The wp-config.php creation script uses this file during the
 * installation. You don't have to use the web site, you can
 * copy this file to "wp-config.php" and fill in the values.
 *
 * This file contains the following configurations:
 *
 * * MySQL settings
 * * Secret keys
 * * Database table prefix
 * * ABSPATH
 *
 * @link https://codex.wordpress.org/Editing_wp-config.php
 *
 * @package WordPress
 */

// ** MySQL settings - You can get this info from your web host ** //
/** The name of the database for WordPress */
define( 'DB_NAME', 'thuonghieu' );

/** MySQL database username */
define( 'DB_USER', 'root' );

/** MySQL database password */
define( 'DB_PASSWORD', '' );

/** MySQL hostname */
define( 'DB_HOST', 'localhost' );

/** Database Charset to use in creating database tables. */
define( 'DB_CHARSET', 'utf8mb4' );

/** The Database Collate type. Don't change this if in doubt. */
define( 'DB_COLLATE', '' );

/**#@+
 * Authentication Unique Keys and Salts.
 *
 * Change these to different unique phrases!
 * You can generate these using the {@link https://api.wordpress.org/secret-key/1.1/salt/ WordPress.org secret-key service}
 * You can change these at any point in time to invalidate all existing cookies. This will force all users to have to log in again.
 *
 * @since 2.6.0
 */
define( 'AUTH_KEY',         'eW@|.8SVyiP^%UEVg5&?`~Jp_V-3#T)>uADqd<({Si>gUzf[xo:A8kbSNR0XpX>m' );
define( 'SECURE_AUTH_KEY',  '~m1}2;%t|wj;Cq?ec`Gp7iofWxJAiH&OoTXC+8<7P}sjFCqZM_KmAJ0kIW*m8>*J' );
define( 'LOGGED_IN_KEY',    'Yn-SA11.{:.j0M5cMER,Q##K%uBi:G.N[2vXT&!i6tG|^xP+w=aLCXJV//fm(txw' );
define( 'NONCE_KEY',        'SrPKKJ^sYix?k>Mj@K4,KPx&nlbsx%:li,pAda{am2*iph2@Z+ziHBM[W7#bH}~-' );
define( 'AUTH_SALT',        '84xv`U,9;AoIh4HQObe3t:A&J<JZRM^(vNS<kAFKodPGEt7L<-1A#/Y=(6O0X^!F' );
define( 'SECURE_AUTH_SALT', '^-_>F1d0| k.,>ijLfq><tBpg^Uw<UhOp+^l>UK4dO!tT,hbV=eXQX{/DwiRG6]W' );
define( 'LOGGED_IN_SALT',   '&U,D#!@F!mXx%;(3N|OD$8?f9{+Pcb~rqcBc^}Z1K-iF?Z08g0Z_zlPWRy[1L=i.' );
define( 'NONCE_SALT',       '3UtTorLNmiZ7[nt4&?Jiq(M?wvn2ivZkimrJuNzE:9_NJTx}28^y.d/x1/RF{% A' );

/**#@-*/

/**
 * WordPress Database Table prefix.
 *
 * You can have multiple installations in one database if you give each
 * a unique prefix. Only numbers, letters, and underscores please!
 */
$table_prefix = 'tk_';

/**
 * For developers: WordPress debugging mode.
 *
 * Change this to true to enable the display of notices during development.
 * It is strongly recommended that plugin and theme developers use WP_DEBUG
 * in their development environments.
 *
 * For information on other constants that can be used for debugging,
 * visit the Codex.
 *
 * @link https://codex.wordpress.org/Debugging_in_WordPress
 */
define( 'WP_DEBUG', false );

/* That's all, stop editing! Happy publishing. */

/** Absolute path to the WordPress directory. */
if ( ! defined( 'ABSPATH' ) ) {
	define( 'ABSPATH', dirname( __FILE__ ) . '/' );
}

/** Sets up WordPress vars and included files. */
require_once( ABSPATH . 'wp-settings.php' );
