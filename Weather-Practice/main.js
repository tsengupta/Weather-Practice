$(document).ready(function () {
    var weatherURL = 'http://api.openweathermap.org/data/2.5/find?q=Nashville&units=imperial';

    $.get(weatherURL, function (data) {
        console.log(data);
        var weatherCondition = data.list[0].weather[0].id;
        var weatherDictionary = {
            // Thunderstorms
            200: "Thunderstorm with Light Rain",
            201: "Thunderstorm with Rain",
            202: "Thunderstorm with Heavy Rain",
            210: "Light Thunderstorm",
            211: "Thunderstorm",
            212: "Heavy Thunderstorm",
            221: "Ragged Thunderstorm",
            230: "Thunderstorm with Light Drizzle",
            231: "Thunderstorm with Drizzle",
            232: "Thunderstorm with Heavy Drizzle",

            // Drizzles
            300: "Light Drizzle",
            301: "Drizzle",
            302: "Moderate Drizzle",
            310: "Quite the Drizzle",
            311: "So Much Drizzle, it's Almost Rain!",
            312: "Heavy Drizzle",
            313: "Drizzle Intensifies",
            314: "Drizzling at Maximum Capacitiy",
            321: "A Showering of Drizzleness",

            //Rain
            500: "Light Rain",
            501: "Moderate Rain",
            502: "Quite a Lot of Rain",
            503: "So Much Rain Everywhere",
            504: "EXTREME RAIN",
            511: "Freezing Rain",
            520: "Rain Intensifies",
            521: "Rain Shower",
            522: "Rain Extremely Intensifies",
            531: "Ragged Rain Shower",

            //Snow
            600: "Light Snowfall",
            601: "Snow!",
            602: "Heavy Snowfall",
            611: "Sleet",
            612: "Sleet Shower",
            615: "Light Rain and Snow",
            616: "Rain and Snow",
            620: "Light Snow Shower",
            621: "Snow Shower",
            622: "Heavy Snow Shower",

            // Atmosphere
            701: "Mist",
            711: "Smoke",
            721: "Haze",
            731: "Sand, Dust Whirls",
            741: "Fog",
            751: "Sand",
            761: "Dust",
            762: "Volcanic Ash",
            771: "Squalls",
            781: "Tornado",

            // Clouds
            800: "Clear Sky",
            801: "A Few Clouds",
            802: "Scattered Clouds",
            803: "Broken Clouds",
            804: "Overcast Clouds",

            // Extreme
            900: "Tornado",
            901: "Tropical Storm",
            902: "Hurricane",
            903: "Super Duper Cold",
            904: "Super Duper Hot",
            905: "Terribly Windy",
            906: "Hail on Earth",

            // Additional
            951: "Calm Day",
            952: "A Pleasant Light Breeze",
            953: "A Delightfully Gentle Breeze",
            954: "A Satisfying Moderate Breeze",
            955: "A Fresh, Enriching Breeze",
            956: "An Agitated Strong Breeze",
            957: "High Wind, Near Gale",
            958: "Gale",
            959: "Severe Gale",
            960: "Storm",
            961: "Quite the Harsh and Violent Storm",
            962: "Hurricane"
        };
        var wString = weatherDictionary[weatherCondition];
        $("#weather-forecast").text(wString);

        var weatherTemp = data.list[0].main.temp;
        $("#weather-temp").text(weatherTemp.toFixed(0) + "°F");

        var weatherHumidity = data.list[0].main.humidity;
        $("#weather-humidity").text(weatherHumidity + "%");

        var windSpeed = data.list[0].wind.speed;
        $("#weather-wind").text(windSpeed.toFixed(0) + " MPH")

        var weatherImage;
        $("#image").show(weatherImage);
        switch (weatherImage) {
            case (weatherCondition < 933):
                ("src", "http://images.clipartpanda.com/rain-clip-art--rain-clipart-2.png")
        }
    });
});