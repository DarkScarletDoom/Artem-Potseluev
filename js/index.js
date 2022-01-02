$(function() {

    current_img = [
        'img/flowers.jpg',
        'img/roof.jpg',
        'img/street.jpg',
    ]

    let i = 0;

    function highlight(content){

        for(j = 0; j < 3; j++){
            $('#' + String(j)).removeClass('active');
        }

        content.addClass('active');
    }

    $(".next").click(function () {
        i++;
        if(i == 3){
            i = 0;
        }
        let conteiner =  $('#' + String(i));
        $('.main_img_of_gallery').css('background-image', 'url(' + current_img[i] + ')');
        highlight(conteiner);
    });
    
    $(".previous").click(function () {
        i--;
        if(i < 0){
            i = 2;
        }
        let conteiner =  $('#' + String(i));
        $('.main_img_of_gallery').css('background-image', 'url(' + current_img[i] + ')');
        highlight(conteiner);
    });

    $(".mobile_menu_logo").click(function () {
        if( $('.mobile_menu').css('display') == 'block'){
            $('.mobile_menu').css('display', 'none');
        }
        else{
            $('.mobile_menu').css('display', 'block');
        }
    });

});
