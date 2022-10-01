import React, { useState } from "react";
import contactUs from "../../Image/contact-us.jpg";

function Contact(props) {
  const [username, setUsername] = useState("test");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

function handleSubmit() {
    console.log(username)
    console.log(email)
    console.log(message)
  }

  return (
    <>
      {/* form contact us */}
      <section>
        <div className="container pt-5">
          <div className="card shadow">
            <div className="card-body ">
              <div className="row">
                <div className="col-md-6 text-white bg-dark rounded-3">
                  <h3 className="text-center">Contact Us</h3>
                  <hr />
                  <div className="form-group">
                    <label className="mb-1">User Name</label>
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Enter your username"
                      onChange={(e) => {
                        setUsername(e.target.value);
                      }}
                    />
                  </div>
                  <div className="form-group py-3">
                    <label className="mb-1">Email</label>
                    <input
                      type="text"
                      className="form-control"
                      placeholder="example123@gmail.com"
                      onChange={(e) => {
                        setEmail(e.target.value);
                      }}
                    />
                  </div>
                  <div className="form-group">
                    <label className="mb-1">Message</label>
                    <textarea
                      name=""
                      id=""
                      cols="3"
                      className="form-control"
                      placeholder="Type your problem ..."
                      onChange={(e) => {
                        setMessage(e.target.value);
                      }}
                    />
                  </div>
                  <div className="form-group pt-3">
                    <button type="submit" className="btn btn-success shadow w-100" onClick={() => {handleSubmit()}}>
                      Submit
                    </button>
                  </div>
                </div>

                {/* image contact us */}
                <div className="col-md-6 border-start text-center">
                  <img src={contactUs} alt="" width="420" height="420" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Contact;
