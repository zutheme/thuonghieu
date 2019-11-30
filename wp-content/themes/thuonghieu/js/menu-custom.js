

$(function () {

    "use strict";

    // ============================================================== 

    //This is for preloader

    // ============================================================== 

   

    $('.icon-menu').on('click', function() {

        $(this).toggleClass('active');

        $('body').toggleClass('open');

        

    });

    $(window).scroll(function () {

        if ($(window).scrollTop() >= 40) {

            $('body').addClass('scroll');

        }

    });

    $(window).scroll(function () {

        if ($(window).scrollTop() < 8) {

            $('body').removeClass('scroll');

        }

        var scrollHeight, totalHeight;

        scrollHeight = document.body.scrollHeight;

        totalHeight = window.scrollY + window.innerHeight + 80;



        if(totalHeight >= scrollHeight)

        {

             $('body').addClass('endpage');

        }

        else {

             $('body').removeClass('endpage');

        }

    });

    $('.bt-top').on('click', function (e) {

        e.preventDefault();

        $('html,body').animate({

            scrollTop: 0

        }, 700);

    });

    

});

 $(document).ready(function () {

    var width_check = $(window).width();

    if (width_check <= 768) {

        $('body').append('<a href=".navbar-toggler" class="bg-shadow" data-toggle="collapse" data-target="#navbarNavDropdown"></a>');

    }

    $(".bg-shadow").click(function () {

        $("body").removeClass("open");

        $(".navbar-toggler").removeClass("active");

    });

});

var _with = screen.width;
var e_test_with = document.getElementsByClassName("support")[0];
e_test_with.addEventListener("click",function(){
    alert(_with);
});
if(_with > 991){

    var e_nav_link = document.getElementsByClassName("nav-link");

    for (var i = 0; i < e_nav_link.length; i++) {

        e_nav_link[i].addEventListener('mouseover', function() {

             var e_parent = this.parentElement;
             //console.log(e_parent);

             var e_first_li = e_parent.getElementsByClassName("submenu")[0];

             // console.log(e_first_li);

             // var e_li = e_first_li.getElementsByClassName("dropdown");

             // for (var i = 0; i < e_li.length; i++) {

             //     removeClass(e_li[i], "dropdown");

             // }

             e_first_li.classList.add("open-detail");

             var e_list_li = e_first_li.getElementsByTagName("li");

             for (var i = 0; i < e_list_li.length; i++) {

                if(hasClass(e_list_li[i], "depth-1")&&hasClass(e_list_li[i], "menu-item-has-children")){

                    removeClass(e_list_li[i], "dropdown");

                    e_list_li[i].getElementsByTagName("a")[0].addEventListener('mouseover', function() {

                         var e_list_a = this.parentElement.getElementsByClassName("submenu")[0].getElementsByTagName("li");

                         var ul = document.createElement("ul");

                         ul.setAttribute("class", "list-detail");

                         for (var i = 0; i < e_list_a.length; i++) {

                             var e_link_a = e_list_a[i].getElementsByTagName("a")[0];

                              var li = document.createElement("li");

                              var cln = e_link_a.cloneNode(true);

                              li.appendChild(cln);

                              ul.appendChild(li);

                         }

                         var e_mb_list = this.parentElement.getElementsByClassName("media-body")[0];

                         while (e_mb_list.hasChildNodes()) {

                            e_mb_list.removeChild(e_mb_list.firstChild);

                            }

                         e_mb_list.appendChild(ul);

                     });

                }

             }

        });

        e_nav_link[i].addEventListener('mouseout', function() {

                var e_parent = this.parentElement;

                var e_first_li = e_parent.getElementsByClassName("submenu")[0];

                removeClass(e_first_li, "open-detail");

        });

    }

} 

function removeClass(elem, className) {

    var newClass = ' ' + elem.className.replace( /[\t\r\n]/g, ' ') + ' ';

    if (hasClass(elem, className)) {

        while (newClass.indexOf(' ' + className + ' ') >= 0 ) {

            newClass = newClass.replace(' ' + className + ' ', ' ');

        }

        elem.className = newClass.replace(/^\s+|\s+$/g, '');

    }

} 

function hasClass(element, className) {

    return (' ' + element.className + ' ').indexOf(' ' + className+ ' ') > -1;

}