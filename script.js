     //Data
     var dataToday = new Date();
     var day = dataToday.getDate();
     var month = dataToday.getMonth();
     var year = dataToday.getFullYear(); 
     //Dados
     const getPost = async () => {
     const response = await fetch(`https://corona.lmao.ninja/v3/covid-19/countries?yesterday=${day}%2F${month}%2F${year}&sort=cases&allowNull=0`)
     const data = await response.json();
     //Primeiro colocado do hanking
     const latZero = await data[0].countryInfo.lat;
     const longZero = await data[0].countryInfo.long;
     const casesZero = await data[0].cases
     //Segundo colocado
     const latOne = await data[1].countryInfo.lat;
     const longOne = await data[1].countryInfo.long;
     const casesOne = await data[1].cases
     //Terceiro colocado
     const latTwo = await data[2].countryInfo.lat;
     const longTwo = await data[2].countryInfo.long;
     const casesTwo = await data[2].cases
     //Quarto colocado
     const latThree = await data[3].countryInfo.lat;
     const longThree = await data[3].countryInfo.long;
     const casesThree = await data[3].cases
     //Quinto colocado
     const latFour = await data[4].countryInfo.lat;
     const longFour = await data[4].countryInfo.long;
     const casesFour = await data[4].cases
     //Sexto colocado
     const latFive = await data[5].countryInfo.lat;
     const longFive = await data[5].countryInfo.long;
     const casesFive = await data[5].cases
     //Sétimo colocado
     const latSix = await data[6].countryInfo.lat;
     const longSix = await data[6].countryInfo.long;
     const casesSix = await data[6].cases
    //Oitavo colocado
     const latSeven = await data[7].countryInfo.lat;
     const longSeven = await data[7].countryInfo.long;
     const casesSeven = await data[7].cases
     //Nono colocado
     const latEight = await data[8].countryInfo.lat;
     const longEight = await data[8].countryInfo.long;
     const casesEight = await data[8].cases
     //Décimo colocado
     const latNine = await data[9].countryInfo.lat;
     const longNine = await data[9].countryInfo.long;
     const casesNine = await data[9].cases
     //Mapa
     const getPosttwo = async () =>{
     var mapOptions = {center: new google.maps.LatLng(36,3),zoom: 2,mapTypeId: google.maps.MapTypeId.TERRAIN};
     var map = new google.maps.Map(document.getElementById("map_canvas"),mapOptions);
     //Marcação
     //Primeiro colocado do hanking
     var pointZero = new google.maps.LatLng(latZero,longZero);
     var marker = new google.maps.Marker({position: pointZero,map: map,title:`Primeiro colocado com ${casesZero} casos registrados`});
     //Segundo colocado
     var pointOne = new google.maps.LatLng(latOne,longOne);
     var marker = new google.maps.Marker({position: pointOne,map: map,title:`Segundo colocado com ${casesOne} casos registrados`});
     //Terceiro colocado
     var pointTwo = new google.maps.LatLng(latTwo,longTwo);
     var marker = new google.maps.Marker({position: pointTwo,map: map,title:`Terceiro colocado com ${casesTwo} casos registrados`});
     //Quarto colocado
     var pointThree = new google.maps.LatLng(latThree,longThree);
     var marker = new google.maps.Marker({position: pointThree,map: map,title:`Quarto colocado com ${casesThree} casos registrados`});
     //Quinto colocado
     var pointFour = new google.maps.LatLng(latFour,longFour);
     var marker = new google.maps.Marker({position: pointFour,map: map,title:`Quinto colocado com ${casesFour} casos registrados`});
     //Sexto colocado
     var pointFive = new google.maps.LatLng(latFive,longFive);
     var marker = new google.maps.Marker({position: pointFive,map: map,title:`Sexto colocado com ${casesFive} casos registrados`});
     //Sétimo colocado
     var pointSix = new google.maps.LatLng(latSix,longSix);
     var marker = new google.maps.Marker({position: pointSix,map: map,title:`Sétimo colocado com ${casesSix} casos registrados`});
     //Oitavo colocado
     var pointSeven = new google.maps.LatLng(latSeven,longSeven);
     var marker = new google.maps.Marker({position: pointSeven,map: map,title:`Oitavio colocado com ${casesSeven} casos registrados`});
     //Nono colocado
     var pointEight = new google.maps.LatLng(latEight,longEight);
     var marker = new google.maps.Marker({position: pointEight,map: map,title:`Nono colocado com ${casesEight} casos registrados`});
     //Décimo colocado
     var pointNine = new google.maps.LatLng(latNine,longNine);
     var marker = new google.maps.Marker({position: pointNine,map: map,title:`Décimo colocado com ${casesNine} casos registrados`});
     };
     getPosttwo();
  }; 
getPost();



