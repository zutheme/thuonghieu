<div class="wrap">

	<h2>Setting option links</h2>

	<form class="form-option" method="post" action="options.php">

	    <?php settings_fields( 'option-settings-group' ); ?>

	    <?php do_settings_sections( 'option-settings-group' ); ?>

	    <table class="form-table-option" style="width: 100%">

	    	<!--item-->
	    	<tr>
	    		<td>
	    			<label for="images_option" class="prfx-row-title"><?php _e( 'Tiêu đề', 'prfx-textdomain' )?></label>
	    			<input type="text" name="option-title-1" value="<?php echo esc_attr( get_option('option-title-1') ); ?>" /></td>
	    	</tr>
	    	<tr>

	        <td>

	        	<p>

	        		<label class="prfx-row-title"><?php _e( 'Mô tả', 'prfx-textdomain' )?></label>

	        		<textarea rows="5" cols="100" name="option-desc-1" style="text-align: left;">
	        		<?php echo esc_attr( get_option('option-desc-1') ); ?></textarea>
	        	</p>
	        </td>
	        </tr>
	        <tr>
	        <td><p>
	    			<label class="prfx-row-title"><?php _e( 'Liên kết', 'prfx-textdomain' )?></label>
	    			<input type="text" name="option-readmore-1" value="<?php echo esc_attr( get_option('option-readmore-1') ); ?>" />
	    		</p></td>
	        </tr>
	     	<tr><td>

	    		<p>

			        <label for="images_option" class="prfx-row-title"><?php _e( 'File Upload', 'prfx-textdomain' )?></label>

			        <input class="images_option form-control int-pop1" type="text" name="option-image-1" value="<?php echo esc_attr( get_option('option-image-1') ); ?>" />

			        <input type="button" name="images_option-button" class="button images_option-button" value="<?php _e( 'Choose or Upload an Image', 'prfx-textdomain' )?>" />

			    </p>
	    		<p><img class="img_set img1" style="max-height: 100px; min-width: auto" src="<?php echo esc_attr( get_option('option-image-1') ); ?>"></p>

	    		</td>

	    	</tr>
	    	<!--item-->
	    	<tr>
	    		<td>
	    			<label for="images_option" class="prfx-row-title"><?php _e( 'Tiêu đề', 'prfx-textdomain' )?></label>
	    			<input type="text" name="option-title-2" value="<?php echo esc_attr( get_option('option-title-2') ); ?>" /></td>
	    	</tr>
	    	<tr>

	        <td>

	        	<p>

	        		<label class="prfx-row-title"><?php _e( 'Mô tả', 'prfx-textdomain' )?></label>

	        		<textarea rows="5" cols="200" name="option-desc-2" style="text-align: left;">
	        		<?php echo esc_attr( get_option('option-desc-2') ); ?></textarea>
	        	</p>
	        </td>
	        </tr>
	        <tr>
	        <td><p>
	    			<label class="prfx-row-title"><?php _e( 'Liên kết', 'prfx-textdomain' )?></label>
	    			<input type="text" name="option-readmore-2" value="<?php echo esc_attr( get_option('option-readmore-2') ); ?>" />
	    		</p></td>
	        </tr>
	     	<tr><td>

	    		<p>

			        <label for="images_option" class="prfx-row-title"><?php _e( 'File Upload', 'prfx-textdomain' )?></label>

			        <input class="images_option form-control int-pop2" type="text" name="option-image-2" value="<?php echo esc_attr( get_option('option-image-2') ); ?>" />

			        <input type="button" name="images_option-button" class="button images_option-button" value="<?php _e( 'Choose or Upload an Image', 'prfx-textdomain' )?>" />

			    </p>
	    		<p><img class="img_set img2" style="max-height: 200px; min-width: auto" src="<?php echo esc_attr( get_option('option-image-2') ); ?>"></p>

	    		</td>

	    	</tr>
	    	
	    </table>

	    <?php submit_button(); ?>

	</form>

	</div>