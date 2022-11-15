import { AiFillInstagram, AiOutlineWhatsApp } from "react-icons/ai";
import gsap, { Power3 } from "gsap";
import { useEffect, useRef } from "react";

const Home = () => {
  const photo = useRef(null);

  useEffect(() => {
    const el = photo.current;

    gsap.to(el, {
      "clip-path": "polygon(0 0, 100% 0, 100% 100%, 0 100%)",
      scale: 1,
      opacity: 1,
      duration: 2,
      delay: 2.9,
    });

    gsap.to(".text_body", {
      "clip-path": "polygon(0 0, 100% 0, 100% 100%, 0 100%)",
      opacity: 1,
      duration: 2,
      delay: 2.9,
    });

    gsap.to(".lineAni", {
      "clip-path": "polygon(0 0, 100% 0, 100% 100%, 0 100%)",
      opacity: 1,
      duration: 2,
      delay: 2.9,
    });

    gsap.fromTo(
      ".text_body2",
      {
        x: -100,
        opacity: 0,
        ease: Power3.easeOut,
      },
      {
        x: 0,
        duration: 1,
        opacity: 1,
        delay: 2.9,
      }
    );

    gsap.fromTo(
      ".video",
      {
        opacity: 0,
        ease: Power3.easeOut,
      },
      {
        duration: 5,
        opacity: 1,
        delay: 3,
      }
    );
  }, []);

  return (
    <div className="main">
      <video autoPlay loop  muted className="video">
        <source src="img/browvideo.mp4"  />
      </video>
      <div className="home-bg">
        <section className="container">
          <div className="home">
            {/* <div className="line lineAni"></div> */}
            <div className="home_left">
              <h1 className="text_body">
                Bloom Your Eyebrows & <span> Stay Beautiful</span>
              </h1>

              <p className="text_body">
                Уходовые процедуры за бровями Оформление, окрашивание
                Долговременная укладка Перманентный макияж бровей Базовый курс
                «Мастер Бровист» Курсы повышения квалификации
              </p>

              <div className="social">
                <a href="http://wa.me/79959270829" className="btn text_body2">
                  КОНТАКТЫ
                </a>
                <a
                  href="https://instagram.com/bloomybrowsbaku"
                  className="insta text_body2"
                >
                  <AiFillInstagram />
                </a>

                <a href="http://wa.me/79959270829" className="wp text_body2">
                  <AiOutlineWhatsApp />
                </a>
              </div>
            </div>

            {/* <div className="home_right">
              <img
                src="img/model7.jpg"
                ref={photo}
                className="model"
                alt="model"
              />
            </div> */}
          </div>
        </section>
      </div>
    </div>
  );
};

export default Home;
