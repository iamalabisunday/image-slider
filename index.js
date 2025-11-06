"use strict";

const buttons = document.querySelectorAll(".buttons a");
const slides = document.querySelectorAll(".slide");

// Make first image visible at start
slides[0].classList.add("active");

// Track current visible image
let current = 0;

// Attach click handlers to all buttons
buttons.forEach((btn, index) => {
  btn.addEventListener("click", (e) => {
    e.preventDefault();
    // Avoid redundant clicks
    if (index === current) return;

    // Remove active button state
    buttons.forEach((b) => b.classList.remove("active"));
    // Add active button state to clicked button
    btn.classList.add("active");

    // Slide out current image
    const currentSlide = slides[current];
    currentSlide.classList.remove("slideIn");
    currentSlide.classList.add("slideOut");

    // When the outgoing animation ends
    currentSlide.addEventListener(
      "animationend",
      () => {
        currentSlide.classList.remove("active", "slideOut");
      },
      { once: true }
    );

    // Slide in the new image
    const nextSlide = slides[index];
    nextSlide.classList.add("active", "slideIn");

    // Update current index
    current = index;
  });
});
