import React from "react";
import { Container, Row, Col, Card, CardGroup, Button } from "react-bootstrap";
import homeLogo from "../../Assets/barcode.svg";
import rsvp from "../../Assets/rsvp.svg";
import wallet from "../../Assets/wallet.svg";
import tamu from "../../Assets/tamu.svg";

function Home2() {
  return (
    <Container fluid className="home3" id="about">
      <Container>
        <row>
         <Col
                sm={5}
                style={{ paddingBottom: 20, paddingTop: 50 }}
              >
                
                <h1 style={{fontSize:"25px",textAlign:"left"}}>UNIK Sudah Banyak Dipercaya</h1>
                <p style={{textAlign:"left"}}>Kami memiliki tujuan untuk membantu memudahkan orang-orang dalam membuat undangan online dan juga menjaga alam untuk mengurangi penggunaan kertas</p>
                
            </Col>
            
        </row>
      </Container>
    </Container>
  );
}
export default Home2;
