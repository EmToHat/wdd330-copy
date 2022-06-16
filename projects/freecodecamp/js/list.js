const myLinks = [
    {
      label: "Color Generator",
      url: "/portfolio/projects/freecodecamp/vanilla/color-flipper",
    }
  ];
  
  // HTML id: portfolio-list
  let myUnorderedList = document.querySelector("#freecodecamp-list");
  
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