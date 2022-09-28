import React from "react";
import "./Dashboard.css";
import hero from "../../Image/coding.jpg";

function Dashboard(props) {
  return (
    <>
      {/* INI JUMBOTRON */}
      {/* <div className="p-5 mb-4 bg-light rounded-3 latarbelakang">
        <div className="container-fluid py-5">
          <h1 className="display-5 fw-bold">
            Raih Karir Impian <br /> Walau Sesat di Jalan
          </h1>
          <p className="col-md-8 fs-5 mt-5">
            Kuasai skill dan dapatkan pekerjaan impianmu. Sudah <span className="fw-bold">2380</span> alumni berhasil meraih karir impian mereka. Apabila setelah lulus kamu belum bekerja dalam 365 hari, kamu berhak mendapatkan{" "}
            <span className="fw-bold">refund up to 110%</span> investasimu.
          </p>
          <button className="btn btn-dark btn-lg mt-3" type="button">
            Temukan kelas terbaikmu !
          </button>
        </div>
      </div> */}

      <div className="container col-xxl-8 px-4 py-5">
        <div className="row flex-lg-row-reverse align-items-center g-5 py-5">
          <div className="col-10 col-sm-8 col-lg-6">
            <img src={hero} className="d-block mx-lg-auto img-fluid" alt="Bootstrap Themes" width="700" height="500" loading="lazy" />
          </div>
          <div className="col-lg-6">
            <h1 className="display-5 fw-bold lh-1 mb-3">Responsive left-aligned hero with image</h1>
            <p className="lead">
              Quickly design and customize responsive mobile-first sites with Bootstrap, the world’s most popular front-end open source toolkit, featuring Sass variables and mixins, responsive grid system, extensive prebuilt components, and
              powerful JavaScript plugins.
            </p>
            <div className="d-grid gap-2 d-md-flex justify-content-md-start">
              <button type="button" className="btn btn-primary btn-lg px-4 me-md-2">
                Primary
              </button>
              <button type="button" className="btn btn-outline-secondary btn-lg px-4">
                Default
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Dashboard;
