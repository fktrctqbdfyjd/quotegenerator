const url = "https://ron-swanson-quotes.herokuapp.com/v2/quotes";
const quote = document.getElementById("quote");

//buttons
const axiosButton = document.getElementById("axios");
const fetchButton = document.getElementById("fetch");
const xhrButton = document.getElementById("xhr");

//events
axiosButton.addEventListener("click", function() {
  axios
    .get(url)
    .then(function(data) {
      quote.innerText = data.data;
    })
    .catch();
});

$("#jquery").on("click", function() {
  $.getJSON(url)
    .done(function(data) {
      quote.innerText = data[0];
    })
    .fail();
});

fetchButton.addEventListener("click", function() {
  fetch(url)
    .then(function(response) {
      return response.json();
    })
    .then(function(data) {
      quote.innerText = data[0];
    })
    .catch();
});

//xhr stuff hardcore mode xxx359xxx
xhrButton.addEventListener("click", function() {
  const XHR = new XMLHttpRequest();
  XHR.onreadystatechange = function() {
    if (XHR.readyState == 4 && XHR.status == 200) {
      const newQuote = JSON.parse(XHR.responseText);
      quote.innerText = newQuote;
    }
  };
  XHR.open("GET", url);
  XHR.send();
});
