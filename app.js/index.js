// scroll to top
let span = document.querySelector(".up");
let f1 = document.querySelector(".f1");
let aboutme = document.querySelector(".aboutme");
let myskill = document.querySelector(".myskill");
let myprojects = document.querySelector(".myproject");
let whyme = document.querySelector(".whyme");
let myprices = document.querySelector(".myprices");
let book = document.querySelector(".book");

window.onscroll = function () {
    // console.log(this.scrollY);
    // if (this.scrollY >= 1000) {
    //   span.classList.add("show");
    // } else {
    //   span.classList.remove("show");
    // }
    this.scrollY >= 1000 ? span.classList.add("show") : span.classList.remove("show");
};

span.onclick = function () {
    window.scrollTo({
        top: 0,
        behavior: "smooth",
    });
};

f1.onclick = function () {
    window.scrollTo({
        top: 0,
        behavior: "smooth",
    });
};

aboutme.onclick = function () {
    window.scrollTo({
        top: 0,
        behavior: "smooth",
    });
};

myskill.onclick = function () {
    window.scrollTo({
        top: 730,
        behavior: "smooth",
    });
};
myprojects.onclick = function () {
    window.scrollTo({
        top: 1340,
        behavior: "smooth",
    });
};
whyme.onclick = function () {
    window.scrollTo({
        top: 2450,
        behavior: "smooth",
    });
};
myprices.onclick = function () {
    window.scrollTo({
        top: 3370,
        behavior: "smooth",
    });
};
book.onclick = function () {
    window.scrollTo({
        top: 4100,
        behavior: "smooth",
    });
};


// dark mode
const chk = document.getElementById('chk');

chk.addEventListener('change', () => {
	document.body.classList.toggle('dark');
});

