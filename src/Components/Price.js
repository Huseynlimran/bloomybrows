import gsap, { Power3 } from "gsap";
import ScrollTrigger from 'gsap/ScrollTrigger'
import { useEffect} from "react";


gsap.registerPlugin(ScrollTrigger);


const Price = () => {

  useEffect(() => {
    gsap.fromTo(
      ".price_item",
      {
        x: -100,
        opacity: 0,
        ease: Power3.easeOut,
      },
      {
        x: 0,
        duration: 1,
        opacity: 1,
        stagger:.3,
        scrollTrigger: {
          trigger: ".price_item",
          start: "top right",
          end: "20% 20%",
        },
      }
    );
  }, []);


  return (
    <section className="container">
      <div className="price" id="price">
        <div className="price_title">
          <h1>ПРАЙС</h1>
        </div>
        <div className="price_items">
          <div className="price_item">
            <h1>Оформление</h1>
            <h2>500<span>₽</span></h2>
          </div>
          <div className="price_item">
            <h1>Окрашивание </h1>
            <h2>500<span>₽</span></h2>
          </div>
          <div className="price_item">
            <h1>Оформление <span>&</span> окрашивание </h1>
            <h2>900<span>₽</span></h2>
          </div>
          <div className="price_item">
            <h1>Долговременная укладка </h1>
            <h2>1000<span>₽</span></h2>
          </div>
          <div className="price_item">
            <h1>Долговременная укладка <span>&</span> оформление <span>&</span> окрашивание </h1>
            <h2>1300<span>₽</span></h2>
          </div>
          <div className="price_item">
            <h1>Ботокс «счастье для бровей» </h1>
            <h2> 300<span>₽</span></h2>
          </div>
          <div className="price_item">
            <h1>Перманентный макияж бровей</h1>
            <h2>3000<span>₽</span></h2>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Price;
