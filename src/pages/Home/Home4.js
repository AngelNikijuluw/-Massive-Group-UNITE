import React from "react";
import { Container, Row, Col, Card, CardGroup, Button } from "react-bootstrap";


function Home4() {
  return (
    <Container fluid className="home4" id="about">
      <Container>
        <Row>
          <h1 style={{textTransform:"uppercase"}}>Pilih Paket</h1>
          <Col
                md={6}
                style={{ paddingBottom: 20, paddingTop: 50 }}
              >
                <Card style={{borderRadius:"15px"}}>
                  <h1>FREE</h1>
                  <h2>Rp0</h2>
                  <span>Untuk kebutuhan dasar undangan event yang kamu adakan.</span>
                  <br></br>
                 <ul style={{textAlign:"justify"}}>
                    <li>
                    Dashboard untuk custom undangan</li>
                    <li>Countdown (Hitung Mundur)</li>
                    <li>Kelolah Tamu (10 Tamu)</li>
                    <li>Kolom ucapan</li>
                    <li>Maps</li>
                    <li>Background Music</li>
                    <li>Gallery (5 Foto)</li>
                    <li>Edit Tanpa Batas</li>
                 </ul>
                 <div>
                  <Button style={{marginBottom:"30px",marginTop:"30px"}}>Pesaan</Button>
                 </div>
                </Card>
                
          </Col>
          <Col
                md={6}
                style={{ paddingBottom: 20, paddingTop: 50 }}
              >
                <Card style={{borderRadius:"15px"}}>
                  <h1>PREMIUM</h1>
                  <h2>Rp0</h2>
                  <span>Untuk kebutuhan dasar undangan event yang kamu adakan.</span>
                  <br></br>
                 <ul style={{textAlign:"justify"}}>
                    <li>
                    Dashboard untuk custom undangan</li>
                    <li>Countdown (Hitung Mundur)</li>
                    <li>Kelolah Tamu (10 Tamu)</li>
                    <li>Kolom ucapan</li>
                    <li>Maps</li>
                    <li>Background Music</li>
                    <li>Gallery (5 Foto)</li>
                    <li>Edit Tanpa Batas</li>
                 </ul>
                 <div>
                  <Button style={{marginBottom:"30px",marginTop:"30px"}}>Pesaan</Button>
                 </div>
                </Card>
                
          </Col>
          
        </Row>
      </Container>
    </Container>
  );
}
export default Home4;
