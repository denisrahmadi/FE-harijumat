import React from "react";

function Contact(props) {
  return (
    <div>
      <main className="form-signin">
        <form>
          <h1 className="h1 mb-3 fw-bold text-center">Contact Us</h1>

          <div className="form-floating">
            <input type="email" className="form-control" id="floatingInput" placeholder="name@example.com" />
            <label for="floatingInput">Email address</label>
          </div>
          <div className="form-floating mt-1">
            <textarea className="form-control" placeholder="Leave a comment here" id="floatingTextarea"></textarea>
            <label for="floatingTextarea">Comments</label>
          </div>
          <button className="w-100 btn btn-lg btn-success my-3" type="submit">
            Submit
          </button>
        </form>
      </main>
    </div>
  );
}

export default Contact;
