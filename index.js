const container = document.getElementsByClassName("question-asnwer");
const containerArray = Array.from(container);

let activeQuestion = null;
containerArray.forEach(element => {
  element.addEventListener("click", event => {
    event.currentTarget.classList.toggle("active");

    if (event.currentTarget === activeQuestion) {
      event.currentTarget.classList.remove("active");
      activeQuestion = null;
    } else {
      activeQuestion?.classList.remove("active");
      activeQuestion = event.currentTarget;
    }
  });
});
