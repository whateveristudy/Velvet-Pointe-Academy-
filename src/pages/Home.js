
import { Link } from "react-router-dom";
import "../styles/Home.css";

const Home = () => {

  return (

    <div className="home-page">

      <section className="home-hero">

        <div className="hero-overlay">

          <p className="hero-label">WELCOME TO</p>

          <h1>Velvet Pointe Academy</h1>

          <p className="hero-description ">
            Discover the beauty of ballet through
            movement, discipline, passion and grace.
          </p>

          <Link to="/classes" className="hero-button">
            Explore Our Classes
          </Link>

        </div>

      </section>

      <section className="home-intro container">

        <p className="small-heading">OUR ACADEMY</p>

        <h2>Where Grace Finds Its Pointe</h2>

        <p>
          At Velvet Pointe Academy, we believe that ballet
          is more than dance. It is an expression of
          creativity, confidence and dedication.

          Whether you are a beginner or an experienced
          dancer, we welcome you to discover your potential.
        </p>

        <Link to="/about" className="outline-button">
          Discover Our Story
        </Link>

      </section>

      <section className="home-features">

        <div className="container">

          <div className="features-heading">

            <p className="small-heading">THE VELVET EXPERIENCE</p>

            <h2>More Than Just Dance</h2>

          </div>


          <div className="row g-4">

            <div className="col-md-4">

              <div className="feature-card">

                <span>01</span>

                <h3>Professional Guidance</h3>

                <p>
                  Develop your technique and confidence
                  with dedicated ballet instruction.
                </p>

              </div>

            </div>


            <div className="col-md-4">

              <div className="feature-card">

                <span>02</span>

                <h3>Every Experience Level</h3>

                <p>
                  From your very first ballet class
                  to advanced artistic training.
                </p>

              </div>

            </div>


            <div className="col-md-4">

              <div className="feature-card">

                <span>03</span>

                <h3>Passion & Creativity</h3>

                <p>
                  Express yourself through movement,
                  creativity and the art of dance.
                </p>

              </div>

            </div>

          </div>

        </div>

      </section>

      <section className="home-cta">

        <p className="small-heading">YOUR JOURNEY STARTS HERE</p>

        <h2>Take Your First Step</h2>

        <p>
          Discover the dancer within you.
          We would love to welcome you to our academy.
        </p>

        <Link to="/apply" className="hero-button">
          Apply Today
        </Link>

      </section>

    </div>

  );

};

export default Home;