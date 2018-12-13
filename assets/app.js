import jQuery from 'jquery';

const $ = jQuery;

$(document).ready(() => {
    $('.schedule-day__events .metadata').css({
        'border-top': '1px solid #ccc',
        'margin-top': '12px',
        'margin-bottom': '12px',
        'padding-top': '8px',
        'padding-bottom': '8px',
    });

    $('.schedule-day__events .metadata a').css({
        'font-size': '14px',
        'font-weight': 'bold',
    });

    $('.schedule-day__events .metadata a:last-child').css({
        'font-size': '18px',
    });

    $('li.todo .checkbox a').css({
        'font-size': '14px',
    });
});
