
     const getPost = async () => {
     const response = await fetch(`https://corona.lmao.ninja/v3/covid-19/countries?yesterday=14%2F05%2F21&sort=cases&allowNull=0`)
     const data = await response.json()
     const latZero = await data[0].countryInfo.lat
     const longZero = await data[0].countryInfo.long
     const latOne = await data[1].countryInfo.lat
     const longOne = await data[1].countryInfo.long
     const latTwo = await data[2].countryInfo.lat
     const longTwo = await data[2].countryInfo.long
     const latThree = await data[3].countryInfo.lat
     const longThree = await data[3].countryInfo.long
     const latFour = await data[4].countryInfo.lat
     const longFour = await data[4].countryInfo.long
     const getPosttwo = async () =>{
     var mapOptions = {center: new google.maps.LatLng(12,12),zoom: 1.75,mapTypeId: google.maps.MapTypeId.ROADMAP};
     var map = new google.maps.Map(document.getElementById("map_canvas"),mapOptions);
     var pointZero = new google.maps.LatLng(latZero,longZero);
     var marker = new google.maps.Marker({position: pointZero,map: map,title:"Primeiro país com mais casos registrados"});
     var pointOne = new google.maps.LatLng(latOne,longOne);
     var marker = new google.maps.Marker({position: pointOne,map: map,title:"Segundo país com mais casos registrados"});
     var pointTwo = new google.maps.LatLng(latTwo,longTwo);
     var marker = new google.maps.Marker({position: pointTwo,map: map,title:"Terceiro país com mais casos registrados"});
     var pointThree = new google.maps.LatLng(latThree,longThree);
     var marker = new google.maps.Marker({position: pointThree,map: map,title:"Quarto país com mais casos registrados"});
     var pointFour = new google.maps.LatLng(latFour,longFour);
     var marker = new google.maps.Marker({position: pointFour,map: map,title:"Quinto país com mais casos registrados"});
     };
     getPosttwo();
  };

getPost();

