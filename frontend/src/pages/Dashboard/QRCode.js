import React, {useState} from 'react'
import { Container } from 'react-bootstrap';
import TopBAr from '../../components/TopBar';
import { Card,Col,Row,Button } from 'react-bootstrap';
import Sidebar from '../../components/Sidebar';
import {Fab, TextareaAutosize} from '@material-ui/core'
import {ArrowBack} from '@material-ui/icons'
import { Link } from "react-router-dom";
import QrReader from 'react-web-qr-reader';
import axios from "axios";


function QRCode (){
  let [qrdata, setQrdata] = useState('');
  const [email, setEmail] = useState('');
  const [hadir, setHadir] = useState('Hadir');
  const [msg, setMsg] = useState('');
  const [result, setResult] = useState('');
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


  qrdata =(hasil.data);
  


  const SignUp = async(e) =>{
    e.preventDefault();
    try {
      await axios.post('http://localhost:5000/qrcode',{
        name: qrdata,
        email: hadir
      
      });

    } catch (error) {
      if(error.response){
        setMsg(error.response.data.msg);
      }
      
    }

  }

 
  
  
    return (
        <div  style={{backgroundColor:"#EEF1FF"}}>
            <TopBAr/>
            <Sidebar/>
            <Container style={{margin:"50px",marginTop:"0"}}>
            <Container>
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
        <form onSubmit={ SignUp }>
           <div>
            <Link to=".">
            
            </Link>
            <span
            style={{fontSize:20}}
            >QR Scanner</span>
            
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
                  <input
                    type="text"
                    class="form"
                    style={{fontsize:18, width:320, hight:100, marginTop:300,marginBottom:15}}
                    
                    value={qrdata} onChange={(e)=> setQrdata(e.target.value)}
                    required
                  ></input>
                  <div class="action">
              <button class="btn btn-secondary">
                Masuk
              </button>
            </div>
      </div>
      </form>
        </Card>
        </Col>
    
    
    </Row>
             
          
            
            </Container>
            </Container>
        </div>
      );
    }


export default QRCode;