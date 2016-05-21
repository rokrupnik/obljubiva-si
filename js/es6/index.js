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

    /**************** INIT *******************/
    form.hide();
    success.hide();
    error.hide();

    nameInput.on('keyup', () => {
        var numOfWordsInName = _.words(nameInput.val()).length;
        if (numOfWordsInName > 1 && numOfWordsInName < 6) {
            submitBtn.removeClass('disabled');
        } else {
            submitBtn.addClass('disabled');
        }
    })

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
            remarks: remarksInput.val()
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