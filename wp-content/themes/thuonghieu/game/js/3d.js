
		var PI = 3.14159265;
		var rX = 0.0;
		var rY = 0.0;
		var rZ = 0.0;
		
		// load image
		var imgObj = new Image();
		imgObj.onload = function(){
			var canvasSrc = document.getElementById("myPixels");
			var contextSrc = canvasSrc.getContext("2d");
			contextSrc.drawImage(this, 0,0);
		};
	 	imgObj.src = "hinhthe.jpg";
		applyRotation();
	
		// spread change
		var e_slider = document.getElementById("slider");
		e_slider.addEventListener('change', function() {
			applyRotation();
		});
		var e_imgRight = document.getElementById("imgRight");
		e_imgRight.addEventListener('click', function() {
			rY += 5.0;
			if(rY>360)
				rY -= 360;
			document.getElementById("ypos").innerHTML = 'Rotate X: '+rY;
			applyRotation();
		});
		var e_imgRight = document.getElementById("imgLeft");
		e_imgRight.addEventListener('click', function() {
			rY -= 5.0;
			if(rY<0)
				rY = 360+rY;
			document.getElementById("ypos").innerHTML = 'Rotate Y: '+rY;
			applyRotation();
		});
		// rotation controls
		
		
		
		var e_imgRight = document.getElementById("imgUp");
		e_imgRight.addEventListener('click', function() {
			rX -= 5.0;
			if(rX<0)
				rX = 360+rX;
			
			document.getElementById("xpos").innerHTML = "Rotate X: "+rX;
			applyRotation();
		});
		var e_imgRight = document.getElementById("imgDown");
		e_imgRight.addEventListener('click', function() {
			rX += 5.0;
			if(rX>360)
				rX -= 360;	
			document.getElementById("xpos").innerHTML = "Rotate X: "+rX;	
			applyRotation();
		});
		
		function applyRotation() {
			var mag = document.getElementById("slider").value/10.0;
			// source canvas
			var canvasSrc = document.getElementById("myPixels");
			var contextSrc = canvasSrc.getContext("2d");
			var dataSrc = contextSrc.getImageData(0,0,canvasSrc.width, canvasSrc.height);
			
			// destination canvas
			var canvasDes = document.getElementById("myCanvas");
			var contextDes = canvasDes.getContext("2d");
			var dataDes = contextDes.createImageData(canvasDes.width, canvasDes.height);
		
			var sttX = (dataDes.width - dataSrc.width*mag)/2;			
			var sttY = (dataDes.height - dataSrc.height*mag)/2;
			contextDes.clearRect(0,0,canvasDes.width, canvasDes.height);				
			
			var centerX = dataDes.width/2;
			var centerY = dataDes.height/2;
			
			for (var y=0; y<dataSrc.height; y++) {
				var i = y*dataSrc.width*4;			
				for(var x=0; x<dataSrc.width; x++) {
					
					// cartesian co-ordinates revolve around centroid
					var xfc = sttX+x*mag-centerX;
					var yfc = sttY+y*mag-centerY;
					
					// rotation here
					var radX = PI / 180.0 * rX;
					var dy = Math.cos(radX)*yfc;
					var dz = Math.sin(radX)*dy;
					
					var radY = PI / 180.0 * rY;
					var dx = Math.cos(radY)*xfc+Math.sin(radY)*dz;
					
					// calculate index
					var Y = (parseInt(dy)+centerY)*dataDes.width*4;
					var XY = (parseInt(dx)+centerX)*4+Y;
					
					dataDes.data[XY] = dataSrc.data[i];		// R
					dataDes.data[XY+1] = dataSrc.data[i+1];	// G
					dataDes.data[XY+2] = dataSrc.data[i+2];	// B
					dataDes.data[XY+3] = dataSrc.data[i+3];	// A
					i += 4;
				}
			}
			contextDes.putImageData(dataDes, 0, 0);
		}
		
		// function rotateXY(x, y)
		// {
		// 	var radX = PI / 180.0 * rX;
		// 	y = Math.cos(radX)*y-Math.sin(radX)*z;
		// 	var z = Math.sin(radX)*y+Math.cos(radX)*z;
			
		// 	var radY = PI / 180.0 * rY;
		// 	x = Math.cos(radY)*x+Math.sin(radY)*z;
			
		// 	var pt = new Array();
		// 	pt.push(x);
		// 	pt.push(y);
		// 	return pt;
		// }
