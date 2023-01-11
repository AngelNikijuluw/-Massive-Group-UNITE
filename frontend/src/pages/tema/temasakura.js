import React from 'react';
import { Container,Row,Col,Button, Card, Table, Form} from 'react-bootstrap';
import { Link } from 'react-router-dom';
const Sakura = () =>{
    return (
        
            <div>
              <img src={require('../../image/sakura1.png')} style={{backgroundSize: "cover",width:"100%",zIndex:"1",position:"relative"}}/>
              <Link to="/Sakura2">
            <Button style={{zIndex:"2",position:"absolute",right:"150px",top:"550px",borderColor:"#FFA8BA",backgroundColor:"#F971C2",color:"#fff"}}>Buka Undangan</Button>
            </Link>
            </div>
      );
    }

export default Sakura;