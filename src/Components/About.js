import gsap, { Bounce, Power3 } from "gsap";
import { useEffect } from "react";

import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);


const About = () => {


  useEffect(() => {
    gsap.fromTo(
      ".text2",
      {
        x: -100,
        opacity: 0,
        ease: Power3.easeOut,
      },
      {
        x: 0,
        duration: 1,
        opacity: 1,
        scrollTrigger: {
          trigger: ".text2",
          start: "top bottom",
          end: "20% 20%",
        },
      }
    );

    gsap.fromTo(
      ".umbul",
      {
        scale: 0,
        opacity: 0,
        ease: Bounce.easeOut,
      },
      {
        scale: 1,
        duration: 1,
        opacity: 1,
        scrollTrigger: {
          trigger: ".umbul",
          start: "top bottom",
          end: "20% 20%",
        },
      }
    );
  }, []);

  return (
    <section className="container">
      <div className="about_title">
        <h1>ОБО МНЕ</h1>
      </div>
      <div className="about" id="about">
        <div className="about_text">
          <h1 className="text2">
            <span>"</span>Привет! Меня зовут Умбула. Я сертифицированный мастер
            бровист. Обучалась у профессионалов в России, проходила множество
            повышений и безумно люблю свое дело. Преподаю базовый курс с нуля и
            повышение квалификации. Также я являюсь мастером перманентного
            макияжа бровей. Провожу бесплатную консультацию перед процедурой,
            даю рекомендации и памятку по уходу за бровями каждому своему гостю
            <svg
              width="26"
              height="20"
              viewBox="0 0 26 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M24.8866 2.92205C21.2966 -2.57772 12.8319 0.370443 11.9624 6.10437C6.69181 2.45631 -1.50151 7.61218 1.06568 14.1243C3.31618 19.8318 12.6569 19.9167 17.7761 19.818C17.928 19.834 18.0882 19.788 18.2289 19.647C22.0766 15.779 28.6217 8.64405 24.8869 2.92221L24.8866 2.92205ZM17.5527 18.657C12.9455 18.7403 7.04285 18.6296 3.44626 15.4735C1.22354 13.5225 1.34035 10.1114 3.2189 7.98994C5.47965 5.43754 9.68227 5.37511 12.0654 7.70908C12.0831 7.72624 12.1012 7.74204 12.1209 7.75631C12.3331 7.94387 12.5841 7.93481 12.7801 7.82146C12.906 7.76479 13.0067 7.66532 13.0536 7.52268C13.1032 7.41261 13.118 7.2902 13.0855 7.16876C12.9949 0.425925 23.9181 -1.22179 24.7569 5.92545C25.3109 10.6466 20.6826 15.5048 17.5526 18.6571L17.5527 18.657Z"
                fill="#FF005C"
                fill-opacity="0.53"
              />
            </svg>
            <span> "</span>
          </h1>
        </div>
        <div className="about_image">
          <img src="img/umbul3.png" className="umbul" alt="" />
        </div>
      </div>
    </section>
  );
};

export default About;
