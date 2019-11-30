var note_thank ='<div class="last-screen">'
        +'<h3>Cảm ơn bạn đã tham gia trò chơi</h3>'
        +'<p class="titlegame">"Nắm bắt vận may- Nhận quà đầy tay!"</p>'
        +'<p>Thẩm mỹ viện quốc tế Thiên khuê chúc quý khách giáng sinh vui vẻ và nhận thật nhiều quà từ người thân. Hy vọng quý khách gặp nhiều may mắn trong ngày hôm nay.</p>'
        +'<p>Bạn có thể tiếp tục tham gia trò chơi để dành giải thưởng hấp dẫn có giá trị cao hơn bằng cách <span class="like">Like,share</span> để có lượt chơi mới</p>'
        +'<p><a class="btn" href="'+urlhome + '/dung-de-qua-roi/">Chơi lại</a></p>'
      +'</div>';

var note_playgain ='<div class="last-screen">'
        +'<h3>Đừng buồn, bạn vẫn còn cơ hội tham gia tiếp trò chơi!</h3>'
        +'<p class="titlegame">Nắm bắt vận may- Nhận quà đầy tay!</p>'
        +'<p><span class="like">Like,share</span> để tiếp tục có cơ hội nhận quà khủng nhé!</p>'
        +'<p><a class="btn" href="'+urlhome + '/dung-de-qua-roi/">Chơi lại</a></p>'
      +'</div>';
//document.addEventListener('DOMContentLoaded', (event) => {
  //console.log(urlblog);
  //e_btn_reg_register.addEventListener("click", reg_register);

  function reg_register(){

    if(myGameArea.topwin < 1){

        alert("bạn chưa tham gia game");

        return;

    }

  var _e_register_form = document.getElementsByClassName('frm-register')[0];

  if (typeof _e_register_form === "undefined") {

      return;

  }


  var e_btn_reg_register = _e_register_form.getElementsByClassName('btn-reg-gift')[0];

    var _url = document.URL;

    _host = extractHostname(_url);

    var _efullname = _e_register_form.getElementsByClassName('fullname')[0];

    var _fullname = _efullname.value;

    var _ephone = _e_register_form.getElementsByClassName('phone')[0];

    var e_local_service = _e_register_form.getElementsByClassName('local-service')[0];

    var local_selected = e_local_service.options[e_local_service.selectedIndex].text;

    var _e_result = _e_register_form.getElementsByClassName("result")[0];

    var str_method = "";

    var _phone = _ephone.value;
   
    //clear_button();
    //setCookie("over",'0',3);
    //e_filter.appendChild(createElementFromHTML(note_thank));
    //return;
    //var vnf_regex = /((09|03|07|08|05)+([0-9]{8})\b)/g;

    //vnf_regex.test(mobile)

    var format_phone = _phone.length;

    if(format_phone < 10 || format_phone > 11){

        _ephone.style.border = "1px solid red";

       alert("Số điện thoại chưa đúng định dạng");

        return false;

    }

    if(!_fullname){

        _efullname.style.borderColor = "red";

        _e_result.innerHTML = "Vui lòng nhập họ tên";

        return false;

    }

    var _reg_url = _url.replace(/[&]/g, ';');

    var info = _reg_url;

      gbdataURL="nofile";

    //body 

    var _content = "";

    var _reg_url = _url.replace(/[&]/g, ';');

    var _namecat = _host;

    var _body = _url+"<br>giải thưởng:" + (myGameArea.topwin/1000)+".000.000 đồng";

    var _typepost = "game";

    var _firstname = _fullname;

    var _mobile = _phone;

    var _name_status_type = "request";

    var http = new XMLHttpRequest();

    var url = "https://thammyvienthienkhue.com.vn/api/customer/consultant";

    var params = JSON.stringify({firstname: _firstname, mobile: _mobile, email:'', address:local_selected, namecat: _namecat, body:_body, typepost:_typepost, name_status_type:_name_status_type,orfilename:'', file:gbdataURL, url:_url });

    http.open("POST", url, true);

    //Send the proper header information along with the request

    http.setRequestHeader("Accept", "application/json");

    http.withCredentials = true;

    http.setRequestHeader("Content-type", "application/x-www-form-urlencoded");

    var load = _e_register_form.getElementsByClassName("loading")[0];

    load.style.display = "block";

    var e_result = _e_register_form.getElementsByClassName("note-result")[0];

    http.onreadystatechange = function() {

        if(http.readyState == 4 && http.status == 200) {

             var myArr = JSON.parse(this.responseText);

             console.log(myArr);      

             Object.keys(myArr).forEach(function(key) {      

              if(key=='success'){
                  setCookie("over",'0',3);
                 _efullname.value = "";
                  _ephone.value = "";
                  _ephone.style.border = "1px solid #ededed";
                  //var thankyou = 'https://thammyvienthienkhue.vn/tri-nam-tan-goc-cam-on/';
                  //location.replace(thankyou);
                  //redirectPost(thankyou, { text: 'text\n\ntext' });
                  e_result.innerHTML = "Cảm ơn bạn "+myArr.firstname+" đã tham gia";
                  setTimeout(function(){
                    e_result.innerHTML = "";
                    clear_button();
                    e_filter.appendChild(createElementFromHTML(note_thank));
                  },3000);       

              }else if(key=='error'){

                e_result.innerHTML = myArr.error;

              }

            });

            load.style.display = "none";      

        }

    }

    http.send(params);

  }

  /*end register*/

//})

