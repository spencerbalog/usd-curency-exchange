const addCurrencies = () => {
  fetch("./currencies.json")
    .then((response) => response.json())
    .then((data) => {
      currencies = data;
    })
    .then(() => {
      const currencyOneSelector = document.getElementById("currency-one");
      for (const [key] of Object.entries(currencies)) {
        currencyOneSelector.options[currencyOneSelector.options.length] =
          new Option(key, key);
      }
    });
};

const convertCurrency = () => {
  const endpoint = "live";
  const access_key = "6dedcc803ac3e64c8c72512410fd13e9";
  const from = $("#currency-one").val();
  const amount = $("#amount").val();

  console.log(from);
  // console.log(amount);
  console.log("clicked");
  $.ajax({
    url:
      "http://api.currencylayer.com/" +
      endpoint +
      "?access_key=" +
      access_key +
      "&currencies=" +
      from,
    dataType: "jsonp",
    success: function (json) {
      // access the conversion result in json.result
      const convertedAmount = parseInt(amount) * json.quotes[`USD${from}`];
      alert(`$${amount} to ${from} = $${convertedAmount.toFixed(2)}`);
    },
  });
};
