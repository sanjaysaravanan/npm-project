import xhr from "xhr2";
import isEqual from "lodash/isEqual.js";

const add = (a, b) => {
  return a + b;
};

const sub = (a, b) => {
  return a - b;
};

const getAllCountries = async () => {
  const req = new xhr();

  req.open("GET", "https://restcountries.com/v3.1/all");
  req.send();

  req.onload = function () {
    const data = JSON.parse(req.responseText);
    console.log(data);
  };
};

const compareTwoObjects = (a, b) => {
  return isEqual(a, b);
};

export { add, sub, getAllCountries, compareTwoObjects };
