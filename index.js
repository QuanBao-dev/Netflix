const $ = document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document);

const faqQuestionItems = [...$$(".faq-question-item")];

faqQuestionItems.forEach((question, index) => (question.id = index));
faqQuestionItems.forEach((item) => {
  item.addEventListener("click", (e) => {
    faqQuestionItems.forEach((question, index) => {
      let elementLi;
      if (e.target.tagName === "SPAN") {
        elementLi = e.target.parentNode;
      } else {
        elementLi = e.target;
      }
      if (parseInt(elementLi.id) !== index){
        question.children[1].innerText = "+";
        question.className = "faq-question-item";
      }
    });
    if (e.target.tagName === "SPAN") {
      const elementLi = e.target.parentNode;
      if (elementLi.className === "faq-question-item") {
        elementLi.children[1].innerText = "x";
        elementLi.className += " faq-question-item-active";
      } else {
        elementLi.children[1].innerText = "+";
        elementLi.className = "faq-question-item";
      }
    } else {
      const elementLi = e.target;
      if (elementLi.className === "faq-question-item") {
        elementLi.className += " faq-question-item-active";
        elementLi.children[1].innerText = "x";
      } else {
        elementLi.children[1].innerText = "+";
        elementLi.className = "faq-question-item";
      }
    }
  });
});
