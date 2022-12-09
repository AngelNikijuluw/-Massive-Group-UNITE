import React from "react";
import { Container, Row, Col, Card, CardGroup, Button } from "react-bootstrap";


function Home3() {
  return (
    <Container fluid className="home3" id="about">
      <Container>
        <Row>
         <Col
                sm={5}
                style={{ paddingBottom: 20, paddingTop: 50 }}
              >
                
                <h1 style={{fontSize:"25px",textAlign:"left"}}>UNIK Sudah Banyak Dipercaya</h1>
                <p style={{textAlign:"left"}}>Kami memiliki tujuan untuk membantu memudahkan orang-orang dalam membuat undangan online dan juga menjaga alam untuk mengurangi penggunaan kertas</p>
                
            </Col>
            <Col
                sm={5}
                style={{ paddingBottom: 20, paddingTop: 50 }}
              >
                
                <h1 style={{fontSize:"25px",textAlign:"right"}}>| 800+  | 60.000+ |  100+</h1>
                <h1 style={{fontSize:"16px",textAlign:"right"}}>Dibuat Undangan disebar Online</h1>
                
                
            </Col>
            
        </Row>
      </Container>
    </Container>
  );
}
export default Home3;
