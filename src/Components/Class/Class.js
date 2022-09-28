import React from "react";
import class1 from "../../Image/webdev-pict1.jpg";
import class2 from "../../Image/vue-pict.png";
import class3 from "../../Image/webdev-pict.jpeg";
function Class(props) {
  return (
    <>
      <h3 className="my-5">Find your best class :</h3>
      <form className="d-flex my-3">
        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
        <button className="btn btn-outline-success" type="submit">
          Search
        </button>
        </form>
      <div className="row ">
        <div className="col-lg-4">
          <img src={class1} className=" rounded" width="350" height="160" />
          <h4 className="text-start m-2">The Web Developer Bootcamp 2022 by Colt Steele</h4>
          <p>Some representative placeholder content for the three columns of text below the carousel. This is the first column.</p>
          <p>
            <a className="btn btn-success" href="#">
              View details &raquo;
            </a>
          </p>
        </div>
        <div className="col-lg-4">
          <img src={class2} className=" rounded" width="350" height="160" />
          <h4 className="text-start m-2">Vue - The Complete Guide (incl. Router & Composition API )</h4>
          <p>Some representative placeholder content for the three columns of text below the carousel. This is the first column.</p>
          <p>
            <a className="btn btn-success" href="#">
              View details &raquo;
            </a>
          </p>
        </div>
        <div className="col-lg-4">
          <img src={class3} className=" rounded" width="350" height="160" />
          <h4 className="text-start m-2">The Complete Web Developer in 2020: Zero to Mastery</h4>
          <p>Some representative placeholder content for the three columns of text below the carousel. This is the first column.</p>
          <p>
            <a className="btn btn-success" href="#">
              View details &raquo;
            </a>
          </p>
        </div>
      </div>
      <div className="row ">
        <div className="col-lg-4">
          <img src={class1} className=" rounded" width="350" height="160" />
          <h4 className="text-start m-2">The Web Developer Bootcamp 2022 by Colt Steele</h4>
          <p>Some representative placeholder content for the three columns of text below the carousel. This is the first column.</p>
          <p>
            <a className="btn btn-success" href="#">
              View details &raquo;
            </a>
          </p>
        </div>
        <div className="col-lg-4">
          <img src={class2} className=" rounded" width="350" height="160" />
          <h4 className="text-start m-2">Vue - The Complete Guide (incl. Router & Composition API )</h4>
          <p>Some representative placeholder content for the three columns of text below the carousel. This is the first column.</p>
          <p>
            <a className="btn btn-success" href="#">
              View details &raquo;
            </a>
          </p>
        </div>
        <div className="col-lg-4">
          <img src={class3} className=" rounded" width="350" height="160" />
          <h4 className="text-start m-2">The Complete Web Developer in 2020: Zero to Mastery</h4>
          <p>Some representative placeholder content for the three columns of text below the carousel. This is the first column.</p>
          <p>
            <a className="btn btn-success" href="#">
              View details &raquo;
            </a>
          </p>
        </div>
      </div>
    </>
  );
}

export default Class;
