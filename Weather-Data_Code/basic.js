var request = new XMLHttpRequest();

request.open('GET', 'https://restcountries.eu/rest/v2/all', true);

request.send();

request.onload = function() {
    var data = JSON.parse(this.response);
    for( const i of data) {
        //const i = data[0];
        var name = i["name"];
        var lat = i.latlng[0]
        var lng = i.latlng[1]
        
        var link = 'https://api.openweathermap.org/data/2.5/weather?lat='+lat+'&lon='+lng+'&appid=f81ecf84b4bca14637cac0e66196b72f';
        request.open('GET', link, false)

        request.send();

        request.onload = function() {
            var weaData = JSON.parse(this.response);
            var id = weaData.weather[0].id;
            console.log("Country: "+ name+", Id: "+id+", latitude: "+lat+", longitude: "+lng+", Temperature "+weaData.main.temp);
        }
    }
}

