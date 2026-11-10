
import { Link } from "react-router-dom";
import "../styles/About.css";
import better from "../assests/better.png"; 

const About = () => {

  return (

    <div className="about-page">

      <section className="about-header">

        <p>GET TO KNOW US</p>

        <h1>Our Story & Passion</h1>

        <span>
          A place where movement becomes art.
        </span>

      </section>


      <section className="container about-story">

        <div className="row align-items-center g-5">

          <div className="col-lg-6">

            <img
              src={better}
              alt="Velvet Pointe ballet"
              className="about-image"
            />

          </div>


          <div className="col-lg-6">

            <p className="small-heading">OUR STORY</p>

            <h2>A Love for the Art of Ballet</h2>

            <p>
              Velvet Pointe Academy is a classical ballet
              school based in Beirut, dedicated to sharing
              the beauty and discipline of ballet.
            </p>

            <p>
              We aim to create a welcoming environment
              where dancers can develop their skills,
              express themselves and grow in confidence.
            </p>

            <Link to="/classes" className="outline-button">
              Discover Our Classes
            </Link>

          </div>

        </div>

      </section>


      <section className="about-mission">

        <div className="container text-center">

          <p className="small-heading">WHAT WE BELIEVE IN</p>

          <h2>Our Mission</h2>

          <p className="mission-description">
            Our mission is to provide quality ballet education
            while encouraging creativity, discipline,
            confidence and artistic expression.
          </p>

        </div>

      </section>


      <section className="container about-values">

        <div className="text-center mb-5">

          <p className="small-heading">OUR FOUNDATION</p>

          <h2>Our Values</h2>

        </div>


        <div className="row g-4">

          <div className="col-md-4">

            <div className="value-card">

              <h3>Discipline</h3>

              <p>
                Encouraging dedication, consistency
                and commitment to learning.
              </p>

            </div>

          </div>


          <div className="col-md-4">

            <div className="value-card">

              <h3>Creativity</h3>

              <p>
                Giving every dancer the freedom
                to express themselves through movement.
              </p>

            </div>

          </div>


          <div className="col-md-4">

            <div className="value-card">

              <h3>Growth</h3>

              <p>
                Supporting every dancer throughout
                their individual ballet journey.
              </p>

            </div>

          </div>

        </div>

      </section>

    </div>

  );

};

export default About;