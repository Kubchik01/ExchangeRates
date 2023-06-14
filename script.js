const API =
  "https://v6.exchangerate-api.com/v6/8ddba6572579be49e66a9aed/latest/";
const API_PAIR =
  "https://v6.exchangerate-api.com/v6/8ddba6572579be49e66a9aed/pair/";
function getMainSelect() {
  const main_select = document.getElementById("main-select").value;
  getCurrency(main_select);
}

async function getCurrency(value) {
  const response = await fetch(API + value);
  const currency = await response.json();

  const usd = document.getElementById("usd");
  usd.textContent = `${currency.conversion_rates.USD}`;

  const kzt = document.getElementById("kzt");
  kzt.textContent = `${currency.conversion_rates.KZT}`;

  const rub = document.getElementById("rub");
  rub.textContent = `${currency.conversion_rates.RUB}`;

  const eur = document.getElementById("eur");
  eur.textContent = `${currency.conversion_rates.EUR}`;

  const kgs = document.getElementById("kgs");
  kgs.textContent = `${currency.conversion_rates.KGS}`;
}

async function giveSelect() {
  const selectGive = document.getElementById("select-give").value;
  const selectGet = document.getElementById("select-get").value;
  const inp = document.getElementById("input").value;
  const result = document.getElementById("result");

  const response = await fetch(`${API_PAIR}${selectGive}/${selectGet}`);
  const currencyGive = await response.json();
  const convertion = inp * currencyGive.conversion_rate;
  console.log("convertion: ", convertion);
  console.log("currencyGive: ", currencyGive);
  result.textContent = convertion;
}
function lol() {
  console.log("lol");
}
getMainSelect();
