// ;(function ($) {
    'use strict';
function initMap() {
    var kharkov = {lat: 49.988906, lng: 36.232727};
    var map = new google.maps.Map(
        document.getElementById('map'), {
            zoom: 15,
            center: kharkov
        });
    var marker = new google.maps.Marker({
        position: kharkov,
        map: map,
        icon: 'images/Ok-icon.png',
        title: 'BEETROOT'
    });
    var infowindow = new google.maps.InfoWindow({
        content: 'курсы юных Front-Endщиков'
    });
    marker.addListener('click', function () {
        infowindow.open(map, marker)
    });
    infowindow.open(map, marker);
}
// })(jQuery);