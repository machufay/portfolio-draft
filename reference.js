let paragraph = document.querySelector("p");
let img = document.querySelector("img");
// addEventListener is used to make reactions to user interactions.
// you can do clicks, hovers, double clicks, key presses, form submissions, etc.
// addEventListener("click/key press/mouse over/form submission", function() {script});

paragraph.addEventListener("click", function() {
    paragraph.innerHTML = "text changed!";
    img.src = "#";
});
