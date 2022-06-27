/* --------------------- Note List --------------------- */
const notes_links = [
  {
    label: "Week 01",
    url: "/wdd330/notes/week01/index.html",
  },
  {
    label: "Week 02",
    url: "/wdd330/notes/week02/index.html",
  },
  {
    label: "Week 03",
    url: "/wdd330/notes/week03/index.html",
  },
  {
    label: "Week 04",
    url: "/wdd330/notes/week04/index.html",
  },
  {
    label: "Week 05",
    url: "/wdd330/notes/week05/index.html",
  },
  {
    label: "Week 06",
    url: "/wdd330/notes/week06/index.html",
  },
  {
    label: "Week 07",
    url: "/wdd330/notes/week07/index.html",
  },
  {
    label: "Week 08",
    url: "/wdd330/notes/week08/index.html",
  },
  {
    label: "Week 09",
    url: "/wdd330/notes/week09/index.html",
  },
  {
    label: "Week 10",
    url: "/wdd330/notes/week10/index.html",
  },
  {
    label: "Week 11",
    url: "/wdd330/notes/week11/index.html",
  },
  {
    label: "Week 12",
    url: "/wdd330/notes/week12/index.html",
  },
];

// HTML id: notes-list
let ul_notes_list = document.querySelector("#notes-list");

for (let i = 0; i < notes_links.length; i++) {
  // Create Elements
  let a_ele_notes = document.createElement("a");
  let li_ele_notes = document.createElement("li");

  // The textContent property sets or returns the text content of the specified node, and all its descendants. - w3schools
  a_ele_notes.textContent = notes_links[i].label;

  // Set Attribute
  a_ele_notes.setAttribute("href", notes_links[i].url);
  a_ele_notes.setAttribute("target", "_blank");

  // Append Elements
  li_ele_notes.appendChild(a_ele_notes);
  ul_notes_list.appendChild(li_ele_notes);
}


/* --------------------- Other Notes List --------------------- */
const other_notes_links = [
  {
    label: "JSON and AJAX",
    url: "/wdd330/other_notes/json_ajax/index.html",
  }
];

// HTML id: notes-list
let ul_other_notes_links = document.querySelector("#other-notes-list");

for (let i = 0; i < other_notes_links.length; i++) {
  // Create Elements
  let a_ele_other_notes = document.createElement("a");
  let li_ele_other_notes = document.createElement("li");

  // The textContent property sets or returns the text content of the specified node, and all its descendants. - w3schools
  a_ele_other_notes.textContent = other_notes_links[i].label;

  // Set Attribute
  a_ele_other_notes.setAttribute("href", other_notes_links[i].url);
  a_ele_other_notes.setAttribute("target", "_blank");

  // Append Elements
  li_ele_other_notes.appendChild(a_ele_other_notes);
  ul_other_notes_links.appendChild(li_ele_other_notes);
}



/* --------------------- Challenge List --------------------- */
const challenges_links = [
  {
    label: "To-Do List",
    url: "/wdd330/challenges/todo/index.html",
  },
  {
    label: "Recipes Project",
    url: "/wdd330/challenges/recipes/index.html",
  },
];

// HTML id: portfolio-list
let ul_challenge_list = document.querySelector("#challenges-list");

for (let i = 0; i < challenges_links.length; i++) {
  // Create Elements
  let a_ele_challenge = document.createElement("a");
  let li_ele_challenge = document.createElement("li");

  // The textContent property sets or returns the text content of the specified node, and all its descendants. - w3schools
  a_ele_challenge.textContent = challenges_links[i].label;

  // Set Attribute
  a_ele_challenge.setAttribute("href", challenges_links[i].url);
  a_ele_challenge.setAttribute("target", "_blank");

  // Append Elements
  li_ele_challenge.appendChild(a_ele_challenge);
  ul_challenge_list.appendChild(li_ele_challenge);
}



/* --------------------- Team Activity List --------------------- */
const team_links = [
  {
    label: "Week 02 | Numbers Activity",
    url: "/wdd330/team_activities/week02/index.html",
  },
  {
    label: "Week 03 | Array Activity",
    url: "/wdd330/team_activities/week03/index.html",
  },
  {
    label: "Week 04 | Tic-Tac-Toe Activity",
    url: "/wdd330/team_activities/week04/index.html",
  },
  {
    label: "Week 05 | Great Hikes Activity",
    url: "/wdd330/team_activities/week05/index.html",
  },
  {
    label: "Week 07 | Comments Activity",
    url: "/wdd330/team_activities/week07/index.html",
  },
  {
    label: "Week 08 | Remote API Activity",
    url: "/wdd330/team_activities/week08/index.html",
  },
  {
    label: "Week 09 | DrumKit Activity",
    url: "/wdd330/team_activities/week09/index.html",
  },
  {
    label: "Week 10 | Activity",
    url: "/wdd330/team_activities/week10/index.html",
  },
  {
    label: "Week 11 | Activity",
    url: "/wdd330/team_activities/week11/index.html",
  },
  {
    label: "Week 12 | Activity",
    url: "/wdd330/team_activities/week12/index.html",
  },
];

// HTML id: portfolio-list
let ul_team_list = document.querySelector("#team-activity-list");

for (let i = 0; i < team_links.length; i++) {
  // Create Elements
  let a_ele_team = document.createElement("a");
  let li_ele_team = document.createElement("li");

  // The textContent property sets or returns the text content of the specified node, and all its descendants. - w3schools
  a_ele_team.textContent = team_links[i].label;

  // Set Attribute
  a_ele_team.setAttribute("href", team_links[i].url);
  a_ele_team.setAttribute("target", "_blank");

  // Append Elements
  li_ele_team.appendChild(a_ele_team);
  ul_team_list.appendChild(li_ele_team);
}



/* --------------------- Free Code Camp List --------------------- */
const fcc_links = [
  {
    label: "Color Randomizer",
    url: "/wdd330/free_code_camp/color-flipper/index.html",
  },
];

// HTML id: portfolio-list
let ul_fcc_list = document.querySelector("#fcc-activity-list");

for (let i = 0; i < fcc_links.length; i++) {
  // Create Elements
  let a_ele_fcc = document.createElement("a");
  let li_ele_fcc = document.createElement("li");

  // The textContent property sets or returns the text content of the specified node, and all its descendants. - w3schools
  a_ele_fcc.textContent = fcc_links[i].label;

  // Set Attribute
  a_ele_fcc.setAttribute("href", fcc_links[i].url);
  a_ele_fcc.setAttribute("target", "_blank");

  // Append Elements
  li_ele_fcc.appendChild(a_ele_fcc);
  ul_fcc_list.appendChild(li_ele_fcc);
}



/* --------------------- Footer Code --------------------- */
let lastUpdate = document.lastModified;
document.getElementById("modified").innerHTML = lastUpdate;

const date = new Date();
const year = date.getFullYear();
document.getElementById("year").innerHTML = year;