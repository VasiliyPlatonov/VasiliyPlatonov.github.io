//карусель с отзывами
'use strict'
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

//карусель с моторами

$(document).ready(
   function () {
      $("#our-motors__slider").owlCarousel({
         singleItem: false,
         navigation: true,
         pagination: false,
         slideSpeed: 400,
         navigationText: false,
         autoHeight: true,
         items: 3,
         itemsDesktop: [1199, 3],
         itemsDesktopSmall: [992, 2],
         itemsTablet: [768, 1]
      });

   });

//плавный скроллинг

$(document).ready(
   function () {
      $('a').smoothScroll({
         offset: -100,
         speed: 700
      });
   });

// модальные окна

$(document).ready(function () {
   
   
   //кнопка и модальное окно "обратный звонок"
   $(".main-header__callback-btn").click(function () {
      //открыть модальное окно с id="modal-callback"
      $("#modal-callback").modal('show');
   });
   //кнопка и модальное окно "сделать заказ"
   $(".our-motors__block-btn").click(function () { //
      //открыть модальное окно с id="modal-order"
      $("#modal-order").modal('show');
   });

   $("#modal-callback").on('hidden.bs.modal', function () {
      $("#modal-thanks").modal('show');
   });
   $("#modal-order").on('hidden.bs.modal', function () {
      $("#modal-thanks").modal('show');
   });
   $(".main-header__screen-btn").click(function () { //
      //открыть модальное окно с id="modal-order"
      $("#modal-thanks").modal('show');
   });
   
   
   //модальное окно "заказ в обработке" 
   //   $(".our-motors__block-btn").click(function () {
   //      $("#modal-in_process").modal('show');
   //   });
   
   
});

//Яндекс карта

ymaps.ready(
   function () {

      var myMap = new ymaps.Map('map', {
         center: [60, 100],
         zoom: 3,
         controls: []
      });

      var moscow = new ymaps.Placemark([55.72504493415047, 37.64696099999997], {
         hintContent: 'Москва'
      });
      var surgut = new ymaps.Placemark([61.29236152675725, 73.4254165], {
         hintContent: 'Сургут'
      });
      var novosibirsk = new ymaps.Placemark([55.000817590262535, 82.95627699999989], {
         hintContent: 'Новосибирск'
      });
      var vladivostok = new ymaps.Placemark([43.17270778161204, 132.02530749999997], {
         hintContent: 'Владивосток'
      });

      myMap.geoObjects.add(moscow);
      myMap.geoObjects.add(surgut);
      myMap.geoObjects.add(novosibirsk);
      myMap.geoObjects.add(vladivostok);
   });
