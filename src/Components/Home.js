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
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. At
            sapiente dolor culpa voluptates totam quisquam, numquam perferendis!
            Iste, facere voluptates?
          </p>

          <div className="social">
            <a href="#1" className="btn">
              Contact
            </a>
            <a href="https://instagram.com/bloomybrowsbaku" className="insta">
              <AiFillInstagram />
            </a>

            <a href="http://wa.me/79124034083" className="wp">
              <AiOutlineWhatsApp />
            </a>
          </div>
        </div>

        <div className="home_right">
          <img src="img/model.png" className="model" alt="model" />
        </div>
      </div>
    </section>
  );
};

export default Home;
