// Array
// week:
// one, two, three, four, five, six,
// seven, eight, nine, ten, eleven, twelve
// type:
// note, project, team

const myLinks = [
  {
    week: "one",
    block: "first",
    label: "Week 01 | Notes",
    type: "note",
    url: "../portfolio/notes/week_01/index.html",
  },
  {
    week: "one",
    block: "first",
    label: "Week 01 | Projects",
    type: "project",
    url: "../portfolio/projects/week_01/index.html",
  },
  {
    week: "two",
    block: "first",
    type: "note",
    label: "Week 02 | Notes",
    url: "../portfolio/notes/week_02/index.html",
  },
  {
    week: "two",
    block: "first",
    type: "project",
    label: "Week 02 | Projects",
    url: "../portfolio/projects/week_02/index.html",
  },
  {
    week: "three",
    block: "first",
    label: "Week 03 | Notes",
    type: "note",
    url: "../portfolio/notes/week_03/index.html",
  },
  {
    week: "three",
    block: "first",
    label: "Week 03 | Projects",
    type: "project",
    url: "../portfolio/projects/week_03/index.html",
  },
  {
    week: "four",
    block: "first",
    label: "Week 04 | Notes",
    type: "note",
    url: "../portfolio/notes/week_04/index.html",
  },
  {
    week: "four",
    block: "first",
    label: "Week 04 | Projects",
    type: "project",
    url: "../portfolio/projects/week_04/index.html",
  },
  {
    week: "five",
    block: "first",
    label: "Week 05 | Notes",
    type: "note",
    url: "../portfolio/notes/week_05/index.html",
  },
  {
    week: "five",
    block: "first",
    label: "Week 05 | Projects",
    type: "project",
    url: "../portfolio/projects/week_05/index.html",
  },
  {
    week: "six",
    block: "first",
    label: "Week 06 | Todo List Challenge",
    type: "challenge",
    url: "../portfolio/challenges/todo/todo.html",
  },
  {
    week: "seven",
    block: "first",
    label: "Week 07 | Notes",
    type: "note",
    url: "../portfolio/notes/week_07/index.html",
  },
  {
    week: "seven",
    block: "first",
    label: "Week 07 | Projects",
    type: "project",
    url: "../portfolio/projects/week_07/index.html",
  },
  {
    week: "eight",
    block: "second",
    label: "Week 08 | Notes",
    type: "note",
    url: "../portfolio/notes/week_08/index.html",
  },
  {
    week: "eight",
    block: "second",
    label: "Week 08 | Projects",
    type: "project",
    url: "../portfolio/projects/week_08/index.html",
  },
  {
    week: "nine",
    block: "second",
    label: "Week 09 | Notes",
    type: "note",
    url: "../portfolio/notes/week_09/index.html",
  },
  {
    week: "nine",
    block: "second",
    label: "Week 09 | Projects",
    type: "project",
    url: "../portfolio/projects/week_09/index.html",
  },
  {
    week: "ten",
    block: "second",
    label: "Week 10 | Notes",
    type: "note",
    url: "../portfolio/notes/week_10/index.html",
  },
  {
    week: "ten",
    block: "second",
    label: "Week 10 | Projects",
    type: "project",
    url: "../portfolio/projects/week_10/index.html",
  },
  {
    week: "eleven",
    block: "second",
    label: "Week 11 | Notes",
    type: "note",
    url: "../portfolio/notes/week_11/index.html",
  },
  {
    week: "eleven",
    block: "second",
    label: "Week 11 | Projects",
    type: "project",
    url: "../portfolio/projects/week_11/index.html",
  },
  {
    week: "twelve",
    block: "second",
    label: "Week 12 | Notes",
    type: "note",
    url: "../portfolio/notes/week_12/index.html",
  },
  {
    week: "twelve",
    block: "second",
    label: "Week 12 | Projects",
    type: "project",
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
