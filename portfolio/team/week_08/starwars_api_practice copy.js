/*
fetch('https://swapi.dev/api/starships/')
    .then(response => console.log(response))
    .then(response => response.json())
   /* 
    .then(res => {
        if (res.ok){
            console.log('SUCCESS')
        } else {
            console.log('NOT SUCCESSFUL')
        }
    })
    .then(data => console.log(data))
    
    //.catch(error => console.log('ERROR'))*/
/*
function getStarships(){
    //let response = fetch('https://swapi.dev/api/starships/')
    fetch('https://swapi.dev/api/starships/')
        .then(response => response.json())
        .then(data => console.log(data));
}*/

// Create ship div
//let shipDiv = document.createElement("div");
//shipDiv.classList.add("ship-info");

//let shipName = document.querySelector(".ship-info");
//shipName.innerText = data.results.name;

function getJSON(url) {
    return fetch(url)
      .then(function (response) {
        if (!response.ok) {
          throw Error(response.statusText);
        } else {
          return response.json();
        }
      })
      .catch(function (error) {
        console.log(error);
      });
  }
  
  let starwarsAPI = "https://swapi.dev/api/starships/";
  
  fetch(starwarsAPI)
    .then((response) => response.json())
    .then((ships) => showShips(ships.results));
  
  const shipList = shipListEle.children[1];
  shipList.innerHTML = "";
  
  showShips = (ships) => {
    const shipsDiv = document.querySelector("#ship-info-box");
    ships.forEach((ship) => {
      let tableRowEle = document.createElement("tr");
      tableRowEle.innerHTML = 
          `<td><a href="${ship.url}">${ship.name}</a></td>
          <td>${ship.length}</td>
          <td>${ship.crew}</td>
          `;
  
      tableRowEle.addEventListener("click", function (event) {
          //when clicked the default link behavior should be stopped, and the ship details function should be called...passing the value of the href attribute in
          event.preventDefault();
          getShipDetails(ship.url);
      });
      
      shipList.appendChild(tableRowEle);
    });
  }
  
  /*for(let ship of ships){
      
      let li = '<li>';
      li += `${ship.name} you can see the information in this link`;
      li += `<a href='${ship.url}>Link for the info</a></li>'`;
      
      }
      let li = '';
      
      for(let ship of ships){
      
      li += '<li>';
      li += `${ship.name} you can see the information in this link`;
      li += `<a href='${ship.url}>Link for the info</a></li>'`;
      
      }
  
  
      let li = "<li>";
      li += `${ship.name} click for more info`;
      li += `<a href='${ship.url}></a></li>`;
  
      const shipNameEle = document.createElement("p");
      shipNameEle.innerText = `${ship.name}, ${ship.url}`;
      shipsDiv.append(shipNameEle);
      */
  