﻿var BE = {
    _domain: window.location.protocol + "//" + window.location.hostname,
    _webRoot: jQuery('meta[name=webRoot]').attr("content"),
    init: function (webRoot) {

        BE._webRoot = !BE.functions.checkEmpty(webRoot) ? webRoot : BE._webRoot;
        BE.loading.init();
        BE.functions.init();
    },
    t: function (string, object) {
        return typeof DLocale.strings[string] != 'undefined' ? DLocale.strings[string] : string;
    },
    loading: {
        _tagLoading: Object,
        _imgLoading: 'data:image/gif;base64,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',
        _bgLoading: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyBpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMC1jMDYwIDYxLjEzNDc3NywgMjAxMC8wMi8xMi0xNzozMjowMCAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENTNSBXaW5kb3dzIiB4bXBNTTpJbnN0YW5jZUlEPSJ4bXAuaWlkOkI2OTlFNzdGNkUwNzExRTM4NkNEQ0ZEM0FEMEFCRDgxIiB4bXBNTTpEb2N1bWVudElEPSJ4bXAuZGlkOkI2OTlFNzgwNkUwNzExRTM4NkNEQ0ZEM0FEMEFCRDgxIj4gPHhtcE1NOkRlcml2ZWRGcm9tIHN0UmVmOmluc3RhbmNlSUQ9InhtcC5paWQ6QjY5OUU3N0Q2RTA3MTFFMzg2Q0RDRkQzQUQwQUJEODEiIHN0UmVmOmRvY3VtZW50SUQ9InhtcC5kaWQ6QjY5OUU3N0U2RTA3MTFFMzg2Q0RDRkQzQUQwQUJEODEiLz4gPC9yZGY6RGVzY3JpcHRpb24+IDwvcmRmOlJERj4gPC94OnhtcG1ldGE+IDw/eHBhY2tldCBlbmQ9InIiPz5s3lSdAAAAGElEQVR42mJkYGDYzEAEYBxVSF+FAAEGABeIBwlGcNnyAAAAAElFTkSuQmCC',
        init: function () {

            jQuery("html body").append('<div id="loading"><span class="csloading"></div></div>');
            BE.loading._tagLoading = jQuery("#loading");
            BE.loading._tagLoading.css({
                'width': "100%",
                'height': "100%",
                'background': "url(" + BE.loading._bgLoading + ") repeat",
                'position': "fixed",
                'top': "0",
                'left': "0",
                'z-index': "999999",
                'display': "none"
            });
            BE.loading._tagLoading.find('.csloading').css({
                width: "100%",
                height: "100%",
                background: "url(" + BE.loading._imgLoading + ") center center no-repeat",
                position: "fixed"
            });
        },
        show: function () {
            BE.loading._tagLoading.show();
        },
        hide: function () {
            BE.loading._tagLoading.hide();
        }
    },
    facebook: {
        _fbAppID: jQuery('meta[name=fbAppID]').attr("content"),
        init: function (fbAppID) {
            BE.facebook._fbAppID = !BE.functions.checkEmpty(fbAppID) ? fbAppID : BE.facebook._fbAppID;

            jQuery("html body").append('<div id="fb-root"></div>');
            window.fbAsyncInit = function () {
                FB.init({ appId: BE.facebook._fbAppID, cookie: true, xfbml: true, oauth: true, status: true, version: 'v2.6' });
            };
            (function (d, s, id) {
                var js, fjs = d.getElementsByTagName(s)[0];
                if (d.getElementById(id)) { return; }
                js = d.createElement(s); js.id = id;
                js.src = "//connect.facebook.net/en_US/sdk.js";
                fjs.parentNode.insertBefore(js, fjs);
            }(document, 'script', 'facebook-jssdk'));
        }
    },
    functions: {
        _allowExtension: ['jpg', 'gif', 'png'],
        _queryString: {},
        init: function () {
            // BE.functions.parseQueryString();
            jQuery('.js-number').on('keypress', function (event) {
                var charCode = (event.which) ? event.which : event.keyCode;
                if (charCode == 8 || charCode == 46) {
                    return true;
                }
                if (charCode >= 48 && charCode <= 57) {
                    var maxLenght = jQuery(this).attr('data-max-lenght');
                    if (BE.functions.checkNumeric(maxLenght) && parseInt(maxLenght) > 0) {
                        if (jQuery(this).val().length < maxLenght) {
                            return true;
                        } else {
                            return false;
                        }
                    } else {
                        return true;
                    }
                }
                return false;
            })
        },
        checkEmpty: function (value) {
            return (typeof value === "undefined" || value === null || value.length === 0);
        },
        checkEmail: function (email) {
            if (email.search(/^\w+((-\w+)|(\.\w+))*\@[A-Za-z0-9]+((\.|-)[A-Za-z0-9]+)*\.[A-Za-z0-9]{2,4}$/) != -1)
                return true;
            return false;
        },
        validateIdno: function (idNo) {
            idNo = idNo.trim();
            if (isNaN(idNo) || idNo.length > 12 || idNo.length < 9)
                return false;
            return true;
        },
        validatePhoneNo: function (phoneNo) {
            phoneNo = phoneNo.trim();
            if (isNaN(phoneNo) || phoneNo.length >= 12 || phoneNo.length <= 9)
                return false;
            return true;
        },
        checkFormatPhone: function (_phoneNumber) {
            if (_phoneNumber.length >= 7 && !isNaN(_phoneNumber)) {
                var headNumber = _phoneNumber.substring(0, 2);
                if (headNumber == '01' || headNumber == '09' || headNumber == '08') {
                    if ((headNumber == '01' && _phoneNumber.length == 11) || (headNumber == '09' && _phoneNumber.length == 10) || (headNumber == '08' && _phoneNumber.length > 7)) {
                        return true;
                    } else {
                        return false;
                    }
                } else {

                    return false;
                }
            } else {
                return false;
            }
        },
        checkExtension: function (fileName) {
            return (new RegExp('(' + BE.functions._allowExtension.join('|').replace(/\./g, '\\.') + ')$')).test(fileName);
        },
        checkNumeric: function (number) {
            var regex = RegExp(/^\-{0,1}(?:[0-9]+){0,1}(?:\.[0-9]+){0,1}$/i);
            return regex.test(number) && number.length > 0;
        },
        parseQueryString: function () {
            window.location.search.replace(/[?&]+([^=&]+)=([^&]*)/gi, function (str, key, value) {
                BE.functions._queryString[key] = value;
            });
        },
        removeQueryString: function (props) {
            if (typeof BE.functions._queryString != 'undefined') {
                for (var i = 0; i < props.length; i++) {
                    if (typeof BE.functions._queryString[props[i]] != 'undefined')
                        delete BE.functions._queryString[props[i]];
                };
            }
            return BE.functions.concatQueryString();
        },
        concatQueryString: function () {
            var _params = '', comas = '?';
            var _queryString = BE.functions._queryString;
            jQuery.each(_queryString, function (key, val) {
                _params += comas + key + '=' + val;
                comas = '&';
            });
            return _params;
        },
        checkDevice: function () {
            if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
                return true;
            }
            return false;
        }
    },
    alert: function (message, callback) {
        swal(message);
    },
};


BE.httpRequest = {
    request: Object,
    send: function (_url, _method, _formData) {
        if (_method == 'post' && typeof _formData._token == 'undefined') {
            _formData._token = jQuery('meta[name=_token]').attr("content");
        }
        BE.httpRequest.request = jQuery.ajax({
            url: _url,
            type: _method,
            data: _formData
        });
        //BE.httpRequest.request.done(function (response, textStatus, jqXHR){
        //  console.log(response);
        // });
        BE.httpRequest.request.fail(function (jqXHR, textStatus, errorThrown) {
            BE.loading.hideLoading();
            APP.alerter('Error!, Please contact with administrator');
            console.log("The following error occurred: " + textStatus, errorThrown);
        });
    }
}


var isMobile = {
    Android: function () {
        return navigator.userAgent.match(/Android/i);
    },
    BlackBerry: function () {
        return navigator.userAgent.match(/BlackBerry/i);
    },
    iOS: function () {
        return navigator.userAgent.match(/iPhone|iPad|iPod/i);
    },
    Opera: function () {
        return navigator.userAgent.match(/Opera Mini/i);
    },
    Windows: function () {
        return navigator.userAgent.match(/IEMobile/i) || navigator.userAgent.match(/WPDesktop/i);
    },
    any: function () {
        return (isMobile.Android() || isMobile.BlackBerry() || isMobile.iOS() || isMobile.Opera() || isMobile.Windows());
    }
};

function path(_url) {
    return drupalSettings.path.baseUrl + drupalSettings.path.pathPrefix + _url;
}


/*-----------------------------------------------------------------------*/
jQuery(document).ready(function () {
    BE.init();
});