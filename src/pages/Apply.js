import { useState } from "react";
import { useParams, Link } from "react-router-dom";
import "../styles/Apply.css";

const Apply = () => {

  const { className } = useParams();

  const [formData, setFormData] = useState({

    name: "",
    email: "",
    phone: "",
    age: "",
    className: className || "",
    experience: "",
    background: ""

  });

  const [submitted, setSubmitted] = useState(false);


  const handleChange = (e) => {

    setFormData({

      ...formData,

      [e.target.name]: e.target.value

    });

  };


  const handleSubmit = (e) => {

    e.preventDefault();

    console.log("Application Submitted:", formData);

    setSubmitted(true);

    if(formData.age < 8 || formData.age > 100) {
      alert("Age must be between 8 and 100.");
      setSubmitted(false);
      return;
    }
  };


  if (submitted) {

    return (

      <div className="apply-success-container">

        <div className="apply-success-card">

          <div className="success-icon">✓</div>

          <p className="small-heading">APPLICATION COMPLETE</p>

          <h1>Thank You!</h1>

          <h3>Your application has been received.</h3>

          <p>
            Thank you for your interest in Velvet Pointe Academy.
            We appreciate you taking the time to apply.
          </p>

          <p>
            Our team will contact you regarding the next steps.
          </p>

          <Link to="/" className="apply-submit-button">
            Return to Homepage
          </Link>

        </div>

      </div>

    );

  }


  return (

    <div className="apply-page">

      <div className="container">

        <div className="apply-card">

          <div className="apply-heading">

            <p className="small-heading">
              YOUR JOURNEY STARTS HERE
            </p>

            <h1>Apply for Ballet Classes</h1>

            <p>
              We'd love to welcome you to Velvet Pointe Academy.
              Please complete the application below and
              take your first step into the world of ballet.
            </p>

          </div>


          <form onSubmit={handleSubmit}>

            <div className="apply-section-heading">

              <span>01</span>

              <h3>Personal Information</h3>

            </div>


            <div className="row g-4">

              <div className="col-md-6">

                <label className="form-label">
                  Full Name *
                </label>

                <input
                  type="text"
                  name="name"
                  className="form-control apply-input"
                  placeholder="What's your name?"
                  value={formData.name}
                  onChange={handleChange}
                  required
                />

              </div>


              <div className="col-md-6">

                <label className="form-label">
                  Email Address *
                </label>

                <input
                  type="email"
                  name="email"
                  className="form-control apply-input"
                  placeholder="What's your email?"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />

              </div>


              <div className="col-md-6">

                <label className="form-label">
                  Phone Number *
                </label>

                <input
                  type="tel"
                  name="phone"
                  className="form-control apply-input"
                  placeholder="+961 XX XXX XXX"
                  value={formData.phone}
                  onChange={handleChange}
                  required
                />

              </div>


              <div className="col-md-6">

                <label className="form-label">
                  Age *
                </label>

                <input
                  type="number"
                  name="age"
                  className="form-control apply-input"
                  placeholder="Enter your age"
                  min="3"
                  max="100"
                  value={formData.age}
                  onChange={handleChange}
                  required
                />

              </div>

            </div>

            <div className="apply-section-heading">

              <span>02</span>

              <h3>Class Information</h3>

            </div>


            <div className="row g-4">

              <div className="col-md-6">

                <label className="form-label">
                  Which class are you applying for? *
                </label>

                <select
                  name="className"
                  className="form-select apply-input"
                  value={formData.className}
                  onChange={handleChange}
                  required
                >

                  <option value="">
                    Select a class
                  </option>

                  <option value="Beginner Ballet">
                    Beginner Ballet
                  </option>

                  <option value="Intermediate Ballet">
                    Intermediate Ballet
                  </option>

                  <option value="Advanced Ballet">
                    Advanced Ballet
                  </option>

                  <option value="Adult Ballet">
                    Adult Ballet
                  </option>

                </select>

              </div>


              <div className="col-md-6">

                <label className="form-label">
                  Experience Level *
                </label>

                <select
                  name="experience"
                  className="form-select apply-input"
                  value={formData.experience}
                  onChange={handleChange}
                  required
                >

                  <option value="">
                    Select your experience
                  </option>

                  <option value="No Experience">
                    No Previous Experience
                  </option>

                  <option value="Beginner">
                    Beginner
                  </option>

                  <option value="Intermediate">
                    Intermediate
                  </option>

                  <option value="Advanced">
                    Advanced
                  </option>

                </select>

              </div>

            </div>

            <div className="apply-section-heading">

              <span>03</span>

              <h3>Tell Us About Yourself</h3>

            </div>


            <div className="mb-4">

              <label className="form-label">
                Previous Dance Experience
                <span className="optional-text"> (Optional)</span>
              </label>

              <textarea
                name="background"
                className="form-control apply-input apply-textarea"
                rows="5"
                placeholder="Tell us about your previous dance experience..."
                value={formData.background}
                onChange={handleChange}
              />

            </div>


            <div className="apply-bottom">

              <p>* Required fields</p>

              <button
                type="submit"
                className="apply-submit-button"
              >
                Submit Application
              </button>

              <span>
                We look forward to meeting you!
              </span>

            </div>


          </form>

        </div>

      </div>

    </div>

  );

};

export default Apply;