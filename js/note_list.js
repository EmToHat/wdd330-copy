const myNotesLinks = [
  {
    label: "Week 01",
    type: "note",
    url: "/portfolio/notes/week_1_notes.html",
  },
  {
    type: "note",
    label: "Week 02",
    url: "/portfolio/notes/week_2_notes.html",
  },
  {
    label: "Week 03",
    type: "note",
    url: "/portfolio/notes/week_3_notes.html",
  },
  {
    label: "Week 04",
    type: "note",
    url: "/portfolio/notes/week_4_notes.html",
  },
  {
    label: "Week 05",
    type: "note",
    url: "/portfolio/notes/week_5_notes.html",
  },
  {
    label: "Week 07",
    type: "note",
    url: "/portfolio/notes/week_7_notes.html",
  },
  {
    label: "Week 08",
    type: "note",
    url: "/portfolio/notes/week_8_notes.html",
  },
  {
    label: "Week 09",
    type: "note",
    url: "/portfolio/notes/week_9_notes.html",
  },
  {
    label: "Week 10",
    type: "note",
    url: "/portfolio/notes/week_10_notes.html",
  },
  {
    label: "Week 11",
    type: "note",
    url: "/portfolio/notes/week_11_notes.html",
  },
  {
    label: "Week 12",
    type: "note",
    url: "/portfolio/notes/week_12_notes.html",
  },
];

// HTML id: notes-list
let myUnorderedNotesList = document.querySelector("#notes-list");

for (let i = 0; i < myNotesLinks.length; i++) {
  // Create Elements
  let anchorElement = document.createElement("a");
  let listElement = document.createElement("li");

  // The textContent property sets or returns the text content of the specified node, and all its descendants. - w3schools
  anchorElement.textContent = myNotesLinks[i].label;

  // Set Attribute
  anchorElement.setAttribute("href", myNotesLinks[i].url);

  // Append Elements
  listElement.appendChild(anchorElement);
  myUnorderedNotesList.appendChild(listElement);
}