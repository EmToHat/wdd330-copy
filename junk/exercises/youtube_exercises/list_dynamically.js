const array = [
    "item 1",
    "item 2",
    "item 3",
    "item 4"
];

let ul = document.getElementById("first-ul")

let btn = document.getElementById("btn")

btn.addEventListener("click", function() 
{
    array.forEach(function(e){
        let li = document.createElement("li");
        li.innerText = e;
        ul.append(li)
    })
})