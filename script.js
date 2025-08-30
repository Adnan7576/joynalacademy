// ======== Social Links ========
const socialLinks = {
  facebook: "https://facebook.com/joynalacademy",
  whatsapp: "https://wa.me/8801571748528",
  youtube: "https://youtube.com/joynalacademy"
};

// ======== Containers ========
const coursesContainer = document.getElementById("courses-container");
const academicCoursesContainer = document.getElementById("academic-courses-container");
const heroSwiperWrapper = document.querySelector(".hero-swiper .swiper-wrapper");

// ======== Data for Courses ========
const admissionCourses = [
  {
    title: "BUP FST Admission 2026",
    description: "lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    image: "asset/images/Logo/BUPFST.png",
    link: "https://joynal.academy",
    buttonText: "Enroll Now",
    // icon: "fas fa-file-alt",
    color: "blue"
  },
  {
    title: "2nd Timer Restart Batch 2025",
    description: "lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    image: "asset/images/Logo/JA logo.png",
    link: "https://joynal.academy",
    buttonText: "Enroll Now",
    // icon: "fas fa-user-clock",
    color: "blue"
  },
  {
    title: "BUP FST Exam Batch 2026",
    description: "lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    image: "asset/images/Logo/BUPFST.png",
    link: "https://joynal.academy",
    buttonText: "Join Now",
    // icon: "fas fa-graduation-cap",
    color: "blue"
  }
];

const academicCourses = [
  {
    title: "SSC Academic 2026",
    description: "lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    image: "asset/images/Logo/JA logo.png",
    link: "https://joynal.academy",
    buttonText: "Enroll Now",
    // icon: "fas fa-square-root-alt",
    color: "green"
  },
  {
    title: "HSC Physics 2026",
    description: "lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    image: "asset/images/Logo/JA logo.png",
    link: "https://joynal.academy",
    buttonText: "Enroll Now",
    // icon: "fas fa-atom",
    color: "green"
  },
  {
    title: "Mathematics Booster",
    description: "lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    image: "asset/images/Logo/JA logo.png",
    link: "https://joynal.academy",
    buttonText: "Enroll Now",
    // icon: "fas fa-calculator",
    color: "green"
  }
];

// ======== Hero Slides ========
const heroSlides = [
  {
    image: "asset/images/Thumbnail/Academic 2026.png",
    alt: "Thumbnail of academic 2026 batch",
    url: "https://joynalacademy.com",
    overlayClass: "bg-black bg-opacity-50"
  },
  {
    image: "asset/images/Thumbnail/2nd timer.png",
    alt: "Thumbnail of 2nd timer restart batch",
    url: "https://joynalacademy.com",
    overlayClass: "bg-black bg-opacity-40"
  },
  {
    image: "asset/images/Thumbnail/BUP FST.png",
    alt: "Thumbnail of BUP FST",
    url: "https://joynalacademy.com",
    overlayClass: "bg-black bg-opacity-30"
  }
];

// ======== Generate Cards Function ========
function generateCards(container, data) {
  container.innerHTML = "";
  data.forEach(item => {
    const card = document.createElement("div");
card.className = `
  bg-white p-6 rounded-lg shadow border border-transparent
  hover:shadow-lg hover:border-2 hover:border-${item.color}-600
  transition hover:scale-105 text-center flex flex-col items-center
`;
   card.innerHTML = `
      <img src="${item.image}" alt="${item.title}" class="w-20 h-20 object-contain mb-4">
      <i class="${item.icon} text-4xl text-${item.color}-600 mb-4"></i>
      <h4 class="text-xl font-semibold mb-2">${item.title}</h4>
      <p class="text-gray-600 mb-4">${item.description}</p>
      <button class="bg-${item.color}-600 hover:bg-${item.color}-700 text-white px-4 py-2 rounded-md transition" onclick="window.open('${item.link}','_blank')">
        ${item.buttonText}
      </button>
    `;
    container.appendChild(card);
  });
}

// ======== Generate Hero Slides ========
function generateHeroSlides() {
  heroSwiperWrapper.innerHTML = "";
  heroSlides.forEach(slide => {
    const slideDiv = document.createElement("div");
    slideDiv.className = "swiper-slide relative w-full h-[60vh] md:h-screen cursor-pointer";
    slideDiv.dataset.url = slide.url;
    slideDiv.innerHTML = `
      <img src="${slide.image}" alt="${slide.alt}" class="w-full h-full object-cover" />
      <div class="absolute inset-0 ${slide.overlayClass} flex flex-col items-center justify-center px-4 text-center text-white"></div>
    `;
    heroSwiperWrapper.appendChild(slideDiv);
  });

  // Make slides clickable
  document.querySelectorAll(".hero-swiper .swiper-slide").forEach(slide => {
    slide.addEventListener("click", () => {
      window.open(slide.dataset.url, "_blank");
    });
  });
}

// ======== Swiper Initialization ========
function initSwiper() {
  new Swiper(".hero-swiper", {
    loop: true,
    autoplay: { delay: 3000, disableOnInteraction: false },
    pagination: { el: ".swiper-pagination", clickable: true },
    effect: "fade",
    speed: 800
  });
}

// ======== Social Links Functions ========
function openWhatsApp() { window.open(socialLinks.whatsapp, "_blank"); }
function openFacebook() { window.open(socialLinks.facebook, "_blank"); }
function openYouTube() { window.open(socialLinks.youtube, "_blank"); }

// ======== Mobile Drawer ========
const menuBtn = document.querySelector("#menu-btn");
const closeBtn = document.querySelector("#close-btn");
const drawer = document.querySelector("#drawer");
const overlay = document.querySelector("#overlay");

menuBtn.addEventListener("click", () => {
  drawer.classList.remove("translate-x-full");
  overlay.classList.remove("hidden");
});
closeBtn.addEventListener("click", () => {
  drawer.classList.add("translate-x-full");
  overlay.classList.add("hidden");
});
overlay.addEventListener("click", () => {
  drawer.classList.add("translate-x-full");
  overlay.classList.add("hidden");
});

// ======== Navbar Scroll Effect ========
const navbar = document.getElementById("navbar");
window.addEventListener("scroll", () => {
  if (window.scrollY > 50) {
    navbar.classList.add("bg-white", "shadow-md");
    navbar.classList.remove("bg-transparent");
    navbar.querySelector("a").classList.remove("text-white");
    navbar.querySelector("a").classList.add("text-blue-700");
    menuBtn.querySelectorAll("span").forEach(span => span.classList.add("bg-blue-700"));
  } else {
    navbar.classList.remove("bg-white", "shadow-md");
    navbar.classList.add("bg-transparent");
    navbar.querySelector("a").classList.add("text-white");
    navbar.querySelector("a").classList.remove("text-blue-700");
    menuBtn.querySelectorAll("span").forEach(span => span.classList.remove("bg-blue-700"));
  }
});

// ======== Initialize Everything ========
function init() {
  generateHeroSlides();
  initSwiper();
  generateCards(coursesContainer, admissionCourses);
  generateCards(academicCoursesContainer, academicCourses);
}
init();
// ======== End of Script ========