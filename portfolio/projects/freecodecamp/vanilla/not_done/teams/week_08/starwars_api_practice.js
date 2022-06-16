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

let starwarsAPI = "https://swapi.dev/api/starships/";

fetch(starwarsAPI)
  .then((response) => response.json())
  .then((ships) => showShips(ships.results));

showShips = (ships) => {
  const shipsDiv = document.querySelector("#shiplist");
  ships.forEach((ship) => {
    const tableRowEle = document.createElement("tr");

    tableRowEle.innerHTML = `
          <td><a href="${ship.url}">${ship.name}</a></td>
          <td>${ship.length}</td>
          <td>${ship.crew}</td>
          `;

    shipsDiv.append(tableRowEle);
  });
};

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
    */
