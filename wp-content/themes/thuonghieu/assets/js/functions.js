var VINAPP = {
    init: function () {
        VINAPP.Contact.init();
        VINAPP.Paging.init();

        $('.js-select-redirect').change(function () {
            location.href = $(this).val();
        });

        $('.js-ir-filters').change(function () {
            location.href = $('.ir-docpage-r').attr('data-href') + '?items=' + $('.slt-items').val() + '&year=' + $('.slt-year').val();
        });
    }
};


VINAPP.Contact = {
    init: function () {
        var self = VINAPP.Contact;
        self.submitForm();
    },
    submitForm: function () {
        var container = $('.frmContact'),
            btnSubmit = container.find('.btn-submit');

        function init() {
            btnSubmit.on('click', sendData);
        }

        function sendData() {
            container.find('input').removeClass('has-error');
            var pass = VINAPP.Form.checkRequireds(container);
            pass && (pass = VINAPP.Form.checkMail(container));
            pass && (pass = VINAPP.Form.checkPhone(container));
            if (pass) {
                var recaptcha = grecaptcha.getResponse();
                if (recaptcha.length == 0) {
                    BE.alert($(".g-recaptcha").attr("data-message"));
                } else {
                    BE.loading.show();
                    BE.httpRequest.send(container.attr('action'), 'post', $(container).serializeArray());
                    BE.httpRequest.request.done(function (response, textStatus, jqXHR) {
                        if (response.status == 1) {
                            container.find('.form-control').val('');
                        }
                        BE.alert(response.message, function () {
                            location.reload();
                        });
                        BE.loading.hide();
                    });
                }
            }
            return false;
        }

        init();
    }
}

VINAPP.Form = {
    checkMail: function (_container) {
        var email = _container.find('.js-email');
        if (!BE.functions.checkEmail(email.val())) {
            email.addClass('has-error');
            return false;
        }
        return true;
    },
    checkPhone: function (_container) {
        var phone = _container.find('.js-phone');
        if (!BE.functions.checkFormatPhone(phone.val())) {
            phone.addClass('has-error');
            return false;
        }
        return true;
    },
    checkRequireds: function (container) {
        var pass = true,
            input = {},
            type = '',
            val = '';

        requiedInputs = container.find('.js-required');
        requiedInputs.each(function () {
            input = jQuery(this);
            type = input.attr('type');
            if (type == 'checkbox') {
                val = input.is(":checked") ? 'checked' : '';
            } else if (type == 'radio') {
                var name = input.attr('name');
                val = $("input[name=" + name + "]:checked").length > 0 ? 'checked' : '';
            } else {
                val = jQuery.trim(input.val());
            }
            if (val.length == 0) {
                input.addClass('has-error');
                pass = false;
            }
        });
        return pass;
    }
}

VINAPP.Paging = {
    init: function () {
        var self = VINAPP.Paging;
        self.loadData();
    },
    loadData: function () {
        function init() {
            $(".js-ajax-paging").off().on('click', requestData);
        }

        function requestData(e) {
            e.preventDefault();

            BE.loading.show();
            BE.httpRequest.send($(this).attr('href'), 'get');
            BE.httpRequest.request.done(function (response, textStatus, jqXHR) {

                $(".js-list-results").html(response.Template);
                $(".js-paging").html(response.PagingList);

                //init event
                init();

                BE.loading.hide();
            });
        }

        init();
    }
}

jQuery(document).ready(function () {
    VINAPP.init();
});