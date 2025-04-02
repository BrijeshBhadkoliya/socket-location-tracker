function myfun() {
    const socket = io();

    navigator.geolocation.watchPosition(location,errlocation)

    function location(postion){
        latitude = postion.coords.latitude
        longitude = postion.coords.longitude
     console.log(postion);
     socket.emit('location',{latitude,longitude})
     
    }
    function errlocation(err){
        console.log(err);
    }
  }