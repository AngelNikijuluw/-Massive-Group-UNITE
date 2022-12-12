import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import homeLogo from "../../Assets/home-main.svg";

function Home6() {
  return (
    <Container fluid className="home-akhir" id="home">
       <Container className="home-content">
          <Row>
              <Col className="home-header">
                <h1 className="heading-name-akhir">
                  <strong className="main-name">Mulai buat undangan onlinemu</strong>
                </h1>
                <br></br>
                <Button style={{marginBottom:"30px",marginTop:"30px",width:"110px"}}>Preview</Button>
              </Col>
             
            </Row>
          </Container>
        </Container>
  );
}

export default Home6;
