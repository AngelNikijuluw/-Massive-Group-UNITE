import React, {useState} from 'react'
import { Container } from 'react-bootstrap';
import TopBAr from '../../components/TopBar';
import { Card,Col,Row,Button } from 'react-bootstrap';
import Sidebar from '../../components/Sidebar';
import {Fab, TextareaAutosize} from '@material-ui/core'
import {ArrowBack} from '@material-ui/icons'
import { Link } from "react-router-dom";
import QrReader from 'react-web-qr-reader';

function QRCode (){
  const [result, setResult] = useState('No result');
  const handleScan = (result) => {
      if (result) {
          setResult(result)
      }
  };
  const handleError = err => {
  alert("error")
  }
  const data= (JSON.stringify(result));
  const hasil =JSON.parse(data);


  const bug =(hasil.data);



 
  
  
    return (
        <div  style={{backgroundColor:"#EEF1FF"}}>
            <TopBAr/>
            <Container>
            <Sidebar/>
            <Row>
        <Col md={{ span: 12, offset: 1}}><Card style={{backgroundColor:"#AAC4FF",marginTop:"60px"}}>
      <Card.Body >
        <Card.Title >Upgrade Pro</Card.Title>
        <Card.Text >
        Silahkan upgrade agar kamu mendapatkan fitur baru dan mendapatkan akses secara penuh! <Button variant="primary">Upgrade Pro</Button>
        </Card.Text>
      </Card.Body>
    </Card></Col>
        <Col md={{ span: 12, offset: 1 }}>
        <Card Card style={{backgroundColor:"#AAC4FF",height:"500px",marginTop:"20px"}}>
        <div>
            <Link to="/">
            <Fab style={{marginRight:10}} color="primary">
                <ArrowBack/>
            </Fab>
            </Link>
            <span>QR Scanner</span>
            
            <center>
            <div style={{marginTop:30}}>
                <QrReader
                    delay={300}
                    onError={handleError}
                    onScan={handleScan}
                    style={{ height: 30, width: 320}}
                />
            </div>
            </center>
            <TextareaAutosize
            style={{fontsize:18, width:320, hight:100, marginTop:300}}
            defaultValue={bug}
            value={bug}

            />

            

      </div>
        </Card>
        </Col>
    
    
    </Row>
             
          
            
            </Container>
            
        </div>
      );
    }


export default QRCode;