const navbar = document.querySelector(".navbar");


let hamburger = document.querySelector(".hamburger");
        hamburger.onclick = function() {
            let nav_ul = document.querySelector(".nav_ul");
            nav_ul.classList.toggle("active")
        }

