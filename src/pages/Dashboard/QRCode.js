import React from 'react';
import { Container } from 'react-bootstrap';
import TopBAr from '../../components/TopBar';
import { Card,Col,Row,Button } from 'react-bootstrap';
import Sidebar from '../../components/Sidebar';
const QRCode = () =>{
    return (
        <div  style={{backgroundColor:"#EEF1FF"}}>
            <TopBAr/>
            <Container>
            <Sidebar/>
            <Row>
        <Col md={{ span: 12, offset: 1}}><Card style={{backgroundColor:"#AAC4FF",marginTop:"20px"}}>
      <Card.Body >
        <Card.Title >Upgrade Pro</Card.Title>
        <Card.Text >
        Silahkan upgrade agar kamu mendapatkan fitur baru dan mendapatkan akses secara penuh! <Button variant="primary">Upgrade Pro</Button>
        </Card.Text>
      </Card.Body>
    </Card></Col>
        <Col md={{ span: 12, offset: 1 }}>
        <Card Card style={{backgroundColor:"#AAC4FF",height:"500px"}}>
        <h1>Qr Code</h1>
        </Card>
        </Col>
    
    
    </Row>
             
          
            
            </Container>
            
        </div>
      );
    }


export default QRCode;