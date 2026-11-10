import { useState } from "react";
import "../styles/Contact.css";

const Contact = () => {

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });

  const [sent, setSent] = useState(false);


  const handleChange = (e) => {

    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });

  };


  const handleSubmit = (e) => {

    e.preventDefault();

    console.log("Contact Message:", formData);
    alert("Name: " + formData.name + "\nEmail: " + formData.email + "\nMessage: " + formData.message);
    setSent(true);

  };


  return (

    <div className="contact-page">

      <section className="contact-header">

        <p>WE WOULD LOVE TO HEAR FROM YOU</p>

        <h1>Get In Touch</h1>

        <span>
          Have a question? We are here to help.
        </span>

      </section>


      <section className="container contact-content">

        <div className="row g-5">

          <div className="col-lg-4">

            <div className="contact-information">

              <p className="small-heading">CONTACT DETAILS</p>

              <h2>Let's Start a Conversation</h2>

              <p className="contact-description">
                Whether you have questions about our
                classes or the application process,
                feel free to reach out.
              </p>


              <div className="contact-detail">

                <span>✉</span>

                <div>
                  <h5>Email</h5>
                  <p>info@velvetpointe.com</p>
                </div>

              </div>


              <div className="contact-detail">

                <span>⌖</span>

                <div>
                  <h5>Location</h5>
                  <p>Beirut, Lebanon</p>
                </div>

              </div>


              <div className="contact-detail">

                <span>◷</span>

                <div>
                  <h5>Working Hours</h5>
                  <p>Monday – Thursday</p>
                </div>

              </div>

            </div>

          </div>

          <div className="col-lg-8">

            <div className="contact-form-card">

              {sent ? (

                <div className="contact-success">

                  <h2>Thank You!</h2>

                  <p>
                    Your message has been received.
                    We appreciate you reaching out to us.
                  </p>

                  <button
                    className="contact-button"
                    onClick={() => {
                      setSent(false);
                      setFormData({
                        name: "",
                        email: "",
                        message: ""
                      });
                    }}
                  >
                    Send Another Message
                  </button>

                </div>

              ) : (

                <>

                  <h2>Send Us a Message</h2>

                  <p className="form-intro">
                    Fill out the form below and let us know
                    how we can assist you.
                  </p>


                  <form onSubmit={handleSubmit}>

                    <div className="mb-4">

                      <label className="form-label">
                        Full Name *
                      </label>

                      <input
                        type="text"
                        name="name"
                        className="form-control"
                        placeholder="Enter your name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                      />

                    </div>


                    <div className="mb-4">

                      <label className="form-label">
                        Email Address *
                      </label>

                      <input
                        type="email"
                        name="email"
                        className="form-control"
                        placeholder="Enter your email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                      />

                    </div>


                    <div className="mb-4">

                      <label className="form-label">
                        Your Message *
                      </label>

                      <textarea
                        name="message"
                        className="form-control"
                        rows="6"
                        placeholder="Write your message here..."
                        value={formData.message}
                        onChange={handleChange}
                        required
                      />

                    </div>


                    <button
                      type="submit"
                      className="contact-button"
                    >
                      Send Message
                    </button>

                  </form>

                </>

              )}

            </div>

          </div>

        </div>

      </section>

    </div>

  );

};

export default Contact;