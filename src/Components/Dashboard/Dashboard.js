import React from "react";
import "./Dashboard.css";
import { Link } from "react-router-dom";

import hero from "../../Image/herobanner.jpg";
import logo1 from "../../Image/logo1.png";
import logo2 from "../../Image/logo2.png";
import logo3 from "../../Image/logo3.jpg";
import logo4 from "../../Image/logo-dashboard-jumbotron.png";
import testi1 from "../../Image/testi1.jpg";
import testi2 from "../../Image/testi2.png";
import testi3 from "../../Image/testi3.jpg";
import class1 from "../../Image/webdev-pict1.jpg";
import class2 from "../../Image/vue-pict.png";
import class3 from "../../Image/webdev-pict.jpeg";

function Dashboard(props) {
  return (
    <>
      {/* Hero Banner */}
      <div className="container col-xxl-8 px-4 pb-5">
        <br />
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
              <Link to={"/className"} className="btn btn-success btn-lg px-4 me-md-2">
                Temukan kelas
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* video course */}
      <div className="row my-5 py-5">
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

      {/* Testimoni */}
      <div className="container py-5 my-5">
        <div className="row d-flex justify-content-center">
          <h2 className="text-center text-capitalize mb-4">apa kata alumni :</h2>
          <div className="col-md-4">
            <div className="card">
              <img src='https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse3.mm.bing.net%2Fth%3Fid%3DOIP.T_nh_1NDRMDKjN1BG8-ixgHaHa%26pid%3DApi&f=1&ipt=bff19c10483312d9b57b35bf26aa3dfd1f8b1d57f43957ed4f5b6eb470b20884&ipo=images' className="card-img-top" alt="..." width="253" height="180" />
              <div className="card-body">
                <h5 className="card-title fw-bolder">Lesty Kejora</h5>
                <p className="card-text fst-italic">
                  Mostly membantu banget di pekerjaanku dan bisnisku. Aku jadi lebih memahami tools digital marketing, tahapan campaign, dan ternyata sosial media itu memang punya algoritma, tapi bukan berarti kita tidak bisa menembus itu.
                  Thankyou Harisenin!
                </p>
                <p className="text-end">
                  Front End Engineer
                  <img src="https://www.harisenin.com/_next/image?url=https%3A%2F%2Fcdn.harisenin.com%2Fpublic%2Fassets%2Flogos%2Flogo_gojek-3.png&w=256&q=75" width="60" alt="" className="ms-2" />
                </p>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="card">
              <img src={testi2} className="card-img-top" alt="..." width="253" height="180" />
              <div className="card-body">
                <h5 className="card-title fw-bolder">Maman Racing </h5>
                <p className="card-text fst-italic">
                  Belajar di Harisenin itu banyak banget dapet insight tentang dunia backend and databese gak cuman teori selama di kelas, tutornya juga selalu kasih materi dan pandangan yang bisa kita implementasikan, jadi semangat untuk
                  berkarir diBackend Engineer.
                </p>
                <p className="text-end">
                  Back End Engineer
                  <img src="https://www.harisenin.com/_next/image?url=https%3A%2F%2Fcdn.harisenin.com%2Fpublic%2Fassets%2Flogos%2Flogo_nestle-3.png&w=256&q=75" width="80" alt="" className="ms-2" />
                </p>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="card">
              <img src={testi3} className="card-img-top " alt="..." width="260" height="180" />
              <div className="card-body">
                <h5 className="card-title fw-bolder">Jajang Nurjaman</h5>
                <p className="card-text fst-italic">
                  Mostly membantu banget di pekerjaanku dan bisnisku. Aku jadi lebih memahami tools Cyber Security, tahapan penetration, dan ternyata program itu memang punya algoritma, tapi bukan berarti kita tidak bisa menembus itu.
                  Thankyou Harisenin!
                </p>
                <p className="text-end">
                  Cyber Engineer
                  <img src="https://www.harisenin.com/_next/image?url=https%3A%2F%2Fcdn.harisenin.com%2Fpublic%2Fassets%2Flogos%2Flogo_bukalapak-2.png&w=256&q=75" width="90" alt="" className="ms-2" />
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* table kenapa milih harijumat.com */}
      <div className="container my-5">
        <h1 className="text-center mb-5 mt-5">Mengapa harus harijumat.com?</h1>
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
              <td className="table-danger">Bayar</td>
            </tr>
            <tr>
              <td className="table-warning">Gratis</td>
              <td className="table-success">
                <i className="fa-sharp fa-solid fa-circle-check"></i>
              </td>
              <td className="table-danger">Bayar</td>
            </tr>
            <tr>
              <td className="table-warning">Gratis</td>
              <td className="table-success">
                <i className="fa-sharp fa-solid fa-circle-check"></i>
              </td>
              <td className="table-danger">Bayar</td>
            </tr>
            <tr>
              <td className="table-warning">Gratis</td>
              <td className="table-success">
                <i className="fa-sharp fa-solid fa-circle-check"></i>
              </td>
              <td className="table-danger">Bayar</td>
            </tr>
            <tr>
              <td className="table-warning">Gratis</td>
              <td className="table-success">
                <i className="fa-sharp fa-solid fa-circle-check"></i>
              </td>
              <td className="table-danger">Bayar</td>
            </tr>
            <tr>
              <td className="table-warning">Gratis</td>
              <td className="table-success">
                <i className="fa-sharp fa-solid fa-circle-check"></i>
              </td>
              <td className="table-danger">Bayar</td>
            </tr>
          </tbody>
        </table>
      </div>
      <br />

      {/* lulusan harijumat */}
      <div className="container pt-3 mt-5">
        <div className="row">
          <h1 className="mb-5 text-capitalize text-center">Lulusan harijumat.com telah bekerja di:</h1>
          <div className="col text-center m-3">
            <img src="https://www.harisenin.com/_next/image?url=https%3A%2F%2Fcdn.harisenin.com%2Fpublic%2Fassets%2Flogos%2Flogo_air-asia-2.png&w=256&q=75" alt="" />
          </div>
          <div className="col text-center m-3">
            <img src="https://www.harisenin.com/_next/image?url=https%3A%2F%2Fcdn.harisenin.com%2Fpublic%2Fassets%2Flogos%2Flogo_bukalapak-2.png&w=256&q=75" alt="" />
          </div>
          <div className="col text-center m-3">
            <img src="https://www.harisenin.com/_next/image?url=https%3A%2F%2Fcdn.harisenin.com%2Fpublic%2Fassets%2Flogos%2Flogo_shopee-2.png&w=256&q=75" alt="" />
          </div>
          <div className="col text-center m-3">
            <img src="https://www.harisenin.com/_next/image?url=https%3A%2F%2Fcdn.harisenin.com%2Fpublic%2Fassets%2Flogos%2Flogo_unilever-2.png&w=256&q=75" alt="" />
          </div>
          <div className="col text-center m-3">
            <img src="https://www.harisenin.com/_next/image?url=https%3A%2F%2Fcdn.harisenin.com%2Fpublic%2Fassets%2Flogos%2Flogo_gojek-3.png&w=256&q=75" alt="" />
          </div>
          <div className="col text-center m-3">
            <img src="https://www.harisenin.com/_next/image?url=https%3A%2F%2Fcdn.harisenin.com%2Fpublic%2Fassets%2Flogos%2Flogo_bri-3.png&w=256&q=75" alt="" />
          </div>
          <div className="col text-center m-3">
            <img src="https://www.harisenin.com/_next/image?url=https%3A%2F%2Fcdn.harisenin.com%2Fpublic%2Fassets%2Flogos%2Flogo_nestle-3.png&w=256&q=75" alt="" />
          </div>
          <div className="col text-center m-3">
            <img src="https://www.harisenin.com/_next/image?url=https%3A%2F%2Fcdn.harisenin.com%2Fpublic%2Fassets%2Flogos%2Flogo_mandiri-sekuritas-2.png&w=256&q=75" alt="" />
          </div>
          <div className="col text-center m-3">
            <img src="https://www.harisenin.com/_next/image?url=https%3A%2F%2Fcdn.harisenin.com%2Fpublic%2Fassets%2Flogos%2Flogo_pwc-2.png&w=256&q=75" alt="" />
          </div>
          <div className="col text-center m-3">
            <img src="https://www.harisenin.com/_next/image?url=https%3A%2F%2Fcdn.harisenin.com%2Fpublic%2Fassets%2Flogos%2Flogo_telkom-indonesia_2.png&w=256&q=75" alt="" />
          </div>
          <div className="col text-center m-3">
            <img src="https://www.harisenin.com/_next/image?url=https%3A%2F%2Fcdn.harisenin.com%2Fpublic%2Fassets%2Flogos%2Flogo_viu-2.png&w=256&q=75" alt="" />
          </div>
          <div className="col text-center m-3">
            <img src="https://www.harisenin.com/_next/image?url=https%3A%2F%2Fcdn.harisenin.com%2Fpublic%2Fassets%2Flogos%2Flogo_link-aja-2.png&w=256&q=75" alt="" />
          </div>
          <div className="col text-center m-3">
            <img src="https://www.harisenin.com/_next/image?url=https%3A%2F%2Fcdn.harisenin.com%2Fpublic%2Fassets%2Flogos%2Flogo_ey-3.png&w=256&q=75" alt="" />
          </div>
          <div className="col text-center m-3">
            <img src="https://www.harisenin.com/_next/image?url=https%3A%2F%2Fcdn.harisenin.com%2Fpublic%2Fassets%2Flogos%2Flogo_jnt-2.png&w=256&q=75" alt="" />
          </div>
          <div className="col text-center m-3">
            <img src="https://www.harisenin.com/_next/image?url=https%3A%2F%2Fcdn.harisenin.com%2Fpublic%2Fassets%2Flogos%2Flogo_astra-2.png&w=256&q=75" alt="" />
          </div>
        </div>
      </div>
      <br />

      {/* Jumbotron
      <div className="my-5 py-5">
        <div className="container-fluid py-3 bg-dark text-white rounded-2 ">
          <div className="row">
            <div className="col pt-5 ps-5"><br />
              <h1 className="display-6 fw-bold">Masih bingung?</h1>
              <p className=" fs-4 "> Konsultasikan dengan expert terbaik kami</p>
              <button className="btn btn-success btn-lg" type="button">
              <a href="https://wa.me/6282211373658/?text=Halo Admin yang ganteng mau nanya dong" target="_blank" className="text-decoration-none text-white gede">WhatsApp</a>
              </button>
            </div>
            <div className="col text-center">
              <img src={logo4} alt="" width="363" height="363"/>
            </div>
          </div>
        </div>
      </div> */}
    </>
  );
}

export default Dashboard;
