import React from "react";
import { Container } from "react-bootstrap";
import logo from "../../Assets/logo.png";
import gambar from "../../Assets/gambar.png";
import { AiFillGoogleCircle } from "react-icons/ai";
import Layout from "../../components/Layout";

export default function Signup() {
  return (
    <Layout title="Tanam Uang | Sign Up">
      <Container fluid className="home-signup" id="signup">
        <div
          style={{ float: "left", marginTop: "200px", marginLeft: "350px" }}
          className="img-login"
        >
          <img src={logo} alt="img"></img>
        </div>
        <div
          style={{ float: "left", marginTop: "300px", marginLeft: "-450px" }}
        >
          <img src={gambar} alt="img"></img>
        </div>
        <div class="login-form">
          <form>
            <h1>Registrasi</h1>
            <div class="content">
              <div class="col-md-4 mb-3">
                <label
                  style={{ textAlign: "justify" }}
                  for="validationCustom01"
                >
                  Nama
                  <input
                    type="text"
                    class="form"
                    id="validationCustom01"
                    required
                  ></input>
                  <div class="valid-feedback">Look</div>
                </label>
              </div>
              <div class="col-md-4 mb-3">
                <label
                  style={{ textAlign: "justify" }}
                  for="validationCustom01"
                >
                  Email
                  <input
                    type="text"
                    class="form"
                    id="validationCustom01"
                    required
                  ></input>
                  <div class="valid-feedback">Look</div>
                </label>
              </div>
              <div class="col-md-4 mb-3">
                <label style={{ textAlign: "left" }} for="validationCustom01">
                  Password
                  <input
                    type="password"
                    class="form"
                    id="validationCustom01"
                    required
                  ></input>
                  <div class="valid-feedback">Look</div>
                </label>
              </div>
            </div>
            <div class="action">
              <a href="/Login" class="btn btn-secondary">
                Registrasi
              </a>
            </div>
            <div class="google">
              <button>
                <a href="/">
                  <AiFillGoogleCircle size={25} />
                </a>
                Daftar dengan Google
              </button>
            </div>
          </form>
        </div>
      </Container>
    </Layout>
  );
}
