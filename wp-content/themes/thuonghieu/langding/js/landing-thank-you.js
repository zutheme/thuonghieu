let e_ahref;
var myVar = setInterval(myTimer, 200);
function myTimer() {
    e_ahref = document.getElementsByTagName("a");
    for (var i = 0; i < e_ahref.length; i++) {
      if(e_ahref[i].getAttribute("href")=='https://ladipage.vn/?utm_source=freemium'){
        var _parent_href = e_ahref[i].parentElement;
        //console.log(_parent_href);
        e_ahref[i].setAttribute('style', 'display:none !important');
        //e_ahref[i].style.display = "none !important";
        //_parent_href.removeChild(e_ahref[i]);
        clearInterval(myVar);
      }
    }
}

