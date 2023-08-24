function displayTime() {
  let skiptonDateElement = document.querySelector("#skipton .date");
  let skiptonDate = moment()
    .tz("Europe/London")
    .format("dddd, Do MMMM YYYY 📅");
  skiptonDateElement.innerHTML = skiptonDate;

  let skiptonTimeElement = document.querySelector("#skipton .time");
  let skiptonTime = moment().tz("Europe/London").format("HH:mm:ss A 🕖");
  skiptonTimeElement.innerHTML = skiptonTime;

  let cuscoDateElement = document.querySelector("#cusco .date");
  let cuscoDate = moment().tz("America/Lima").format("dddd, Do MMMM YYYY 📅");
  cuscoDateElement.innerHTML = cuscoDate;

  let cuscoTimeElement = document.querySelector("#cusco .time");
  let cuscoTime = moment().tz("America/Lima").format("HH:mm:ss A 🕖");
  cuscoTimeElement.innerHTML = cuscoTime;

  let melbourneDateElement = document.querySelector("#melbourne .date");
  let melbourneDate = moment()
    .tz("Australia/Melbourne")
    .format("dddd, Do MMMM YYYY 📅");
  melbourneDateElement.innerHTML = melbourneDate;

  let melbourneTimeElement = document.querySelector("#melbourne .time");
  let melbourneTime = moment()
    .tz("Australia/Melbourne")
    .format("HH:mm:ss A 🕖");
  melbourneTimeElement.innerHTML = melbourneTime;
}

function updateLocation(event) {
  let locationTimeZone = event.target.value;
  if (locationTimeZone === "current") {
    locationTimeZone = moment.tz.guess();
    document.querySelector("#refreshLink").style.display = "none";
  }
  let locationName = locationTimeZone.replace("_", " ").split("/")[1];
  let locationTime = moment().tz(locationTimeZone);
  let interfaceElement = document.querySelector("#cities");
  interfaceElement.innerHTML = `
   <div>
          <h2>${locationName}</h2>
          <div class="date">${locationTime.format("MMMM Do YYYY")}</div>
          <div class="time">${locationTime.format(
            "h:mm"
          )} <small>${locationTime.format("A")}</small></div>
        </div>
        <a href="#">🔄</a>
  `;
}
setInterval(displayTime, 1000);

let locationSelectElement = document.querySelector("#city");
locationSelectElement.addEventListener("change", updateLocation);
