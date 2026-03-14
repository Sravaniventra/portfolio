document.addEventListener("DOMContentLoaded", function(){

window.addEventListener('scroll', () => { 
  const nav = document.querySelector('nav');
  if (window.scrollY > 10) nav.classList.add('nav-shadow');
  else nav.classList.remove('nav-shadow');
});

const backToTop = document.getElementById('backToTop');
window.addEventListener('scroll', () => {
  backToTop.style.display = window.scrollY > 300 ? "block" : "none";
});

window.scrollToTop = function(){
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

const revealElements = document.querySelectorAll('.fade-up');

const revealOnScroll = () => {
  revealElements.forEach(el => {
    const rect = el.getBoundingClientRect();
    if (rect.top < window.innerHeight - 80) {
      el.style.animationPlayState = "running";
    }
  });
};

window.addEventListener('scroll', revealOnScroll);
window.addEventListener('load', revealOnScroll);

const typeText = [
  "Machine Learning Developer",
  "Data Science",
  "Full-Stack Developer",
  "Tech Enthusiast",
  "Problem Solver"
];

let typeIndex = 0;
let charIndex = 0;
const typeSpeed = 110;
const eraseSpeed = 60;
const delayBetweenWords = 1200;

const typewriter = document.getElementById("typewriter-text");

function typeWriterEffect(){
  if (!typewriter) return;

  if (charIndex < typeText[typeIndex].length) {
    typewriter.textContent = typeText[typeIndex].substring(0, charIndex + 1);
    charIndex++;
    setTimeout(typeWriterEffect, typeSpeed);
  } else {
    setTimeout(eraseEffect, delayBetweenWords);
  }
}

function eraseEffect(){
  if (charIndex > 0) {
    typewriter.textContent = typeText[typeIndex].substring(0, charIndex - 1);
    charIndex--;
    setTimeout(eraseEffect, eraseSpeed);
  } else {
    typeIndex = (typeIndex + 1) % typeText.length;
    setTimeout(typeWriterEffect, 300);
  }
}

typeWriterEffect();

window.openModal = function(project){

let content = '';

/*if (project === 'restaurant') {
content = `
<div class="modal-bg" onclick="closeModal()">
<div class="modal-box" onclick="event.stopPropagation()">

<h2>Restaurant Insights & Recommendation System</h2>

<p><strong>Overview:</strong><br>
An ML system that predicts restaurant ratings, classifies cuisines, and generates personalized top-5 recommendations.</p>

<img src="img/restaurant1.png">
<img src="img/restaurant2.png">

<button class="modal-close" onclick="closeModal()">Close</button>

</div>
</div>`;
}
*/

if (project === 'SKillMerge') {
content = `
<div class="modal-bg" onclick="closeModal()">
<div class="modal-box" onclick="event.stopPropagation()">

<h2>An automated study group formation system</h2>

<p><strong>Overview:</strong><br>
SkillMerge is an ML-powered study group formation system that automatically clusters students into balanced learning groups based on skills and preferences.</p>

<p><strong>My Contributions:</strong></p>
<ul>
<li>Developed similarity-based clustering to form interdisciplinary study groups.</li>
<li>Allowed users to create study groups based on their desired topics or skills.</li>
<li>Implemented fairness logic to ensure unbiased and balanced skill distribution across teams.</li>
<li>Enabled dynamic re-clustering so groups can be reorganized when new students join.</li>
</ul>

<p><strong>Impact:</strong></p>
<ul>
<li>Reduced manual group formation effort by <strong>~70%</strong>.</li>
<li>Ensured balanced and unbiased team formation across <strong>4–5 member groups</strong>.</li>
</ul>


<img src="img/skillmerge1.png">
<img src="img/skillmerge2.png">
<img src="img/skillmerge3.png">

<button class="modal-close" onclick="closeModal()">Close</button>

</div>
</div>`;
}

if (project === 'pricelens') {
content = `
<div class="modal-bg" onclick="closeModal()">
<div class="modal-box" onclick="event.stopPropagation()">

<h2>Price Lens – Comparison & Alert System</h2>

<p><strong>Overview:</strong><br>
Full-stack platform that tracks product prices across multiple e-commerce websites and alerts users when prices drop.</p>

<p><strong>My Contributions:</strong></p>
<ul>
<li>Built web scrapers tracking prices from 4+ e-commerce platforms.</li>
<li>Stored 10,000+ price records for historical trend analysis.</li>
<li>Created interactive price dashboards using Streamlit and Altair.</li>
</ul>

<p><strong>Impact:</strong></p>
<ul>
<li>Reduced manual price checking by <strong>80%</strong> through automated alerts.</li>
<li>Helped users identify the best time to purchase using price history trends.</li>
</ul>

<img src="img/pricelens1.png">
<img src="img/pricelens2.png">
<img src="img/pricelens3.png">

<button class="modal-close" onclick="closeModal()">Close</button>

</div>
</div>`;
}

if (project === 'touchless') {
content = `
<div class="modal-bg" onclick="closeModal()">
<div class="modal-box" onclick="event.stopPropagation()">

<h2>TouchLess Trace</h2>
<p><strong>Overview:</strong><br>
Sensor-free fingerprint verification system using CNN and OpenCV to extract ridge patterns from images.</p>

<p><strong>My Contributions:</strong></p>
<ul>
<li>Processed 6,000+ fingerprint images using preprocessing techniques (grayscale, thresholding, noise filtering).</li>
<li>Built a custom feature extraction and matching pipeline.</li>
<li>Integrated CNN-based pattern detection for improved fingerprint recognition.</li>
</ul>

<p><strong>Impact:</strong></p>
<ul>
<li>Achieved <strong>97% fingerprint verification accuracy</strong>.</li>
<li>Improved reliability of authentication without physical fingerprint sensors.</li>
</ul>

<img src="img/touchless1.png">
<img src="img/touchless2.png">

<button class="modal-close" onclick="closeModal()">Close</button>

</div>
</div>`;
}

document.getElementById('modal-container').innerHTML = content;

}

window.closeModal = function(){
document.getElementById('modal-container').innerHTML = '';
}



const menuToggle = document.getElementById("menuToggle");
const navMenu = document.getElementById("navMenu");

menuToggle.addEventListener("click", () => {
navMenu.classList.toggle("active");
}); 

const themeToggle = document.getElementById("themeToggle");

themeToggle.addEventListener("click", () => {
document.body.classList.toggle("dark-mode");

themeToggle.textContent =
document.body.classList.contains("dark-mode") ? "☀️" : "🌙";
});


});