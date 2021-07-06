let questions = document.getElementsByClassName("question");
let next = document.getElementsByClassName("next-btn");
let back = document.getElementsByClassName("back-btn");
let i = 0;
let a = (q) => {
    for (let i = 0; i < questions.length; i++) {
        questions[i].style.display = "none";
    }
    questions[q].style.display = "flex";
}
a(i);
for (let j = 0; j < next.length; j++) {
    next[j].addEventListener("click", () => {
        i++;
        a(i)
    })
}
for (let j = 0; j < back.length; j++) {
    back[j].addEventListener("click", () => {
        i--;
        a(i)
    })
}