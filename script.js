// --------------------------------------------------------------
// Global Query Selectors
// --------------------------------------------------------------

const hamburger = document.querySelector("#mobile-menu");
const hamburgerLinks = document.querySelector(".navbar__menu");
const navLogo = document.querySelector("#navbar__logo");

// --------------------------------------------------------------
// Display mobile menu
// --------------------------------------------------------------

const mobileMenu = () => {
  hamburger.classList.toggle("is-active");
  hamburgerLinks.classList.toggle("active");
};

hamburger.addEventListener("click", mobileMenu);

// --------------------------------------------------------------
// Show active menu when scrolling
// --------------------------------------------------------------

const highlightMenu = () => {
  const el = document.querySelector(".highlight");
  const homeMenu = document.querySelector("#home-page");
  const aboutMenu = document.querySelector("#about-page");
  const servicesMenu = document.querySelector("#services-page");
  let scrollPos = window.scrollY;

  const aboutPos = 600;
  const servicesPos = 1400;
  const featuresPos = 2345;

  // Add the 'highlight' class to menu items
  if (window.innerWidth > 960 && scrollPos < aboutPos) {
    homeMenu.classList.add("highlight");
    aboutMenu.classList.remove("highlight");
    return;
  } else if (window.innerWidth > 960 && scrollPos < servicesPos) {
    aboutMenu.classList.add("highlight");
    homeMenu.classList.remove("highlight");
    servicesMenu.classList.remove("highlight");
    return;
  } else if (window.innerWidth > 960 && scrollPos < featuresPos) {
    servicesMenu.classList.add("highlight");
    aboutMenu.classList.remove("highlight");
    return;
  }

  if (el) {
    el.classList.remove("highlight");
  }
};

window.addEventListener("scroll", highlightMenu);
window.addEventListener("click", highlightMenu);

// --------------------------------------------------------------
// Remove menu on mobile when link is clicked
// --------------------------------------------------------------

const hideMobileMenu = () => {
  const active = document.querySelector(".active");
  if (active) {
    hamburger.classList.toggle("is-active");
    hamburgerLinks.classList.remove("active");
  }
};

hamburgerLinks.addEventListener("click", hideMobileMenu);
navLogo.addEventListener("click", hideMobileMenu);
