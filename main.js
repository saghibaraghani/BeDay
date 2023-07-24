
const next = document.querySelector('#next');
const prev = document.querySelector('#prev');
const cards = document.querySelector('.carousel-card-container');
cards.scrollLeft = 0;
let slides = document.getElementsByClassName("carousel-card");


let clicks = [];

const coding = document.querySelector('#coding-btn');
const gaming = document.querySelector('#game-btn');
const design = document.querySelector('#design-btn');
const web = document.querySelector('#web-btn');
const all = document.querySelector('#all-btn');

function handleScrollNext(direction) {
    cards.scrollLeft = cards.scrollLeft += window.innerWidth / 1.08 > 600 ? window.innerWidth / 1.08 : window.innerWidth - 20
    // document.getElementById('prev').classList.add('tab-active');
    // document.getElementById('prev').classList.remove('inactive');
    clicks.push(1);
    if (clicks.length == 1) {
        document.getElementById('prev').classList.add('tab-active');
        document.getElementById('next').classList.remove('tab-active');
        document.getElementById('next').classList.add('inactive');
        document.getElementById('next').style.pointerEvents = "none";
        document.getElementById('next').style.cursor = "default";
        console.log(clicks);
        document.getElementById('prev').style.pointerEvents = "visible";
        document.getElementById('prev').style.cursor = "pointer";
    }
}

function handleScrollPrev(direction) {

    cards.scrollLeft = cards.scrollLeft -= window.innerWidth / 1 > 600 ? window.innerWidth / 1 : window.innerWidth - 20
    clicks.pop(1);
    if (clicks.length == 0) {
        document.getElementById('next').classList.add('tab-active');
        document.getElementById('prev').classList.remove('tab-active');
        document.getElementById('prev').classList.add('inactive');
        document.getElementById('prev').style.pointerEvents = "none";
        document.getElementById('prev').style.cursor = "default";
        console.log(clicks);
        document.getElementById('next').style.pointerEvents = "visible";
        document.getElementById('next').style.cursor = "pointer";
    }
}



function enableCoding() {
    let designSlides = document.getElementsByClassName('design');
    let gameSlides = document.getElementsByClassName('game');
    let codeSlides = document.getElementsByClassName('coding');
    let webSlides = document.getElementsByClassName('web');
    for (i = 0; i < designSlides.length; i++) {
        designSlides[i].classList.add('hidden');
        designSlides[i].classList.remove('showing');
    }

    for (i = 0; i < gameSlides.length; i++) {
        gameSlides[i].classList.add('hidden');
        gameSlides[i].classList.remove('showing');
    }

    for (i = 0; i < codeSlides.length; i++) {
        codeSlides[i].classList.add('showing');
        codeSlides[i].classList.remove('hidden');
    }

    for (i = 0; i < webSlides.length; i++) {
        // webSlides[i].classList.add('hidden');
        webSlides[i].classList.remove('showing');
    }

    const codingBtn = document.getElementById('coding-btn');
    let buttons = document.getElementsByClassName('active');

    for (i = 0; i < buttons.length; i++) {
        buttons[i].classList.remove('active');
    }
    codingBtn.classList.add('active');
}


function enableGaming() {
    let designSlides = document.getElementsByClassName('design');
    let codingSlides = document.getElementsByClassName('coding');
    let gameSlides = document.getElementsByClassName('game');
    let webSlides = document.getElementsByClassName('web');
    for (i = 0; i < designSlides.length; i++) {
        designSlides[i].classList.add('hidden');
        designSlides[i].classList.remove('showing');
    }

    for (i = 0; i < codingSlides.length; i++) {
        codingSlides[i].classList.add('hidden');
        codingSlides[i].classList.remove('showing');
    }

    for (i = 0; i < gameSlides.length; i++) {
        gameSlides[i].classList.add('showing');
    }

    for (i = 0; i < webSlides.length; i++) {
        // webSlides[i].classList.add('hidden');
        webSlides[i].classList.remove('showing');
    }

    const gamingBtn = document.getElementById('game-btn');
    let buttons = document.getElementsByClassName('active');

    for (i = 0; i < buttons.length; i++) {
        buttons[i].classList.remove('active');
    }
    gamingBtn.classList.add('active');
}



function enableDesign() {
    let designSlides = document.getElementsByClassName('design');
    let codingSlides = document.getElementsByClassName('coding');
    let gameSlides = document.getElementsByClassName('game');
    let webSlides = document.getElementsByClassName('web');
    for (i = 0; i < designSlides.length; i++) {
        designSlides[i].classList.add('showing');
        designSlides[i].classList.remove('hidden');
    }

    for (i = 0; i < codingSlides.length; i++) {
        codingSlides[i].classList.add('hidden');
        codingSlides[i].classList.remove('showing');
    }

    for (i = 0; i < gameSlides.length; i++) {
        gameSlides[i].classList.add('hidden');
        gameSlides[i].classList.remove('showing');
    }

    for (i = 0; i < webSlides.length; i++) {
        // webSlides[i].classList.add('hidden');
        webSlides[i].classList.remove('showing');
    }

    const designBtn = document.getElementById('design-btn');
    let buttons = document.getElementsByClassName('active');

    for (i = 0; i < buttons.length; i++) {
        buttons[i].classList.remove('active');
    }
    designBtn.classList.add('active');
}


function enableWeb() {
    let designSlides = document.getElementsByClassName('design');
    let codingSlides = document.getElementsByClassName('coding');
    let gameSlides = document.getElementsByClassName('game');
    let webSlides = document.getElementsByClassName('web');
    for (i = 0; i < designSlides.length; i++) {
        designSlides[i].classList.remove('showing');
        designSlides[i].classList.add('hidden');
    }

    for (i = 0; i < codingSlides.length; i++) {
        codingSlides[i].classList.add('hidden');
        // codingSlides[i].classList.remove('showing');
    }

    for (i = 0; i < gameSlides.length; i++) {
        gameSlides[i].classList.add('hidden');
        gameSlides[i].classList.remove('showing');
    }


    for (i = 0; i < webSlides.length; i++) {
        webSlides[i].classList.add('showing');
    }

    const webBtn = document.getElementById('web-btn');
    let buttons = document.getElementsByClassName('active');

    for (i = 0; i < buttons.length; i++) {
        buttons[i].classList.remove('active');
    }
    webBtn.classList.add('active');
}

function enableAll() {
    let slides = document.getElementsByClassName('carousel-card');
    for (i = 0; i < slides.length; i++) {
        slides[i].classList.add('showing');
    }
    const allBtn = document.getElementById('all-btn');
    let buttons = document.getElementsByClassName('active');
    for (i = 0; i < buttons.length; i++) {
        buttons[i].classList.remove('active');
    }
    allBtn.classList.add('active');
}

next.addEventListener('click', handleScrollNext);
prev.addEventListener('click', handleScrollPrev);
coding.addEventListener('click', enableCoding);
gaming.addEventListener('click', enableGaming);
design.addEventListener('click', enableDesign);
web.addEventListener('click', enableWeb);
all.addEventListener('click', enableAll);
const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-menu");

hamburger.addEventListener("click", mobileMenu);

function mobileMenu() {
    hamburger.classList.toggle("hp-active");
    navMenu.classList.toggle("hp-active");
}

const navLink = document.querySelectorAll(".nav-link");

navLink.forEach(n => n.addEventListener("click", closeMenu));

function closeMenu() {
    hamburger.classList.remove("hp-active");
    navMenu.classList.remove("hp-active");
}




window.onscroll = function () {
    scrollFunction();
};

function scrollFunction() {
    const scrollToTopBtn = document.getElementById('scrollToTopBtn');

    // Check screen size and exclude for iPhone, iPad, or smaller screens
    if (
        !(window.innerWidth <= 768 && /iPhone|iPad|iPod/i.test(navigator.userAgent))
    ) {
        if (
            document.body.scrollTop > 20 ||
            document.documentElement.scrollTop > 20
        ) {
            scrollToTopBtn.style.display = 'block';
        } else {
            scrollToTopBtn.style.display = 'none';
        }
    }
    else {
        scrollToTopBtn.style.display = 'none';
    }
}

function scrollToTop() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}

const gifElement = document.getElementById('gifImage');

// Function to replay the GIF
function replayGIF() {
    gifElement.src = gifElement.src; // Reset the 'src' attribute to replay the GIF
}

// Call the 'replayGIF' function when the page is loaded or refreshed
window.onload = replayGIF;



window.addEventListener('load', function () {
    // Get the form element
    var form = document.getElementById('myForm');

    // Reset the form fields
    form.reset();
});

// event.preventDefault;
function openPage() {
    var subject = document.getElementById("course");
    var subjectValue = subject.value;
    console.log(subjectValue);

    if (subjectValue == "python") {
        // window.open("python.html");
        window.location.assign("https://koalendar.com/e/python-programming");
    }

    else if (subjectValue == "javascript") {
        window.location.assign("https://koalendar.com/e/javascript-programming");
    }

    else if (subjectValue == "html") {
        window.location.assign("https://koalendar.com/e/html-and-css");
    }

    else if (subjectValue == "roblox") {
        window.location.assign("https://koalendar.com/e/roblox");
    }

    else if (subjectValue == "scratch") {
        window.location.assign("https://koalendar.com/e/scratch");
    }

    else if (subjectValue == "ux") {
        window.location.assign("https://koalendar.com/e/ux-design");
    }
    // print(subjectValue);
    // if (subjectValue == "python") {

    // 
    // }

}



function SubForm() {
    $.ajax({
        url: 'https://api.apispreadsheets.com/data/buGcYd8rfuksUSRr/',
        type: 'post',
        data: $("#myForm").serializeArray(),
        success: function () {
            alert("Form Data Submitted :)")
        },
        error: function () {
            alert("There was an error :(")
        }
    });
}

function validateEmail() {
    var emailInput = document.getElementById("email");
    var validationMessage = document.getElementById("validationMessage");
    var email = emailInput.value;

    var ageInput = document.getElementById("age");
    var age = ageInput.value.trim();
    var ageValidation = document.getElementById("ageMessage");

    // Regular expression for email validation
    var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (emailRegex.test(email)) {
        validationMessage.textContent = "Valid email address";
        validationMessage.style.color = "green";
        SubForm();
        setTimeout(openPage, 1500);
    } else {
        validationMessage.textContent = "Invalid email address";
        validationMessage.style.color = "red";
    }
}



function runAll() {

    // openPage();
    validateEmail();
}

function getValue() {
    var dropdown = document.getElementById("tookbefore");
    var selectedValue = dropdown.value;
    var projectText = document.getElementById("projects");
    console.log(selectedValue);
    if (selectedValue === "yes") {
        projectText.style.display = 'flex';
        projectText.style.flexDirection = 'column';
        projectText.style.justifyContent = 'flex-start';
    } else {
        projectText.style.display = 'none';
    }

}



