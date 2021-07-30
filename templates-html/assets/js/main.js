gsap.registerPlugin(ScrollTrigger);
$(document).ready(function () {
    $("[data-toggle=tooltip").tooltip();
    gsap.from('.deskripsi-ku', 1, {
        delay: 1.65,
        opacity: 0,
        x: -20,
        ease: Power4.easeInOut
    })

    gsap.from('.photo', 1, {
        delay: 1.2,
        width: '0px',
        ease: Expo.easeInOut
    })

    gsap.to('.first', 1.5, {
        delay: .2,
        left: '-100%',
        ease: Expo.easeInOut
    })

    gsap.to('.second', 1.5, {
        delay: .4,
        left: '-100%',
        ease: Expo.easeInOut
    })

    gsap.to('.third', 1.5, {
        delay: .6,
        left: '-100%',
        ease: Expo.easeInOut
    })

    gsap.to('#works', {
        scrollTrigger: {
            trigger: "#works",
            start: "20px 80%",
            end: "0px",
            toggleActions: "play none none none"
        },
        width: "100%",
        duration: 1,
    })

    gsap.from('.work-item', {
        scrollTrigger: {
            trigger: "#works",
            start: "20px 80%",
            end: "0px",
            toggleActions: "play none none none"
        },
        delay: .6,
        opacity: 0,
        duration: 1,
    })
    gsap.from('.rc-work', {
        scrollTrigger: {
            trigger: "#works",
            start: "20px 80%",
            end: "0px",
            toggleActions: "play none none none"
        },
        delay: .6,
        opacity: 0,
        duration: 1,
    })
});