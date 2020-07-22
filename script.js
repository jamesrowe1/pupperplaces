function getMapPlaces() {
  var key =
    "_961jkjpPEKGMX6YlEZm8awCLH1avefv5RUIhm6ciV_8kfRRr-gRay5GIICt9Ih-ggqoKNJdnSD7rBuIwmcbiaHSLUFWeJmOaHmzO5t4UwYvJCfX7hy38gy4IhUWX3Yx";
  var settings = {
    async: true,
    crossDomain: true,
    url:
      "https://cors-anywhere.herokuapp.com/https://api.yelp.com/v3/businesses/search",
    method: "GET",
    headers: {
      Authorization: "Bearer " + key,
      //"x-rapidapi-host": "YelpAPIserg-osipchukV1.p.rapidapi.com",
      //"x-rapidapi-key": "629a103ae7msh8d2e000534865ffp18dc6ejsna10a77d719b1",
      //"content-type": "application/x-www-form-urlencoded",
    },
    data: {
      location: "Harrisburg",
      accessToken:
        "_961jkjpPEKGMX6YlEZm8awCLH1avefv5RUIhm6ciV_8kfRRr-gRay5GIICt9Ih-ggqoKNJdnSD7rBuIwmcbiaHSLUFWeJmOaHmzO5t4UwYvJCfX7hy38gy4IhUWX3Yx",
    },
  };

  $.ajax(settings).done(function (response) {
    console.log(response);
  });
}

getMapPlaces();
