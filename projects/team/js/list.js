const myLinks = [
    {
      week: "one",
      blocksem: "first",
      label: "Week 01",
      type: "note",
      url: "/portfolio/notes/week_1_notes.html",
    },
    {
      week: "two",
      blocksem: "first",
      type: "note",
      label: "Week 02",
      url: "/portfolio/notes/week_2_notes.html",
    },
    {
      week: "three",
      blocksem: "first",
      label: "Week 03",
      type: "note",
      url: "/portfolio/notes/week_3_notes.html",
    },
    {
      week: "four",
      blocksem: "first",
      label: "Week 04",
      type: "note",
      url: "/portfolio/notes/week_4_notes.html",
    },
    {
      week: "five",
      blocksem: "first",
      label: "Week 05",
      type: "note",
      url: "/portfolio/notes/week_5_notes.html",
    },
    {
      week: "six",
      blocksem: "first",
      label: "Week 06",
      type: "challenge",
      url: "/portfolio/challenges/todo/todo.html",
    },
    {
      week: "seven",
      blocksem: "first",
      label: "Week 07",
      type: "note",
      url: "/portfolio/notes/week_7_notes.html",
    },
    {
      week: "eight",
      blocksem: "second",
      label: "Week 08",
      type: "note",
      url: "/portfolio/notes/week_8_notes.html",
    },
    {
      week: "nine",
      blocksem: "second",
      label: "Week 09",
      type: "note",
      url: "/portfolio/notes/week_9_notes.html",
    },
    {
      week: "ten",
      blocksem: "second",
      label: "Week 10",
      type: "note",
      url: "/portfolio/notes/week_10_notes.html",
    },
    {
      week: "eleven",
      blocksem: "second",
      label: "Week 11",
      type: "note",
      url: "/portfolio/notes/week_11_notes.html",
    },
    {
      week: "twelve",
      blocksem: "second",
      label: "Week 12",
      type: "note",
      url: "/portfolio/notes/week_12_notes.html",
    },
  ];
  
  // HTML id: portfolio-list
  let myUnorderedList = document.querySelector("#team-list");
  
  for (let i = 0; i < myLinks.length; i++) {
    // Create Elements
    let anchorElement = document.createElement("a");
    let listElement = document.createElement("li");
  
    // The textContent property sets or returns the text content of the specified node, and all its descendants. - w3schools
    anchorElement.textContent = myLinks[i].label;
  
    // Set Attribute
    anchorElement.setAttribute("href", myLinks[i].url);
  
    // Append Elements
    listElement.appendChild(anchorElement);
    myUnorderedList.appendChild(listElement);
  }