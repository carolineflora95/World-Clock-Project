function displayTime() {
  let skiptonDateElement = document.querySelector("#skipton .date");
  let skiptonDate = moment()
    .tz("Europe/London")
    .format("dddd, Do MMMM YYYY 📅");
  skiptonDateElement.innerHTML = skiptonDate;

  let skiptonTimeElement = document.querySelector("#skipton .time");
  let skiptonTime = moment().tz("Europe/London").format("HH:mm:ss A 🕖");
  skiptonTimeElement.innerHTML = skiptonTime;

  let tbilisiDateElement = document.querySelector("#tbilisi .date");
  let tbilisiDate = moment().tz("Asia/Tbilisi").format("dddd, Do MMMM YYYY 📅");
  tbilisiDateElement.innerHTML = tbilisiDate;

  let tbilisiTimeElement = document.querySelector("#tbilisi .time");
  let tbilisiTime = moment().tz("Asia/Tbilisi").format("HH:mm:ss A 🕖");
  tbilisiTimeElement.innerHTML = tbilisiTime;

  let cuscoDateElement = document.querySelector("#cusco .date");
  let cuscoDate = moment().tz("America/Lima").format("dddd, Do MMMM YYYY 📅");
  cuscoDateElement.innerHTML = cuscoDate;

  let cuscoTimeElement = document.querySelector("#cusco .time");
  let cuscoTime = moment().tz("America/Lima").format("HH:mm:ss A 🕖");
  cuscoTimeElement.innerHTML = cuscoTime;
}
setInterval(displayTime, 1);
