'use strict';

$(document).ready(() => {
    var myOptions = {
        zoom:16,
        center:new google.maps.LatLng(46.095568,14.051611),
        mapTypeId: google.maps.MapTypeId.HYBRID
    };
    var map = new google.maps.Map(document.getElementById("gmap_canvas"), myOptions);
    var porokaMarker = new google.maps.Marker({
        map: map,
        position: new google.maps.LatLng(46.095568,14.051611),
        icon: 'images/porokaMarker.png'
    });
    var makucMarker = new google.maps.Marker({
        map: map,
        position: new google.maps.LatLng(46.09397430000001,14.05368240000007),
        icon: 'images/makucMarker.png'
    });
    var parkingMarker = new google.maps.Marker({
        map: map,
        position: new google.maps.LatLng(46.084952,14.038930),
        icon: 'images/parkingMarker.png'
    });
    var porokaInfowindow = new google.maps.InfoWindow({
        content:"<b>Travnik 'Na Kalarjevih njivah'.<br />Verjetno bomo kar v gozdu ob robu travnika.</b><br />Kako do travnika? Klikni na hiško zraven travnika."
    });
    var makucInfowindow = new google.maps.InfoWindow({
        content:"<b>Kmetija Pr' Makuc</b><br/>Stara Oselica 67<br/><a target='_blank' href='https://www.google.si/maps/dir//Stara+Oselica+67,+4225+Sovodenj/@46.0939743,14.0514937,783m/data=!3m1!1e3!4m16!1m7!3m6!1s0x477ae7eb740b5ced:0xb8de9afba61e114a!2sStara+Oselica+67,+4225+Sovodenj!3b1!8m2!3d46.0939743!4d14.0536824!4m7!1m0!1m5!1m1!1s0x477ae7eb740b5ced:0xb8de9afba61e114a!2m2!1d14.0536824!2d46.0939743?hl=sl'>KLIKNI ZA NAVIGACIJO</a>"
    });
    var parkingInfowindow = new google.maps.InfoWindow({
        content:"Tukaj ali že na Trebiji se lahko s prijatelji razporedite po avtih,<br />da bo čim manj težav s parkiranjem pri domačiji."
    });
    google.maps.event.addListener(porokaMarker, "click", () => {
        porokaInfowindow.open(map,porokaMarker);
    });
    google.maps.event.addListener(makucMarker, "click", () => {
        makucInfowindow.open(map,makucMarker);
    });
    google.maps.event.addListener(parkingMarker, "click", () => {
        parkingInfowindow.open(map,parkingMarker);
    });
    porokaInfowindow.open(map,porokaMarker);
});