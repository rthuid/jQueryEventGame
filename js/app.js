$(document).ready(function () {
    let allSafe = $('.safe').length
    $('#total').text(allSafe);
    $('.safe').mouseenter(function () {
        $(this).addClass('claimed');
        $(this).css('background-color', 'yellow');
        var claimedSafe = $('.safe.claimed').length
        $('#totalcount').text(claimedSafe);
        $('.glyphicon-play').mouseenter(function () {
            startAnimation();
        })
        $('.glyphicon-star').mouseenter(function () {
            endAnimation();
        })
    });
    //crossed
    $(".notsafe").mouseover(function () {
        alert("oops you crossed over, try again!");
    });
    //animation 1
    function startAnimation() {
        $('.glyphicon-play').animate({
            'fontSize': '30px'
        }, 500).animate({
            'fontSize': '10px'
        }, 500, startAnimation);
    }
    //animation 2
    function endAnimation() {
        $('.glyphicon-star').animate({
            'fontSize': '30px'
        }, 500).animate({
            'fontSize': '10px'
        }, 500, endAnimation);
    }    
});