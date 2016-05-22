'use strict';

$(document).ready(() => {
    setTimeout(() => {
        $('span.title').on('click', () => {
            location.assign('index.html');
        });
    }, 1000);    
});