let mapContainer = document.getElementById('map'), // 지도를 표시할 div
    mapOption = {
        center: new kakao.maps.LatLng(36.809554, 127.109752), // 처음 나타날 지도 위치 위, 경도
        level: 3 // 지도의 확대 레벨
    };
/***********************지도 생성***************************/
let map = new kakao.maps.Map(mapContainer, mapOption);


/***********************인포윈도우 컨텐츠를 정의함***************************/
let iwRemoveable = true;        // 인포 윈도우 내 'X' 버튼 정의
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
            // 아래 버튼에 예약 페이지 링크 첨부 하시면 됩니다
            '<input type="button" style="width:70pt;height:20pt;" value="예약">' +
            '</div>'+
            '</div>'+

        '</div>',
        removable: iwRemoveable,
        // image: '<img src="img/test1.png" alt = "My Image" width="50">',
        latlng: new kakao.maps.LatLng(36.809982, 127.111104)
    },
    {
        content: '<div class="infoWindows">' +
            '<img src="img/img2.jpg" alt = "My Image" width="100px" height="100px" class="infoWindows-img">' +
            '<div class="infoWindows-sub">'+
            '<b class="infoWindows-sub-title">카페 하인츠 불당점</b>' +
            '<span class="infoWindows-sub-description">' +
            '커피 전문점 입니다.' +
            '</span>' +
            '<div class="infoWindows-Button">'+
            '<input type=button style="width:50pt;height:20pt;" value="Open">' +
            '<input type=button style="width:50pt;height:20pt;" value="Close">' +
            // 아래 버튼에 예약 페이지 링크 첨부 하시면 됩니다
            '<input type="button" style="width:70pt;height:20pt;" value="예약">' +
            '</div>'+
            '</div>'+
            '</div>',
        removable: iwRemoveable,
        // image: '<img src="img/test1.png" alt = "My Image" width="50">',
        latlng: new kakao.maps.LatLng(36.809762, 127.110536)
    },
    {
        content: '<div class="infoWindows">' +
            '<img src="img/img3.jpg" alt = "My Image" width="100px" height="100px" class="infoWindows-img">' +
            '<div class="infoWindows-sub">'+
            '<b class="infoWindows-sub-title">신불당 할리스커피</b>' +
            '<span class="infoWindows-sub-description">' +
            '다들 할리스 커피 좋아하시나요? 할리스 커피는 맛있습니다. 왜냐하면 맛있거든요.' +
            '</span>' +
            '<div class="infoWindows-Button">'+
            '<input type=button style="width:50pt;height:20pt;" value="Open">' +
            '<input type=button style="width:50pt;height:20pt;" value="Close">' +
            // 아래 버튼에 예약 페이지 링크 첨부 하시면 됩니다
            '<input type="button" style="width:70pt;height:20pt;" value="예약">' +
            '</div>'+
            '</div>'+
            '</div>',
        removable: iwRemoveable,
        // image: '<img src="img/test1.png" alt = "My Image" width="50">',
        latlng: new kakao.maps.LatLng(36.810715, 127.115145)
    },
    {
        content: '<div class="infoWindows">' +
            '<img src="img/img4.jpg" alt = "My Image" width="100px" height="100px" class="infoWindows-img">' +
            '<div class="infoWindows-sub">'+
            '<b class="infoWindows-sub-title">렉스커피</b>' +
            '<span class="infoWindows-sub-description">' +
            '다들 렉스 커피 좋아하시나요? 렉스 커피는 맛있습니다. 왜냐하면 맛있거든요.' +
            '</span>' +
            '<div class="infoWindows-Button">'+
            '<input type=button style="width:50pt;height:20pt;" value="Open">' +
            '<input type=button style="width:50pt;height:20pt;" value="Close">' +
            // 아래 버튼에 예약 페이지 링크 첨부 하시면 됩니다
            '<input type="button" style="width:70pt;height:20pt;" value="예약">' +
            '</div>'+
            '</div>'+
            '</div>',
        removable: iwRemoveable,
        // image: '<img src="img/test1.png" alt = "My Image" width="50">',
        latlng: new kakao.maps.LatLng(36.808803, 127.107084)
    },
    {
        content: '<div class="infoWindows">' +
            '<img src="img/img5.jpg" alt = "My Image" width="100px" height="100px" class="infoWindows-img">' +
            '<div class="infoWindows-sub">'+
            '<b class="infoWindows-sub-title">겐트커피</b>' +
            '<span class="infoWindows-sub-description">' +
            '다들 겐트 커피 좋아하시나요? 겐트 커피는 맛있습니다. 왜냐하면 맛있거든요.' +
            '</span>' +
            '<div class="infoWindows-Button">'+
            '<input type=button style="width:50pt;height:20pt;" value="Open">' +
            '<input type=button style="width:50pt;height:20pt;" value="Close">' +
            // 아래 버튼에 예약 페이지 링크 첨부 하시면 됩니다
            '<input type="button" style="width:70pt;height:20pt;" value="예약">' +
            '</div>'+
            '</div>'+
            '</div>',
        removable: iwRemoveable,
        // image: '<img src="img/test1.png" alt = "My Image" width="50">',
        latlng: new kakao.maps.LatLng(36.808308, 127.106292)
    },
    {
        content: '<div class="infoWindows">' +
            '<img src="img/img5.jpg" alt = "My Image" width="100px" height="100px" class="infoWindows-img">' +
            '<div class="infoWindows-sub">'+
            '<b class="infoWindows-sub-title">겐트커피</b>' +
            '<span class="infoWindows-sub-description">' +
            '다들 겐트 커피 좋아하시나요? 겐트 커피는 맛있습니다. 왜냐하면 맛있거든요.' +
            '</span>' +
            '<div class="infoWindows-Button">'+
            '<input type=button style="width:50pt;height:20pt;" value="Open">' +
            '<input type=button style="width:50pt;height:20pt;" value="Close">' +
            // 아래 버튼에 예약 페이지 링크 첨부 하시면 됩니다
            '<input type="button" style="width:70pt;height:20pt;" value="예약">' +
            '</div>'+
            '</div>'+
            '</div>',
        removable: iwRemoveable,
        // image: '<img src="img/test1.png" alt = "My Image" width="50">',
        latlng: new kakao.maps.LatLng(36.808308, 127.106292)
    },
    {
        content: '<div class="infoWindows">' +
            '<img src="img/img6.jpg" alt = "My Image" width="100px" height="100px" class="infoWindows-img">' +
            '<div class="infoWindows-sub">'+
            '<b class="infoWindows-sub-title">헬로우 슬라임</b>' +
            '<span class="infoWindows-sub-description">' +
            '다들 헬로우 슬라임 커피 좋아하시나요? 헬로우 슬라임 커피는 맛있습니다. 왜냐하면 맛있거든요.' +
            '</span>' +
            '<div class="infoWindows-Button">'+
            '<input type=button style="width:50pt;height:20pt;" value="Open">' +
            '<input type=button style="width:50pt;height:20pt;" value="Close">' +
            // 아래 버튼에 예약 페이지 링크 첨부 하시면 됩니다
            '<input type="button" style="width:70pt;height:20pt;" value="예약">' +
            '</div>'+
            '</div>'+
            '</div>',
        removable: iwRemoveable,
        // image: '<img src="img/test1.png" alt = "My Image" width="50">',
        latlng: new kakao.maps.LatLng(36.807470, 127.106820)
    },

];

/***********************마커 및 인포윈도우 생성***************************/
for (var i = 0; i < positions.length; i ++) {
    // 마커를 생성
    var marker = new kakao.maps.Marker({
        map: map, // 마커를 표시할 지도
        position: positions[i].latlng, // 마커의 위치
    });

    let infowindow = new kakao.maps.InfoWindow({
        content: positions[i].content, // 인포윈도우에 표시할 내용
        removable: iwRemoveable,
    });

    kakao.maps.event.addListener(marker, 'click', makeOnListener(map ,marker ,infowindow));
        // // 마커 위에 인포윈도우를 표시합니다
        // infowindow.open(map, marker);
}

// 인포윈도우를 표시하는 클로저를 만드는 함수입니다
function makeOnListener(map, marker, infowindow) {
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