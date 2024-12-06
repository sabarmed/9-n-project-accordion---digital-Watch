const clockContainer = document.getElementById("clockcontainer");

const digitalClock = () => {
  const now = new Date();

  let sec = now.getSeconds();
  let min = now.getMinutes();
  let houres = now.getHours();
  let date = now.toDateString();
  let pmAm = "am";

  if (houres > 12) {
    houres = houres - 12;
    pmAm = "pm";
  }

  if (houres < 10) {
    houres = `0${houres}`;
  }

  if (sec < 10) {
    sec = `0${sec}`;
  }

  if (min < 10) {
    min = `0${min}`;
  }

  if (houres == 0) {
    houres = `12`;
  }

  const clock = `
                <div class="datte">
                    ${date}
                </div>
                <div class="watch-digital">
                    ${houres} : ${min} :${sec} ${pmAm}
                </div>`;

  clockContainer.innerHTML = clock;
};
setInterval(digitalClock, 1000);


