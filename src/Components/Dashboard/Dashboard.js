import React from "react";
import "./Dashboard.css";
import hero from "../../Image/herobanner.jpg";
import logo1 from "../../Image/logo1.png";
import logo2 from "../../Image/logo2.png";
import logo3 from "../../Image/logo3.jpg";
import testi1 from "../../Image/testi1.jpg";
import testi2 from "../../Image/testi2.png";
import testi3 from "../../Image/testi3.jpg";
import { Link } from "react-router-dom";

function Dashboard(props) {
  return (
    <>
      

      {/* Hero Banner */}
      <div className="container col-xxl-8 px-4 pb-5">
        <div className="row flex-lg-row-reverse align-items-center g-5 py-1">
          <div className="col-10 col-sm-8 col-lg-6">
            <img src={hero} className="d-block mx-lg-auto img-fluid" alt="Bootstrap Themes" width="700" height="500" loading="lazy" />
          </div>
          <div className="col-lg-6">
            <h1 className="display-5 fw-bold lh-1 mb-3">Bingung mau kemana? Raih karir impianmu sekarang!</h1>
            <p className="lead">
              Kuasai skill dan dapatkan pekerjaan impianmu. <span className="fw-semibold">2380 alumni berhasil meraih karir impian</span> Sudah mereka. Apabila setelah lulus kamu belum bekerja dalam 365 hari, kamu berhak mendapatkan{" "}
              <span className="fw-semibold">refund up to 110%</span> investasimu.
            </p>
            <div className="d-grid gap-2 d-md-flex justify-content-md-start">
              <Link to={"/class"} className="btn btn-success btn-lg px-4 me-md-2">
                Temukan kelas
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Testimoni */}
      <div className="container py-5">
        <div className="row d-flex justify-content-center">
          <div className="col-md-3">
            <div className="card">
              <img src={testi1} className="card-img-top" alt="..." width="253" height="142" />
              <div className="card-body">
                <h5 className="card-title">Mega-chan</h5>
                <p className="card-text fst-italic">Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat ipsum, alias dolorum reprehenderit obcaecati doloribus cum a itaque quibusdam atque.</p>
                <p className="text-end">
                  Front End Engineer at
                  <img src={logo1} width="40" alt="" />
                </p>
              </div>
            </div>
          </div>
          <div className="col-md-3 mx-5">
            <div className="card">
              <img src={testi2} className="card-img-top" alt="..." width="253" height="142" />
              <div className="card-body">
                <h5 className="card-title">Mega-chan</h5>
                <p className="card-text fst-italic">Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat ipsum, alias dolorum reprehenderit obcaecati doloribus cum a itaque quibusdam atque.</p>
                <p className="text-end">
                  Front End Engineer at
                  <img src={logo2} width="40" alt="" />
                </p>
              </div>
            </div>
          </div>
          <div className="col-md-3">
            <div className="card">
              <img src={testi3} className="card-img-top " alt="..." width="253" height="142" />
              <div className="card-body">
                <h5 className="card-title">Mega-chan</h5>
                <p className="card-text fst-italic">Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat ipsum, alias dolorum reprehenderit obcaecati doloribus cum a itaque quibusdam atque.</p>
                <p className="text-end">
                  Front End Engineer at
                  <img src={logo3} width="16" alt="" />
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* table kenapa milih harijumat.com */}
      <div className="container">
        <h1 className="text-center mb-4 mt-5">Mengapa harus harijumat.com?</h1>
        <table className="table">
          <thead>
            <tr className="text-center table-secondary">
              <th scope="col"></th>
              <th scope="col">harijumat.com</th>
              <th scope="col">Other Bootcamp</th>
            </tr>
          </thead>
          <tbody className="text-center">
            <tr>
              <td className="table-warning">Gratis</td>
              <td className="table-success">
                <i className="fa-sharp fa-solid fa-circle-check"></i>
              </td>
              <td className="table-danger">Ratusan - Puluhan juta</td>
            </tr>
            <tr>
              <td className="table-warning">Gratis</td>
              <td className="table-success">
                <i className="fa-sharp fa-solid fa-circle-check"></i>
              </td>
              <td className="table-danger">Ratusan - Puluhan juta</td>
            </tr>
            <tr>
              <td className="table-warning">Gratis</td>
              <td className="table-success">
                <i className="fa-sharp fa-solid fa-circle-check"></i>
              </td>
              <td className="table-danger">Ratusan - Puluhan juta</td>
            </tr>
            <tr>
              <td className="table-warning">Gratis</td>
              <td className="table-success">
                <i className="fa-sharp fa-solid fa-circle-check"></i>
              </td>
              <td className="table-danger">Ratusan - Puluhan juta</td>
            </tr>
            <tr>
              <td className="table-warning">Gratis</td>
              <td className="table-success">
                <i className="fa-sharp fa-solid fa-circle-check"></i>
              </td>
              <td className="table-danger">Ratusan - Puluhan juta</td>
            </tr>
            <tr>
              <td className="table-warning">Gratis</td>
              <td className="table-success">
                <i className="fa-sharp fa-solid fa-circle-check"></i>
              </td>
              <td className="table-danger">Ratusan - Puluhan juta</td>
            </tr>
          </tbody>
        </table>
      </div>

      {/* lulusan harijumat */}
      <div className="container pt-5 mt-5">
        <div className="row">
          <h1 className="mb-5">Lulusan aing udh gawe dimana aja:</h1>
          <div className="col">
            <img src="https://www.harisenin.com/_next/image?url=https%3A%2F%2Fcdn.harisenin.com%2Fpublic%2Fassets%2Flogos%2Flogo_air-asia-2.png&w=256&q=75" alt="" />
          </div>
          <div className="col-6">2 of 3 (wider)</div>
          <div className="col">3 of 3</div>
        </div>
        <div className="row">
          <div className="col">1 of 3</div>
          <div className="col-5">2 of 3 (wider)</div>
          <div className="col">3 of 3</div>
        </div>
      </div>

      <div className="container">
        <div className="row row-cols-6">
          <div className="col-6 col-md">1</div>
          <div className="col-6 col-md">1</div>
          <div className="col-6 col-md">1</div>
          <div className="col-6 col-md">1</div>
          <div className="col-6 col-md">1</div>
          <div className="col-6 col-md">1</div>
          <div className="col-6 col-md">1</div>
          {/* <div className="col">2</div>
          <div className="col-3">3</div>
          <div className="col">4</div>
          <div className="col">5</div>
          <div className="col">6</div> */}
          {/* <div className="col">7</div>
          <div className="col">8</div>
          <div className="col">9</div>
          <div className="col">10</div>
          <div className="col">11</div>
          <div className="col">12</div>
          <div className="col">13</div>
          <div className="col">13</div>
          <div className="col">13</div>
          <div className="col">13</div>
          <div className="col">13</div>
          <div className="col">13</div>
          <div className="col">13</div>
          <div className="col">13</div>
          <div className="col">13</div>
          <div className="col">13</div>
          <div className="col">13</div>
          <div className="col">13</div> */}
        </div>
      </div>
    </>
  );
}

export default Dashboard;
