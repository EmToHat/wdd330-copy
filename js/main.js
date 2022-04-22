// Array Links
const links = [
  // Objects
  {
    week: "Week 01",
    label: "Notes",
    url: "week1/index.html",
  },
  {
    week: "Week 02",
    label: "Notes",
    url: "week2/index.html",
  },
  {
    week: "Week 03",
    label: "Notes",
    url: "week3/index.html",
  },
  {
    week: "Week 04",
    label: "Notes",
    url: "week4/index.html",
  },
  {
    week: "Week 05",
    label: "Notes",
    url: "week5/index.html",
  },
  {
    week: "Week 06",
    label: "Notes",
    url: "week6/index.html",
  },
];

/*
links.label.forEach(function (link) {
    let liElement = document.createElement('li');
    liElement.textContent = link;
    list.appendChild(li);
})*/

links.forEach(displayList);

function displayList() {
    // creates the variable list for the order list in the index.html file
    const list = document.querySelector("ol");
    let week = links.week;
}