$(function() {
    var nav = $('.main_menu');
    var offset = nav.offset();
    var windowHeight = $(window).height();

    //メニュー固定処理
    $(window).scroll(function () {
        var adjustment = $('#about').offset().top - 20;
        //メインメニュー
        if ($(window).scrollTop() > offset.top + adjustment) {
            nav.addClass('fixed');
        } else {
            nav.removeClass('fixed');
        }
    });

    //基本メニューによる画面移動処理
    $('.scroll').click(function(e){
        e.preventDefault();

        var url = this.href;
        var target = url.split("#")[1];
        var target_top = $("#"+ target).offset().top - 70;
        if(nav.hasClass('fixed') == false){
            target_top -= 46;
        }
        //改善の余地あり
        $('html,body').animate({scrollTop:target_top},'slow');
        if($('.main_menu').css('display') == 'none'){
            closeDrawr();
        }
    });

    //ドロワーメニュー表示
    $('.drawr').css('height',windowHeight)
    $('.open_menu').click(function() {
        $('.drawr').animate({width:'toggle'});
        $('.main_menu').hide();
    });

    //ドロワーメニューを閉じる
    $('.close_menu').click(function(e) {
        closeDrawr();
    });
});

const closeDrawr = () => {
    $('.drawr').animate({width:'toggle'},'normal',function() {
        $('.main_menu.small').show();
    });
}