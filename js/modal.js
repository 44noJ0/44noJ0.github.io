$(function(){
	//モーダル
    $("body").append("<div id='grayLayer' class='close'></div><div id='overLayer'></div><a href='#' class='close'>close</a>");

    var over = $("#overLayer");
    var modal = $("#grayLayer, a.close, #overLayer");
    
    var open = $("a.open");
    var close = $(".close");
    
    var mspeed = 5;
    var in_flg = true;
    var out_flg = true;

    open.on('click', function () {
        if (in_flg) {
            in_flg = false;
            modal.fadeIn('mspeed');
            over.html("<img src='" + $(this).attr("href") + "' class='openimg' />");
            in_flg = true;
            return false;
        } else {
            return false;
        }
    });
    close.on('click', function () {
        if (out_flg) {
            out_flg = false;
            modal.fadeOut('mspeed');
            out_flg = true;
        } else {
            return false;
        }
    });
     
	//フェードイン
	$(window).scroll(function (){
        $('.fadein').each(function(){
            var elemPos = $(this).offset().top;
            var scroll = $(window).scrollTop();
            var windowHeight = $(window).height();
            if (scroll > elemPos - windowHeight + 200){
                $(this).addClass('scrollin');
            }
        });
    });
	//href="#"で指定してるaタグを無効化
    $("a[href=#]").click(function(e){
        e.preventDefault();
    });

});