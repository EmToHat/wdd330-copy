// Array
// week:
// one, two, three, four, five, six,
// seven, eight, nine, ten, eleven, twelve
// type:
// note, project, team

const myLinks = [
  {
    week: "one",
    blocksem: "first",
    label: "Week 01 | Notes",
    type: "note",
    url: "portfolio/notes/week_01/index.html",
  },
  {
    week: "one",
    blocksem: "first",
    label: "Week 01 | Projects",
    type: "project",
    url: "portfolio/projects/week_01/index.html",
  },
  {
    week: "two",
    blocksem: "first",
    type: "note",
    label: "Week 02 | Notes",
    url: "portfolio/notes/week_02/index.html",
  },
  {
    week: "two",
    blocksem: "first",
    type: "project",
    label: "Week 02 | Projects",
    url: "portfolio/projects/week_02/index.html",
  },
  {
    week: "three",
    blocksem: "first",
    label: "Week 03 | Notes",
    type: "note",
    url: "portfolio/notes/week_03/index.html",
  },
  {
    week: "three",
    blocksem: "first",
    label: "Week 03 | Projects",
    type: "project",
    url: "portfolio/projects/week_03/index.html",
  },
  {
    week: "four",
    blocksem: "first",
    label: "Week 04 | Notes",
    type: "note",
    url: "portfolio/notes/week_04/index.html",
  },
  {
    week: "four",
    blocksem: "first",
    label: "Week 04 | Projects",
    type: "project",
    url: "portfolio/projects/week_04/index.html",
  },
  {
    week: "five",
    blocksem: "first",
    label: "Week 05 | Notes",
    type: "note",
    url: "portfolio/notes/week_05/index.html",
  },
  {
    week: "five",
    blocksem: "first",
    label: "Week 05 | Projects",
    type: "project",
    url: "portfolio/projects/week_05/index.html",
  },
  {
    week: "six",
    blocksem: "first",
    label: "Week 06 | Todo List Challenge",
    type: "challenge",
    url: "portfolio/challenges/todo/todo.html",
  },
  {
    week: "seven",
    blocksem: "first",
    label: "Week 07 | Notes",
    type: "note",
    url: "https://emt0rres.github.io/wdd330/portfolio/notes/week_07/week_7_notes.html",
  },
  {
    week: "seven",
    blocksem: "first",
    label: "Week 07 | Projects",
    type: "project",
    url: "../portfolio/projects/week_07/index.html",
  },
  {
    week: "eight",
    blocksem: "second",
    label: "Week 08 | Notes",
    type: "note",
    url: "../portfolio/notes/week_08/index.html",
  },
  {
    week: "eight",
    blocksem: "second",
    label: "Week 08 | Projects",
    type: "project",
    url: "../portfolio/projects/week_08/index.html",
  },
  {
    week: "nine",
    blocksem: "second",
    label: "Week 09 | Notes",
    type: "note",
    url: "../portfolio/notes/week_09/index.html",
  },
  {
    week: "nine",
    blocksem: "second",
    label: "Week 09 | Projects",
    type: "project",
    url: "../portfolio/projects/week_09/index.html",
  },
  {
    week: "ten",
    blocksem: "second",
    label: "Week 10 | Notes",
    type: "note",
    url: "../portfolio/notes/week_10/index.html",
  },
  {
    week: "ten",
    blocksem: "second",
    label: "Week 10 | Projects",
    type: "project",
    url: "../portfolio/projects/week_10/index.html",
  },
  {
    week: "eleven",
    blocksem: "second",
    label: "Week 11 | Notes",
    type: "note",
    url: "../portfolio/notes/week_11/index.html",
  },
  {
    week: "eleven",
    blocksem: "second",
    label: "Week 11 | Projects",
    type: "project",
    url: "../portfolio/projects/week_11/index.html",
  },
  {
    week: "twelve",
    blocksem: "second",
    label: "Week 12 | Notes",
    type: "note",
    url: "../portfolio/notes/week_12/index.html",
  },
  {
    week: "twelve",
    blocksem: "second",
    label: "Week 12 | Projects",
    type: "project",
    url: "../portfolio/projects/week_12/index.html",
  },
];

// HTML id: portfolio-list
let myUnorderedList = document.querySelector("#portfolio-list");

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
