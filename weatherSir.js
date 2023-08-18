const axios = require("axios");
const moment = require("moment");

const url =
  "https://api.open-meteo.com/v1/forecast?latitude=27.70&longitude=85.32&hourly=temperature_2m&daily=sunrise,sunset&forecast_days=1&timezone=auto";

const getWeather = async (url) => {
  const response = await axios.get(url);
  const { hourly_units, hourly, daily, daily_units } = response?.data; // ternary operator

  const { sunrise, sunset } = daily;

  const { time, temperature_2m } = hourly;
  let temp = temperature_2m;

  let ind = "";

  const currentDate = new Date().toISOString().split(":")[0];

  const currTimeIndex = time.map((timeD, index) => {
    console.log(moment(timeD));
    const currentTime = timeD.split(":")[0];
    if (currentTime === currentDate) ind = index;
  });
  console.log(temp[ind]);
};

const resolvePromise = async () => {
  const weatherData = await getWeather(url);
};

resolvePromise();
