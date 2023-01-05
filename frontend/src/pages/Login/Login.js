import React,{ useState } from "react";
import { Container, Card, CardGroup, Button, Row, Col, } from "react-bootstrap";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import Layout from "../../components/Layout";
import foto from "../../Assets/foto.png";

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [msg, setMsg] = useState('');
  const navigate = useNavigate();


  const Auth = async(e) =>{
    e.preventDefault();
    try {
      await axios.post('http://localhost:5000/Login',{
        email: email,
        password: password
      });
     navigate("/dashboard")
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
             <Col
                md={8}
              >
                <img
                  src={'https://medinacatering.id/wp-content/uploads/2020/02/4-Wedding-Venue-Pilihan-di-Jakarta-Selatan.jpg'}
                  alt="home pic"
                  style={{width:"100%" }}
                />
              </Col>
              <div class="login-form">
                   <form onSubmit={ Auth }>
                     <h1>Login</h1>
                     <p className="has-text-centered">{msg}</p>
                       <div class="content">
                        <div class="col-md-4 mb-3">
                           <label
                            style={{ textAlign: "justify" }}
                  for="validationCustom01"
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
                    value={password} onChange={(e)=> setPassword(e.target.value)}
                    required
                  ></input>
                  <div class="valid-feedback">Look</div>
                </label>
              </div>
            </div>
            <div class="action">
              <button class="btn btn-secondary">
                Masuk
              </button>
            </div>
            <div class="google">
              <button>
                <a href="/">
                </a>
                Login dengan Google
              </button>
            </div>
            <div>
              <p>
                Belum Memiliki Akun? <a href="/SignUp">Registrasi</a>.
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
export default Login;
