import React from 'react';
import { Container,Row,Col,Button, Card, Table, Form} from 'react-bootstrap';
import { Link } from 'react-router-dom';
const Vin = () =>{
    return (
        
            <div>
              <img src={require('../../image/vin1.png')} style={{backgroundSize: "cover",width:"100%",zIndex:"1",position:"relative"}}/>
              <Link to="/Vin2">
            <Button style={{zIndex:"2",position:"absolute",right:"150px",top:"550px",borderColor:"#000",backgroundColor:"#8D7147",color:"#fff"}}>Buka Undangan</Button>
            </Link>
            </div>
      );
    }

export default Vin;