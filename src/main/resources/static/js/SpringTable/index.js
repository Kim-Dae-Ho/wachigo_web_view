var my_gps_result = true;
var global_locPosition = null;
var latitude1 = document.getElementById("latitude1").value;
var longitude1 = document.getElementById("longitude1").value;


// 지도에 표시된 마커 객체를 가지고 있을 배열입니다
var markers = [];

//개인 내 위치
var mapContainer = document.getElementById('map'), // 지도를 표시할 div
    mapOption = {
        center: new kakao.maps.LatLng(latitude1, longitude1), // 지도의 중심좌표
        level: 1 // 지도의 확대 레벨
    };

var map = new kakao.maps.Map(mapContainer, mapOption); // 지도를 생성합니다

var imageSrc = 'https://t1.daumcdn.net/localimg/localimages/07/mapapidoc/marker_red.png', // 마커이미지의 주소입니다
    imageSize = new kakao.maps.Size(64, 69), // 마커이미지의 크기입니다
    imageOption = {offset: new kakao.maps.Point(27, 69)}; // 마커이미지의 옵션입니다. 마커의 좌표와 일치시킬 이미지 안에서의 좌표를 설정합니다.

var markerImage = new kakao.maps.MarkerImage(imageSrc, imageSize, imageOption);

my_gps(latitude1, longitude1);

function unity_gps(a, b){
    latitude1 = parseFloat(a);
    longitude1 = parseFloat(b);
    latitude1.value = latitude1;
    longitude1.value = longitude1;
    my_gps(latitude1,longitude1);
}

function my_gps(a, b){
    var locPosition = new kakao.maps.LatLng(a, b); // 마커가 표시될 위치를 geolocation으로 얻어온 좌표로 생성합니다
        message = '<div style="padding:5px;">내 위치</div>'; // 인포윈도우에 표시될 내용입니다


        global_locPosition = locPosition;
    // 마커를 생성합니다
    var my_marker = new kakao.maps.Marker({
        position: locPosition,
        image: markerImage // 마커이미지 설정
    });

    // 마커와 인포윈도우를 표시합니다
    displayMarker(markerImage, locPosition, message);

    // 지도에 마커와 인포윈도우를 표시하는 함수입니다
    function displayMarker(marker, locPosition, message) {

        // 마커를 생성합니다
        var marker = new kakao.maps.Marker({
            map: map,
            position: locPosition,
            image: markerImage
        });

        var iwContent = message, // 인포윈도우에 표시할 내용
            iwRemoveable = true;

        // 인포윈도우를 생성합니다
        var infowindow = new kakao.maps.InfoWindow({
            content : iwContent,
            removable : iwRemoveable
        });

        markers.push(marker);

        // 인포윈도우를 마커위에 표시합니다
        // infowindow.open(map, marker);

        if(my_gps_result == true){
            // 지도 중심좌표를 접속위치로 변경합니다
            map.setCenter(locPosition);
        }
    }
    //개인 내 위치 끝
    setMarkers();
}

function setMarkers() {
    for (var i = 0; i < markers.length-1; i++) {
        markers[i].setMap(null);
    }
}

// 버튼 클릭에 따라 지도 이동 기능을 막거나 풀고 싶은 경우에는 map.setDraggable 함수를 사용합니다
function setDraggable(draggable) {
    if(draggable == true){
        my_gps_result = true
    }
    else if(draggable == false){
        my_gps_result = false
    }
    // 마우스 드래그로 지도 이동 가능여부를 설정합니다
    // map.setDraggable(draggable);
}

// 지도가 이동, 확대, 축소로 인해 중심좌표가 변경되면 마지막 파라미터로 넘어온 함수를 호출하도록 이벤트를 등록합니다
kakao.maps.event.addListener(map, 'zoom_start', function() {
    if(my_gps_result == true){
        map.setCenter(global_locPosition);
    }
    else if(my_gps_result == false){
        my_gps_result = false
    }
});

// 마우스 드래그로 지도 이동이 완료되었을 때 마지막 파라미터로 넘어온 함수를 호출하도록 이벤트를 등록합니다
// kakao.maps.event.addListener(map, 'dragend', function() {        
    
//     my_gps_result = false
    
// });

// 마커를 표시할 위치와 내용을 가지고 있는 객체 배열입니다
var positions = [
    {
        content: '<div class="customoverlay">' +
        '  <a onclick="Unity.call(1);">' +
        '    <span class="title">서구청</span>' +
        '  </a>' +
        '</div>',
        latlng: new kakao.maps.LatLng(35.151988, 126.889924)
    },
    {
        content: '<div class="customoverlay">' +
        '  <a onclick="Unity.call(2);">' +
        '    <span class="title">AI스타트업</span>' +
        '  </a>' +
        '</div>',
        latlng: new kakao.maps.LatLng(35.152801, 126.890184)
    },
    {
        content: '<div class="customoverlay">' +
        '  <a onclick="Unity.call(3);">' +
        '    <span class="title">국밥집</span>' +
        '  </a>' +
        '</div>',
        latlng: new kakao.maps.LatLng(35.152927, 126.888431)
    },
    {
        content: '<div class="customoverlay">' +
        '  <a onclick="Unity.call(4);">' +
        '    <span class="title">농성공원</span>' +
        '  </a>' +
        '</div>',
        latlng: new kakao.maps.LatLng(35.153001, 126.885484)
    }
];    

// // 마커 클러스터러를 생성합니다
var clusterer = new kakao.maps.MarkerClusterer({
    map: map, // 마커들을 클러스터로 관리하고 표시할 지도 객체
    averageCenter: true, // 클러스터에 포함된 마커들의 평균 위치를 클러스터 마커 위치로 설정
    minLevel: 1 // 클러스터 할 최소 지도 레벨
});

var all_marker = $(positions).map(function(i, position) {
    console.log(i);
    var person_marker = new kakao.maps.Marker({
        map: map,
        position: positions[i].latlng
    });
    
    var infowindow = new kakao.maps.InfoWindow({
        content: positions[i].content,
        removable: true
    });
    kakao.maps.event.addListener(person_marker, 'click', makeOverListener(map, person_marker, infowindow));
    kakao.maps.event.addListener(infowindow, 'click', makeOutListener(infowindow));
    
    return person_marker;
});

// 클러스터러에 마커들을 추가합니다
clusterer.addMarkers(all_marker);

// 인포윈도우를 표시하는 클로저를 만드는 함수입니다 
function makeOverListener(map, person_marker, infowindow) {
    return function () {
        infowindow.open(map, person_marker);
    };
}

// 인포윈도우를 닫는 클로저를 만드는 함수입니다 
function makeOutListener(infowindow) {
    return function () {
        infowindow.close();
    };
}