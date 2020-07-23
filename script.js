var x = document.getElementById("demo");
var lat;
var lon;
function getLocation() {
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(showPosition);
  } else {
    x.innerHTML = "Geolocation is not supported by this browser.";
  }
}

function showPosition(position) {
  lat = position.coords.latitude;
  lon = position.coords.longitude;
  console.log(lat);
  console.log(lon);
  getMapPlaces(lat, lon);
}

function getMapPlaces(lat, lon) {
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
      latitude: lat,
      longitude: lon,
      radius: 2000,
      //sort_by: "distance",
      //location: "Fort+Lee",
      term: "dog+friendly",
      accessToken:
        "_961jkjpPEKGMX6YlEZm8awCLH1avefv5RUIhm6ciV_8kfRRr-gRay5GIICt9Ih-ggqoKNJdnSD7rBuIwmcbiaHSLUFWeJmOaHmzO5t4UwYvJCfX7hy38gy4IhUWX3Yx",
    },
  };

  $.ajax(settings).done(function (response) {
    console.log(response);
    printToPage(response);
    //getSpecificBusiness("V1ieDWzBTCa6mrvjlvn8iQ");
  });
}
function printToPage(response) {
  businessArr = response.businesses;

  businessArr.forEach((business) => {
    var businessDiv = $("<div>");
    var nameDiv = $("<div>");
    var phoneDiv = $("<div>");
    var addressDiv = $("<div>");
    var categoryDiv = $("<div>");

    nameDiv.append(business.name);
    categoryDiv.append(business.categories[0].title);
    phoneDiv.append(business.display_phone);
    addressDiv.append(business.location.display_address);

    businessDiv.append(nameDiv);
    businessDiv.append(phoneDiv);
    businessDiv.append(addressDiv);
    $("#everything").append(businessDiv);
  });
}
function getSpecificBusiness(id) {
  var key =
    "_961jkjpPEKGMX6YlEZm8awCLH1avefv5RUIhm6ciV_8kfRRr-gRay5GIICt9Ih-ggqoKNJdnSD7rBuIwmcbiaHSLUFWeJmOaHmzO5t4UwYvJCfX7hy38gy4IhUWX3Yx";
  var settings = {
    async: true,
    crossDomain: true,
    url:
      "https://cors-anywhere.herokuapp.com/https://api.yelp.com/v3/businesses/" +
      id,
    method: "GET",
    headers: {
      Authorization: "Bearer " + key,
      //"x-rapidapi-host": "YelpAPIserg-osipchukV1.p.rapidapi.com",
      //"x-rapidapi-key": "629a103ae7msh8d2e000534865ffp18dc6ejsna10a77d719b1",
      //"content-type": "application/x-www-form-urlencoded",
    },
    data: {
      //location: "Harrisburg",
      accessToken:
        "_961jkjpPEKGMX6YlEZm8awCLH1avefv5RUIhm6ciV_8kfRRr-gRay5GIICt9Ih-ggqoKNJdnSD7rBuIwmcbiaHSLUFWeJmOaHmzO5t4UwYvJCfX7hy38gy4IhUWX3Yx",
    },
  };
  $.ajax(settings).done(function (response) {
    console.log(response);
  });
}

getLocation();
