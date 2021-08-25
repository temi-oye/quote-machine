let quotesArr = [];
let currentImgIndex = 0;
let quoteText = document.getElementById("quote");
let btn = document.getElementById("test");

function changeQuoteText(str) {
  quoteText.innerText = str;
  // console.log("sup")
}

btn.addEventListener("click", changeQuoteText("Sup"))

// btn.addEventListener("click", event => {
//   changeQuoteText("Sup");
// });