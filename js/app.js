const title = new SplitType('.title');
const tl = gsap.timeline();

tl.from('.container', {duration: .3, opacity: 0, y: -100, ease: 'power1.in'});
tl.from('.container__item--image', {duration: .3, opacity: 0, ease: 'power1.in'});
tl.from('.char', {duration: .1, opacity: 0, x: 50, ease: 'power1.in', stagger: .1});
tl.from('.text', {duration: .3, opacity: 0, x: 50, ease: 'power1.in'});
tl.from('.stats__item', {duration: .3, opacity: 0, x: 50, ease: 'power1.in', stagger: .3});
tl.from('.attribution', {duration: .3, opacity: 0, y: 50, ease: 'power1.in'});