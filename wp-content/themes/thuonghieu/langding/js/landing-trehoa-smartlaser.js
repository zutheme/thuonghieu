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
function setCookieMinutes(cname,cvalue,_minutes) {
    var d = new Date();
    d.setTime(d.getTime() + (_minutes*60*1000));
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
// var count = 49;
// function callA(count){
//   var rand = Math.floor((Math.random() * 10000) + 1000);
//     //_e_rand.innerHTML = 'rand='+rand;
//     setTimeout(function(){
//       //_e_ladi_headline.innerHTML = count;
//       count = count - 1;
//       if(count > 15){
//         callB(count);
//       }
//     },rand);
// }
// function callB(count){
//   var rand = Math.floor((Math.random() * 15000) + 5000);
//     //_e_rand.innerHTML = 'rand='+rand;
//     setTimeout(function(){
//       _e_ladi_headline.innerHTML = count;
//       count = count - 1;
//       if(count > 15){
//         callA(count);
//       }
//     },rand);
// }
// callA(count);
  /*form register*/
var _trigger,_trigger_title_qua,_trigger_gia,_trigger_split,_trigger_parent;  
var etrigger = document.getElementsByClassName('trigger');
for (var i = 0; i < etrigger.length; i++) {
  etrigger[i].addEventListener("click",function(){
    _trigger_split = this.className.split(/[ ,]+/);
    _trigger = _trigger_split[2];
    _trigger_parent = this.parentElement.parentElement.parentElement;
    _trigger_title_qua = _trigger_parent.getElementsByClassName('title-qua')[0].getElementsByTagName("p")[0].innerHTML;
    _trigger_gia_goc = _trigger_parent.getElementsByClassName('gia-qua')[0].getElementsByClassName('gia-ghach')[0].getElementsByTagName("del")[0].innerHTML;
    _trigger_gia = _trigger_parent.getElementsByClassName('gia-qua')[0].getElementsByClassName('gia')[0].innerHTML;
    //console.log(_trigger_title_qua,_trigger_gia_goc,_trigger_gia);
  });
}
var e_btn_register = document.getElementsByClassName('btn-register');
if (typeof(e_btn_register) != 'undefined' && e_btn_register != null){
  for (var i = 0; i < e_btn_register.length; i++) {
    e_btn_register[i].addEventListener("click",regform);
  }
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

function regform(){
  if(!e_btn_register) return false;
  var e_popup_processing = document.getElementsByClassName('htz-popup-processing')[0];
  var frm = findform(this);
  if(!frm) return false;
  var _count = getCookie(_trigger);
  
  //thefirstcookie();
  //return false;
    var ename = frm.getElementsByTagName("input");
    var _fullname='',_phone='',_email='';
    if(ename){
      for (var i = 0; i < ename.length; i++) {
        if(ename[i].name == 'name'){
            _fullname = ename[i].value;
            if(!_fullname){
                ename[i].style.borderColor = "red";
                //ename[i].innerHTML = "Vui lòng nhập họ tên";
                return false;
            }
        }else if(ename[i].name == 'phone'){
          _phone = ename[i].value;
          if(_phone.length < 10 || _phone.length > 11){
              ename[i].style.borderColor = "red";
              alert("Số điện thoại chưa đúng");
              //ename[i].innerHTML = "Vui lòng nhập số điện thoại";
              return false;
          }else if(ename[i].name == 'email'){
              _email = ename[i].value;
          }
        }
      }
    }     
    var eselsevice = frm.getElementsByTagName("select");
    var _sel_local='',_sel_service='';
    if(eselsevice){
        for (var i = 0; i < eselsevice.length; i++) {
        if(eselsevice[i].name == 'sel-service'){
           _sel_service = eselsevice[i].options[eselsevice[i].selectedIndex].text;
        }else if(eselsevice[i].name == 'sel-local'){
           _sel_local = eselsevice[i].options[eselsevice[i].selectedIndex].text;
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
  //pass argument
   var _url = document.URL;
    _host = extractHostname(_url);
    var _reg_url = _url.replace(/[&]/g, ';');
    var info = _reg_url;
      gbdataURL="nofile";
    //body 
    var _content = "";
    var _reg_url = _url.replace(/[&]/g, ';');
    var _namecat = _host;
    console.log(_trigger_title_qua,_trigger_gia_goc,_trigger_gia)
    var _body = _url+"<br>Dịch vụ:" + _trigger_title_qua+"<br> giá gốc: "+_trigger_gia_goc+"<br> giảm còn: "+_trigger_gia;
    var _typepost = "consultant";
    var _firstname = _fullname;
    var _mobile = _phone;
    var _name_status_type = "request";
    var http = new XMLHttpRequest();
    var url = "https://thammyvienthienkhue.com.vn/api/customer/consultant";
    var params = JSON.stringify({firstname: _firstname, mobile: _mobile, email:_email, address:_sel_local, namecat: _namecat, body:_body, typepost:_typepost, name_status_type:_name_status_type,orfilename:'', file:gbdataURL, url:_url });
    http.open("POST", url, true);
    //Send the proper header information along with the request
    http.setRequestHeader("Accept", "application/json");
    http.withCredentials = true;
    http.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
    //var e_result = frm.getElementsByClassName("result")[0];
    e_popup_processing.style.display = "block";
    e_popup_processing.style.zIndex = "99999";
    http.onreadystatechange = function() {
        if(http.readyState == 4 && http.status == 200) {
             var myArr = JSON.parse(this.responseText);
             console.log(myArr);      
             Object.keys(myArr).forEach(function(key) {      
              if(key=='success'){
                  if(!_count){
                      setCookie(_trigger,1,3);
                    }
                    else{
                      _count = parseInt(_count)-1;
                       setCookie(_trigger,_count,3);
                    }
                  e_popup_processing.style.display = "none";
                  var thankyou = 'http://thammyvienthienkhue.vn/san-qua/thanks-noel.html';
                  //redirectPost(thankyou, { text: 'text\n\ntext' });  
                  location.replace(thankyou);      
              }else if(key=='error'){
                e_result.innerHTML = myArr.error;
              }
            });    
        }
    }
    http.send(params);
}

function redirectPost(url, data) {
    var form = document.createElement('form');
    document.body.appendChild(form);
    form.method = 'post';
    form.action = url;
    for (var name in data) {
        var input = document.createElement('input');
        input.type = 'hidden';
        input.name = name;
        input.value = data[name];
        form.appendChild(input);
    }
    form.submit();
}
function hasClass(element, className) {
    return (' ' + element.className + ' ').indexOf(' ' + className+ ' ') > -1;
}
var _split,_minute,_countDownDate,ebtnclass;
var e_s_qua = document.getElementsByClassName('s-qua');
for (var i = 0; i < e_s_qua.length; i++) {
  _split = e_s_qua[i].className.split(/[ ,]+/);
  _minute = parseInt(_split[1]);
  ebtnclass = e_s_qua[i].getElementsByClassName("trigger")[0];
  if(!hasClass(ebtnclass, 'pos-'+i)){
    ebtnclass.classList.add('pos-'+i);
  }
  if(_minute > 0){
    _countDownDate = addMinutes(_minute);
    //e_s_qua[i].getElementsByClassName("btn-register")[0];
    loop_interval(countdown,_countDownDate,e_s_qua[i],i,_minute);
  }
}
function addMinutes(_minute) {
  var dt = new Date();
   dt.setMinutes( dt.getMinutes() + _minute );
   return dt;
}
function countdown(countDownDate,element,_position, _minute){
  // Update the count down every 1 second
  element.getElementsByClassName("tg-qua")[0].style.display = "block";
  element.getElementsByClassName("k-qua")[0].style.display = "none";
  //console.log(element);
  var x = setInterval(function() {
    // Get today's date and time
    var now = new Date().getTime();
    // Find the distance between now and the count down date
    var distance = countDownDate - now;
    // Time calculations for days, hours, minutes and seconds
    var days = Math.floor(distance / (1000 * 60 * 60 * 24));
    var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((distance % (1000 * 60)) / 1000);
    // Display the result in the element with id="demo"
    element.getElementsByClassName("color-empty")[0].innerHTML ='<span>'+hours+':</span><span>'+minutes+':</span><span>'+seconds+'</span>';
    // If the count down is finished, write some text
    if (distance < 0) {
      clearInterval(x);
      element.getElementsByClassName("tg-qua")[0].style.display = "none";
      element.getElementsByClassName("k-qua")[0].style.display = "block";
      _countDownDate = addMinutes(_minute);
      wait(waituntill,_countDownDate,element,_position, _minute)
    }
  }, 1000);
}
function loop_interval(callback){
    callback(arguments[1], arguments[2],arguments[3], arguments[4]);
}
function wait(callback){
  callback(arguments[1], arguments[2],arguments[3], arguments[4]);
}
function waituntill(countDownDate,element,_position, _minute){
  element.getElementsByClassName("tg-qua")[0].style.display = "none";
  element.getElementsByClassName("k-qua")[0].style.display = "block";
  var x = setInterval(function() {
    var now = new Date().getTime();
    var distance = countDownDate - now;
    if (distance < 0) {
      clearInterval(x);
      _countDownDate = addMinutes(_minute);
      loop_interval(countdown,_countDownDate,element,_position, _minute);
    }
  }, 1000);
}
window.onload = thefirstcookie;
function thefirstcookie(){
  var _e_getsuat_class, _e_getsuat, _ckgetsuat,_split,_getsuat, _e_getsuat_p;
  var _ck1stload = getCookie('1stload');
  var e_s_qua = document.getElementsByClassName('s-qua');
  if(!_ck1stload){
    for(var i = 0; i < e_s_qua.length; i++) {
      _e_getsuat_class = e_s_qua[i].getElementsByClassName('suat-qua')[0];
      console.log(_e_getsuat_class);
      _split =  _e_getsuat_class.className.split(/[ ]+/);
      console.log(_split);
      console.log(_split[1]);
      _e_getsuat = _e_getsuat_class.getElementsByTagName("p")[0];
      //_ckgetsuat = getCookie('pos-'+i);
       setCookie('pos-'+i,_split[1],3)
      _e_getsuat.innerHTML = 'Còn: '+_split[1]+' Suất'; 
      setCookie('1stload',1,3);
    }
  }else {
     for(var i = 0; i < e_s_qua.length; i++) {
      _e_getsuat_p = e_s_qua[i].getElementsByClassName('suat-qua')[0].getElementsByTagName("p")[0];
      _getsuat = getCookie('pos-'+i);
      _e_getsuat_p.innerHTML = 'Còn: '+_getsuat+' Suất';
    }
  }
}
// function getLastestReg(){
//   var _egetsuat;
//   var e_s_qua = document.getElementsByClassName('s-qua');
//   for(var i = 0; i < e_s_qua.length; i++) {
//     _egetsuat = e_s_qua[i].getElementsByClassName('suat-qua')[0].getElementsByTagName("p")[0];
//     _getsuat = getCookie('pos-'+i);
//     _egetsuat.innerHTML = 'Còn: '+_getsuat+' Suất';
//   }
// }
//getLastestReg();