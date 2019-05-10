  ymaps.ready(init);
    ymaps.ready(init2);
    var myMap;
    myPlacemark1
    function init(){     
        myMap = new ymaps.Map("map", {
            center: [41.33212328, 69.21878241],
            zoom: 16
        });
         myPlacemark1 = new ymaps.Placemark([41.33176114, 69.21944879], { hintContent: 'HAVVO', balloonContent: 'Havvo - Ming Dardga Davo' 
     });
          myMap.geoObjects.add(myPlacemark1);
    }
    