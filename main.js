// Array
const myLinks = [
  {
    title: "Week 01",
    block: "one",
    label: "Week 01 | Notes",
    url: "../portfolio/notes/week_01/index.html",
  },
  {
    title: "Week 01",
    block: "one",
    label: "Week 01 | Projects",
    url: "../portfolio/projects/week_01/index.html",
  },
  {
    title: "Week 02",
    block: "one",
    label: "Week 02 | Notes",
    url: "../portfolio/notes/week_02/index.html",
  },
  {
    title: "Week 02",
    block: "one",
    label: "Week 02 | Projects",
    url: "../portfolio/projects/week_02/index.html",
  },
  {
    title: "Week 03",
    block: "one",
    label: "Week 03 | Notes",
    url: "../portfolio/notes/week_03/index.html",
  },
  {
    title: "Week 03",
    block: "one",
    label: "Week 03 | Projects",
    url: "../portfolio/projects/week_03/index.html",
  },
  {
    title: "Week 04",
    block: "one",
    label: "Week 04 | Notes",
    url: "../portfolio/notes/week_04/index.html",
  },
  {
    title: "Week 04",
    block: "one",
    label: "Week 04 | Projects",
    url: "../portfolio/projects/week_04/index.html",
  },
  {
    title: "Week 05",
    block: "one",
    label: "Week 05 | Notes",
    url: "../portfolio/notes/week_05/index.html",
  },
  {
    title: "Week 05",
    block: "one",
    label: "Week 05 | Projects",
    url: "../portfolio/projects/week_05/index.html",
  },
  {
    title: "Week 06",
    block: "one",
    label: "Week 06 | Todo List Challenge",
    url: "../portfolio/challenges/todo/todo.html",
  },
  {
    title: "Week 07",
    block: "one",
    label: "Week 07 | Notes",
    url: "../portfolio/notes/week_07/index.html",
  },
  {
    title: "Week 07",
    block: "one",
    label: "Week 07 | Projects",
    url: "../portfolio/projects/week_07/index.html",
  },
  {
    title: "Week 08",
    block: "two",
    label: "Week 08 | Notes",
    url: "../portfolio/notes/week_08/index.html",
  },
  {
    title: "Week 08",
    block: "two",
    label: "Week 08 | Projects",
    url: "../portfolio/projects/week_08/index.html",
  },
  {
    title: "Week 09",
    block: "two",
    label: "Week 09 | Notes",
    url: "../portfolio/notes/week_09/index.html",
  },
  {
    title: "Week 09",
    block: "two",
    label: "Week 09 | Projects",
    url: "../portfolio/projects/week_09/index.html",
  },
  {
    title: "Week 10",
    block: "two",
    label: "Week 10 | Notes",
    url: "../portfolio/notes/week_10/index.html",
  },
  {
    title: "Week 10",
    block: "two",
    label: "Week 10 | Projects",
    url: "../portfolio/projects/week_10/index.html",
  },
  {
    title: "Week 11",
    block: "two",
    label: "Week 11 | Notes",
    url: "../portfolio/notes/week_11/index.html",
  },
  {
    title: "Week 11",
    block: "two",
    label: "Week 11 | Projects",
    url: "../portfolio/projects/week_11/index.html",
  },
  {
    title: "Week 12",
    block: "two",
    label: "Week 12 | Notes",
    url: "../portfolio/notes/week_12/index.html",
  },
  {
    title: "Week 12",
    block: "two",
    label: "Week 12 | Projects",
    url: "../portfolio/projects/week_12/index.html",
  },
];

// HTML id: portfolio-list
var myUnorderedList = document.querySelector("#portfolio-list");

for (let i = 0; i < myLinks.length; i++) {
  // Create Elements
  let anchorElement = document.createElement("a");
  let listElement = document.createElement("li");

  anchorElement.textContent = myLinks[i].label;

  // Set Attribute
  anchorElement.setAttribute("href", myLinks[i].url);

  // Append Elements
  listElement.appendChild(anchorElement);
  myUnorderedList.appendChild(listElement);
}
