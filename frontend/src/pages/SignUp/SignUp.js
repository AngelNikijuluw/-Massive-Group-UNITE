import React,{ useState } from "react";
import { Container, Card, CardGroup, Button, Row, Col, } from "react-bootstrap";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import Layout from "../../components/Layout";
import {Fab, TextareaAutosize} from '@material-ui/core'
import {ArrowBack} from '@material-ui/icons'
import { Link } from "react-router-dom";
import QrReader from 'react-web-qr-reader';


function SignUp() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [msg, setMsg] = useState('');
  const navigate = useNavigate();
 

  const SignUp = async(e) =>{
    e.preventDefault();
    try {
      await axios.post('http://localhost:5000/users',{
        name: name,
        email: email,
        password: password
      });
     navigate("/login");
    } catch (error) {
      if(error.response){
        setMsg(error.response.data.msg);
      }
      
    }

  }


  return (
    <Layout title="UNI Vitation | Login">
    <Container fluid className="home-about-section" id="about">
      <Container>
      <div className="warp d-md-flex" style={{}}>
     
                <img
                  src={'https://medinacatering.id/wp-content/uploads/2020/02/4-Wedding-Venue-Pilihan-di-Jakarta-Selatan.jpg'}
                  alt="home pic"
                  style={{width:"100%"}}
                />
       
              <div class="login-form">
                   <form onSubmit={ SignUp }>
                     <h1>SignUp</h1>
                     <p className="has-text-centered">{msg}</p>
                       <div class="content">
                        <div class="col-md-4 mb-3">
                           <label
                            style={{ textAlign: "justify" }}
                  
                >
                  Nama
                  <input
                    type="text"
                    class="form"
                    
                    value={name} onChange={(e)=> setName(e.target.value)}
                    required
                  ></input>
                  <div class="valid-feedback">Look</div>
                </label>
              </div>
              <div class="col-md-4 mb-3">
                           <label
                            style={{ textAlign: "justify" }}
                 
                >
                  Email
                  <input
                    type="text"
                    class="form"
                    
                    value={email} onChange={(e)=> setEmail(e.target.value)}
                    required
                  ></input>
                  <div class="valid-feedback">Look</div>
                </label>
              </div>
              <div class="col-md-4 mb-3">
                <label style={{ textAlign: "left" }} for="validationCustom01">
                  Password
                  <input
                    type="password"
                    class="form"
                    id="validationCustom01"
                    value={password} onChange={(e)=> setPassword(e.target.value)}
                    required
                  ></input>
                  <div class="valid-feedback">Look</div>
                </label>
              </div>
            </div>
            <div class="action">
              <button class="btn btn-secondary">
                Daftar
              </button>
            </div>
            <div class="google">
              <button>
                SignUp dengan Google
              </button>
            </div>
            <div>
              <p>
                Sudah Memiliki Akun ? <a href="/Login">Masuk</a>.
              </p>
            </div>
           </form>
           </div>
           
          </div>
      </Container>
    </Container>
    </Layout>
  );
}
export default SignUp;
