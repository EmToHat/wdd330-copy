const myTeamLinks = [
    {
      label: "Free Code Camp Projects",
      url: "../wdd330/portfolio/projects/freecodecamp/index.html",
    },
    {
      label: "Team Activities",
      url: "../wdd330/portfolio/projects/team/index.html",
    }
  ];
  
  // HTML id: portfolio-list
  let myUnorderedTeamList = document.querySelector("#team-list");
  
  for (let i = 0; i < myTeamLinks.length; i++) {
    // Create Elements
    let anchorElement = document.createElement("a");
    let listElement = document.createElement("li");
  
    // The textContent property sets or returns the text content of the specified node, and all its descendants. - w3schools
    anchorElement.textContent = myTeamLinks[i].label;
  
    // Set Attribute
    anchorElement.setAttribute("href", myTeamLinks[i].url);
  
    // Append Elements
    listElement.appendChild(anchorElement);
    myUnorderedTeamList.appendChild(listElement);
  }