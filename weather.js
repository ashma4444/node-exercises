const axios = require("axios");
const moment = require("moment");

const url =
  "https://api.open-meteo.com/v1/forecast?latitude=27.70&longitude=85.32&hourly=temperature_2m&daily=sunrise,sunset&forecast_days=1&timezone=auto";

const getWeather = async (url) => {
  const response = await axios.get(url);
  // console.log({ response });
  const { hourly_units, hourly, daily, daily_units } = response?.data; // ternary operator
  // console.log(hourly_units);
  // console.log(hourly);
  // console.log(daily_units);

  const { sunrise, sunset } = daily;
  const currentDate = moment(new Date());
  //   return currentDate.getTime();
  console.log(currentDate);

  const { time, temperature_2m } = hourly;
  //   console.log(hourly);
  let temp = temperature_2m;
  //   console.log(time);
  let indexD = null;
  time.map((timeD) => {
    const proTime = moment(timeD);
    // console.log(proTime.isSame(currentDate, "hour"));
    if (proTime.isSame(currentDate, "hour")) {
      const index = time.indexOf(timeD);
      indexD = index;
    }
  });

  console.log(indexD);
  console.log(temp);
  console.log(temp.at(indexD));

  //   return {
  //     sunrise: moment(sunrise.toString()).format("LLL"),
  //     sunset: sunset.toString(),
  //   };
};

const resolvePromise = async () => {
  // direct garda promise return garyo so, wrap by async, await
  const weatherData = await getWeather(url);
  //   console.log({ weatherData });

  // find the current temprature using current time data we get from weather api
};

resolvePromise();
