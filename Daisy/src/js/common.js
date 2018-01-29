// preloader
window.addEventListener('load', function(e) {
    var preloader = document.getElementById('preloader');
    preloader.style.opacity = 0;
    preloader.style.height = 0;
});


//SVG FOR IE
    svg4everybody();


    $('a').smoothScroll({
        easing: 'swing',
        speed: 800,
        offset: -100
    });


    // paralax
    $.stellar({
        horizontalOffset: 'center'
    });

// MODAL WINDOW
// var btnCallback = document.querySelector('.main-header__btn-callback');
// btnCallback.addEventListener('click',function (event) {
//   document.querySelector('.modal-callback').classList.toggle('hidden');
//   document.querySelector('.modal-callback').classList.toggle('show');
//   document.querySelector('.main-header').classList.toggle('blur');
//
//   });
// });

(function hexagonsAnimateLine() {

    if (window.innerWidth > 768) {
        var sectionProcess = document.getElementById('process');

        document.addEventListener('scroll', function startHexagonsAnimate(event) {

            if (sectionProcess.getBoundingClientRect().top - window.innerHeight < 100) {

                var arrLine = document.querySelectorAll(".process__item svg circle, .hexagon-line");
                var f = function(i) {
                    i = i || -1;
                    i++;
                    if (i < arrLine.length) {
                        if (arrLine[i].nodeName === 'circle') {

                            // arrLine[i].classList.add('icon-bg');
                            arrLine[i].setAttribute("fill", "#fc645f");
                            // arrLine[i].setAttribute("stroke-dasharray", "0");
                            i++;
                        }
                        if (i < arrLine.length) {
                            arrLine[i].setAttribute("stroke-dasharray", "100% 100%");
                            setTimeout(f.bind(null, i), 450);
                        } else {
                            document.removeEventListener('scroll', startHexagonsAnimate);
                        }
                    }
                };
                f();
            }
        });
    }
})();

$('#carousel').owlCarousel({

    loop: true,
    dots: false,
    nav: false,
    autoplay: true,
    autoplayTimeout: 3000,
    autoplayHoverPause: false,
    // autoplaySpeed:

    responsive: {
        0: {
            items: 1
        },
        600: {
            items: 2
        },
        1000: {
            items: 3
        }
    }
});
//
$('#carousel-2').owlCarousel({
    loop: true,
    dots: false,
    nav: true,
    navText: [
        '', ''
    ],
    // autoplay: true,
    // autoplayTimeout: 8000,
    // autoplayHoverPause: false,
    // autoplay: true,
    // nav: false,
    // autoplaySpeed:
    //
    responsive: {
        0: {
            items: 1
        }
    }
});

function portfolioBuild() {
    var portfolioContainer = document.querySelector('.portfolio__item-container');
    var portfolioItems = portfolioContainer.children;
    var portfolioLists = new PortfolioList(portfolioItems);
    var portfolioMenu = document.querySelector('.portfolio__menu');

    //добавить всем блокам портфолио data-id для quicksand.js
    (function setDataId() {
        for (var i = 0; i < portfolioItems.length; i++) {
            portfolioItems[i].setAttribute('data-id', i);
        }
    })();

    // конструктор объекта содержащего массивы с элементами портфолио
    function PortfolioList(items) {
        this.all = [];

        for (var i = 0; i < items.length; i++) {
            this.all.push(items[i]);
        }

        // для всех елементов портфолио создать массив с элементами/дата-тегами
        for (i = 0; i < items.length; i++) {
            var tag = items[i].getAttribute('data-tags').split(',');

            //для каждого массива с дата-тегами

            for (var j = 0; j < tag.length; j++) {
                // если  в объекте нет свойства с именем дата-тега, то создать
                if (!(this[tag[j]])) {
                    this[tag[j]] = [];
                }

                // в каждое свойство добавить массив с элементами портфолио
                for (var key in this) {
                    if (this.hasOwnProperty(key)) {
                        if (key === tag[j]) {
                            this[key].push(items[i]);
                        }
                    }
                }
            }
        }
    }

    function makeElementLists(listsObj, insertionContainer) {

        for (var key in listsObj) {
            var ul;
            var temp = '';
            if (listsObj.hasOwnProperty(key)) {

                ul = document.createElement('ul');
                ul.setAttribute('id', key);
                ul.classList.add('hidden');

                for (var i = 0; i < listsObj[key].length; i++) {
                    temp += listsObj[key][i].outerHTML;
                }

                ul.innerHTML = temp;
                insertionContainer.parentElement.appendChild(ul);
            }
        }
    }

    makeElementLists(portfolioLists, portfolioContainer);

    $(function() {
        $('.portfolio__menu-button--sport').click(function(e) {
            $('.portfolio__item-container').quicksand($('#sport li'), {});

        });

        $('.portfolio__menu-button--entertainment').click(function(e) {
            $('.portfolio__item-container').quicksand($('#entertainment li'), {});
        });

        $('.portfolio__menu-button--all').click(function(e) {
            $('.portfolio__item-container').quicksand($('#all li'), {});
        });

        $('.portfolio__menu-button--business').click(function(e) {
            $('.portfolio__item-container').quicksand($('#business li'), {});
        });

        $('.portfolio__menu-button--building').click(function(e) {
            $('.portfolio__item-container').quicksand($('#building li'), {});
        });

    });
}

portfolioBuild();

function initMap() {

    var styleArray = [{
        featureType: 'all',
        stylers: [{
            saturation: -190
        }]
    }, {
        featureType: 'road.arterial',
        elementType: 'geometry',
        stylers: [
            // { saturation: 80 }
        ]
    }, {
        featureType: 'poi.business',
        elementType: 'labels',
        stylers: [{
            visibility: 'off'
        }]
    }];

    var mapOptions = {
        center: {
            lat: 30.284249,
            lng: -81.394891
        },
        zoom: 17,
        disableDefaultUI: true,
        zoomControl: true,
        scrollwheel: false,
        styles: styleArray
    };

    var map = new google.maps.Map(document.getElementById('map'), mapOptions);
}

google.maps.event.addDomListener(window, 'load', initMap);

// фиксация navbar сверху
var navbar = document.querySelector('.main-header__navbar');
window.addEventListener('scroll', function(event) {
    if (window.pageYOffset > 100) {
        navbar.classList.add('main-header__navbar--fixed');
    }
    if (window.pageYOffset < 200) {
        navbar.classList.remove('main-header__navbar--fixed');
    }

});


document.getElementsByClassName('main-header__hamburger-btn')[0].addEventListener('click', function navigationCollapse(event) {
    if (this.tagName === 'BUTTON') {
        this.classList.toggle('open');
    }
    document.getElementsByClassName('main-header__navigation')[0].classList.toggle('open');

});

if (window.innerWidth > 768) {
    Occurence({
        selector: '.main-header__title',
        effectName: 'emergence',
        distanceToAction: 20
    }, {
        selector: '.advantage__item',
        effectName: 'slideFromRight',
        distanceToAction: 20
    }, {
        selector: '.section-caption',
        effectName: 'slideFromLeft',
        distanceToAction: 20
    }, {
        selector: '.join',
        effectName: 'emergence',
        distanceToAction: 20
    }, {
        selector: '.wedo',
        effectName: 'emergence',
        distanceToAction: 20
    }, {
        selector: '.wedo__item--odd',
        effectName: 'slideFromRight',
        distanceToAction: 20
    }, {
        selector: '.wedo__item--even',
        effectName: 'slideFromLeft',
        distanceToAction: 20
    }, {
        selector: '.our-team',
        effectName: 'emergence',
        distanceToAction: 20
    }, {
        selector: '.process',
        effectName: 'emergence',
        distanceToAction: 20
    }, {
        selector: '.portfolio',
        effectName: 'emergence',
        distanceToAction: 20
    }, {
        selector: '.feedback',
        effectName: 'emergence',
        distanceToAction: 20
    });
}
