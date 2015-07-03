$(document).ready(function () {
    var weatherURL = 'http://api.openweathermap.org/data/2.5/find?q=Nashville&units=imperial';

    $.get(weatherURL, function (data) {
        console.log(data);

        var weatherCondition = data.list[0].weather[0].id;
        var wString = weatherDictionary[weatherCondition];
        var weatherTemp = data.list[0].main.temp;
        var tempMax = data.list[0].main.temp_max;
        var tempMin = data.list[0].main.temp_min;
        var weatherHumidity = data.list[0].main.humidity;
        var windSpeed = data.list[0].wind.speed;

        weatherDataToText(wString, weatherTemp, tempMax, tempMin, weatherHumidity, windSpeed);
        weatherPicChange(weatherCondition);
    });

    function weatherDataToText(wString, weatherTemp, tempMax, tempMin, weatherHumidity, windSpeed) {
        $("#weather-forecast").text(wString);
        $("#weather-temp").text(weatherTemp.toFixed(0) + "°F");
        $("#max-min").text(tempMax.toFixed(0) + "°/ " + tempMin.toFixed(0) + "°");
        $("#weather-humidity").text(weatherHumidity + "%");
        $("#weather-wind").text(windSpeed.toFixed(0) + " MPH");
    };

    function weatherPicChange(weatherCondition) {
        switch (true) {
            case (weatherCondition < 233):
                $("#image").prepend(weatherPics.thunderstorms);
                break;
            case (weatherCondition < 323):
                $("#image").prepend(weatherPics.drizzle);
                break;
            case (weatherCondition === 500):
                $("#image").prepend(weatherPics.lightRain);
                break;
            case (weatherCondition === 501):
                $("#image").prepend(weatherPics.moderateRain);
                break;
            case (weatherCondition < 532):
                $("#image").prepend(weatherPics.extremeRain);
                break;
            case (weatherCondition < 623):
                $("#image").prepend(weatherPics.snow);
                break;
            case (weatherCondition < 732):
                $("#image").prepend(weatherPics.mist);
                break;
            case (weatherCondition < 772):
                $("#image").prepend(weatherPics.fog);
                break;
            case (weatherCondition === 781):
                $("#image").prepend(weatherPics.tornado);
                break;
            case (weatherCondition === 800):
                $("#image").prepend(weatherPics.clearSky);
                break;
            case (weatherCondition < 803):
                $("#image").prepend(weatherPics.cloudy);
                break;
            case (weatherCondition < 805):
                $("#image").prepend(weatherPics.overcastClouds);
                break;
            case (weatherCondition < 903):
                $("#image").prepend(weatherPics.tornado);
                break;
            case (weatherCondition === 903):
                $("#image").prepend(weatherPics.cold);
                break;
            case (weatherCondition === 904):
                $("#image").prepend(weatherPics.hot);
                break;
            case (weatherCondition === 905):
                $("#image").prepend(weatherPics.windy);
                break;
            case (weatherCondition === 906):
                $("#image").prepend(weatherPics.hail);
                break;
            case (weatherCondition === 951):
                $("#image").prepend(weatherPics.clearSky);
                break;
            case (weatherCondition < 959):
                $("#image").prepend(weatherPics.windy);
                break;
            case (weatherCondition < 962):
                $("#image").prepend(weatherPics.thunderstorms);
                break;
            case (weatherCondition === 963):
                $("#image").prepend(weatherPics.tornado);
                break;
        }
    };

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

    var weatherPics = {
        "thunderstorms": '<img src="https://cdn1.iconfinder.com/data/icons/lovely-weather-icons/32/thunderstorms-256.png"/>',
        "drizzle": '<img src="https://cdn1.iconfinder.com/data/icons/lovely-weather-icons/32/cloudy-256.png"/>',
        "lightRain": '<img src="https://cdn1.iconfinder.com/data/icons/lovely-weather-icons/32/lightshowers-256.png"/>',
        "moderateRain": '<img src="https://cdn1.iconfinder.com/data/icons/lovely-weather-icons/32/lightrain-256.png"/>',
        "extremeRain": '<img src="https://cdn1.iconfinder.com/data/icons/lovely-weather-icons/32/rain-256.png"/>',
        "snow": '<img src="https://cdn1.iconfinder.com/data/icons/lovely-weather-icons/32/lightsnow-256.png"/>',
        "mist": '<img src="https://cdn1.iconfinder.com/data/icons/lovely-weather-icons/32/lightfog-256.png"/>',
        "fog": '<img src="https://cdn1.iconfinder.com/data/icons/lovely-weather-icons/32/fog-256.png"/>',
        "clearSky": '<img src="https://cdn2.iconfinder.com/data/icons/lovely-weather-icons/32/moon-full-256.png"/>',
        "cloudy": '<img src="https://cdn1.iconfinder.com/data/icons/lovely-weather-icons/32/cloud-256.png"/>',
        "overcastClouds": '<img src="https://cdn1.iconfinder.com/data/icons/lovely-weather-icons/32/705117-cloudy-256.png"/>',
        "tornado": '<img src="https://cdn2.iconfinder.com/data/icons/lovely-weather-icons/32/hurricane-256.png"/>',
        "hot": '<img src="https://cdn2.iconfinder.com/data/icons/lovely-weather-icons/32/Thermometer-100-256.png"/>',
        "cold": '<img src="https://cdn2.iconfinder.com/data/icons/lovely-weather-icons/32/Thermometer-0-256.png"/>',
        "windy": '<img src="https://cdn2.iconfinder.com/data/icons/lovely-weather-icons/32/wind1-256.png"/>',
        "hail": '<img src="https://cdn1.iconfinder.com/data/icons/lovely-weather-icons/32/hail-256.png"/>'
    };
});