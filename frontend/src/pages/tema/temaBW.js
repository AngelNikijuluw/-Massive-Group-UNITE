import React from 'react';
import { Container,Row,Col,Button, Card, Table, Form} from 'react-bootstrap';
import { Link } from 'react-router-dom';
const BW = () =>{
    return (
        
            <div>
              <img src={require('../../image/BW1.png')} style={{backgroundSize: "cover",width:"100%",zIndex:"1",position:"relative"}}/>
              <Link to="/BW2">
            <Button style={{zIndex:"2",position:"absolute",right:"150px",top:"550px",borderColor:"#000",backgroundColor:"#000",color:"#fff"}}>Buka Undangan</Button>
            </Link>
            </div>
      );
    }

export default BW;