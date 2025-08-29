// Global variables
const coursesContainer = document.getElementById("courses-container");
const heroSwiperWrapper = document.querySelector(".hero-swiper .swiper-wrapper");
let socialLinks = {};

// Load JSON data
async function loadJSON(url) {
    const res = await fetch(url);
    return await res.json();
}

// Load all dynamic content from single JSON
async function loadData() {
    const data = await loadJSON('data.json');

    // Social links
    socialLinks = data.social;
    document.querySelectorAll('.desktop-facebook').forEach(a => a.href = socialLinks.facebook);
    document.querySelectorAll('.desktop-whatsapp').forEach(a => a.href = socialLinks.whatsapp);

    // Courses
    coursesContainer.innerHTML = "";
    data.courses.forEach(course => {
        const courseCard = document.createElement("div");
        courseCard.className = "bg-white flex flex-col gap-5 rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-500 border-2 border-transparent hover:border-blue-600 group cursor-pointer";
        courseCard.innerHTML = `
            <div class="mx-auto p-5 rounded-full w-fit transition-transform duration-500 group-hover:scale-110">
              <img src="${course.image}" alt="${course.title}" class="w-20 h-20 object-contain transition-transform duration-300 group-hover:rotate-6">
            </div>
            <h4 class="text-xl font-bold text-blue-700 group-hover:text-blue-900 text-center transition-colors duration-300">${course.title}</h4>
            <p class="text-gray-600 text-center text-sm md:text-base leading-relaxed group-hover:text-gray-700 flex-grow">${course.description}</p>
            <a href="${course.link}" target="_blank">
              <button class="mt-3 w-full bg-blue-600 hover:bg-blue-700 text-white text-sm md:text-base font-medium py-3 rounded-lg transition-all duration-300 hover:scale-105 hover:shadow-lg">${course.buttonText}</button>
            </a>
        `;
        coursesContainer.appendChild(courseCard);
    });

    // Hero slides
    heroSwiperWrapper.innerHTML = "";
    data.slides.forEach(slide => {
        const slideDiv = document.createElement("div");
        slideDiv.className = "swiper-slide relative w-full h-[60vh] md:h-screen cursor-pointer";
        slideDiv.dataset.url = slide.url;
        slideDiv.innerHTML = `
            <img src="${slide.image}" alt="${slide.alt}" class="w-full h-full object-cover" />
            <div class="absolute inset-0 ${slide.overlayClass} flex flex-col items-center justify-center px-4 text-center text-white"></div>
        `;
        heroSwiperWrapper.appendChild(slideDiv);
    });

    makeSlidesClickable(".hero-swiper");
}

// Make slides clickable
function makeSlidesClickable(swiperSelector, newTab = false) {
    const slides = document.querySelectorAll(`${swiperSelector} .swiper-slide`);
    slides.forEach(slide => {
        const url = slide.dataset.url;
        if(url) slide.addEventListener("click", () => window.open(url, newTab ? "_blank" : "_self"));
    });
}

// Initialize Swiper
function initSwiper() {
    new Swiper(".hero-swiper", {
        loop: true,
        autoplay: { delay: 3000, disableOnInteraction: false },
        pagination: { el: ".swiper-pagination", clickable: true },
        effect: "fade",
        speed: 800
    });
}

// Redirect functions
function openWhatsApp(){ window.open(socialLinks.whatsapp,"_blank"); }
function openFacebook(){ window.open(socialLinks.facebook,"_blank"); }
function openYouTube(){ window.open(socialLinks.youtube,"_blank"); }

// Initialize everything
async function init() {
    await loadData();
    initSwiper();
}

init();
