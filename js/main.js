// Array Links
   // Objects
// const links = [
//   {
//     week: "Week 01",
//     url: "week_1_notes.html"
//   },
//   {
//     week: "Week 02",
//     url: "week_2_notes.html"
//   },
//   {
//     week: "Week 03",
//     url: "week_3_notes.html"
//   },
//   {
//     week: "Week 04",
//     url: "week_4_notes.html"
//   }
// ]; 

const links = ["week_1_notes.html", "week_2_notes.html", "week_3_notes.html", "week_4_notes.html"]; 

let ul = document.getElementById("first-ul")

let btn = document.getElementById("btn")

btn.addEventListener("click", function() 
{
    links.forEach(function(e){
        let li = document.createElement("li");
        li.innerText = e;
        ul.append(li)
    })
})