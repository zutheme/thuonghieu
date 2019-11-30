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
var count = 35;
//var _e_countdown_random = document.getElementById('SECTION232');
var _e_ladi_headline = document.getElementsByClassName('ld-count-down')[0];
//var _e_count = document.getElementById('count');
//var _e_rand = document.getElementById('rand');
function callA(count){
  var rand = Math.floor((Math.random() * 10000) + 1000);
    //_e_rand.innerHTML = 'rand='+rand;
    setTimeout(function(){
      //_e_ladi_headline.innerHTML = count;
      count = count - 1;
      if(count > 15){
        callB(count);
      }
    },rand);
}
function callB(count){
  var rand = Math.floor((Math.random() * 15000) + 5000);
    //_e_rand.innerHTML = 'rand='+rand;
    setTimeout(function(){
      _e_ladi_headline.innerHTML = count;
      count = count - 1;
      if(count > 15){
        callA(count);
      }
    },rand);
}
callA(count);
  /*form register*/
  // var _e_popup_form = document.getElementsByClassName('frm-popup')[0];
  // var e_btn_reg_popup = _e_popup_form.getElementsByClassName('btn-register')[0];
  // e_btn_reg_popup.addEventListener("click", reg_popup);
  // function reg_popup(){
  //   var _url = document.URL;
  //   _host = extractHostname(_url);
  //   var _efullname = _e_popup_form.getElementsByClassName('fullname')[0];
  //   var _fullname = _efullname.value;
  //   var _ephone = _e_popup_form.getElementsByClassName('phone')[0];
  //   //var _e_email = _e_popup_form.getElementsByClassName('email')[0];
  //   var _email = '';
  //   var e_local_service = _e_popup_form.getElementsByClassName('local-service')[0];
  //   var local_service = e_local_service.options[e_local_service.selectedIndex].text;
  //   //var _ecomment = _e_popup_form.getElementsByClassName('comment')[0];
  //   var _comment = '';
  //   var str_method = "";
  //   var _phone = _ephone.value;
  //   if(!_phone){
  //       _ephone.style.borderColor = "red";
  //      _e_result.innerHTML = "Vui lòng nhập số điện thoại";
  //       return false;
  //   }
  //   if(!_fullname){
  //       _efullname.style.borderColor = "red";
  //       _e_result.innerHTML = "Vui lòng nhập họ tên";
  //       return false;
  //   }
 
  //   var _reg_url = _url.replace(/[&]/g, ';');
  //   var info = _reg_url;
  //     gbdataURL="nofile";
  //   //body 
  //   var _content = "";
  //   var _reg_url = _url.replace(/[&]/g, ';');
  //   var _namecat = _host;
  //   var _body = _url+"<br>Dịch vụ:" + local_service;
  //   var _typepost = "consultant";
  //   var _firstname = _fullname;
  //   var _mobile = _phone;
  //   var _name_status_type = "request";
  //   var http = new XMLHttpRequest();
  //   var url = "https://thammyvienthienkhue.com.vn/api/customer/consultant";
  //   var params = JSON.stringify({firstname: _firstname, mobile: _mobile, email:_email, address:'', namecat: _namecat, body:_body, typepost:_typepost, name_status_type:_name_status_type,orfilename:'', file:gbdataURL, url:_url });
  //   http.open("POST", url, true);
  //   //Send the proper header information along with the request
  //   http.setRequestHeader("Accept", "application/json");
  //   http.withCredentials = true;
  //   http.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
  //   var load = _e_popup_form.getElementsByClassName("loading")[0];
  //   load.style.display = "block";
  //   var e_result = _e_popup_form.getElementsByClassName("result")[0];
  //   http.onreadystatechange = function() {
  //       if(http.readyState == 4 && http.status == 200) {
  //            var myArr = JSON.parse(this.responseText);
  //            console.log(myArr);      
  //            Object.keys(myArr).forEach(function(key) {      
  //             if(key=='success'){
  //                 _efullname.value = "";
  //                 //_e_email.value = "";
  //                 _ephone.value = "";
  //                 //_ecomment.value = "";
  //                 e_result.innerHTML = "Cảm ơn bạn "+myArr.firstname+" đã tham gia";
  //                 setTimeout(function(){
  //                   e_result.innerHTML = "";
  //                   document.getElementById("POPUP607").display = "block !important;";
  //                 },10000);       
  //             }else if(key=='error'){
  //               e_result.innerHTML = myArr.error;
  //             }
  //           });
  //           load.style.display = "none";      
  //       }
  //   }
  //   http.send(params);
  // }
  /*end form popup*/
var ebtn = document.getElementsByTagName("button");
for (var i = 0; i < ebtn.length; i++) {
  if(ebtn[i].type == 'submit'){
    ebtn[i].type = 'button';
  }
}
var e_btn_register = document.getElementsByClassName('btn-register');
if (typeof(e_btn_register) != 'undefined' && e_btn_register != null){
  for (var i = 0; i < e_btn_register.length; i++) {
    e_btn_register[i].addEventListener("click",regform);
  }
}
function regform(){
  if(!e_btn_register) return false;
  var e_popup_processing = document.getElementsByClassName('htz-popup-processing')[0];
  var frm = findform(this);
  if(frm){
    console.log(frm);
    var ename = frm.getElementsByTagName("input");
    var _fullname='',_phone='';
    if(ename){
      for (var i = 0; i < ename.length; i++) {
        if(ename[i].name == 'name'){
            _fullname = ename[i].value;
        }else if(ename[i].name == 'phone'){
          _phone = ename[i].value;
        }
      }
    }     
    var eselsevice = frm.getElementsByTagName("select");
    var sel_local='',sel_service='';
    if(eselsevice){
        for (var i = 0; i < eselsevice.length; i++) {
        if(eselsevice[i].name == 'sel-service'){
           sel_service = eselsevice[i].options[eselsevice[i].selectedIndex].text;
        }else if(eselsevice[i].name == 'sel-local'){
           sel_local = eselsevice[i].options[eselsevice[i].selectedIndex].text;
        }
      }
    }   
    var ecomment = frm.getElementsByTagName("textarea");
    var _comment='';
    if(ecomment){
      for (var i = 0; i < ecomment.length; i++) {
        if(ecomment[i].name == 'comment'){
            _comment = ecomment[i].value;
        }
      }
    }

    //var e_popup = findpopup(frm);
    // if(e_popup){
    //   console.log(e_popup);
    //   var backdrop = document.getElementById("backdrop-popup");
    //   console.log(backdrop);
    //   setTimeout(function(){
    //       //e_popup.setAttribute("style", "display: none !important;");
    //       //backdrop.setAttribute("style", "display: none !important;backgroundColor:transparent;");
    //       //backdrop.style.backgroundColor = "transparent";
    //       //backdrop.parentElement.removeChild(backdrop);
    //   },1000);
      
    //}
    //console.log(_fullname,_phone,sel_local,sel_service,_comment);
  }
  e_popup_processing.style.display = "block";
  setTimeout(function(){ 
    e_popup_processing.style.display = "none";
  },1000);
}
function findform(element){
  //var eparent = element.parentElement;
  var eparent = element;
  var frm = eparent.getElementsByTagName("form")[0];
  while(!frm){
    eparent = eparent.parentElement;
    frm = eparent.getElementsByTagName("form")[0];
  }
  //setTimeout(function(){ return frm; },10000);
  return frm;
}
function findpopup(element){
  var eparent = element;
  var epopup = eparent.getAttribute("data-popup-backdrop");
  while(!epopup){
    eparent = eparent.parentElement;
    epopup = eparent.getAttribute("data-popup-backdrop");
  }
  //setTimeout(function(){ return epopup; },10000);
  return eparent;
}