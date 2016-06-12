'use strict';

$(document).ready(() => {

    $('.feature:not(.box-current)').hide();

    $('.button.box-link').on('click', (e) => {
        var newBoxId = e.target.id.substring(0,5);
        var currentBox = $('.box-current');

        if (newBoxId === currentBox[0].id) {
            return;
        }

        currentBox.fadeOut(400, () => {
            $('#' + newBoxId).fadeIn().addClass('box-current').css('display', 'flex');
        })
        .removeClass('box-current');
    });
});