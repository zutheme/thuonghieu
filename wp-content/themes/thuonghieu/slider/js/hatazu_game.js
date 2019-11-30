
//initial gif
var PI = 3.14159265;
var rX = 0.0;
var rY = 0.0;
var rZ = 0.0;

var e_slider = document.getElementById("slider");
e_slider.addEventListener('change', function() {
	applyRotation(this);
});
var e_imgRight = document.getElementById("imgRight");
e_imgRight.addEventListener('click', function() {
	rY += 5.0;
	if(rY>360)
		rY -= 360;
	applyRotation(this);
});
var e_img_change = document.getElementsByClassName("hidden-image")[0];
var e_img_box = document.getElementsByClassName("hidden-box")[0];
var e_img_open_box = document.getElementsByClassName("hidden-open-box")[0];
//var url_gift = document.getElementById("url_gift").value;
	var url_gift = 'game/images/nap-qua.png';
	var e_area_game = document.getElementsByClassName("area-game")[0];
	//console.log(e_area_game);
	var e_ul = document.createElement("ul");
	for (var i = 0; i < 10; i++) {
		let e_li = document.createElement("li");
		let e_canvas = document.createElement("canvas");
		e_canvas.setAttribute("class", "square-1");
		e_canvas.style.position = "absolute";
		e_canvas.style.left = "0px";
		e_canvas.style.top = "0px";
		e_canvas.style.zIndex = "1";
		let ctx = e_canvas.getContext("2d");
		//let e_a = document.createElement("a");
		//e_a.setAttribute("class", "gift");
		//e_a.setAttribute("href", "javascript:void(0)");
		let img = new Image();
		img.src = 'game/images/hop-qua.png';
		img.onload = function(){
			e_canvas.width = img.naturalWidth;
			e_canvas.height = img.naturalHeight;
			ctx.drawImage(img, 0, 0);
		}
	     let ctx0;
	     let e_canvas0 = document.createElement("canvas");
	     e_canvas0.setAttribute("class", "square-2");
	     e_canvas0.style.position = "absolute";
		 e_canvas0.style.left = "0px";
		 e_canvas0.style.top = "0px";
		 e_canvas0.style.zIndex = "2";
	     ctx0 = e_canvas0.getContext("2d");
	     let img0 = new Image();
			img0.src = 'game/images/nap-qua.png';
			img0.onload = function(){
				e_canvas0.width = img0.naturalWidth;
				e_canvas0.height = img0.naturalHeight;
				ctx0.drawImage(img0, 0, 0);
			}
	      e_li.appendChild(e_canvas0);
		//e_a.appendChild(e_canvas);
		e_li.appendChild(e_canvas);
		e_ul.appendChild(e_li);
		
	}
	e_area_game.appendChild(e_ul);
	function addevent(){
		drawRotated360(this);
	}
	var e_square = document.getElementsByClassName("square-2");
	for (var i = 0; i < e_square.length; i++) {
		e_square[i].addEventListener("click", addevent);
	}
	function drawRotated360(canvas){
	    var pos = 0;
	    var id = setInterval(frame, 150);

	    var ctx;
	    function frame() {

	        if (pos == -90) {

	            clearInterval(id);

	            //ctx = canvas.getContext("2d");

		        //ctx.clearRect(0,0,canvas.width,canvas.height);

		        //ctx.save();

		        //ctx.translate(canvas.width/2,canvas.height/2);

		        //ctx.rotate(-90*Math.PI/180);		        
		        //result_anima();
		 		//ctx.drawImage(e_img_box, -canvas.width/2, -canvas.height/2, canvas.width, canvas.height);
		    	//ctx.restore();
		    	  
	        } else {

	            pos = pos - 15;

            	ctx = canvas.getContext("2d");

		        ctx.clearRect(0,0,canvas.width,canvas.height);

		        ctx.save();

		        ctx.translate(canvas.width/8,canvas.height/8);
				  
		        ctx.rotate(pos*Math.PI/180);
		        //ctx.drawImage(url_gift, 0, 0);

    	 		ctx.drawImage(e_img_open_box , -canvas.width/8, -canvas.height/8);

            	ctx.restore();
            }
	    }
	}
	