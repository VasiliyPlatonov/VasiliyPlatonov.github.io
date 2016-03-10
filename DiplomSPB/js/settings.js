  // hamburger icon
  $(document).ready(function () {
     $('#nav-icon4').click(function () {
        $(this).toggleClass('open');
     });
  });

  //   стилизация select 
  $(document).ready(function () {
     //скрыть поле поиска, если меньше 20 вариантов
     $("select").chosen({
        disable_search_threshold: 20
     });
  });
// стилизация checkbox
  $(document).ready(function () {
     $('input[type="checkbox"]').parent().click(function () {
        var checkbox = $(this).children('input[type="checkbox"]');
        if (checkbox.attr('checked')) {
           checkbox.removeAttr('checked');
           checkbox.parent().removeClass('activeCheck');
           checkbox.checked = false;
           checkbox.attr('value', 'off');
        } else if (!(checkbox.attr('checked'))) {
           checkbox.attr('checked', 'true');
           checkbox.parent().addClass('activeCheck');
           checkbox.checked = true;
           checkbox.attr('value', 'on');
        }
     });
  });

  // модальные окна
  $(document).ready(function () {
     //кнопка и модальное окно "обратный звонок"
     $(".main-header__callback-button, .workflow__button-order").click(function () {
        //открыть модальное окно с id="modal-callback"
        $("#modal-callback").modal('show');
     });
  });
  // яндекс карта 
    $(document).ready(function () {
       'use strict'
       ymaps.ready(init);
       var myMap,
          nNovgorod,
          moscow,
          yaroslavl,
          tver,
          kirov;
  
       function init() {
          myMap = new ymaps.Map("map", {
             center: [57.14104557863339, 43.11502834375],
             zoom: 7,
             controls: []
          });
  
          nNovgorod = new ymaps.Placemark([56.30450253160212, 43.840125999999984], {
             balloonContent: 'Нижний Новгород'
          }, {
             // Опции.
             // Необходимо указать данный тип макета.
             iconLayout: 'default#image',
             // Своё изображение иконки метки.
             iconImageHref: 'img/map/map__icon-location.png',
             // Размеры метки.
             iconImageSize: [38, 47],
             // Смещение левого верхнего угла иконки относительно
             // её "ножки" (точки привязки).
             iconImageOffset: [-4, -50]
          });
          moscow = new ymaps.Placemark([55.72504493415047, 37.64696099999997], {
             balloonContent: 'Москва'
          }, {
             // Опции.
             // Необходимо указать данный тип макета.
             iconLayout: 'default#image',
             // Своё изображение иконки метки.
             iconImageHref: 'img/map/map__icon-location.png',
             // Размеры метки.
             iconImageSize: [38, 47],
             // Смещение левого верхнего угла иконки относительно
             // её "ножки" (точки привязки).
             iconImageOffset: [-21, -50]
          });
          yaroslavl = new ymaps.Placemark([57.65278764298355, 39.86692249999997], {
             balloonContent: 'Ярославль'
          }, {
             // Опции.
             // Необходимо указать данный тип макета.
             iconLayout: 'default#image',
             // Своё изображение иконки метки.
             iconImageHref: 'img/map/map__icon-location.png',
             // Размеры метки.
             iconImageSize: [38, 47],
             // Смещение левого верхнего угла иконки относительно
             // её "ножки" (точки привязки).
             iconImageOffset: [-16, -45]
          });
          tver = new ymaps.Placemark([56.85958633463221, 35.89790050000001], {
             balloonContent: 'Тверь'
          }, {
             // Опции.
             // Необходимо указать данный тип макета.
             iconLayout: 'default#image',
             // Своё изображение иконки метки.
             iconImageHref: 'img/map/map__icon-location.png',
             // Размеры метки.
             iconImageSize: [38, 47],
             // Смещение левого верхнего угла иконки относительно
             // её "ножки" (точки привязки).
             iconImageOffset: [-18, -50]
          });
  
          kirov = new ymaps.Placemark([58.58292082941222, 49.570856499999984], {
                balloonContent: 'Киров'
             }, {
                // Опции.
                // Необходимо указать данный тип макета.
                iconLayout: 'default#image',
                // Своё изображение иконки метки.
                iconImageHref: 'img/map/map__icon-location.png',
                // Размеры метки.
                iconImageSize: [38, 47],
                // Смещение левого верхнего угла иконки относительно
                // её "ножки" (точки привязки).
                iconImageOffset: [-11, -50]
             }
  
          );
  
  
          myMap.geoObjects.add(nNovgorod);
          myMap.geoObjects.add(moscow);
          myMap.geoObjects.add(yaroslavl);
          myMap.geoObjects.add(tver);
          myMap.geoObjects.add(kirov);
       }
    });
