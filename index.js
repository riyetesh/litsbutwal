function toggleMenu(){
const menu=document.getElementById("mobileMenu");
menu.classList.toggle("hidden");
}

function toggleMenu(){
    document.getElementById("mobileMenu").classList.toggle("hidden");
}

function toggleMenu(){
    document.getElementById("navMenu").classList.toggle("show");
}


function toggleMenu(){
    document.querySelector("nav").classList.toggle("active");
}

let slideIndex = 1;
showSlide(slideIndex);

function changeSlide(n){
    showSlide(slideIndex += n);
}

function currentSlide(n){
    showSlide(slideIndex = n);
}

function showSlide(n){
    let slides = document.getElementsByClassName("slide");
    let dots = document.querySelectorAll(".dots span");

    if(n > slides.length) slideIndex = 1;
    if(n < 1) slideIndex = slides.length;

    for(let i=0;i<slides.length;i++)
        slides[i].style.display="none";

    for(let i=0;i<dots.length;i++)
        dots[i].classList.remove("active");

    slides[slideIndex-1].style.display="block";
    dots[slideIndex-1].classList.add("active");
}

/* AUTO SLIDE */
setInterval(()=>{
    changeSlide(1);
},4000);


function openLightbox(img){
    document.getElementById("lightbox").style.display = "flex";
    document.getElementById("lightbox-img").src = img.src;
}

function closeLightbox(){
    document.getElementById("lightbox").style.display = "none";
}


// ===== NOTICE SLIDER =====

const notices = [
    "Assets/notices/1.jpg",
    "Assets/notices/2.jpg",
    "Assets/notices/3.jpg",
    "Assets/notices/4.jpg"
];

let noticeIndex = 0;
const noticeImg = document.getElementById("noticeImage");

function showNotice() {
    noticeImg.src = notices[noticeIndex];
}

function nextNotice() {
    noticeIndex++;
    if (noticeIndex >= notices.length) noticeIndex = 0;
    showNotice();
}

function prevNotice() {
    noticeIndex--;
    if (noticeIndex < 0) noticeIndex = notices.length - 1;
    showNotice();
}

// FULLSCREEN
function openNotice() {
    document.getElementById("noticeModal").style.display = "flex";
    document.getElementById("noticeFull").src = notices[noticeIndex];
}

function closeNotice() {
    document.getElementById("noticeModal").style.display = "none";
}

// Nav bar

/* MOBILE MENU */
function toggleMenu(){
  document.getElementById("navMenu").classList.toggle("show");
}

/* SHRINK NAVBAR ON SCROLL */

window.addEventListener("scroll", () => {

  const navbar = document.querySelector(".navbar");

  if(window.scrollY > 80){
    navbar.classList.add("shrink");
  } else {
    navbar.classList.remove("shrink");
  }

});

document.querySelectorAll(".dropdown").forEach(drop => {

  let timeout;

  drop.addEventListener("mouseenter", () => {
    clearTimeout(timeout);
    drop.classList.add("open");
  });

  drop.addEventListener("mouseleave", () => {
    timeout = setTimeout(() => {
      drop.classList.remove("open");
    }, 200);   // delay before hiding
  });

});


