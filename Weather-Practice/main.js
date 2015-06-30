$(document).ready(function () {
    var weatherData = 'http://api.openweathermap.org/data/2.5/forecast/daily?q=Nashville&mode=json&units=metric&cnt=7';

    $.get(weatherData, function (data) {
        console.log(data);
        for (var i = 0; i < data.list.length; i++) {
            var day = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
            $("#weather").append("The weather for " + day[i] + " is " + data.list[i].weather[0].description + ". ");
        }
    }
)});