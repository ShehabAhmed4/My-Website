// buttons
let el = document.querySelector(".scroller");
let Height =
  document.documentElement.scrollHeight - document.documentElement.clientHeight;

window.addEventListener("scroll", () => {
  let scrollTop = document.documentElement.scrollTop;
  el.style.width = `${(scrollTop / Height) * 95}%`;
});


// //Anmation Progress

let ourSkills = document.getElementById("our-skills");
let skills = document.querySelectorAll(".the-progres span");

window.onscroll = function () {
  if (window.scrollY >= ourSkills.offsetTop) { 
    skills.forEach((skill) => {
      skill.style.width = skill.dataset.width;
      
    });
  }
};


// counter
let nums = document.querySelectorAll(".stats .number");
let statsSection = document.querySelector(".stats");
let started = false;

window.onscroll = function () {
  if (window.scrollY >= statsSection.offsetTop) {
    if (!started) {
      nums.forEach((num) => startCounter(num));
    }
    started = true;
  }
};

function startCounter(el) {
  let goal = el.dataset.goal;
  let count = setInterval(() => {
    el.textContent++;
    if (el.textContent == goal) {
      clearInterval(count);
    }
  }, 2000 / goal);
}
// Counter Days


let dateCounter = new Date("Dec 30 2023 23:59:59").getTime();

let counter = setInterval(() => {
  let newDate = new Date().getTime();
  let diff = dateCounter - newDate;

  let days = Math.floor(diff / (1000 * 60 * 60 * 24));
  let hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / 1000 / 60 / 60);
  let minutes = Math.floor((diff % (1000 * 60 * 60)) / 1000 / 60);
  let secondes = Math.floor((diff % (1000 * 60)) / 1000);

  if (diff < 0) {
    clearInterval(counter);
    window.alert("Happy New Year");
  }

  document.querySelector(".Days").innerHTML = days < 10 ? `0${days}` : days;
  document.querySelector(".Hours").innerHTML = hours < 10 ? `0${hours}` : hours;
  document.querySelector(".Minutes").innerHTML =
    minutes < 10 ? `0${minutes}` : minutes;
  document.querySelector(".Secondes").innerHTML =
    secondes < 10 ? `0${secondes}` : secondes;
}, 1000);





//bottom Scroll

// let sco = document.querySelector(".scro");

// window.onscroll = function () {
//   if (window.scrollY >= 99) {
//       sco.classList.add("show");
//     } else {
//         sco.classList.remove("show");
//   }
// };
// sco.onclick = function () {
//     window.scrollTo({

//       top: 0,
//       behavior: "smooth",
//     })
//     };