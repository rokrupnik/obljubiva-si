"use strict";

$(document).ready(() => {
    // Webpage parts
    var quote = $('#quote');
    var form = $('#form');
    var success = $('#success-response');
    var error = $('#error-response');

    var confirmBtn = $('#confirm');
    var submitBtn = $('#submit');
    var resetBtn = $('#reset');
    var nameInput = $('#name');
    var remarksInput = $('#remarks');
    var phoneInput = $('#phone');

    /**************** INIT *******************/
    form.hide();
    success.hide();
    error.hide();

    submitBtn.prop('disabled', true);

    var checkRequiredFields = () => {
        var numOfWordsInName = _.words(nameInput.val()).length;
        var phoneNumber = phoneInput.val().replace(' ', '');
        if (numOfWordsInName > 1 && numOfWordsInName < 6 && phoneNumber.length >= 9 && phoneNumber.length < 15) {
            submitBtn.removeClass('disabled');
            submitBtn.prop('disabled', false);
        } else {
            submitBtn.addClass('disabled');
            submitBtn.prop('disabled', true);
        }
    };

    nameInput.on('keyup', checkRequiredFields);
    phoneInput.on('keyup', checkRequiredFields);

    /**************** POTRDI PRIJAVO CLICK ****************/
    confirmBtn.on('click', () => {
        confirmBtn.fadeOut(400, () => {
            quote.hide();
            form.fadeIn();
        });
    });

    /**************** ODDAJ CLICK ****************/
    submitBtn.on('click', () => {
        if (submitBtn.hasClass('disabled')) {
            return;
        }

        var application = {
            name: nameInput.val(),
            remarks: remarksInput.val(),
            phone: phoneInput.val(),
            type: 'baking'
        };

        $.ajax({
            url: 'api/applications',
            contentType: "application/json; charset=utf-8",
            data: JSON.stringify(application),
            type: 'POST'
        }).success((response) => {
            form.fadeOut(400, () => {
                success.fadeIn();
            });
        }).error((response) => {
            console.log(response);
            form.fadeOut(400, () => {
                error.fadeIn();
            }); 
        });
    });

    /**************** POSKUSNI PONOVNO CLICK ****************/
    resetBtn.on('click', () => {
        error.fadeOut(400, () => {
            form.fadeIn();
        });
    });
});