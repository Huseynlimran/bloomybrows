import gsap, { Power3 } from "gsap";
import { useEffect, useRef } from "react";

import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Do = () => {
  const imgRef = useRef(null);

  useEffect(() => {
    const el = imgRef.current;
    gsap.fromTo(
      el,
      {
        y: -100,
        opacity: 0,
        ease: Power3.easeOut,
      },
      {
        y: 0,
        duration: 2,
        opacity: 1,
        scrollTrigger: {
          trigger: el,
          start: "top bottom",
          end: "20% 20%",
        },
      }
    );
  }, []);

  return (
    <section className="container">
      <div className="do" id="do">
        <div className="do_title">
          <h1>РАБОТЫ</h1>
        </div>

        <div className="do_items" ref={imgRef}>
          <img src="img/model1.jpg" alt="" />
          <img src="img/model2.jpg" alt="" />
          <img src="img/model3.jpg" alt="" />
          <img src="img/model5.jpg" className="img3" alt="" />
          <img src="img/model4.jpg" className="img3 img4" alt="" />
        </div>
      </div>
    </section>
  );
};

export default Do;
