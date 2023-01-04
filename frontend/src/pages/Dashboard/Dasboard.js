import { Container, Row, Col, Card, CardGroup, Button,Table } from "react-bootstrap";
import homeLogo from "../../Assets/barcode.svg";
import rsvp from "../../Assets/rsvp.svg";
import wallet from "../../Assets/wallet.svg";
import tamu from "../../Assets/tamu.svg";
import Layout from "../../components/Layout";
import Sidebar from "../../components/Sidebar";
import TopBar from "../../components/TopBar";
import React, { useState } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';

function Dashboard() {
  const [value, onChange]  = useState(new Date());;
  return (
    

    <div  style={{backgroundColor:"#EEF1FF"}}>
      
        <TopBar/>
        <Sidebar/>
        <Container>
      <Row >
        <Col md={{ span: 12, offset: 1 }} style={{marginTop:"60px"}}><Card style={{backgroundColor:"#AAC4FF"}}>
      <Card.Body >
        <Card.Title >Upgrade Pro</Card.Title>
        <Card.Text >
        Silahkan upgrade agar kamu mendapatkan fitur baru dan mendapatkan akses secara penuh! <Button variant="primary">Upgrade Pro</Button>
        </Card.Text>
      </Card.Body>
    </Card></Col>
      
        <Col md={{ span: 4, offset: 1 }} ><Card style={{backgroundColor:"#AAC4FF",marginTop:"20px"}}>
      <Card.Body>
        <Card.Text style={{textAlign:"center"}}>
        Link Undangan Kamu <Button variant="primary" style={{width:"auto"}}>Salin</Button>
        </Card.Text>
      </Card.Body>
    </Card></Col>
        <Col md={{ span: 5, offset: 2 }}><Card style={{backgroundColor:"#AAC4FF",marginTop:"20px"}}>
      <Card.Body>
        <Card.Text>
        <Table striped bordered hover  style={{width:"100%",}}>
        <tbody>
      <tr>
          <td>Semua Tamu</td>
          <td>Tamu yang Hadir</td>
          <td>Tamu yang Selesai Hadir</td>
          </tr>
          <tr style={{textAlign:"center"}}>
            <td>0</td>
            <td>0</td>
            <td>0</td>
          </tr>
          </tbody>
          </Table>
        </Card.Text>
      </Card.Body>
    </Card></Col>
      
        <Col md={{ span: 12, offset: 1 }}><Card style={{backgroundColor:"#AAC4FF",marginTop:"20px"}}>
      <Card.Body>
      <Card.Text style={{textAlign:"center", fontSize:"20px"}}>
      <Table striped bordered hover  style={{width:"100%",}}>
        <tbody>
      <tr>
          <td>Semua Undangan</td>
          <td>Hadir</td>
          <td>Tidak Hadir</td>
          <td>Pending</td>
          <td>Telah Hadir</td>
          </tr>
          <tr style={{textAlign:"center"}}>
            <td>0</td>
            <td>0</td>
            <td>0</td>
            <td>0</td>
            <td>0</td>
          </tr>
          </tbody>
          </Table>
        </Card.Text>
        <Card.Text></Card.Text>
      </Card.Body>
    </Card></Col>

    <Col md={{ span: 12, offset: 1 }}><Card style={{backgroundColor:"#AAC4FF",marginTop:"20px"}}>
      <Card.Body>
      <Card.Text style={{textAlign:"center", fontSize:"20px"}}>
        <h1>Calender</h1>
        
        </Card.Text>
        <Card.Text>
        <Calendar onChange={onChange} value={value} />
        </Card.Text>
      </Card.Body>
      
    </Card></Col>
      </Row>
      
        
        </Container>
        
    </div>
  );
}
export default Dashboard;
