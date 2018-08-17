var mySwiper = new Swiper ('.swiper-container', {
    direction: 'horizontal', // 滑动方向
    grabCursor : true,  //  鼠标样式
    loop: true,         // 循环
    speed:800,
    autoplay: {
        delay: 2500,
        stopOnLastSlide: false,
        disableOnInteraction: false
    },      // 自动
    // 如果需要分页器
    pagination: {
        el: '.swiper-pagination',  //  分页选择器
        clickable: true, // 可点击分页器跳转
        type: 'bullets',     // bullets 圆点（默认）fraction  分式   progressbar 进度条    custom 自定义
        dynamicBullets: false,   // 开启分页器主指示点
        dynamicMainBullets: 1   // 主指示点数量
    },
    slidesPerView: 1,
    preventLinksPropagation : false,  //  拖动的时候阻止点击事件
    observer:true,  // 动态监视swiper的样式（显示/隐藏），自动初始化swiper（分页器数量）
    effect:'slide'   // 'slide'（普通切换、默认）,"fade"（淡入）"cube"（方块）"coverflow"（3d流）"flip"（3d翻转）
    // 如果需要前进后退按钮
    // navigation: {
    //     nextEl: '.swiper-button-next',
    //     prevEl: '.swiper-button-prev'
    // },
    // 如果需要滚动条
    // scrollbar: {
    //     el: '.swiper-scrollbar'
    // }
});

$(window).ready(function () {
    $('.search-r').click(function () {
        if (!$('.search-l input').val()){
            $('.search-l span').css({'transform':'rotate(180deg)'});
            $('.search-l').css({'width':'calc(100% - 3rem)'})
        }else {
            alert('search');
        }
    });
    $('.search-l span').click(function () {
        $(this).css({'transform':'rotate(-180deg)'});
        $('.search-l').css({'width':'0'});
        $('.search-l input').val('');
    })
});

/*$(function () {
    $('.test').eq(0).click(function () {
        alert('click')
    })
});*/
// var test = document.getElementsByClassName('test')[0];
// test.onclick = function () {
//     alert('lcick')
// };
