import { AiFillInstagram, AiOutlineWhatsApp } from "react-icons/ai";

const Home = () => {
  return (
    <section className="container">
      <div className="home" id="home">
        <div className="line"></div>
        <div className="home_left">
          <h1>
            Bloom Your Eyebrows & <span> Stay Beautiful</span>
          </h1>

          <p>
            Уходовые процедуры за бровями Оформление, окрашивание Долговременная
            укладка Перманентный макияж бровей Базовый курс «Мастер Бровист»
            Курсы повышения квалификации
          </p>

          <div className="social">
            <a href="#1" className="btn">
              КОНТАКТЫ
            </a>
            <a href="https://instagram.com/bloomybrowsbaku" className="insta">
              <AiFillInstagram />
            </a>

            <a href="http://wa.me/79959270829" className="wp">
              <AiOutlineWhatsApp />
            </a>
          </div>
        </div>

        <div className="home_right">
          <img src="img/model7.jpg" className="model" alt="model" />
        </div>
      </div>
    </section>
  );
};

export default Home;
