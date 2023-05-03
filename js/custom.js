$('.tit .btn').click(function () {
    //$('.nav').css({display:"block"})
    //$('.nav').show();
    //$('.nav').slideDown();
    //$('.nav').toggle();
    //$('.nav').fadeToggle();
    $('.nav').slideToggle();
    $(this).toggleClass("on")
});

// banner

$('.ban').slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    dots: true,
    autoplay: true,
    autoplaySpeed: 2000,
});

//갤러리


$('.gallery_img').slick({
    arrows: false,

});

$('.gallery_btn .play').click(function () {
    $('.gallery_img').slick('slickPlay');
})
$('.gallery_btn .pause').click(function () {
    $('.gallery_img').slick('slickPause');
})
$('.gallery_btn .prev').click(function () {
    $('.gallery_img').slick('slickPrev');
})
$('.gallery_btn .next').click(function () {
    $('.gallery_img').slick('slickNext');
})


//탭메뉴
let tab_list = $('.tab_menu')

tab_list.find('ul ul').hide();
tab_list.find('li.active>ul').show();

$('.tab_menu>ul>li>a').click(function (e) {
    e.preventDefault();
    var $this = $(this);

    //next()는 바로밑 요소(바로 아래 동생)
    //.parent() 부모요소를 부름
    //.siblings() 나를 제외한 형제들
    /* $this.next().show();
    $this.parent('li').addClass("active");
    $this.parent('li').siblings('li').removeClass('active');
    $this.parent('li').siblings('li').find('ul').hide(); */

    $this.next().show().parent('li').addClass("active").siblings('li').removeClass('active').find('ul').hide();

});

//lyer popup
$('.layer').click(function(event){
    event.preventDefault();
    $('#layer').fadeIn();
});

$('#layer .close').click(function(event){
    event.preventDefault();
    $('#layer').fadeOut();
});

// window popup
$('.window').click(function(ev){
    ev.preventDefault();
    window.open("popup.html", "wd_pop", "width=900,height=590,left=100,top=200");
});

//lightgallery

lightGallery(document.getElementById('lightgallery'), {
    plugins: [lgThumbnail],
});