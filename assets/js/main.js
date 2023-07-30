$(document).ready(function(){

    $(".about-card").owlCarousel({
        items:1,
        loop:true,
        smartSpeed: 900,
        nav:true,
        responsive:true,

        responsive:{
            0:{
                nav:false,
            },
            576:{
               nav:true,
            },
        },
        navText: [
            '<svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" viewBox="0 0 16 16"><path fill="currentColor" fill-rule="evenodd" d="M15 8a.5.5 0 0 0-.5-.5H2.707l3.147-3.146a.5.5 0 1 0-.708-.708l-4 4a.5.5 0 0 0 0 .708l4 4a.5.5 0 0 0 .708-.708L2.707 8.5H14.5A.5.5 0 0 0 15 8z"/></svg>',
            '<svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" viewBox="0 0 512 512"><path fill="currentColor" d="m359.873 121.377l-22.627 22.627l95.997 95.997H16v32.001h417.24l-95.994 95.994l22.627 22.627L494.498 256L359.873 121.377z"/></svg>'
        ]
    });
        $('.h-menu ul').clone().appendTo('.mobile-menu');
        $('.menu-trigger').on("click", function(){
            $('.mobile-menu').slideToggle();
            console.log( "it works!" );
            
        });

});