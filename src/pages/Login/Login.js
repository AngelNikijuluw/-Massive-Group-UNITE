import React from "react";
import { Container, Card, CardGroup, Button, Row, Col, } from "react-bootstrap";
import homeLogo from "../../Assets/home-main.svg";

function Login() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Card>
          <Row>
             <Col
                md={5}
                style={{ paddingBottom: 20, paddingLeft: 100, paddingTop: 50 }}
              >
                <img
                  src={homeLogo}
                  alt="home pic"
                  className="img-fluid"
                  style={{ maxHeight: "450px" }}
                />
              </Col>
          
               <Col md={5}
               style={{ paddingBottom: 20, paddingLeft: 100, paddingTop: 50 }}>
                <div class="login-form">
                   <form>
                     <h1>Login</h1>
                       <div class="content">
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
              <a href="/Profile" class="btn btn-secondary">
                Login
              </a>
            </div>
            <div class="google">
              <button>
                <a href="/">
                  
                </a>
                Login dengan Google
              </button>
            </div>
            <div>
              <p>
                Belum Memiliki Akun? <a href="/SignUp">Registrasi</a>.
              </p>
            </div>
          </form>
        </div>
                

              </Col>
          </Row>
        </Card>
      </Container>
    </Container>
  );
}
export default Login;
