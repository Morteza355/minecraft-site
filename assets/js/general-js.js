$('#burger-menu').click(function (e) {
    $('.header-list').toggleClass('flex');
    if ($('.header-list').hasClass('flex')) {
        $('.burger').addClass('bi-list-nested');
        $('.burger').removeClass('bi-list');
    } else {
        $('.burger').addClass('bi-list');
        $('.burger').removeClass('bi-list-nested');
    }
});
// -------------------------------- //
var backToTopButton = document.getElementById('scroll-top-button');
window.onscroll = function styleButton() {
    if (document.body.scrollTop > 70 || document.documentElement.scrollTop > 70) {
        backToTopButton.style.display = 'block';
    } else {
        backToTopButton.style.display = 'none';
    }
}
backToTopButton.addEventListener('click', function () {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
});
// -------------------------------- //
$('#account-buy-btn').click(function (e) {
    $('body').css({ 'overflow': 'hidden' });
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
    $('#account-buy-modal').css({
        'display': 'flex',
        'opacity': 0,
    }).animate({ 'opacity': 1 }, 200);
});
$('.hide-modal').click(function (e) {
    $('body').css({ 'overflow': 'auto' });
    $('#account-buy-modal').css({
        'display': 'none',
        'opacity': 1,
    }).animate({ 'opacity': 0 }, 400);
});