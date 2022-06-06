// Array
// week:
// one, two, three, four, five, six,
// seven, eight, nine, ten, eleven, twelve
// type:
// note, project, team
//"https://emt0rres.github.io/wdd330/portfolio/notes/week_01/week_1_notes.html"


const myLinks = [
  {
    week: "one",
    blocksem: "first",
    label: "Week 01 | Notes",
    type: "note",
    url: "https://emt0rres.github.io/wdd330/portfolio/notes/week_01/week_1_notes.html",
  },
  {
    week: "two",
    blocksem: "first",
    type: "note",
    label: "Week 02 | Notes",
    url: "https://emt0rres.github.io/wdd330/portfolio/notes/week_2_notes.html",
  },
  {
    week: "three",
    blocksem: "first",
    label: "Week 03 | Notes",
    type: "note",
    url: "https://emt0rres.github.io/wdd330/portfolio/notes/week_3_notes.html",
  },
  {
    week: "four",
    blocksem: "first",
    label: "Week 04 | Notes",
    type: "note",
    url: "https://emt0rres.github.io/wdd330/portfolio/notes/week_4_notes.html",
  },
  {
    week: "five",
    blocksem: "first",
    label: "Week 05 | Notes",
    type: "note",
    url: "https://emt0rres.github.io/wdd330/portfolio/notes/week_5_notes.html",
  },
  {
    week: "six",
    blocksem: "first",
    label: "Week 06 | Todo List Challenge",
    type: "challenge",
    url: "https://emt0rres.github.io/wdd330/portfolio/challenges/todo/todo.html",
  },
  {
    week: "seven",
    blocksem: "first",
    label: "Week 07 | Notes",
    type: "note",
    url: "https://emt0rres.github.io/wdd330/portfolio/notes/week_7_notes.html",
  },
  {
    week: "eight",
    blocksem: "second",
    label: "Week 08 | Notes",
    type: "note",
    url: "https://emt0rres.github.io/wdd330/portfolio/notes/week_8_notes.html",
  },
  {
    week: "nine",
    blocksem: "second",
    label: "Week 09 | Notes",
    type: "note",
    url: "https://emt0rres.github.io/wdd330/portfolio/notes/week_9_notes.html",
  },
  {
    week: "ten",
    blocksem: "second",
    label: "Week 10 | Notes",
    type: "note",
    url: "https://emt0rres.github.io/wdd330/portfolio/notes/week_10_notes.html",
  },
  {
    week: "eleven",
    blocksem: "second",
    label: "Week 11 | Notes",
    type: "note",
    url: "https://emt0rres.github.io/wdd330/portfolio/notes/week_11_notes.html",
  },
  {
    week: "twelve",
    blocksem: "second",
    label: "Week 12 | Notes",
    type: "note",
    url: "https://emt0rres.github.io/wdd330/portfolio/notes/week_12_notes.html",
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
