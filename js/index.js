$(function () {

    window.sr = ScrollReveal();

    if ($(window).width() < 768) {

        if ($('.timeline-content').hasClass('tile-left')) {
            $('.timeline-content').removeClass('tile-left').addClass('tile-right');
        }
        sr.reveal('.tile-right', {
            duration: 4000,
            origin: 'right',
            distance: '7rem',
            delay: 0,
            interval: 0,
        });

    } else {
        sr.reveal('.tile-left', {
            duration: 2000,
            origin: 'right',
            distance: '7rem',
            rotate: { x: 0, y: 0, z: 50 },
            delay: 50,
            interval: 100,
            reset: true
        });
        sr.reveal('.tile-right', {
            duration: 2000,
            origin: 'left',
            distance: '7rem',
            delay: 250,
            interval: 100,
            reset: true,
            rotate: { z:50 }
        });
    }
});