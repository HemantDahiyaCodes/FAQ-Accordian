// Buttons
const buttonOne = document.querySelector("#first");
const buttonTwo = document.querySelector("#second");
const buttonThree = document.querySelector("#third");
const buttonFour = document.querySelector("#fourth");
// Paragraph
const paraOne = document.querySelector("#para-one");
const paraTwo = document.querySelector("#para-two");
const paraThree = document.querySelector("#para-three");
const paraFour = document.querySelector("#para-four");
// Image
const imgOne = document.querySelector("#first-img");
const imgTwo = document.querySelector("#second-image");
const imgThree = document.querySelector("#third-image");
const imgFour = document.querySelector("#fourth-image");

let isParagraphVisible = false;
let isParagraphTwoVisible = false;
let isParagraphThreeVisible = false;
let isParagraphFourVisible = false;

// Functions
buttonOne.addEventListener("click", () => {
  if (isParagraphVisible) {
    document.getElementById("para-one").style.height = "0";
    document.getElementById("para-one").style.border = "none";
    document.getElementById("para-one").style.padding = "0";
    document.getElementById("para-one").style.margin = "0";
    document.getElementById("para-one").style.boxShadow = "none";
    document.getElementById("para-one").style.transition = "1s";
    paraOne.innerHTML = "";
    imgOne.src = "icon-plus.svg";
    isParagraphVisible = false;
  } else {
    document.getElementById("para-one").style.height = "100vh";
    document.getElementById("para-one").style.border = "3px solid pink";
    document.getElementById("para-one").style.padding = "1rem 1rem 1rem 1rem";
    document.getElementById("para-one").style.margin = "0rem 0.5rem";
    document.getElementById("para-one").style.boxShadow =
      "0px 5px 5px 2px pink";
    document.getElementById("para-one").style.transition = "1s";
    paraOne.innerHTML = "this is made by me!";
    imgOne.src = "icon-minus.svg";
    isParagraphVisible = true;
  }
});

// Second button
buttonTwo.addEventListener("click", () => {
  if (isParagraphTwoVisible) {
    document.getElementById("para-two").style.height = "0";
    document.getElementById("para-two").style.border = "none";
    document.getElementById("para-two").style.padding = "0";
    document.getElementById("para-two").style.margin = "0";
    document.getElementById("para-two").style.boxShadow = "none";
    document.getElementById("para-two").style.transition = "1s";
    paraTwo.innerHTML = "";
    imgTwo.src = "icon-plus.svg";
    isParagraphTwoVisible = false;
  } else {
    document.getElementById("para-two").style.height = "100vh";
    document.getElementById("para-two").style.border = "3px solid pink";
    document.getElementById("para-two").style.padding = "1rem 1rem 1rem 1rem";
    document.getElementById("para-two").style.margin = "0rem 0.5rem";
    document.getElementById("para-two").style.boxShadow =
      "0px 5px 5px 2px pink";
    document.getElementById("para-two").style.transition = "1s";
    paraTwo.innerHTML = "Yes this is freeeee";
    imgTwo.src = "icon-minus.svg";
    isParagraphTwoVisible = true;
  }
});

// Third button
buttonThree.addEventListener("click", () => {
  if (isParagraphThreeVisible) {
    document.getElementById("para-three").style.height = "0";
    document.getElementById("para-three").style.border = "none";
    document.getElementById("para-three").style.padding = "0";
    document.getElementById("para-three").style.margin = "0";
    document.getElementById("para-three").style.boxShadow = "none";
    document.getElementById("para-three").style.transition = "1s";
    paraThree.innerHTML = "";
    imgThree.src = "icon-plus.svg";
    isParagraphThreeVisible = false;
  } else {
    document.getElementById("para-three").style.height = "100vh";
    document.getElementById("para-three").style.border = "3px solid pink";
    document.getElementById("para-three").style.padding = "1rem 1rem 1rem 1rem";
    document.getElementById("para-three").style.margin = "0rem 0.5rem";
    document.getElementById("para-three").style.boxShadow =
      "0px 5px 5px 2px pink";
    document.getElementById("para-three").style.transition = "1s";
    paraThree.innerHTML = "Yes you can";
    imgThree.src = "icon-minus.svg";
    isParagraphThreeVisible = true;
  }
});

// Fourth button
buttonFour.addEventListener("click", () => {
  if (isParagraphFourVisible) {
    document.getElementById("para-four").style.height = "0";
    document.getElementById("para-four").style.border = "none";
    document.getElementById("para-four").style.padding = "0";
    document.getElementById("para-four").style.margin = "0";
    document.getElementById("para-four").style.boxShadow = "none";
    document.getElementById("para-four").style.transition = "1s";
    document.getElementById("faq-box").style.height = "80%";
    paraFour.innerHTML = "";
    imgFour.src = "icon-plus.svg";
    isParagraphFourVisible = false;
  } else {
    document.getElementById("para-four").style.height = "300px";
    document.getElementById("para-four").style.border = "3px solid pink";
    document.getElementById("para-four").style.padding = "1rem 1rem 1rem 1rem";
    document.getElementById("para-four").style.margin = "0 0.5rem 1rem 0.5rem";
    document.getElementById("para-four").style.boxShadow =
      "0px 5px 5px 2px pink";
    document.getElementById("para-four").style.transition = "1s";
    document.getElementById("faq-box").style.height = "90%";
    paraFour.innerHTML = "We dont know";
    imgFour.src = "icon-minus.svg";
    isParagraphFourVisible = true;
  }
});
