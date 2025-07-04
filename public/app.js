// document.querySelectorAll("h2").forEach(h2 => {
//   let tl = gsap.timeline({
//     scrollTrigger: {
//       trigger: h2,
//       start: "-50% center",
//       end: "1000% center",
//       scrub: true,
//       markers: true,
//     }
//   });

//   tl.from(h2, {
//     x: -500,
//     opacity: 0,
//     duration: 1.2
//   });
// });

var observer = new IntersectionObserver((entries, observer) => {
  entries.forEach(entry => {
    console.log('Entry:', entry);
    if (entry.isIntersecting) {
      console.log('Intersecting:', entry.target);
    } else {
      console.log('Not intersecting:', entry.target);
    }
  });
}, {
  threshold: 0.1 // trigger when 10% is visible
});
// Observe all <section> elements
document.querySelectorAll('section').forEach(section => {
  observer.observe(section);
});