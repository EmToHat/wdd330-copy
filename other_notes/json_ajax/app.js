let pgCounter = 1;

let animalContainer = document.getElementById("animal-info");

let btn = document.getElementById("btn");

btn.addEventListener("click", function () {
  let ourRequest = new XMLHttpRequest();

  ourRequest.open("GET", "animals-" + pgCounter + ".json");
  //ourRequest.open("GET", "animals-1.json");
  // send data POST
  // recieve data GET

  // onload = method
  // anonymous function
  ourRequest.onload = function () {
    //console.log(ourRequest.responseText);
    //let ourData = ourRequest.responseText;
    if (ourRequest.status >= 200 && ourRequest.status < 400) {
      let ourData = JSON.parse(ourRequest.responseText);
      //console.log(ourData[0]);
      renderHTML(ourData);
    } else {
        console.log("Connected to server, but returned an error.");
    }
  };

  ourRequest.onerror = function () {
    console.log("Failed to Connect");
  };

  ourRequest.send();
  pgCounter++;

  if (pgCounter > 3) {
    btn.classList.add("hide-me");
  }
});

// AJAX
// Asynchronous JavaScript And XML
// AJAJ
// Asynchronous JavaScript And JSON

//function to add HTML
function renderHTML(data) {
  //let htmlString = "this is a test";
  let htmlString = "";

  for (i = 0; i < data.length; i++) {
    htmlString +=
      "<p>" +
      data[i].name +
      " is a " +
      data[i].species +
      " that enjoys eating ";
    for (ii = 0; ii < data[i].foods.likes.length; ii++) {
      if (ii == 0) {
        htmlString += data[i].foods.likes[ii];
      } else {
        htmlString += " and " + data[i].foods.likes[ii];
      }
    }

    htmlString += " and dislikes ";

    for (ii = 0; ii < data[i].foods.dislikes.length; ii++) {
      if (ii == 0) {
        htmlString += data[i].foods.dislikes[ii];
      } else {
        htmlString += " and " + data[i].foods.dislikes[ii];
      }
    }

    htmlString += "." + "</p>";
  }

  animalContainer.insertAdjacentHTML("beforeend", htmlString);
}
