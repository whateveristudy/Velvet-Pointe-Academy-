
import { Link } from "react-router-dom";

import beginnerImage from "../assests/image1.jpg";
import intermediateImage from "../assests/image2.jpg";
import advancedImage from "../assests/image3.jpg";
import adultImage from "../assests/image4.jpg";

import "../styles/Classes.css";

const Classes = () => {
 const classes = [
  {
    id: "beginner",
    title: "Beginner Ballet",
    level: "Level 1 of 3",
    dots: 1,
    age: "8+",
    length: "60 min",
    frequency: "2 classes",
    description:
      "Begin your ballet journey in a welcoming environment. Learn the fundamentals of posture, barre work, and basic positions at a gentle, encouraging pace.",
    image: beginnerImage,
  },
  {
    id: "intermediate",
    title: "Intermediate Ballet",
    level: "Level 2 of 3",
    dots: 2,
    age: "10+",
    length: "75 min",
    frequency: "3 classes",
    description:
      "Take your technique further with more challenging combinations, improved posture, and refined movements. Perfect for dancers who already have a foundation in ballet.",
    image: intermediateImage,
  },
  {
    id: "advanced",
    title: "Advanced Ballet",
    level: "Level 3 of 3",
    dots: 3,
    age: "12+",
    length: "90 min",
    frequency: "4 classes",
    description:
      "Develop your artistry, strength, and precision through advanced combinations, pointe work, and expressive movement. Designed for experienced dancers ready to refine their technique.",
    image: advancedImage,
  },
  {
    id: "adults",
    title: "Adult Ballet",
    level: "For adults, all levels",
    dots: 0,
    age: "18+",
    length: "60 min",
    frequency: "1 class",
    description:
      "A relaxed, welcoming class for adults, whether you are trying ballet for the first time or returning after years away. Build strength, grace, and confidence at your own pace.",
    image: adultImage,
  },
];

  return (
    <div className="classes-page">


      <section className="classes-hero">
        <div className="classes-wrap classes-hero-content">

          <div className="hero-heading">
            <p className="hero-label">Velvet Pointe Academy</p>
            <h1>Our Classes</h1>
          </div>

          <div className="hero-details">
            <p className="hero-description">
              Discover the art of ballet through movement, discipline, and
              expression. Find the class that suits your journey.
            </p>

            <div className="class-level-links">
              <a href="#beginner">Beginner</a>
              <a href="#intermediate">Intermediate</a>
              <a href="#advanced">Advanced</a>
              <a href="#adults">Adults</a>
            </div>
          </div>

        </div>
      </section>
      <section className="classes-list">
        <div className="classes-wrap">

          {classes.map((item, index) => (
            <article className="class-row" id={item.id} key={item.id}>

              <div
                className="class-photo"
                style={{ backgroundImage: `url(${item.image})` }}
                role="img"
                aria-label={item.title}
              >
                <span>{item.title}</span>
              </div>

              <div className="class-copy">

                <div className="class-stage">
                  {item.dots > 0 && (
                    <div className="stage-dots">
                      {[1, 2, 3].map((dot) => (
                        <i
                          key={dot}
                          className={dot <= item.dots ? "active" : ""}
                        ></i>
                      ))}
                    </div>
                  )}

                  <span>{item.level}</span>
                </div>

                <h2>{item.title}</h2>

                <p>{item.description}</p>
<div className="class-details">
  <div>
    <span>Ages</span>
    <strong>{item.age}</strong>
  </div>

  <div>
    <span>Length</span>
    <strong>{item.length}</strong>
  </div>

  <div>
    <span>Per week</span>
    <strong>{item.frequency}</strong>
  </div>
</div>
                <div className="class-actions">
                  <Link
                    to={`/apply/${encodeURIComponent(item.title)}`}
                    className="apply-button"
                  >
                    Apply for this class
                  </Link>
                </div>

              </div>
            </article>
          ))}

        </div>
      </section>

      <section className="classes-guide">
        <div className="classes-wrap">
          <h2>Not sure where to begin?</h2>

          <p>
            Get in touch and our teachers will help you choose the class
            that fits you best.
          </p>

          <Link to="/contact" className="guide-button">
            Contact us
          </Link>
        </div>
      </section>

    </div>
  );
};

export default Classes;