// PRELOADER

var preloader = document.querySelector(".preloader")

window.addEventListener("load", vanish);

function vanish() {
    preloader.classList.add("disappear")
}

// SCROLLUP

var mybutton = document.getElementById("scrollUp");

window.onscroll = function () {
    scrollFunction()
};

function scrollFunction() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 150) {
        mybutton.style.display = "block";
    } else {
        mybutton.style.display = "none";
    }
}

// 
