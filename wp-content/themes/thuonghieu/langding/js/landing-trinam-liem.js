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



/*comment*/



document.addEventListener('DOMContentLoaded', (event) => {



  

  /*form register*/

  var _e_popup_form = document.getElementsByClassName('frm-popup')[0];

console.log(_e_popup_form);

  var e_btn_reg_popup = _e_popup_form.getElementsByClassName('btn-reg-survey')[0];



  e_btn_reg_popup.addEventListener("click", reg_popup);



  function reg_popup(){


  console.log(e_btn_reg_popup);
    var _url = document.URL;



    _host = extractHostname(_url);



    var _efullname = _e_popup_form.getElementsByClassName('fullname')[0];



    var _fullname = _efullname.value;



    var _ephone = _e_popup_form.getElementsByClassName('phone')[0];

    //var _e_email = _e_popup_form.getElementsByClassName('email')[0];

    var _email = '';

    //var name_sevice = getSelectedText('select-service');

    //var _ecomment = _e_popup_form.getElementsByClassName('comment')[0];

    var _comment = '';

    var str_method = "";
    var e_local_service = _e_popup_form.getElementsByClassName('local-service')[0];
    var local_service = e_local_service.options[e_local_service.selectedIndex].text;


    var _phone = _ephone.value;
    //var vnf_regex = /((09|03|07|08|05)+([0-9]{8})\b)/g;
    //vnf_regex.test(mobile)
    var format_phone = _phone.length;
    if(format_phone < 10 || format_phone > 11){
        _ephone.style.border = "1px solid red";;
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



    var _body = _url+"<br>comment:" + _comment;



    var _typepost = "consultant";



    var _firstname = _fullname;



    var _mobile = _phone;



    var _name_status_type = "request";



    var http = new XMLHttpRequest();



    var url = "https://thammyvienthienkhue.com.vn/api/customer/consultant";



    var params = JSON.stringify({firstname: _firstname, mobile: _mobile, email:_email, address:local_service, namecat: _namecat, body:_body, typepost:_typepost, name_status_type:_name_status_type,orfilename:'', file:gbdataURL, url:_url });



    http.open("POST", url, true);



    //Send the proper header information along with the request



    http.setRequestHeader("Accept", "application/json");



    http.withCredentials = true;



    http.setRequestHeader("Content-type", "application/x-www-form-urlencoded");



    var load = _e_popup_form.getElementsByClassName("loading")[0];



    load.style.display = "block";



    var e_result = _e_popup_form.getElementsByClassName("result")[0];



    http.onreadystatechange = function() {



        if(http.readyState == 4 && http.status == 200) {



             var myArr = JSON.parse(this.responseText);



             console.log(myArr);      



             Object.keys(myArr).forEach(function(key) {      



              if(key=='success'){



                  _efullname.value = "";

                  //_e_email.value = "";

                  _ephone.value = "";

                  //_ecomment.value = "";
                   var thankyou = 'https://thammyvienthienkhue.vn/triphasic-cam-on/';
                  location.replace(thankyou);
                  //e_result.innerHTML = "Cảm ơn bạn "+myArr.firstname+" đã tham gia";



                  //setTimeout(function(){

                    //e_result.innerHTML = "";

                    //document.getElementById("POPUP607").display = "block !important;";

                  //},10000);       



              }else if(key=='error'){



                e_result.innerHTML = myArr.error;



              }



            });



            load.style.display = "none";      



        }



    }



    http.send(params);



  }

  /*end form popup*/

})



