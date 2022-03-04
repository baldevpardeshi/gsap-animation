TweenMax.fromTo(
  '.sun-light',
  1.5,
  {
    scale: 0.9,
    transformOrigin: 'center center',
  },
  {
    scale: 1.1,
    repeat: -1,
    yoyo: true,
    ease: Power1.easeInOut,
  }
);

const planeAnimationTime = 4.47;
TweenMax.to(
  '#plane',
  planeAnimationTime,
  {
    yPercent: 20,
    repeat: -1,
    yoyo: true,
    ease: Back.easeInOut.config(5),
  }
);
TweenMax.to(
  '#tracks',
  planeAnimationTime,
  {
    y: -100,
    repeat: -1,
    yoyo: true,
    ease: Back.easeInOut.config(3),
  }
);
[...document.querySelectorAll('.track')].map((track, i) => {
  const trackLength = track.getTotalLength();

  TweenMax.set(track, {
    'stroke-dasharray': trackLength,
  });
  TweenMax.fromTo(
    track,
    planeAnimationTime / 5,
    {
      'stroke-dashoffset': trackLength * .7,
    },
    {
      'stroke-dashoffset': 0,
      delay: i * planeAnimationTime / 8,
      repeat: -1,
      yoyo: true,
      ease: Power1.easeInOut,
    }
  );
});
gsap.fromTo(".cloud-one", {x:2000,}, {x:-300, duration:11, scale:1, ease:"linear", repeat:-1});
gsap.fromTo(".cloud-two", {x:2000,}, {x:-300, duration:8, scale:1, ease:"linear", repeat:-1});
gsap.fromTo(".cloud-three", {x:2000,}, {x:-300, duration:9, scale:1, ease:"linear", repeat:-1 });
gsap.fromTo(".cloud-four", {x:3000,}, {x:-300, duration:14, scale:1, ease:"linear", repeat:-1});
gsap.fromTo(".cloud-five", {x:3000,}, {x:-300, duration:10, scale:1, ease:"linear", repeat:-1});
gsap.fromTo(".cloud-six", {x:3000,}, {x:-300, duration:12, scale:1, ease:"linear", repeat:-1 });
