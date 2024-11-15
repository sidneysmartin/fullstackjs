gsap.set(".box", {
  opacity: 0,
  background: "#7fff00",
});

gsap.to(".box", {
  opacity: 1,
  background: "#ff00ff",
  duration: 3,
  y: 200,
  repeat: -1,
  yoyo: true,
});
