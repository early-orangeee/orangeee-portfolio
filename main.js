$(document).ready(function() {
    // マウスがカードに入ったときの処理
    $('.skill-card').mouseenter(function() {
        $(this).stop().animate({ scale: 1.2 },500); // カードを1.25倍に拡大する（300ミリ秒かけてアニメーション）
    });

    // マウスがカードから出たときの処理
    $('.skill-card').mouseleave(function() {
        $(this).stop().animate({ scale: 1 }, 500); // カードの拡大を元に戻す（300ミリ秒かけてアニメーション）
    });

    // マウスがカードに入ったときの処理
    $('.work-item').mouseenter(function() {
        $(this).stop().animate({ scale: 1.1 },500); // カードを1.25倍に拡大する（300ミリ秒かけてアニメーション）
    });

    // マウスがカードから出たときの処理
    $('.work-item').mouseleave(function() {
        $(this).stop().animate({ scale: 1 }, 500); // カードの拡大を元に戻す（300ミリ秒かけてアニメーション）
    });
    
    $(window).scroll(function(){
        if ($(this).scrollTop() > 100) {
            $('.back-to-top').fadeIn();
        } else {
            $('.back-to-top').fadeOut();
        }
    });

    $('.back-to-top').click(function(){
        $('html, body').animate({scrollTop : 0},300);
        return false;
    });

});

// //logoの表示
//     $(window).on('load',function(){
//         $("#splash").delay(1200).fadeOut('slow');//ローディング画面を1.2秒（1200ms）待機してからフェードアウト
//         $("#splash_logo").delay(500).fadeOut('slow');//ロゴを0.5秒（500ms）待機してからフェードアウト
//     });


// ここからGSAP

gsap.fromTo(
    ".about-image",1,
    {
        x:-100,
        y:-100,
        opacity:0,
        display:"none"
    },
    {
        x:0,
        y:0,
        opacity:1,
        display:"block",
        scrollTrigger:{
            trigger:".about-image",
            start:"center center",
        },
        delay:0.2
    }

);

gsap.fromTo(
    ".about-comment", 1,
    {
        x: 100,
        y:-100,
        opacity: 0,
        display: "none"
    },
    {
        x: 0,
        y: 0,
        opacity: 1,
        display: "block",
        scrollTrigger: {
            trigger: ".about-comment",
            start: "top center",
        }
    }
);
