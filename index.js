const button = document.querySelector(".btn");

button.addEventListener("click", result);

function result(e) {
    e.preventDefault();

    let point = 0;

    if(document.querySelector("#answerOne").checked) {
        point++};
    if(document.querySelector("#answerTwo").checked) {
        point++};
    if(document.querySelector("#answerThree").checked) {
        point++};
    if(document.querySelector("#answerFour").checked) {
        point++};

    button.remove();

    const par = document.querySelector("#show");

    par.textContent = "In total "+ point;
    par.style.display = "block";

    const answerRight = document.querySelectorAll(".true");

    answerRight.forEach(item => {
        item.style.color = "#e58653"
    })
}