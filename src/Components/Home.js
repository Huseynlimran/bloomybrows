import { AiFillInstagram, AiOutlineWhatsApp } from "react-icons/ai";
import gsap, { Power3,Bounce } from "gsap";
import { useEffect , useRef } from "react";



const Home = () => {


  const photo = useRef(null)


  useEffect(() => {

    const el = photo.current;

    gsap.fromTo(el,{
      scale : 0,
      opacity: 0,
      ease:Bounce.easeOut,
    }, 
    {
      scale: 1, duration: 1,opacity: 1,delay:2.9
    })

    gsap.fromTo(".text_body",{
      x : -100,
      opacity: 0,
      ease:Power3.easeOut
    }, 
    {
      x: 0, duration: 1,opacity: 1,delay:2.9
    })

    gsap.fromTo(".lineAni",{
      y : -100,
      opacity: 0,
      ease:Power3.easeOut
    }, 
    {
      y: 0, duration: 1,opacity: 1,delay:2.9
    })
    

  },[])


  return (
    <section className="container">
      <div className="home">
          <div className="line lineAni"></div>
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
              <a href="http://wa.me/79959270829" className="btn text_body">
                КОНТАКТЫ
              </a>
              <a href="https://instagram.com/bloomybrowsbaku" className="insta text_body">
                <AiFillInstagram />
              </a>

              <a href="http://wa.me/79959270829" className="wp text_body">
                <AiOutlineWhatsApp />
              </a>
            </div>
          </div>

          <div className="home_right">
            <img src="img/model7.jpg" ref={photo} className="model" alt="model" />
          </div>
      </div>
    </section>
  );
};

export default Home;
