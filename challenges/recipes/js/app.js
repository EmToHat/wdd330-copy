function myFunction() {
    let x = document.getElementById("myTopnav");
    if (x.className === "topnav") {
      x.className += " responsive";
    } else {
      x.className = "topnav";
    }
}


let lastUpdate = document.lastModified;
document.getElementById("modified").innerHTML = lastUpdate;

const date = new Date();
const year = date.getFullYear();
document.getElementById("year").innerHTML = year;