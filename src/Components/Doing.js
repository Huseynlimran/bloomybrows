import { AiOutlineWhatsApp } from "react-icons/ai";


import gsap  from "gsap";
import { useEffect } from "react";

import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);




const Doing = () => {

  useEffect(() => {
    gsap.fromTo(
      ".box",
      {
        y: -100,
        opacity: 0,
      },
      {
        y: 0,
        duration: 1,
        opacity: 1,
        stagger:.3,
        scrollTrigger: {
          trigger: ".box",
          start: "top right",
          end: "20% 20%",
        },
      }
    );
  }, []);

  return (
    <section className="container">
      <div className="doing" id="doing">
        <div className="doing_title">
          <h1>УСЛУГИ</h1>
        </div>
        <div className="doing_boxes">
          <div className="box">
            <h2>Оформление и окрашивание бровей</h2>
            <p>
              Чистейшая коррекция воском, пинцетом и нитью поможет придать
              красивую форму бровям. Окрашивание хной или краской подчеркнет
              форму бровей и добавит выразительности
            </p>
            <a href="http://wa.me/79959270829" className="wp">
              Contact
              <AiOutlineWhatsApp />
            </a>
            <img src="img/flower.png" className="flower" alt="" />
            <img src="img/flower.png" className="flower1" alt="" />
          </div>

          <div className="box">
            <h2>Ламинирование бровей</h2>
            <p>
              Долговременная укладка бровей способствует поддержке безупречной
              формы в течение нескольких недель, не прикладывая усилий. Эффект
              сохраняется до 2х месяцев
            </p>
            <a href="http://wa.me/79959270829" className="wp">
              Contact
              <AiOutlineWhatsApp />
            </a>
            <img src="img/flower.png" className="flower" alt="" />
            <img src="img/flower.png" className="flower1" alt="" />
          </div>

          <div className="box">
            <h2>Перманентный макияж бровей</h2>
            <p>
              Перманентный макияж позволит придать бровям идеальную форму и
              создать эффект их густоты, поможет избавиться от асимметрии и
              скорректировать цвет, что в итоге позволит сократить время на
              ежедневный макияж
            </p>
            <a href="http://wa.me/79959270829" className="wp">
              Contact
              <AiOutlineWhatsApp />
            </a>
            <img src="img/flower.png" className="flower" alt="" />
            <img src="img/flower.png" className="flower1" alt="" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Doing;
