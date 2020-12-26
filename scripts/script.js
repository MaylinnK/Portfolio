/*jslint browser: true, devel: true, eqeq: true, plusplus: true, sloppy: true, vars: true, white: true*/

/*eslint-env browser * /

/*eslint 'no-console': 0*/

/* Toggle between showing and hiding the navigation menu links when the user clicks on the hamburger menu / bar icon */

document.querySelectorAll('a[href^="#skills"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});


document.querySelectorAll('a[href^="#works"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

document.querySelectorAll('a[href^="#experiments"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});


document.querySelectorAll('a[href^="#contact"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

var linkedinLogo = document.querySelector('footer > section > span > a > img').src;
console.log(linkedinLogo);

var twitterLogo = document.getElementById('twitter').src;
console.log(twitterLogo);

var twitterStatus = false;
var linkedStatus = false;

function twitterOn() {
  if (twitterStatus == false) {
    document.getElementById('twitter').src = './images/twittertwee.svg';
    twitterStatus = true;
  }
}

document.getElementById("twitter").addEventListener("mouseover", twitterOn);

function twitterOff() {
  if (twitterStatus == true) {
    document.getElementById('twitter').src = './images/twitter.svg';
    twitterStatus = false;
  }
}

document.getElementById("twitter").addEventListener("mouseout", twitterOff);


function linkedOn() {
  if (linkedStatus == false) {
    document.querySelector('footer > section > span > a > img').src = "./images/linkedtwee.svg";
    linkedStatus = true;
  }
}

var linkedinLogo = document.querySelector('footer > section > span > a > img').addEventListener("mouseover", linkedOn);

function linkedOff() {
  if (linkedStatus == true) {
    var linkedinLogo = document.querySelector('footer > section > span > a > img').src = './images/li.svg';
    linkedStatus = false;
  }
}

var linkedinLogo = document.querySelector('footer > section > span > a > img').addEventListener("mouseout", linkedOff);
