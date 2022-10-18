const sg = gsap.timeline({ default: { ease: "power1.out" } });

sg.to(".text", { rotateX: "0deg", duration: 0.2, opacity: 0.7, stagger: 0.1 });

sg.to(".slider", { y: "-100%", duration: 1.5, delay: 0.5 });