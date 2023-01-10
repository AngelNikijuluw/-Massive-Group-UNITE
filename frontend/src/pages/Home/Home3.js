import React from "react";
import { Container, Row, Col, Card, CardGroup, Button } from "react-bootstrap";


function Home3() {
  return (
    <Container fluid className="home3" id="home">
      <Container>
        <Row>
         <Col
                sm={5}
                style={{ paddingBottom: 20, paddingTop: 50 }}
              >
                
                <h1 style={{fontSize:"20px",textAlign:"left",backgroundColor:"#447294",textTransform:"uppercase"}}>UNIVITATION SUDAH BANYAK DIPERCAYA</h1>
                <p style={{textAlign:"left"}}>Kami memiliki tujuan untuk membantu memudahkan orang-orang dalam membuat undangan online dan juga menjaga alam untuk mengurangi penggunaan kertas</p>
                
            </Col>
            <Col
                sm={5}
                style={{ paddingBottom: 20, paddingTop: 50 }}
              >
                
                <h1 style={{fontSize:"25px",textAlign:"right"}}>| 800+  <span style={{marginLeft:"10px"}}> |</span><span style={{marginLeft:"50px"}}>60.000+  </span> <span style={{marginLeft:"50px"}}></span>|100+</h1>
                <h1 style={{fontSize:"16px",textAlign:"right"}}> <span style={{marginRight:"50px"}}>Dibuat</span>  <span style={{marginRight:"10px"}}>Undangan disebar</span> <span style={{marginLeft:"35px"}}>Online</span></h1>

                
            </Col>
            
        </Row>
      </Container>
    </Container>
  );
}
export default Home3;
