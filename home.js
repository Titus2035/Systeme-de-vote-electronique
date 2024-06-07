$(document).ready(function(){
    $('.ombre').hide();
    $('.votantpage').hide();
    $('.loaderpage').hide();
    $('.more').click(function(){
        $('.moremodal').addClass('see');
        $('.ombre').show();
    })

    $('.ombre').click(function(){
        $('.moremodal').removeClass('see');
        $(this).hide();
    })

    window.onscroll = function(){
        if(window.pageYOffset > 80){
            $('.menu').addClass('color');
            // $('.form.form-search').addClass('color');
            // $('.search').addClass('color');
            // $('.sicon').addClass('color');
            // $('.pp').addClass('color');
            $('.nav').addClass('fixed');
        }else{
            $('.menu').removeClass('color');
            // $('.form.form-search').removeClass('color');
            // $('.search').removeClass('color');
            // $('.sicon').removeClass('color');
            // $('.pp').removeClass('color');
            $('.nav').removeClass('fixed');
        }
    }

    $('.lksection').click(function(){
        $(this).addClass('active').siblings().removeClass('active');
        let id = $(this).attr('data-id');
        $('.psection').hide();
        $('.loaderpage').show();
        setTimeout(function(){
            $('.'+id).show();
            $('.loaderpage').hide();
        },1000);
       
    })

    $('.navlinkx').click(function(){
        $(this).addClass('active').siblings().removeClass('active');
        $('.lksection').removeClass('active');
        $('.lkc').addClass('active');
        let title = $(this).text();
        $('.titlesection').html(title);
        $('.psection').hide();
        $('.loaderpage').show();
        setTimeout(function(){
            $('.candidatpage').show();
            $('.loaderpage').hide();
        },1000);
       
    })

});