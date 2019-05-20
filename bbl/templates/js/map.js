  var map;
  function initMap() {
  	/*map = new google.maps.Map(document.getElementById('map'), {
  		center: {lat: 60.009039, lng: 30.417766},
  		zoom: 8
  	});*/

//55.778548, 37.511462

var styledMapType = new google.maps.StyledMapType(

	[
	{
		"elementType": "geometry",
		"stylers": [
		{
			"color": "#f5f5f5"
		}
		]
	},
	{
		"elementType": "labels.icon",
		"stylers": [
		{
			"saturation": -100 
		}
		]
	},
	{
		"elementType": "labels.text.fill",
		"stylers": [
		{
			"color": "#616161"
		}
		]
	},
	{
		"elementType": "labels.text.stroke",
		"stylers": [
		{
			"color": "#f5f5f5"
		}
		]
	},
	{
		"featureType": "administrative.land_parcel",
		"elementType": "labels.text.fill",
		"stylers": [
		{
			"color": "#bdbdbd"
		}
		]
	},
	{
		"featureType": "poi",
		"elementType": "geometry",
		"stylers": [
		{
			"color": "#eeeeee"
		}
		]
	},
	{
		"featureType": "poi",
		"elementType": "labels.text.fill",
		"stylers": [
		{
			"color": "#757575"
		}
		]
	},
	{
		"featureType": "poi.business",
		"stylers": [
		{
			"saturation": -50 
		}
		]
	},
	{
		"featureType": "poi.park",
		"elementType": "geometry",
		"stylers": [
		{
			"color": "#e5e5e5"
		}
		]
	},
	{
		"featureType": "poi.park",
		"elementType": "labels.text.fill",
		"stylers": [
		{
			"color": "#9e9e9e"
		}
		]
	},
	{
		"featureType": "road",
		"elementType": "geometry",
		"stylers": [
		{
			"color": "#ffffff"
		}
		]
	},
	{
		"featureType": "road",
		"elementType": "labels.icon",
		"stylers": [
		{

		}
		]
	},
	{
		"featureType": "road.arterial",
		"elementType": "labels.text.fill",
		"stylers": [
		{
			"color": "#757575"
		}
		]
	},
	{
		"featureType": "road.highway",
		"elementType": "geometry",
		"stylers": [
		{
			"color": "#dadada"
		}
		]
	},
	{
		"featureType": "road.highway",
		"elementType": "labels.text.fill",
		"stylers": [
		{
			"color": "#616161"
		}
		]
	},
	{
		"featureType": "road.local",
		"elementType": "labels.text.fill",
		"stylers": [
		{
			"color": "#9e9e9e"
		}
		]
	},
	{
		"featureType": "transit",
		"stylers": [
		{

		}
		]
	},
	{
		"featureType": "transit.line",
		"elementType": "geometry",
		"stylers": [
		{
			"color": "#e5e5e5"
		}
		]
	},
	{
		"featureType": "transit.station",
		"elementType": "geometry",
		"stylers": [
		{
			"color": "#eeeeee"
		}
		]
	},
	{
		"featureType": "water",
		"elementType": "geometry",
		"stylers": [
		{
			"color": "#c9c9c9"
		}
		]
	},
	{
		"featureType": "water",
		"elementType": "labels.text.fill",
		"stylers": [
		{
			"color": "#9e9e9e"
		}
		]
	}
	],



	{name: 'Styled Map'});

  	//var uluru = {lat: 60.009039, lng: 30.417766};
    //var uluru = {lat: 60.008495, lng: 30.418002};
    //59.979108, 30.466129
    var uluru = {lat: 59.979108, lng: 30.466129};//55.778548, 37.511462
    var map = new google.maps.Map(document.getElementById('map'), {
    	zoom: 16,
    	center: uluru,
    	mapTypeControlOptions: {
    		mapTypeIds: ['roadmap', 'satellite', 'hybrid', 'terrain',
    		'styled_map']
    	}
    });


    map.mapTypes.set('styled_map', styledMapType);
    map.setMapTypeId('styled_map');
    var marker = new google.maps.Marker({
    	position: uluru,
    	title:""
    });

// To add the marker to the map, call setMap();
//marker.setMap(map);
//
marker.setMap(null);
var image = '/templates/img/location.png';
var beachMarker = new google.maps.Marker({
	position: uluru,
	map: map,
	icon: image
});
}