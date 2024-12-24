const countdownelement = document.getElementById('countdown-timer');
const partydate = new Date ('December 25, 2024 18:00:00').getTime();

function updateCountdown(){
    const now = new Date().getTime();
    const timeLeft = partydate - now;

    const days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
    const hours = Math.floor(timeLeft / ((1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((timeLeft / (1000 * 60 * 60 * 24)) / (1000 * 60));
    const seconds = Math.floor((timeLeft / (1000 * 60 * 60 * 24)) / 1000);

    countdownElement.innerText = `${days}d ${hours}h ${minutes}m ${seconds}s`;
}


setInterval(updateCountdown, 1000);

const snowButton = document.getElementById("snow-button");
const snowflakesContainer = document.getElementById("snowflakes");

function createSnowflake() {
  const snowflake = document.createElement("div");
  snowflake.classList.add("snowflake");
  snowflake.style.left = Math.random() * 100 + "vw";
  snowflake.style.animationDuration = Math.random() * 3 + 2 + "s";
  snowflake.style.opacity = Math.random();

  snowflakesContainer.appendChild(snowflake);


  setTimeout(() => {
    snowflake.remove();
  }, 5000);
}

snowButton.addEventListener("click", () => {
  for (let i = 0; i < 30; i++) {
    setTimeout(createSnowflake, i * 200);
  }
});