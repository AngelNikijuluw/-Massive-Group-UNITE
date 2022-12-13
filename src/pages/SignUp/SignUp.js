import React from "react";
import { Container, Card, CardGroup, Button, Row, Col, } from "react-bootstrap";
import Layout from "../../components/Layout";

function SignUp() {
  return (
    <Layout title="UNI Vitation | Login">
    <Container fluid className="home-about-section" id="about">
      <Container>
      <div className="warp d-md-flex" style={{}}>
     
                <img
                  src={'https://medinacatering.id/wp-content/uploads/2020/02/4-Wedding-Venue-Pilihan-di-Jakarta-Selatan.jpg'}
                  alt="home pic"
                  style={{width:"100%"}}
                />
       
              <div class="login-form">
                   <form>
                     <h1>SignUp</h1>
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
                Daftar
              </a>
            </div>
            <div class="google">
              <button>
                <a href="/">
                  
                </a>
                SignUp dengan Google
              </button>
            </div>
            <div>
              <p>
                Sudah Memiliki Akun ? <a href="/Login">Masuk</a>.
              </p>
            </div>
           </form>
           </div>
          </div>
      </Container>
    </Container>
    </Layout>
  );
}
export default SignUp;
