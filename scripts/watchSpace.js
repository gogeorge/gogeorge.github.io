var latitude = localStorage.getItem('latitude');
var longitude = localStorage.getItem('longitude');

function getAstronauts() {
	$.getJSON('http://api.open-notify.org/astros.json', function(data) {
		$('#text1').html("Numer of astronauts in space right now: &nbsp<br><span style='font-size: 40px;color: #92005E;'>" + data['number'] + "</span>");
	});
	setTimeout(getAstronauts, 10000);
}
getAstronauts();

function issLocation() {
    $.getJSON('http://api.open-notify.org/iss-now.json?callback=?', function(data) {
        var latitude = data['iss_position']['latitude'];
        var longitude = data['iss_position']['longitude'];
        localStorage.setItem('latitude', latitude);
        localStorage.setItem('longitude', longitude);
        $('#isslat').html(latitude);
        $('#isslng').html(longitude);
    });
    setTimeout(issLocation, 5000); 
}
issLocation();

//Ajax request to change the latitude and the longitude to a place/address
var myJson;
function getISSPlaceOcean() {
	var lat = document.getElementById('isslat').innerHTML;
	var lng = document.getElementById('isslng').innerHTML;
	$.getJSON('http://api.geonames.org/oceanJSON?lat=' + lat + '&lng=' + lng + '&username=gogeorge', function(data) {
		myJson = data;
		if (JSON.stringify(data).match('ocean')) {
			$('#text2').html("Location of the International Space Station: &nbsp<br><span style='font-size: 40px;color: #92005E;'>" + data.ocean.name + "</span>");
		}
		if (!(JSON.stringify(data).match('ocean'))) {
			function getISSPlaceLand() {
				var lat = document.getElementById('isslat').innerHTML;
				var lng = document.getElementById('isslng').innerHTML;
				$.getJSON('https://maps.googleapis.com/maps/api/geocode/json?latlng=' + lat + ',' + lng + '&key=AIzaSyBn42PEPZ49wSUEpge5OfwGnh7kl-q8-H0', function(data) {
					$('#text2').html("Location of the International Space Station: &nbsp<br><span style='font-size: 40px;color: #92005E;'>" + data.results[2].formatted_address + "</span>");
				});
				setTimeout(getISSPlaceLand, 5000);
			}
			getISSPlaceLand();
		}
	});
	setTimeout(getISSPlaceOcean, 5000);
}
getISSPlaceOcean();