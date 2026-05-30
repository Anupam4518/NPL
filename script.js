// Countdown Timer

const tournamentDate = new Date("July 15, 2025 18:00:00").getTime();

setInterval(() => {

    const now = new Date().getTime();
    const gap = tournamentDate - now;

    const days = Math.floor(gap / (1000 * 60 * 60 * 24));
    const hours = Math.floor(
        (gap % (1000 * 60 * 60 * 24))
        / (1000 * 60 * 60)
    );

    const minutes = Math.floor(
        (gap % (1000 * 60 * 60))
        / (1000 * 60)
    );

    const seconds = Math.floor(
        (gap % (1000 * 60))
        / 1000
    );

    document.getElementById("days").innerText = days;
    document.getElementById("hours").innerText = hours;
    document.getElementById("minutes").innerText = minutes;
    document.getElementById("seconds").innerText = seconds;

}, 1000);


// Modal

const modal = document.getElementById("modal");
const btn = document.getElementById("registerBtn");
const closeBtn = document.querySelector(".close");

btn.onclick = () => {
    modal.style.display = "flex";
};

closeBtn.onclick = () => {
    modal.style.display = "none";
};

window.onclick = (e) => {
    if (e.target === modal) {
        modal.style.display = "none";
    }
};


// Registration Form

document
.getElementById("registrationForm")
.addEventListener("submit", function(e){

    e.preventDefault();

    alert("Registration Successful! 🎮");

    modal.style.display = "none";
    this.reset();
});