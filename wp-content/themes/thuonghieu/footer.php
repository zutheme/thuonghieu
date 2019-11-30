<?php
/**
 * The template for displaying the footer
 *
 * Contains the closing of the #content div and all content after.
 *
 * @link https://developer.wordpress.org/themes/basics/template-files/#template-partials
 *
 * @package thienkhue
 */
?>
<?php get_curent_parent_cat(); ?>
        <footer>
            <!-- Chứa footer -->
            <div class="loading">
                <div>
                    <div class="outerCircle"></div>
                    <div class="innerCircle"></div>
                </div>
            </div>

            <div class="container">
                <div class="row">
                    <div class="left">
                        <div>
                            <h4>Thẩm mỹ viện quốc tế thiên khuê</h4>
                            <p>© Bản quyền 2019</p>
                        </div>
                        <div>
                            <p>Kết nối chúng tôi:</p>
                            <ul>
                                <li><a href="https://www.facebook.com/thammyvienthienkhue/" target="_blank"><i class="fab fa-facebook-f"></i></a></li>
                                <li><a href="https://www.youtube.com/channel/UCYL62gmqAL1kp2Q6WlW7cBA" target="_blank"><i class="fab fa-youtube"></i></a></li>
                                <li><a href="https://zalo.me/4561880956153197739" target="_blank"><img style="width: 22px;height: auto;" class="zalo" src="<?php bloginfo('template_directory');?>/images/icon/zalo.png"></a></li>
                            </ul>
                        </div>
                    </div>
                    <div class="right">
                        <?php
                         wp_nav_menu( array(
                              'theme_location'    => 'menu-custom',
                              'depth'             => 1,
                              'container'         => '',
                              'container_class'   => '',
                              'container_id'      => '',
                              'menu_id'           => '',
                              'menu_class'        => '',
                              'fallback_cb'       => 'wp_bootstrap_navwalker::fallback',
                              'walker'            => new wp_bootstrap_navwalker(),
                          ) );
                        ?>  
                       <!--  <ul>
                            <li><a href="index.htm"><strong>Trang ch&#7911;</strong></a></li>
                            <li><a href="gioi-thieu.htm"><strong>Gi&#7899;i thi&#7879;u T&#7853;p đoàn</strong></a></li>

                                <li><a href="linh-vuc-hoat-dong\cong-nghe.htm"><strong>Lĩnh v&#7921;c ho&#7841;t đ&#7897;ng</strong></a></li>
                            <li><a href="quan-he-co-dong.htm"><strong>Quan h&#7879; c&#7893; đông</strong></a></li>
                            <li><a href="phat-trien-ben-vung.htm"><strong>Phát tri&#7875;n b&#7873;n v&#7919;ng</strong></a></li>
                        </ul> -->
                        <ul>
                            <li><a href="tin-tuc-su-kien.htm">Tin t&#7913;c s&#7921; ki&#7879;n</a></li>
                            <li><a href="https://tuyendung.vingroup.net/" target="_blank">Tuy&#7875;n d&#7909;ng</a></li>
                            <li><a href="/lien-he">Liên h&#7879;</a></li>
                        </ul>
                    </div>
                </div>
                <div class="botFooter">
                    <p><a href="dieu-khoan-su-dung.htm">Chính sách</a> | <a href="chinh-sach-bao-mat.htm">Điều khoản</a></p>
                    <a href="http://zig.red/" target="_blank"><span>Điện thoại : 19001768</span></a>
                </div>
            </div>
        </footer>
    </main>
    <div id="popup" class="helper-hide">
        <div class="holder helper-centerbox register"></div>
        <div class="holder helper-centerbox login"></div>
    </div>
    <div id="preloader" class="helper-hide">
        <div class="loader helper-centerbox">
            <svg class="circular" viewbox="25 25 50 50">
                <circle class="path" cx="50" cy="50" r="20" fill="none" stroke-width="3" stroke-miterlimit="10"></circle>
            </svg>
        </div>
    </div>
<script>var path_resource = "<?php echo get_template_directory_uri(); ?>/assets/";
//console.log(path_resource);</script>
<script src="<?php bloginfo('template_directory');?>/assets/js/libraries/jquery.min.js"></script>
<script src="<?php bloginfo('template_directory');?>/assets/js/plugins/sweetalert2/sweetalert2.min.js"></script>
<script src="<?php bloginfo('template_directory');?>/assets/js/main.js"></script>
<script src="<?php bloginfo('template_directory');?>/assets/js/app.js"></script>
<script src="<?php bloginfo('template_directory');?>/assets/js/functions.js"></script>	
<?php wp_footer(); ?>
</body>
</html>
