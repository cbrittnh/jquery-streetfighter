$(document).ready(function () {

    $('.ryu').mouseenter(function () {
        $('.ryu-ready').show();
        $('.ryu-still').hide();
        $('.ryu-cool').hide();
        $('.ryu-throwing').hide();
    })

    .mouseleave(function () {
        $('.ryu-still').show();
        $('.ryu-ready').hide();
        $('.ryu-cool').hide();
        $('.ryu-throwing').hide();
    })

    .mousedown(function () {
        playHadouken();
        $('.ryu-throwing').show();
        $('.ryu-ready').hide();
        $('.ryu-cool').hide();
        $('.hadouken').finish().show()
            .animate({
                    'left': '300px'
                },
                500,
                function () {
                    $(this).hide();
                    $(this).css('left', '-212px');
                });
    })

    .mouseup(function () {
        $('.ryu-ready').show();
        $('.ryu-throwing').hide();
        $('.ryu-cool').hide();
        $('.ryu-still').hide();
    });

    $(document).keydown(function (e) {
        if (e.keyCode == 88) {
            $('.ryu-cool').show();
            $('.ryu-still').hide();
            $('.ryu-ready').hide();
            $('.ryu-throwing').hide();
        }
    })

    $(document).keyup(function (e) {
        if (e.keyCode == 88) {
            $('.ryu-still').show();
            $('.ryu-ready').hide();
            $('.ryu-cool').hide();
            $('.ryu-throwing').hide();
        }
    });
});

function playHadouken() {
    $('#hadouken-sound')[0].volume = 0.5;
    $('#hadouken-sound')[0].load();
    $('#hadouken-sound')[0].play();
}