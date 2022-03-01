const https = require("https");

const options = {
  agent: new https.Agent({
    rejectUnauthorized: false,
  }),
};
const restCountries = async function () {
  const url = "https://restcountries.com/v3.1/all";

  return await fetch(url)
    .then((response) => response.json())
    .then((data) => data)
    .catch((error) => error);
};

export default restCountries;
