$(document).ready(function () {
    var weatherURL = 'http://api.openweathermap.org/data/2.5/weather?q=Nashville,us';

    $.get(weatherURL, function (data) {
        console.log(data);
        var weatherCondition = data.weather[0].id;

        if (weatherCondition < 233) {
            $("#weather-id").text("Thunderstorm");
        }
        else if (weatherCondition < 322) {
            $("#weather-id").text("Drizzle");
        }
        else if (weatherCondition < 532) {
            $("#weather-id").text("Rain");
        }
        else if (weatherCondition < 623) {
            $("#weather-id").text("Snow");
        }
        else if (weatherCondition < 782) {
            $("#weather-id").text("Atmospheric Covering");
        }
        else if (weatherCondition < 805) {
            $("#weather-id").text("Cloudy");
        }
    });
    


});