import React from "react";
import { Container, Row, Col, Card, CardGroup, Button } from "react-bootstrap";
import tema from "../../Assets/tema.png";
import tema1 from "../../Assets/tema1.png";
import tema2 from "../../Assets/tema2.png";


function Home5() {
  return (
    <Container fluid className="home5" id="home">
      <Container>
        <Row>
        <h1 className="fitur" style={{textAlign:"left",textTransform:"uppercase",fontWeight:"bold",letterSpacing:"0px",color:'#546D9D',borderBottom:"2px solid"}}>Tema</h1>
          <Col
                sm={4}
                className="card-tema"
                style={{ paddingBottom: 20, paddingTop: 50 }}
              >
                <Card className="card-tema" style={{borderRadius:"15px"}}>
                  <Card.Img src={tema} alt="img">
                    
                  </Card.Img>
                 <div>
                  <Button style={{marginBottom:"30px",marginTop:"30px",float:"right"}}>Preview</Button>
                 </div>
                </Card>
                <h1>Vintage</h1>
                
          </Col>
          <Col
                sm={4}
                className="card-tema"
                style={{ paddingBottom: 20, paddingTop: 50 }}
              >
                <Card  style={{borderRadius:"15px"}}>
                  <Card.Img src={tema1} alt="img">
                    
                  </Card.Img>
                 <div>
                  <Button style={{marginBottom:"30px",marginTop:"30px",float:"right"}}>Preview</Button>
                 </div>
                </Card>
                <h1>Sakura</h1>
          </Col>

          <Col
                sm={4}
                className="card-tema"
                style={{ paddingBottom: 20, paddingTop: 50 }}
              >
                <Card  style={{borderRadius:"15px"}}>
                  <Card.Img src={tema2} alt="img">
                    
                  </Card.Img>
                 <div>
                  <Button style={{marginBottom:"30px",marginTop:"30px",float:"right"}}>Preview</Button>
                 </div>
                </Card>
                <h1>B&W Theme</h1>
          </Col>
          
        </Row>
      </Container>
    </Container>
  );
}
export default Home5;
