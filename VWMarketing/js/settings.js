$(document).ready(
    function () {
        $("#owl").owlCarousel({
            singleItem: true,
            navigation: true,
            pagination: false,
            slideSpeed: 400,
            navigationText: false,
            autoHeight: true
        });
    });

$(document).ready(function () {
    var height = $('.jumbotron').innerHeight();
    $('.jumbotron-form').innerHeight(height);
});


$(document).ready(function () {
    'use strict'
    var items = $('.rates__item');
    var longest = getLongest(items);
    var compare = getHeightCompare($(items).eq(0), longest);
   

    // ищем самый длинный
    function getLongest(item) {
        var longest;
        for (var i = 0; i < items.length - 1; i++) {
            if ($(items).eq(i).innerHeight() > $(items).eq(i + 1).innerHeight()) {
                longest = $(items).eq(i);
            } else {
                longest = $(items).eq(i + 1);
            }
        }
        return longest;
    };

    // сравниваем по высоте
    function getHeightCompare(itemA, itemB) {
        var heightA = $(itemA).outerHeight();
        var heghtB = $(itemB).outerHeight();
        var compare = heightA - heghtB;
        if (compare < 0) {
            compare *= -1;
        }
        return compare;
    };


    aligning($(items).eq(0), longest, '.rates__item-price');

    //варавниваем элементы делаем их одинаковой высоты
    //добавляет margin-top классу
    function aligning(itemA, itemB, elClass) {
        var compare = getHeightCompare(itemA, itemB);
        var el = $(itemA).children(elClass)
        var marginTop = el.css('margin-top');


        $(el).css('margin-top', compare);

    };


    /* 
      to do ====================================================================
     функция которая берет разницу в высоте 
     и добавляет ее к padding или margin заданного элемента внутри item  ГОТОВО
     
     перебрать все элементы и вызвать функцию выравнивания
     
     ====================================================================
     */
});

// яндекс карта 
$(document).ready(function () {
    ymaps.ready(init);
    var myMap,
        myPlacemark;

    function init() {
        myMap = new ymaps.Map("map", {
            center: [61.24686214864623, 73.41644196627038],
            zoom: 17,
            controls: []
        });

        placemark = new ymaps.Placemark([61.24686214864623, 73.41644196627038], {

            hintContent: 'Virus Word Marketing',
            balloonContent: 'Университетская ул., 9'
        }, {

            preset: 'islands#redStretchyIcon'
        });


        myMap.geoObjects.add(placemark);
    }
});
