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
     const countryZeroName = await data[0].country;
     const countryZero = await data[0].countryInfo.iso3;
     const latZero = await data[0].countryInfo.lat;
     const longZero = await data[0].countryInfo.long;
     const casesZero = await data[0].cases;
     const deathsZero = await data[0].deaths;
     const casesTodayZero = await data[0].todayCases;
     const deathsTodayZero = await data[0].todayDeaths;
     //Segundo colocado
     const countryOneName = await data[1].country;
     const countryOne = await data[1].countryInfo.iso3;
     const latOne = await data[1].countryInfo.lat;
     const longOne = await data[1].countryInfo.long;
     const casesOne = await data[1].cases;
     const deathsOne = await data[1].deaths;
     const casesTodayOne = await data[1].todayCases;
     const deathsTodayOne = await data[1].todayDeaths;
     //Terceiro colocado
     const countryTwoName = await data[2].country;
     const countryTwo = await data[2].countryInfo.iso3;
     const latTwo = await data[2].countryInfo.lat;
     const longTwo = await data[2].countryInfo.long;
     const casesTwo = await data[2].cases;
     const deathsTwo = await data[2].deaths;
     const casesTodayTwo = await data[2].todayCases;
     const deathsTodayTwo = await data[2].todayDeaths;
     //Quarto colocado
     const countryThreeName = await data[3].country;
     const countryThree = await data[3].countryInfo.iso3;
     const latThree = await data[3].countryInfo.lat;
     const longThree = await data[3].countryInfo.long;
     const casesThree = await data[3].cases;
     const deathsThree = await data[3].deaths;
     const casesTodayThree = await data[3].todayCases;
     const deathsTodayThree = await data[3].todayDeaths;
     //Quinto colocado
     const countryFourName = await data[4].country;
     const countryFour = await data[4].countryInfo.iso3;
     const latFour = await data[4].countryInfo.lat;
     const longFour = await data[4].countryInfo.long;
     const casesFour = await data[4].cases;
     const deathsFour = await data[4].deaths;
     const casesTodayFour = await data[4].todayCases;
     const deathsTodayFour = await data[4].todayDeaths;
     //Sexto colocado
     const countryFiveName = await data[5].country;
     const countryFive = await data[5].countryInfo.iso3;
     const latFive = await data[5].countryInfo.lat;
     const longFive = await data[5].countryInfo.long;
     const casesFive = await data[5].cases;
     const deathsFive = await data[5].deaths;
     const casesTodayFive = await data[5].todayCases;
     const deathsTodayFive = await data[5].todayDeaths;
     //Sétimo colocado
     const countrySixName = await data[6].country;
     const countrySix = await data[6].countryInfo.iso3;
     const latSix = await data[6].countryInfo.lat;
     const longSix = await data[6].countryInfo.long;
     const casesSix = await data[6].cases;
     const deathsSix = await data[6].deaths;
     const casesTodaySix = await data[6].todayCases;
     const deathsTodaySix = await data[6].todayDeaths;
    //Oitavo colocado
    const countrySevenName = await data[7].country;
     const countrySeven = await data[7].countryInfo.iso3;
     const latSeven = await data[7].countryInfo.lat;
     const longSeven = await data[7].countryInfo.long;
     const casesSeven = await data[7].cases;
     const deathsSeven = await data[7].deaths;
     const casesTodaySeven = await data[7].todayCases;
     const deathsTodaySeven = await data[7].todayDeaths;
     //Nono colocado
     const countryEightName = await data[8].country;
     const countryEight = await data[8].countryInfo.iso3;
     const latEight = await data[8].countryInfo.lat;
     const longEight = await data[8].countryInfo.long;
     const casesEight = await data[8].cases;
     const deathsEight = await data[8].deaths;
     const casesTodayEight = await data[8].todayCases;
     const deathsTodayEight = await data[8].todayDeaths;
     //Décimo colocado
     const countryNineName = await data[9].country;
     const countryNine = await data[9].countryInfo.iso3;
     const latNine = await data[9].countryInfo.lat;
     const longNine = await data[9].countryInfo.long;
     const casesNine = await data[9].cases;
     const deathsNine = await data[9].deaths;
     const casesTodayNine = await data[9].todayCases;
     const deathsTodayNine = await data[9].todayDeaths;
     //Mapa
     const getPosttwo = async () =>{
     var mapOptions = {center: new google.maps.LatLng(36,3),zoom: 2,mapTypeId: google.maps.MapTypeId.TERRAIN};
     var map = new google.maps.Map(document.getElementById("map_canvas"),mapOptions);
     //Marcação
     //Primeiro colocado do hanking
     var pointZero = new google.maps.LatLng(latZero,longZero);
     var marker = new google.maps.Marker({position: pointZero,map: map,title:`${countryZeroName} em primeiro colocado com ${casesZero} casos registrados`});
     //Segundo colocado
     var pointOne = new google.maps.LatLng(latOne,longOne);
     var marker = new google.maps.Marker({position: pointOne,map: map,title:`${countryOneName} em segundo colocado com ${casesOne} casos registrados`});
     //Terceiro colocado
     var pointTwo = new google.maps.LatLng(latTwo,longTwo);
     var marker = new google.maps.Marker({position: pointTwo,map: map,title:`${countryTwoName} em terceiro colocado com ${casesTwo} casos registrados`});
     //Quarto colocado
     var pointThree = new google.maps.LatLng(latThree,longThree);
     var marker = new google.maps.Marker({position: pointThree,map: map,title:`${countryThreeName} em quarto colocado com ${casesThree} casos registrados`});
     //Quinto colocado
     var pointFour = new google.maps.LatLng(latFour,longFour);
     var marker = new google.maps.Marker({position: pointFour,map: map,title:`${countryFourName} em quinto colocado com ${casesFour} casos registrados`});
     //Sexto colocado
     var pointFive = new google.maps.LatLng(latFive,longFive);
     var marker = new google.maps.Marker({position: pointFive,map: map,title:`${countryFiveName} em sexto colocado com ${casesFive} casos registrados`});
     //Sétimo colocado
     var pointSix = new google.maps.LatLng(latSix,longSix);
     var marker = new google.maps.Marker({position: pointSix,map: map,title:`${countrySixName} em sétimo colocado com ${casesSix} casos registrados`});
     //Oitavo colocado
     var pointSeven = new google.maps.LatLng(latSeven,longSeven);
     var marker = new google.maps.Marker({position: pointSeven,map: map,title:`${countrySevenName} em oitavio colocado com ${casesSeven} casos registrados`});
     //Nono colocado
     var pointEight = new google.maps.LatLng(latEight,longEight);
     var marker = new google.maps.Marker({position: pointEight,map: map,title:`${countryEightName} em nono colocado com ${casesEight} casos registrados`});
     //Décimo colocado
     var pointNine = new google.maps.LatLng(latNine,longNine);
     var marker = new google.maps.Marker({position: pointNine,map: map,title:`${countryNineName} em décimo colocado com ${casesNine} casos registrados`});
     };
     getPosttwo();
     //Gráfico
     let graphCanvas = document.getElementById('graph_canvas').getContext('2d');
     let chart = new Chart(graphCanvas, {
       type: 'line',            
       data: {
           //Eixo X
           labels: [`${countryZero}`,`${countryOne}`,`${countryTwo}`,`${countryThree}`,`${countryFour}`,`${countryFive}`,`${countrySix}`,`${countrySeven}`,`${countryEight}`,`${countryNine}`],
           //Eixo Y
           datasets: [{
                  //Primeira linha       
                   label: 'Total de Casos Registrados',
                   data: [`${casesZero}`,`${casesOne}`,`${casesTwo}`,`${casesThree}`,`${casesFour}`,`${casesFive}`,`${casesSix}`,`${casesSeven}`,`${casesEight}`,`${casesNine}`],
                   backgroundColor: 'blue',
                   borderColor: "blue",
                   borderWidth: 1.5,
               },
               {
                 //Segunda linha
                  label: 'Total de Número de Mortos',
                  data: [`${deathsZero}`,`${deathsOne}`,`${deathsTwo}`,`${deathsThree}`,`${deathsFour}`,`${deathsFive}`,`${deathsSix}`,`${deathsSeven}`,`${deathsEight}`,`${deathsNine}`],
                  backgroundColor: 'red',
                  borderColor: "red",
                  borderWidth: 1.5
               }
            ]
         }
     });
    //Tabela
    //Primeira linha
    //Primeiro país
    const tableCountryZero = document.getElementById('countryZero');
    tableCountryZero.innerHTML = countryZeroName;
    //Segundo país
    const tableCountryOne = document.getElementById('countryOne');
    tableCountryOne.innerHTML = countryOneName;
    //Terceiro país
    const tableCountryTwo = document.getElementById('countryTwo');
    tableCountryTwo.innerHTML = countryTwoName;
    //Quarto país
    const tableCountryThree = document.getElementById('countryThree');
    tableCountryThree.innerHTML = countryThreeName;
    //Quinto páis
    const tableCountryFour = document.getElementById('countryFour');
    tableCountryFour.innerHTML = countryFourName;
    //Sexto país
    const tableCountryFive = document.getElementById('countryFive');
    tableCountryFive.innerHTML = countryFiveName;
    //Sétimo país
    const tableCountrySix = document.getElementById('countrySix');
    tableCountrySix.innerHTML = countrySixName;
    //Oitavo país
    const tableCountrySeven = document.getElementById('countrySeven');
    tableCountrySeven.innerHTML = countrySevenName;
    //Nono país
    const tableCountryEight = document.getElementById('countryEight');
    tableCountryEight.innerHTML = countryEightName;
    //Décimo país
    const tableCountryNine = document.getElementById('countryNine');
    tableCountryNine.innerHTML = countryNineName;
///////////////////////////////////////////////////////////////////////////////////////////////////////////
    //Segunda linha
    //Primeiro país
    const tableCountrycasesZero = document.getElementById('todayCasesZero');
    tableCountrycasesZero.innerHTML = casesTodayZero;
    //Segundo país
    const tableCountrycasesOne = document.getElementById('todayCasesOne');
    tableCountrycasesOne.innerHTML = casesTodayOne;
    //Terceiro país
    const tableCountrycasesTwo = document.getElementById('todayCasesTwo');
    tableCountrycasesTwo.innerHTML = casesTodayTwo;
    //Quarto país
    const tableCountrycasesThree = document.getElementById('todayCasesThree');
    tableCountrycasesThree.innerHTML = casesTodayThree;
    //Quinto páis
    const tableCountrycasesFour = document.getElementById('todayCasesFour');
    tableCountrycasesFour.innerHTML = casesTodayFour;
    //Sexto país
    const tableCountrycasesFive = document.getElementById('todayCasesFive');
    tableCountrycasesFive.innerHTML = casesTodayFive;
    //Sétimo país
    const tableCountrycasesSix = document.getElementById('todayCasesSix');
    tableCountrycasesSix.innerHTML = casesTodaySix;
    //Oitavo país
    const tableCountrycasesSeven = document.getElementById('todayCasesSeven');
    tableCountrycasesSeven.innerHTML = casesTodaySeven;
    //Nono país
    const tableCountrycasesEight = document.getElementById('todayCasesEight');
    tableCountrycasesEight.innerHTML = casesTodayEight;
    //Décimo país
    const tableCountrycasesNine = document.getElementById('todayCasesNine');
    tableCountrycasesNine.innerHTML = casesTodayNine;
///////////////////////////////////////////////////////////////////////////////////////////////////////
    //Terceira linha
    //Primeiro país
    const tableCountrydeathsZero = document.getElementById('todayDeathsZero');
    tableCountrydeathsZero.innerHTML = deathsTodayZero;
    //Segundo país
    const tableCountrydeathsOne = document.getElementById('todayDeathsOne');
    tableCountrydeathsOne.innerHTML = deathsTodayOne;
    //Terceiro país
    const tableCountrydeathsTwo = document.getElementById('todayDeathsTwo');
    tableCountrydeathsTwo.innerHTML = deathsTodayTwo;
    //Quarto país
    const tableCountrydeathsThree = document.getElementById('todayDeathsThree');
    tableCountrydeathsThree.innerHTML = deathsTodayThree;
    //Quinto páis
    const tableCountrydeathsFour = document.getElementById('todayDeathsFour');
    tableCountrydeathsFour.innerHTML = deathsTodayFour;
    //Sexto país
    const tableCountrydeathsFive = document.getElementById('todayDeathsFive');
    tableCountrydeathsFive.innerHTML = deathsTodayFive;
    //Sétimo país
    const tableCountrydeathsSix = document.getElementById('todayDeathsSix');
    tableCountrydeathsSix.innerHTML = deathsTodaySix;
    //Oitavo país
    const tableCountrydeathsSeven = document.getElementById('todayDeathsSeven');
    tableCountrydeathsSeven.innerHTML = deathsTodaySeven;
    //Nono país
    const tableCountrydeathsEight = document.getElementById('todayDeathsEight');
    tableCountrydeathsEight.innerHTML = deathsTodayEight;
    //Décimo país
    const tableCountrydeathsNine = document.getElementById('todayDeathsNine');
    tableCountrydeathsNine.innerHTML = deathsTodayNine;
    }; 
  getPost();

 


