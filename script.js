
window.addEventListener('scroll', () => {
  const nav = document.querySelector('nav');
  if (window.scrollY > 10) nav.classList.add('nav-shadow');
  else nav.classList.remove('nav-shadow');
});


const backToTop = document.getElementById('backToTop');
window.addEventListener('scroll', () => {
  backToTop.style.display = window.scrollY > 300 ? "block" : "none";
});
function scrollToTop() {
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

function typeWriterEffect() {
  if (!typewriter) return;

  if (charIndex < typeText[typeIndex].length) {
    typewriter.textContent = typeText[typeIndex].substring(0, charIndex + 1);
    charIndex++;
    setTimeout(typeWriterEffect, typeSpeed);
  } else {
    setTimeout(eraseEffect, delayBetweenWords);
  }
}

function eraseEffect() {
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


function openModal(project) {
  let content = '';

 if (project === 'restaurant') {
  content = `
    <div class="modal-bg" onclick="closeModal()">
      <div class="modal-box" onclick="event.stopPropagation()">

        <h2>Restaurant Insights & Recommendation System</h2>

        <p><strong>Overview:</strong><br>
        An ML system that predicts restaurant ratings, classifies cuisines, and generates personalized top-5 recommendations. 
        It also includes city-level food trend analysis to understand customer preferences.</p>

        <p><strong>Impact:</strong><br>
        • Helps users find restaurants matching their taste and budget.<br>
        • Supports restaurants in making data-driven menu & pricing decisions.<br>
        • Reveals popular cuisines & top-performing cities for strategic expansion.</p>

        <p><strong>My Contribution:</strong><br>
        • Improved rating prediction accuracy through ML pipeline refinement.<br>
        • Enhanced the recommendation engine using content-based filtering.<br>
        • Added visualization dashboards like confusion matrices & city insights.</p>

        <img src="img/restaurant1.png">
        <img src="img/restaurant2.png">

        <button class="modal-close" onclick="closeModal()">Close</button>

      </div>
    </div>`;
}


 if (project === 'pricelens') {
  content = `
    <div class="modal-bg" onclick="closeModal()">
      <div class="modal-box" onclick="event.stopPropagation()">

        <h2>Price Lens – Price Comparison & Alert System</h2>

        <p><strong>Overview:</strong><br>
        A price-tracking platform that monitors products across e-commerce sites, builds daily price histories,
        and sends real-time price-drop alerts. Includes interactive graphs to help users visualize price trends.</p>

        <p><strong>Impact:</strong><br>
        • Saves money by identifying the best time to buy.<br>
        • Reduces manual price checking with automated alerts.</p>

        <p><strong>My Contribution:</strong><br>
        • Built reliable web scrapers and optimized storage for 10,000+ records.<br>
        • Enhanced the alert system and added interactive price-trend visualizations.</p>

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

        <h2>TouchLess Trace – Sensor-Free Fingerprint Recognition</h2>

        <p><strong>Overview:</strong><br>
        A contact-free fingerprint recognition system using CNNs and image processing to extract ridge patterns 
        without physical sensors.</p>

        <p><strong>Impact:</strong><br>
        • Provides hygienic, touch-free authentication in public environments.<br>
        • Works even when physical fingerprint sensors are unavailable or damaged.</p>

        <p><strong>My Contribution:</strong><br>
        • Developed an effective preprocessing workflow and custom matching algorithm.<br>
        • Achieved 97% verification accuracy across test samples.</p>

        <img src="img/touchless1.png">
        <img src="img/touchless2.png">

        <button class="modal-close" onclick="closeModal()">Close</button>
      </div>
    </div>`;
}


  document.getElementById('modal-container').innerHTML = content;
}

function closeModal() {
  document.getElementById('modal-container').innerHTML = '';
}

const themeToggle = document.getElementById("themeToggle");

themeToggle.addEventListener("click", () => {
  document.body.classList.toggle("dark-mode");

  themeToggle.textContent =
    document.body.classList.contains("dark-mode") ? "☀️" : "🌙";
});

console.log("✨ Portfolio Script Loaded Successfully!");
