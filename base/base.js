var mapContainer = document.getElementById('map'), // 지도를 표시할 div
    mapOption = {
        center: new kakao.maps.LatLng(36.809982, 127.111104), // 지도의 중심좌표
        level: 3 // 지도의 확대 레벨
    };

let map = new kakao.maps.Map(mapContainer, mapOption); // 지도 생성
let title;
let des;
let img;
// [Yunmin] 마커의 정보를 정의 함
let positions = [
    {
        content: '<div class="infoWindows">' +
            '<img src="img/img1.jpg" alt = "My Image" width="100px" height="100px" class="infoWindows-img">' +
            '<div class="infoWindows-sub">'+
            '<b class="infoWindows-sub-title">스타벅스 천안 불당점</b>' +
            '<span class="infoWindows-sub-description">' +
                '시애틀에 본사를 두고 있고 간단한 스낵과 무료 Wi-Fi를 제공 하는 유명 커피 체인점 입니다.' +
            '</span>' +
            '<div class="infoWindows-Button">'+
            '<input type=button style="width:50pt;height:20pt;" value="Open">' +
            '<input type=button style="width:50pt;height:20pt;" value="Close">' +
            '</div>'+
            '</div>'+
            '</div>',
        // image: '<img src="img/test1.png" alt = "My Image" width="50">',
        latlng: new kakao.maps.LatLng(36.809982, 127.111104)
    },
    // {
    //     content: '<div>생태연못</div>',
    //     latlng: new kakao.maps.LatLng(33.450936, 126.569477)
    // },
    // {
    //     content: '<div>텃밭</div>',
    //     latlng: new kakao.maps.LatLng(33.450879, 126.569940)
    // },
    // {
    //     content: '<div>근린공원</div>',
    //     latlng: new kakao.maps.LatLng(33.451393, 126.570738)
    // }
];

for (var i = 0; i < positions.length; i ++) {
    // 마커를 생성합니다
    var marker = new kakao.maps.Marker({
        map: map, // 마커를 표시할 지도
        position: positions[i].latlng // 마커의 위치
    });

    // 마커에 표시할 인포윈도우를 생성합니다
    var infowindow = new kakao.maps.InfoWindow({
        content: positions[i].content // 인포윈도우에 표시할 내용
    });

    // 마커에 mouseover 이벤트와 mouseout 이벤트를 등록합니다
    // 이벤트 리스너로는 클로저를 만들어 등록합니다
    // for문에서 클로저를 만들어 주지 않으면 마지막 마커에만 이벤트가 등록됩니다
    kakao.maps.event.addListener(marker, 'mouseover', makeOverListener(map, marker, infowindow));
    kakao.maps.event.addListener(marker, 'mouseout', makeOutListener(infowindow));
}

// 인포윈도우를 표시하는 클로저를 만드는 함수입니다
function makeOverListener(map, marker, infowindow) {
    return function() {
        infowindow.open(map, marker);
    };
}

// 인포윈도우를 닫는 클로저를 만드는 함수입니다
function makeOutListener(infowindow) {
    return function() {
        infowindow.close();
    };
}
