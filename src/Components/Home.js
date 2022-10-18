const Home = () => {
  return (
    <section className="container">
      <div className="home">
        <div className="home_left">
          <h1>Lorem ipsum dolor sit <span> amet consectetur.</span></h1>

          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. At
            sapiente dolor culpa voluptates totam quisquam, numquam perferendis!
            Iste, facere voluptates?
          </p>

          <a href="#1" className="btn">Contact</a>
        </div>

        <div className="home_right">
            <img src="img/model.png" className="model" alt="model" />

        </div>
      </div>
    </section>
  );
};

export default Home;
