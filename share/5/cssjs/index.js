$(function () {
    jQuery(".language .lang").click(function (e) {
        var selected = $(this).attr('value-lang');
        setLanguage(selected);
        e.preventDefault();
    });

    $('#menuSearchBtn').on('click', function () {
        $('.top-menu-pc').addClass('show-search');
    });
    $('.top-menu-pc .search-form .fa-times').on('click', function () {
        $('.top-menu-pc').removeClass('show-search');
    });
});

function setLanguage(lang) {
    if (lang == 'vn') {
        $.cookie("language", '', {
            expires: 365,
            path: '/'
        });
    } else $.cookie("language", 'en', {
        expires: 365,
        path: '/'
    });
    location.reload();
}

$( "header .dropdown.inline-menu" ).hover(
    function() {
        $( "header .logo_header,header .logo_scroll" ).addClass( "animation" );
    }, function() {
        $( "header .logo_header,header .logo_scroll" ).removeClass( "animation" );
    }
);

$(document).ready(function () {
    $(document).on("scroll", onScroll);

    // $('ul.nav li.dropdown').hover(function() {
    //   $(this).find('.dropdown-menu').show();
    // }, function() {
    //   $(this).find('.dropdown-menu').hide();
    // });
});

function onScroll(event) {
    var scrollPos = $(document).scrollTop();
    if (scrollPos > 10) {
        $('.header').addClass("active");
    } else {
        $('.header').removeClass("active");
    }

}

function SubmitFormSS(){
    alert('Cáº£m Æ¡n báº¡n Ä‘Ă£  gá»Ÿi thĂ´ng tin  Ä‘áº·t lá»‹ch háº¹n, chĂºng tĂ´i sáº½ liĂªn há»‡  trong thá»i gian sá»›m nháº¥t!');
}

$('.hamburger-menu').on('click', function () {
    if ($(this).hasClass('show-menu')) {
        // Hide menu
        $(this).removeClass('show-menu');
        $('#menuContainer').removeClass('show-menu');
    } else {
        // Show menu
        $(this).addClass('show-menu');
        $('#menuContainer').addClass('show-menu');
    }
});

$('.header .tools a').on('click', function () {
    location.reload();
});

// function

function stopCarousel() {
    var owl = $('.carousel');
    owl.trigger('destroy.owl.carousel');
    owl.addClass('off');
}

$('ul.dropdown-menu [data-toggle=dropdown]').on('click', function(event) {
    // Avoid following the href location when clicking
    event.preventDefault();
    // Avoid having the menu to close when clicking
    event.stopPropagation();
    // If a menu is already open we close it
    //$('ul.dropdown-menu [data-toggle=dropdown]').parent().removeClass('open');
    // opening the one you clicked on
    if (!$(this).parent().hasClass('open')) {
        $(this).parent().addClass('open');
    }
    else{
        $(this).parent().removeClass('open');
    }


    // var menu = $(this).parent().find("ul");
    // var menupos = menu.offset();

    // if ((menupos.left + menu.width()) + 30 > $(window).width()) {
    //     var newpos = - menu.width();
    // } else {
    //     var newpos = $(this).parent().width();
    // }
    // menu.css({ left:newpos });

});