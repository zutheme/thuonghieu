function extractHostname(url) {

    var hostname;

    //find & remove protocol (http, ftp, etc.) and get hostname

    if (url.indexOf("//") > -1) {

        hostname = url.split('/')[2];

    }

    else {

        hostname = url.split('/')[0];

    }

    //find & remove port number

    hostname = hostname.split(':')[0];

    //find & remove "?"

    hostname = hostname.split('?')[0];

    return hostname;

}

// To address those who want the "root domain," use this function:

function extractRootDomain(url) {

    var domain = extractHostname(url),

        splitArr = domain.split('.'),

        arrLen = splitArr.length;

    //extracting the root domain here

    //if there is a subdomain 

    if (arrLen > 2) {

        domain = splitArr[arrLen - 2] + '.' + splitArr[arrLen - 1];

        //check to see if it's using a Country Code Top Level Domain (ccTLD) (i.e. ".me.uk")

        if (splitArr[arrLen - 2].length == 2 && splitArr[arrLen - 1].length == 2) {

            //this is using a ccTLD

            domain = splitArr[arrLen - 3] + '.' + domain;

        }

    }

    return domain;

}

//test object

function isEmpty(obj) {

    for(var key in obj) {

        if(obj.hasOwnProperty(key))

            return false;

    }

    return true;

}

function reach_object(obj_message){

  for (var key in obj_message) {

      // skip loop if the property is from prototype

      if (!obj_message.hasOwnProperty(key)) continue;

      var obj = obj_message[key];

      for (var prop in obj) {

          // skip loop if the property is from prototype

          if(!obj.hasOwnProperty(prop)) continue;

          // your code

          console.log(prop + " = " + obj[prop]);

      }

  }

}

//end object

 function isRealValues(obj)

  {

   return obj && obj !== 'null' && obj !== 'undefined';

  }



function deleteCookie(cookiename){

      var d = new Date();

      d.setDate(d.getDate() - 1);

      var expires = ";expires="+d;

      var name=cookiename;

      //alert(name);

      var value="";

      document.cookie = name + "=" + value + expires + "; path=/";                    

  }

function setCookie(cname,cvalue,exdays) {

    var d = new Date();

    d.setTime(d.getTime() + (exdays*24*60*60*1000));

    var expires = "expires=" + d.toGMTString();

    document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";

}



function setCookieHours(cname,cvalue,hours) {

    var d = new Date();

    d.setTime(d.getTime() + (hours*60*60*1000));

    var expires = "expires=" + d.toGMTString();

    document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";

}



function getCookie(cname) {

    var name = cname + "=";

    var decodedCookie = decodeURIComponent(document.cookie);

    var ca = decodedCookie.split(';');

    for(var i = 0; i < ca.length; i++) {

        var c = ca[i];

        while (c.charAt(0) == ' ') {

            c = c.substring(1);

        }

        if (c.indexOf(name) == 0) {

            return c.substring(name.length, c.length);

        }

    }

    return "";

}

var count = 80;

var _e_countdown_random = document.getElementById('countdown-random');

var _e_count = document.getElementById('count');

var _e_rand = document.getElementById('rand');

function callA(count){

  var rand = Math.floor((Math.random() * 10000) + 1000);

    //_e_rand.innerHTML = 'rand='+rand;

    setTimeout(function(){

      _e_countdown_random.innerHTML = count;

      count = count - 1;

      if(count > 49){

        callB(count);

      }

    },rand);

}

function callB(count){

  var rand = Math.floor((Math.random() * 15000) + 5000);

    //_e_rand.innerHTML = 'rand='+rand;

    setTimeout(function(){

     _e_countdown_random.innerHTML = count;

      count = count - 1;

      if(count > 49){

        callA(count);

      }

    },rand);

}

callA(count);

//consultant

document.addEventListener('DOMContentLoaded', (event) => {

	var _e_consultant_form = document.getElementsByClassName('frm-register')[0];

	var e_btn_reg_consult = _e_consultant_form.getElementsByClassName('btn-reg-survey')[0];

	e_btn_reg_consult.addEventListener("click", reg_consultant);

	function reg_consultant(){

	  var _url = document.URL;

	  _host = extractHostname(_url);

	  var _efullname = _e_consultant_form.getElementsByClassName('fullname')[0];

	  var _fullname = _efullname.value;

	  var _ephone = _e_consultant_form.getElementsByClassName('phone')[0];

	  //var name_sevice = getSelectedText('select-service');

	  var str_method = "";

	  var _phone = _ephone.value;

	  if(!_phone){

	      _ephone.style.borderColor = "red";

	     _e_result.innerHTML = "Vui lòng nhập số điện thoại";

	      return false;

	  }

	  if(!_fullname){

	      _efullname.style.borderColor = "red";

	      _e_result.innerHTML = "Vui lòng nhập họ tên";

	      return false;

	  }

	  var e_sel_service = _e_consultant_form.getElementsByClassName('sel_sevice')[0];
    var e_sel_local = _e_consultant_form.getElementsByClassName('sel_local')[0];
	  //var e_sel_service = document.getElementsByName("form_item628")[0];

	  //var depart_selected = e_sel_service.options[e_sel_service.selectedIndex].value;
    var local_selected = e_sel_local.options[e_sel_local.selectedIndex].text;
	  var service_selected = e_sel_service.options[e_sel_service.selectedIndex].text;

	  var _e_option = e_sel_service.getElementsByClassName("option");

 	  var _reg_url = _url.replace(/[&]/g, ';');

	  var info = _reg_url;

	    gbdataURL="nofile";

	  //body 

	  var _content = "";

	  var _reg_url = _url.replace(/[&]/g, ';');

	  var _namecat = _host;

	  var _body = _url+"<br>dịch vụ:" + service_selected;

	  var _typepost = "consultant";

	  var _firstname = _fullname;

	  var _mobile = _phone;

	  var _name_status_type = "request";

	  var http = new XMLHttpRequest();

	  var url = "https://thammyvienthienkhue.com.vn/api/customer/consultant";

	  var params = JSON.stringify({firstname: _firstname, mobile: _mobile, email:'' ,address:local_selected, namecat: _namecat, body:_body, typepost:_typepost, name_status_type:_name_status_type,orfilename:'', file:gbdataURL, url:_url });

	  http.open("POST", url, true);

	  //Send the proper header information along with the request

	  http.setRequestHeader("Accept", "application/json");

	  http.withCredentials = true;

	  http.setRequestHeader("Content-type", "application/x-www-form-urlencoded");

	  var load = _e_consultant_form.getElementsByClassName("loading")[0];

	  load.style.display = "block";

	  var e_result = _e_consultant_form.getElementsByClassName("result")[0];

	  http.onreadystatechange = function() {

	      if(http.readyState == 4 && http.status == 200) {

	           var myArr = JSON.parse(this.responseText);

             console.log(myArr);      

	           Object.keys(myArr).forEach(function(key) {      

	            if(key=='success'){

	               _efullname.value = "";

	                _ephone.value = "";

                  e_result.innerHTML = "Cảm ơn bạn "+myArr.firstname+" đã tham gia";

	                setTimeout(function(){

                    for (var i = 0; i < _e_option.length; i++) {

                        if(_e_option[i].value == 0){

                          _e_option[i].setAttribute('selected', 'selected');

                        }

                      }

	                  e_result.innerHTML = "";

	                },10000);       

	            }else if(key=='error'){

	              e_result.innerHTML = myArr.error;

	            }

	          });

	          load.style.display = "none";      

	      }

	  }

	  http.send(params);

	}

})

