// from in from to
// from: in from method you do not have to specify the Initial state, (it will figure out by itself)

// gsap.from(".box1", {
//   y: -200,
//   opacity: 0,
//   duration: 2,
//   repeat: -1,
//   yoyo: true,
//   ease: "linear",
// });

// fromTo: In fromTo method you have to specify the default
// value, and also the new animation state.

gsap.fromTo(
  ".box2",
  {
    y: 200,
    opacity: 0,
  },
  {
    opacity: 1,
    y: -200,
    duration: 3,
    repeat: -1,
    yoyo: true,
    ease: "linear",
    borderRadius: "0",
    repeat: -1,
  }
);
