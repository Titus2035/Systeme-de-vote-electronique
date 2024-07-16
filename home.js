$(document).ready(function(){
    $('.ombre').hide();
    // $('.step1').hide();
    // $('.step2').hide();
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
        },10);
       
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
        },10);
       
    })

    $('.prev').hide();
    $('.next').click(function(){
        let dataid = $(this).attr('data-id');
        if((parseInt(dataid)+1) <= 3){
            $('.step'+dataid).css('margin-left', -(435)+'px');
            $(this).attr('data-id', parseInt(dataid) + 1);
            $('.prev').attr('data-id', parseInt(dataid) + 1);
        }

        if(parseInt(dataid) >= 2){
            $(this).html('Terminer');
        }else{
            $(this).html('Suivant <i class="ri-arrow-right-s-line"></i>');
        }

        if(parseInt(dataid) >= 1){
            $('.prev').show();
        }else{
            $('.prev').hide();
            // $(this).html('Suivant <i class="ri-arrow-right-s-line"></i>');
        }
        

    })

    $('.prev').click(function(){
        let dataid = $(this).attr('data-id');
        console.log(dataid);
        if((parseInt(dataid)) > 1){
            $('.step'+parseInt(dataid) - 1).css('margin-left', (200)+'px');
            $(this).attr('data-id', parseInt(dataid) - 1);
            $('.suiv').attr('data-id', parseInt(dataid) - 1);
        }

        if(parseInt(dataid) < 2){  
            $(this).html('Suivant <i class="ri-arrow-right-s-line"></i>');
        }else{
            $(this).html('Terminer');
        }

        if(parseInt(dataid) >= 1){
            $('.prev').show();
        }else{
            $('.prev').hide();
            // $(this).html('Suivant <i class="ri-arrow-right-s-line"></i>');
        }
        

    })

});