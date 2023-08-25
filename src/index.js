function displayTime() {
  let skiptonDateElement = document.querySelector("#skipton .date");
  let skiptonDate = moment()
    .tz("Europe/London")
    .format("dddd, Do MMMM YYYY 📅");
  if (skiptonDateElement !== null) {
    skiptonDateElement.innerHTML = skiptonDate;
  }

  let skiptonTimeElement = document.querySelector("#skipton .time");
  let skiptonTime = moment().tz("Europe/London").format("HH:mm:ss A 🕖");

  if (skiptonTimeElement !== null) {
    skiptonTimeElement.innerHTML = skiptonTime;
  }

  let cuscoDateElement = document.querySelector("#cusco .date");
  let cuscoDate = moment().tz("America/Lima").format("dddd, Do MMMM YYYY 📅");
  if (cuscoDateElement !== null) {
    cuscoDateElement.innerHTML = cuscoDate;
  }
  let cuscoTimeElement = document.querySelector("#cusco .time");
  let cuscoTime = moment().tz("America/Lima").format("HH:mm:ss A 🕖");
  if (cuscoTimeElement !== null) {
    cuscoTimeElement.innerHTML = cuscoTime;
  }
  let melbourneDateElement = document.querySelector("#melbourne .date");
  let melbourneDate = moment()
    .tz("Australia/Melbourne")
    .format("dddd, Do MMMM YYYY 📅");
  if (melbourneDateElement !== null) {
    melbourneDateElement.innerHTML = melbourneDate;
  }
  let melbourneTimeElement = document.querySelector("#melbourne .time");
  let melbourneTime = moment()
    .tz("Australia/Melbourne")
    .format("HH:mm:ss A 🕖");
  if (melbourneTimeElement !== null) {
    melbourneTimeElement.innerHTML = melbourneTime;
  }
}

function updateLocation(event) {
  let locationTimeZone = event.target.value;
  let interfaceElement = document.querySelector("#cities");
  if (locationTimeZone === "current") {
    locationTimeZone = moment.tz.guess();
  } else if (locationTimeZone === "nocity") {
    interfaceElement.innerHTML = `<div>Select a fucking city</div>`;
    return;
  }
  let locationName = locationTimeZone.replace("_", " ").split("/")[1];
  let locationTime = moment().tz(locationTimeZone);
  interfaceElement.innerHTML = `
   <div class="city" id="${locationName}">
          <h2>${locationName}</h2>
          <div class="date">${locationTime.format("MMMM Do YYYY")}</div>
          <div class="time">${locationTime.format(
            "h:mm"
          )} <small>${locationTime.format("A")}</small></div>
         <br />
        </div>
        <div class="anchor-right">
            <a href="index.html" class="anchor">🔙</a>
        </div>
        

  `;
}
displayTime();
setInterval(displayTime, 1000);

let locationSelectElement = document.querySelector("#city");
locationSelectElement.addEventListener("change", updateLocation);
