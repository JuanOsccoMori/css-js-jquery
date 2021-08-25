import $ from "jquery";

$(document).ready(function(){
    function rain(){

        var randomDigit = (Math.random()*100)+1,
        /*Aca esta el numero Binario*/	
        binary =['!','!'],

        randomized = Math.round((Math.random())),
            rainContainer = $('.rain-container');


        /*Preparando numeros binarios*/

        rainContainer.prepend('<span class="raindrop">'+binary[randomized]+'<span>');

        /*aplicando a los numeros */


        $('.raindrop:first-child').css({left:randomDigit+'px'});

        /*Variables del Rain drop*/

        var droplet = $('.raindrop');

        /*Animacion*/

        droplet.animate({top: '360px'},2000);



        setTimeout(function(){

            $('.raindrop:last-child').remove();
        }, 2000);
    }


    setInterval(rain,100);

    function lightning(){


        var light = $('.lightning'),randomNumber = (Math.random()*50);

        light.css({
            left: randomNumber+'px',
            opacity: '1'	
        });

        setTimeout(function(){

            light.css({
                opacity: '0',
                transition:'500ms linear'
            })
        },2000);

        setTimeout(function(){
            light.css({
                transition: ''
            })

        }, 2500);

    }
    setInterval(lightning, 5000);

});