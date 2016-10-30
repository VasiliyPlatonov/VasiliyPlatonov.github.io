(function($) {
    var target = document.querySelector('.user-link');

    function selection(elem) {
        var elem = document.querySelector(elem);
        var select = window.getSelection();
        var range = document.createRange();

        range.selectNodeContents(elem);
        select.addRange(range);
    }

    target.onclick = function() {
        selection('.user-link > span');
    };


    document.querySelector('.prompt__button-close').onclick = function() {
        var prompt = document.querySelector('.prompt');
        prompt.style.marginTop = (-1 * prompt.offsetHeight) + 'px';
    };


    // модальные окна

    $('.button-share, .button-share--big').click(function() {
        $('#share-modal').modal('show');
    });

    // popover

    $('.button-url').popover({
        placement: 'auto top',
        content: 'http://cll.io/a6lnu'
    });

    $('.button-url').click(function() {
        $('.this').popover();
    });


    // checkbox
    $('input[type="checkbox"]').parent().click(function() {
        var checkbox = $(this).children('input[type="checkbox"]');
        if (checkbox.attr('checked')) {
            checkbox.removeAttr('checked');
            checkbox.parent().removeClass('checkbox-select');
            checkbox.checked = false;
            checkbox.attr('value', 'off');
        } else if (!(checkbox.attr('checked'))) {
            checkbox.attr('checked', 'true');
            checkbox.parent().addClass('checkbox-select');
            checkbox.checked = true;
            checkbox.attr('value', 'on');
        }
    });

})(jQuery);



// Google Maps
var map;
function initMap() {
    map = new google.maps.Map(document.getElementById('map'), {
        center: {
            lat: 40.711137,
            lng: -74.001332
        },
        zoom: 16,
        zoomControl: false,
        mapTypeControl: true,
        mapTypeControlOptions: {
            style: google.maps.MapTypeControlStyle.DROPDOWN_MENU,
            mapTypeIds: [
                google.maps.MapTypeId.ROADMAP,
                google.maps.MapTypeId.TERRAIN,
                google.maps.MapTypeId.SATELLITE
            ]
        }
    });

    var marker = new google.maps.Marker({
        map: map,
        // Define the place with a location, and a query string.
        place: {
            location: {
                lat: 40.711137,
                lng: -74.001332
            },
            query: 'Go'
        }
    });

    // Construct a new InfoWindow.
    var infoWindow = new google.maps.InfoWindow({
        content: 'Merry Bergtraum High School for Business Cariers'
    });

    // Opens the InfoWindow when marker is clicked.
    marker.addListener('click', function() {
        infoWindow.open(map, marker);
    });
}
