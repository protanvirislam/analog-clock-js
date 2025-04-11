const getSecond = document.querySelector(".tick-second");
const getMinute = document.querySelector(".tick-minute");
const getHour = document.querySelector(".tick-hour");

function Moving() {
  setInterval(() => {
    getSecond.style.setProperty(
      "--x_deg_sec",
      new Date().getSeconds() * 6 + "deg"
    );

    getMinute.style.setProperty(
      "--x_deg_min",
      new Date().getMinutes() * 6 + "deg"
    );
    getHour.style.setProperty(
      "--x_deg_hour",
      new Date().getHours() * 30 + new Date().getMinutes() * 0.5 + "deg"
    );
  }, 1000);
}

let hour = new Date().getHours();

Moving();

//analog clock Real version

const sec = document.getElementById("second");
const min = document.getElementById("minute");
const hrs = document.getElementById("hour");

function renderingDial() {
  setInterval(() => {
    let getTime = new Date();
    let getSec = getTime.getSeconds();
    let getMin = getTime.getMinutes();
    let getHrs = getTime.getHours();

    sec.style.transform = ` translate(-50%, -50%) rotate(${getSec * 6}deg)`;
    min.style.transform = ` translate(-50%, -50%) rotate(${getMin * 6}deg)`;
    hrs.style.transform = ` translate(-50%, -50%) rotate(${
      getHrs * 30 + getMin / 2
    }deg)`;
  }, 1000);
}

renderingDial();
