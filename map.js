
var map, heatmap;


function toggleHeatmap() {
  heatmap.setMap(heatmap.getMap() ? null : map);
}

function changeGradient() {
  var gradient = [
    'rgba(0, 255, 255, 0)',
    'rgba(0, 255, 255, 1)',
    'rgba(0, 191, 255, 1)',
    'rgba(0, 127, 255, 1)',
    'rgba(0, 63, 255, 1)',
    'rgba(0, 0, 255, 1)',
    'rgba(0, 0, 223, 1)',
    'rgba(0, 0, 191, 1)',
    'rgba(0, 0, 159, 1)',
    'rgba(0, 0, 127, 1)',
    'rgba(63, 0, 91, 1)',
    'rgba(127, 0, 63, 1)',
    'rgba(191, 0, 31, 1)',
    'rgba(255, 0, 0, 1)'
  ]
  heatmap.set('gradient', heatmap.get('gradient') ? null : gradient);
}

function changeRadius() {
  heatmap.set('radius', heatmap.get('radius') ? null : 20);
}

function changeOpacity() {
  heatmap.set('opacity', heatmap.get('opacity') ? null : 0.2);
}

var points;
var reloadWithHour;




function initMap() {
  map = new google.maps.Map(document.getElementById('map'), {
    zoom: 16,
    center: {lat: 40.110187, lng: -88.228841},
    mapTypeId: google.maps.MapTypeId.SATELLITE
  });

  pointsList = [
    new google.maps.LatLng(40.120422, -88.229368)
  ];

  var points = new google.maps.MVCArray(pointsList);


  heatmap = new google.maps.visualization.HeatmapLayer({
    data: points,
    map: map
  });

  heatmap.set('radius', 25);


  //INTEGRATION CODE HERE
  reloadWithHour = function(hour) {

    var pointsList = [];
    var latLongArray = _DATA[hour];
    latLongArray.forEach(function(item) {
      pointsList.push(
        new google.maps.LatLng(item[1], item[0])
      );
    });
/*
    pointsList = [
      new google.maps.LatLng(40.120422, -88.229368 + hour/1000)
    ];*/

    points = new google.maps.MVCArray(pointsList);
    heatmap.setData(points);
  }
}



