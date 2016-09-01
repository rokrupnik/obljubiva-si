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
        position: new google.maps.LatLng(46.095469, 14.050765),// Kapelica: 46.105722, 14.057562),// Sovodenj: 46.084952,14.038930),
        icon: 'images/parkingMarker.png'
    });
    var churchMarker = new google.maps.Marker({
        map: map,
        position: new google.maps.LatLng(46.102439,14.078621),
        icon: 'images/churchMarker.png'
    });
    var porokaInfowindow = new google.maps.InfoWindow({
        content:"<b>Travnik 'Na Kalarjevih njivah'</b><br />Poroka bo v gozdu ob robu travnika.<br />Kako priti do sem? Klikni na hiško zraven travnika.<br />Kaj pa če bo dež? Potem bomo <a href='#' id='church-link'>tukaj</a>."
    });
    var makucInfowindow = new google.maps.InfoWindow({
        content:"<b>Kmetija Pr' Makuc</b><br/>Stara Oselica 67<br/><a target='_blank' href='https://www.google.si/maps/dir//Stara+Oselica+67,+4225+Sovodenj/@46.0939743,14.0514937,783m/data=!3m1!1e3!4m16!1m7!3m6!1s0x477ae7eb740b5ced:0xb8de9afba61e114a!2sStara+Oselica+67,+4225+Sovodenj!3b1!8m2!3d46.0939743!4d14.0536824!4m7!1m0!1m5!1m1!1s0x477ae7eb740b5ced:0xb8de9afba61e114a!2m2!1d14.0536824!2d46.0939743?hl=sl'>KLIKNI ZA NAVIGACIJO</a><br />"
    });
    var parkingInfowindow = new google.maps.InfoWindow({
        content:"Parking bo neposredno na lokaciji ob robu travnika.<br />Priporočava, da se na Sovodnju ali že prej na Trebiji s prijatelji/sorodniki razporedite po avtih,<br />da bo čim manj gneče s parkiranjem na lokaciji."
    });
    var churchInfowindow = new google.maps.InfoWindow({
        content:"<b>Župnijska cerkev spreobrnitve sv. Pavla Stara Oselica</b><br />Tukaj bo obred v primeru dežja.<br /><a target='_blank' href='https://www.google.com/maps/dir//%C5%BDupnijska+cerkev+spreobrnitve+sv.+Pavla,+Stara+Oselica,+Slovenija/@46.102439,14.078621,395m/data=!3m1!1e3!4m15!1m6!3m5!1s0x0:0x476b25c8940d079c!2s%C5%BDupnijska+cerkev+spreobrnitve+sv.+Pavla!8m2!3d46.102444!4d14.0786423!4m7!1m0!1m5!1m1!1s0x477ae7f8a71315df:0x476b25c8940d079c!2m2!1d14.0786423!2d46.102444?hl=sl'>KLIKNI ZA NAVIGACIJO</a>"
    });
    google.maps.event.addListener(porokaMarker, "click", () => {
        porokaInfowindow.open(map,porokaMarker);
        makucInfowindow.close();
    });
    google.maps.event.addListener(makucMarker, "click", () => {
        makucInfowindow.open(map,makucMarker);
        porokaInfowindow.close();

        setTimeout(() => {
            $('#parking-link').on('click', () => {
                map.setCenter(new google.maps.LatLng(46.084952,14.038930));
                map.setZoom(14);
                parkingInfowindow.open(map,parkingMarker);
                makucInfowindow.close();
            });
        }, 200);
    });
    google.maps.event.addListener(parkingMarker, "click", () => {
        parkingInfowindow.open(map,parkingMarker);
    });
    google.maps.event.addListener(churchMarker, "click", () => {
        churchInfowindow.open(map,churchMarker);
    });
    porokaInfowindow.open(map,porokaMarker);

    setTimeout(() => {
        $('#church-link').on('click', () => {
            //map.setCenter(new google.maps.LatLng(46.102439,14.078621));
            map.setZoom(14);
            churchInfowindow.open(map,churchMarker);
            porokaInfowindow.close();
        });
    }, 700);


    google.maps.event.addListener(map, "click", () => {
        porokaInfowindow.close();
        makucInfowindow.close();
        parkingInfowindow.close();
        churchInfowindow.close();
    });
});