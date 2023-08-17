// Write a nodejs application to convert the currency from one currency to another using package: currency-converter-lt
const CC = require("currency-converter-lt");

let currencyConverter = new CC({
  from: "USD",
  to: "NPR",
  amount: 100,
  isDecimalComma: true,
});

// console.log(currencyConverter);
currencyConverter.convert().then((response) => {
  console.log(`${currencyConverter.currencyAmount} USD = ${response} NPR`); //or do something else
});
