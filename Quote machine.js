let quoteDiv = document.getElementById("quote");
let quoteeDiv = document.getElementById("quotee");
let animeBtn = document.getElementById("anime-btn");
let kanyeBtn = document.getElementById("kanye-btn");
let inspirationalBtn = document.getElementById("inspirational-btn");
let movieBtn = document.getElementById("movie-btn");

function changeQuoteText(quoteText, quoteeText="Kanye", originText="") {
  quoteDiv.innerText = `"${quoteText}"`;

  let quoteHasAnOrigin = originText.length > 0;
  let quoteHasAQuotee = quoteeText.length > 0;

  if(quoteHasAnOrigin && quoteHasAQuotee){
    quoteeDiv.innerText = `-${quoteeText} from ${originText}`;
  } else{
    quoteeDiv.innerText = `-${quoteeText}`;
  }
}

function fetchQuote(url, quote, quotee="", origin="") {
  fetch(url)
      .then(response => response.json())
      .then(quoteInfo => changeQuoteText(quoteInfo[quote], quoteInfo[quotee], quoteInfo[origin]))
}

animeBtn.addEventListener("click", event => {
  fetchQuote('https://animechan.vercel.app/api/random', "quote", "character", "anime");
  });

kanyeBtn.addEventListener("click", event => {
  fetchQuote('https://api.kanye.rest', "quote")
});

movieBtn.addEventListener("click", event => {
  fetchQuote('https://movie-quote-api.herokuapp.com/v1/quote/', "quote", "role", "show")
});

inspirationalBtn.addEventListener("click", event =>{
  fetchQuote('https://api.quotable.io/random', "content", "author")
});
