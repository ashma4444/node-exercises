const axios = require("axios");
const moment = require("moment");

const url =
  "https://api.open-meteo.com/v1/forecast?latitude=27.70&longitude=85.32&hourly=temperature_2m&daily=sunrise,sunset&forecast_days=1&timezone=auto";

const getWeather = async (url) => {
  const response = await axios.get(url);
  const { hourly } = response?.data; // ternary operator

  const currentDate = moment(new Date());

  const { time, temperature_2m } = hourly;
  let temp = temperature_2m;
  let indexD = null;

  time.map((timeD, index) => {
    const proTime = moment(timeD);
    console.log(proTime);
    if (proTime.isSame(currentDate, "hour")) {
      //   const index = time.indexOf(timeD)
      indexD = index;
    }
  });

  console.log(temp[indexD]);
};

const resolvePromise = async () => {
  const weatherData = await getWeather(url);
};

resolvePromise();
