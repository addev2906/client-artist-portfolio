const observer = new IntersectionObserver((entries, observer) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      const section = entry.target;
      section.classList.remove("hidden"); 

      const heading = section.querySelector(".header.animate");
      const paragraph = section.querySelector(".content.animate");
      const image = section.querySelector(".image.animate");


      gsap.from(heading, { y: -100, opacity: 0, duration: 0.5 });
      gsap.from(paragraph, { x: -50, opacity: 0, duration: 0.5, delay: 0.3 });
      gsap.from(image, { scale: 0.8, opacity: 0, duration: 0.5, delay: 0.6 });

    }
    else{
      entry.target.classList.add("hidden"); 
    }
  });
}, {
  threshold: 0.9 // Only when section is fully visible
});

// Observe all sections
document.querySelectorAll("section").forEach(section => {
  observer.observe(section);
});