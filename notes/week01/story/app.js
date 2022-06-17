function loadStory(){
    let storyName = document.getElementById("name_input").value
    let storyHTML = localStorage.getItem(storyName)
    document.getElementById("story_editor").value = storyHTML
}

function saveStory(){
    let storyName = document.getElementById("name_input").value
    let storyHTML = document.getElementById("story_editor").value
    localStorage.setItem(storyName, storyHTML)
}

function displayStory(){
    let storyHTML = document.getElementById("story_editor").value
    document.getElementById("story_display").innerHTML = storyHTML
}


let lastUpdate = document.lastModified;
document.getElementById("modified").innerHTML = lastUpdate;

const date = new Date();
const year = date.getFullYear();
document.getElementById("year").innerHTML = year;