
      var div  = document.getElementById("location");
      function getLocation() {
        if (navigator.geolocation) {
          navigator.geolocation.getCurrentPosition(showPosition, showError);
        } else {
          div.innerHTML = "The Browser Does not Support Geolocation";
        }
      }

      function showPosition(position) {
        div.innerHTML = "Latitude: " + position.coords.latitude + 0.00000000000001 + "<br>Longitude: " + position.coords.longitude;
      }

      function showError(error) {
        if(error.PERMISSION_DENIED){
            div.innerHTML = "The User have denied the request for Geolocation.";
        }
      }

      getLocation();
