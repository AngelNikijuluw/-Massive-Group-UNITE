import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import homeLogo from "../../Assets/home-main.svg";
import Home2 from "./Home2";
import Type from "./Type";
import Layout from "../../components/Layout";

function Home() {
  return (
    <section>
      <Layout title="Tanam Uang | Home" showFooter showNavbar>
        <Container fluid className="home-section" id="home">
          <Container className="home-content">
            <Row>
              <Col md={7} className="home-header">
                <h1 className="heading-website">
                  Welcome To
                  <strong className="main-name"> Tanam Uang</strong>
                </h1>

                <br></br>

                <h1 className="heading-name">
                  Belajar
                  <strong className="main-name"> Mengatur</strong>
                  <strong className="main-name"> Keuangan</strong>
                  <h1>
                    dan<strong className="main-name"> Investasi</strong> Sehat
                    dimanapun
                  </h1>
                </h1>

                <div
                  style={{
                    padding: 50,
                    textAlign: "left",
                    marginBottom: "-10px",
                  }}
                >
                  <Type />
                </div>
                <button
                  style={{
                    color: "white",
                    marginLeft: "50px",
                    backgroundColor: "#5E6BAD",
                  }}
                >
                  Jadi Member
                </button>
              </Col>

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
            </Row>
          </Container>
        </Container>
        <Home2 />
      </Layout>
    </section>
  );
}

export default Home;
