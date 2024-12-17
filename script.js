document.addEventListener("DOMContentLoaded", function () {
  const newsTicker = document.querySelector(".news-ticker");
  gsap.fromTo(newsTicker, { opacity: 0 }, { opacity: 1, duration: 1 });
});


document.addEventListener("DOMContentLoaded", function () {
  // Select the header element
  const header = document.querySelector(".header");

  // Use GSAP to create a fade-in effect with a delay
  gsap.fromTo(
    header,
    { opacity: 0 }, // Starting state
    { opacity: 1, duration: 1, delay: 0.5 } // Ending state with delay
  );
});


document.addEventListener("DOMContentLoaded", function () {
  // Select the background video element
  const backgroundVideo = document.querySelector(".background-video");

  // Use GSAP to create a fade-in-up effect
  gsap.fromTo(
    backgroundVideo,
    { opacity: 0, y: 50 }, // Starting state (invisible and moved down)
    { opacity: 1, y: 0, duration: 1, delay: 1 } // Ending state (visible and in place)
  );
});

