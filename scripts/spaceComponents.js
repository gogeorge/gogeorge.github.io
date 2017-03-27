//localstorage
var latitude = localStorage.getItem('latitude');
var longitude = localStorage.getItem('longitude');
var possibleError = localStorage.getItem('possibleError');

var space = new XMLHttpRequest();
space.open("GET", "http://api.open-notify.org/astros.json", "jsonp");
space.send(null);
space.onreadystatechange = function() {
	if (this.readyState == 4 && this.status == 200) {
		var res = JSON.parse(space.response);	
		var totalPeople = res.number;
		for (i = 0; i < totalPeople; i++) {
			//parent element
			var pElement = document.getElementById("space_astronauts");
			var firstChild = pElement.firstChild;
			//names
			var astronautsElement = document.createElement("a");
			astronautsElement.setAttribute("id", "astronauts_" + i);
			astronautsElement.setAttribute("href", "https://encrypted.google.com/search?q=" + res.people[i].name);
			astronautsElement.setAttribute("target", "_blank");
	
	   		var txt = document.createTextNode(res.people[i].name + " ");
	   		astronautsElement.appendChild(txt);

	   		pElement.insertBefore(astronautsElement, firstChild);
	   	}   			
	}
}

function issLocation() {
    $.getJSON('http://api.open-notify.org/iss-now.json?callback=?', function(data) {
        var latitude = data['iss_position']['latitude'];
        var longitude = data['iss_position']['longitude'];
        localStorage.setItem('latitude', latitude);
        localStorage.setItem('longitude', longitude);
        $('#iss_latitude').html(latitude);
        $('#iss_longitude').html(longitude);
    });
    setTimeout(issLocation, 2000); 
}
issLocation();

$('#iss_longitude,#iss_latitude,#iss_place').click(function() {
	var lat = document.getElementById('iss_latitude').innerHTML;
	var lng = document.getElementById('iss_longitude').innerHTML;
   	window.open("https://www.google.ro/maps/place/" + lat + "+" + lng);
});


//Ajax request to change the latitude and the longitude to a place/address

function getISSPlaceOcean() {
	var lat = document.getElementById('iss_latitude').innerHTML;
	var lng = document.getElementById('iss_longitude').innerHTML;
	$.getJSON('http://api.geonames.org/oceanJSON?lat=' + lat + '&lng=' + lng + '&username=gogeorge', function(data) {
		var place = data['ocean']['name'];
		$('#iss_place').html(place);
		if (place == null || place == undefined) {
			$('#iss_place').html('Somewhere above the ocean');
			var possibleError = "true";
			localStorage.setItem('possibleError', possibleError);
		}
	});
	setTimeout(getISSPlaceOcean, 2000);
}
getISSPlaceOcean();

/*function getISSPlaceLand() {
				var lat = document.getElementById('iss_latitude');
				var lng = document.getElementById('iss_longitude').innerHTML;
				$.getJSON('http://api.geonames.org/findNearbyJSON?lat=' + lat.value + '&lng=' + lng + '&username=gogeorge', function(data) {
					/*$('#iss_place').html('Somewhere above a country');
					localStorage.removeItem('possibleError', possibleError);
					alert('http://api.geonames.org/findNearbyJSON?lat=' + lat + '&lng=' + lng + '&username=gogeorge');
					var placeCountry = data['geonames']['countryName'];
					var placeCity = data['geonames']['name'];
					alert(placeCountry + ', ' + placeCity);
					$('#iss_place').html(placeCountry + ', ' + placeCity);
					localStorage.removeItem('possibleError', possibleError);
				});
				setTimeout(getISSPlaceLand, 1900);
			}
			getISSPlaceLand();*/
