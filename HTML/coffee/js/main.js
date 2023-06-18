//导航栏
const navbar = document.getElementById('navbar');

window.addEventListener('scroll', function() {
  if (window.scrollY > 0) {
    navbar.classList.add('navbar-white');
  } else {
    navbar.classList.remove('navbar-white');
  }
});


//轮播
var slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("slider")[0].getElementsByTagName("img");
  var dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.opacity = 0;
  }
  slides[slideIndex-1].style.opacity = 1;
}




const videos = document.querySelectorAll('#carousel video');
const prevBtnss = document.querySelector('#prevBtnss');
const nextBtnss = document.querySelector('#nextBtnss');
let currentVideo = 0;

function showVideo(index) {
  videos.forEach((video, i) => {
    if (i === index) {
      video.classList.add('active');
    } else {
      video.classList.remove('active');
    }
  });
}

function showNextVideo() {
  currentVideo = (currentVideo + 1) % videos.length;
  showVideo(currentVideo);
}

function showPrevVideo() {
  currentVideo = (currentVideo - 1 + videos.length) % videos.length;
  showVideo(currentVideo);
}

nextBtnss.addEventListener('click', showNextVideo);
prevBtnss.addEventListener('click', showPrevVideo);