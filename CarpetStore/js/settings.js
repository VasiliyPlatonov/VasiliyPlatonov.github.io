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
   $(".gallery").fancybox({
      //            'transitionIn': 'elastic',
      //            'transitionOut': 'elastic',
      //            'speedIn': 600,
      //            'speedOut': 200,
      //            'overlayShow': false,
      helpers: {
         title: {
            type: 'outside'
         },
         thumbs: {
            width: 50,
            height: 50
         }
      }
   });
});


$(document).ready(function () {
   ymaps.ready(init);
   var myMap,
      myPlacemark;

   function init() {
      myMap = new ymaps.Map("map", {
         center: [61.261454750624445,73.4053754999999],
         zoom: 15,
         controls: []
      });

      myPlacemark = new ymaps.Placemark([61.261454750624445,73.4053754999999], {

         hintContent: 'Магазин ковров',
         balloonContent: 'ул. Пушкина, 9'
      }, {

         preset: 'islands#redStretchyIcon'
      });


      myMap.geoObjects.add(myPlacemark);
   }
});
