const myChallegeLinks = [
  {
    label: "To-Do List",
    url: "/challenges/todo/index.html",
  }
];

// HTML id: portfolio-list
let myUnorderedChallengeList = document.querySelector("#challenges-list");

for (let i = 0; i < myChallegeLinks.length; i++) {
  // Create Elements
  let anchorElement = document.createElement("a");
  let listElement = document.createElement("li");

  // The textContent property sets or returns the text content of the specified node, and all its descendants. - w3schools
  anchorElement.textContent = myChallegeLinks[i].label;

  // Set Attribute
  anchorElement.setAttribute("href", myChallegeLinks[i].url);

  // Append Elements
  listElement.appendChild(anchorElement);
  myUnorderedChallengeList.appendChild(listElement);
}