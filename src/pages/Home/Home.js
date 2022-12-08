import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import homeLogo from "../../Assets/home-main.svg";
import Home2 from "./Home2";
import Layout from "../../components/Layout";

function Home() {
  return (
    <section>
      <Layout title="Inveet | Home" showFooter showNavbar>
        <Container fluid className="home-section" id="home">
          <Container className="home-content">
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

              <Col md={7} className="home-header">
                
                <h1 className="heading-name">
                  <strong className="main-name"> Welcome!!</strong>
                </h1>
                <br></br>

                <h1 className="heading-website">
                is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took
                </h1>

          
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
            </Row>
          </Container>
        </Container>
        <Home2 />
      </Layout>
    </section>
  );
}

export default Home;
