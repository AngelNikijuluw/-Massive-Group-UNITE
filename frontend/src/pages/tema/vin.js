import React from 'react';
import { Container,Row,Col,Button, Card, Table, Form} from 'react-bootstrap';
import { Link } from 'react-router-dom';
import {
  AiFillInstagram,
  AiFillPlayCircle
  
} from "react-icons/ai";
import Footer from '../../components/Footer';
const Vin2 = () =>{
    return (
        
      <section style={{backgroundColor:"#fff"}}>
     <img src={require('../../image/vin2.png')} style={{width:"100%",}}/>
     
     <section>
     <Button style={{borderColor:"#FFA8BA",backgroundColor:"#8D7147",color:"#fff",zIndex:"10",position:"absolute",top:"10px",borderRadius:"20px",color:"white",borderColor:"white",right:"10px"}}><AiFillPlayCircle/>Play Music</Button>
     <img src={require('../../image/vin3.png')}  style={{backgroundSize: "cover",width:"100%",zIndex:"1",position:"relative"}}/>
            <table style={{zIndex:"2",position:"absolute",top:"850px",color:"#000"}}>
              <tr>
                <p>Assalamu'alaikum warahmatullahi wabarakatuh</p>
                <p >Bismillahirrahmanirrahim</p>
                
                <p>Seraya menengadahkan jemari bermunajat dalam hamparan kasih ilahi,menyatukan langkah putra dan putri kami,untuk mengikuti sunnah Rasul-Mu membentuk keluarga Sakinah,Mawadah,Warahmah maka izinkanlah kami menikahkan mereka</p>
                <p>Ananda Alfian</p>
                <p>Putra Bungsu dari Bapak Hanafiah & Ibu Satifah</p>
                <p>Dengan</p>
                <p>Yunita Andriani</p>
                <p>Putri Sulung Bapak Syaiful & Ibu Yuliana</p>
              </tr>
              <Row style={{marginTop:"50px"}}>
                <Col>
                <Button style={{backgroundColor:"#8D7147",borderColor:"#8D7147",color:"fff"}}>Hadir</Button></Col>
                <Col>
                <Button style={{borderColor:"#8D7147",backgroundColor:"#CCC0B0",color:"#8D7147"}}>Hadir</Button></Col>
              </Row>
            </table>
            <section>
              <p style={{fontFamily:"Corinthia",fontSize:"100px",color:"#2B292A"}}>Penyelenggara</p>
              <link href="https://fonts.googleapis.com/css?family=Corinthia" rel="stylesheet"></link>
              
              <Row className="justify-content-md-center">
          <Col
                sm={4}
                className="card-tema"
                style={{ paddingBottom: 20, paddingTop: 50 }}
              >
                <Card className="card-tema" style={{borderRadius:"15px",backgroundColor:"#B5A389"}}>
                  <Card.Img  src={require('../../image/putri.png')} style={{padding:"20px"}}>
                    
                  </Card.Img>
                 <div>
                  <p style={{fontFamily:"Caveat",fontSize:"30px",color:"#2B292A"}}>Yunita Andriani</p>
              <link href="https://fonts.googleapis.com/css?family=Caveat" rel="stylesheet"></link>
                 </div>
                </Card>
                <p style={{color:"#2B292A",fontFamily:"Copse"}}>Putri</p>
                <p style={{color:"#2B292A",fontFamily:"Copse"}}>Bapak Syaiful & Ibu Yuliana</p>
                <Button style={{backgroundColor:"#816C4D",borderColor:"#FFA8BA",borderRadius:"20px"}}>
                <a
                href="."
                style={{ color: "white" }}
                target="_blank" 
                rel="noopener noreferrer"
              >
                <AiFillInstagram/>
              </a>
                  Visit Instagram</Button>
                
          </Col>
          <Col
                sm={4}
                className="card-tema"
                style={{ paddingBottom: 20, paddingTop: 50 }}
              >
                <Card  style={{borderRadius:"15px",backgroundColor:"#B5A389"}}>
                  <Card.Img src={require('../../image/putra.png')} style={{padding:"20px"}}>
                    
                  </Card.Img>
                 <div>
                 <p style={{fontFamily:"Caveat",fontSize:"30px",color:"#2B292A"}}>Ananda Alfian</p>
              <link href="https://fonts.googleapis.com/css?family=Caveat" rel="stylesheet"></link>
                 </div>
                </Card>
                <p style={{color:"#2B292A",fontFamily:"Copse"}}>Putra</p>
                <p style={{color:"#2B292A",fontFamily:"Copse"}}>Bapak Hanafiah & Ibu Satifah</p>
                <link href="https://fonts.googleapis.com/css?family=Copse" rel="stylesheet"></link>
                <Button style={{backgroundColor:"#816C4D",borderColor:"#FFA8BA",borderRadius:"20px"}}>
                <a
                href="."
                style={{ color: "white" }}
                target="_blank" 
                rel="noopener noreferrer"
              >
                <AiFillInstagram/>
              </a>
                  Visit Instagram</Button>
          </Col>

        
          </Row>
          <p style={{zIndex:"2",position:"absolute",right:"630px",top:"2560px",color:"#000"}}>Qs Ar-Rum 21</p>
          <img src={require('../../image/vin4.png')} style={{width:"100%",position:"relative",zIndex:"1"}}/>
          
          <p style={{zIndex:"2",position:"absolute",top:"2400px",color:"#000"}}>“Dan diantara tanda-tanda (kebesarann)-Nya ialah Dia menciptakan pasangan-pasangan untukmu dari jenismu sendiri, agar kamu cenderung dan merasa tentram kepadanya, dan Dia menjadikan di antaramu rasa kasih dan sayang”</p>
           
          <p style={{fontFamily:"Corinthia",fontSize:"100px",color:"#2B292A"}}>Galery</p>
              <link href="https://fonts.googleapis.com/css?family=Corinthia" rel="stylesheet"></link>
            </section>
            <Row className="justify-content-md-center">
            <Col
                sm={2}
                className="card-tema"
                style={{ paddingBottom: 20, paddingTop: 50 ,}}
              >
                <Card  >
                  <Card.Img src={require('../../image/galeri1.png')} >
                    
                  </Card.Img>
                 
                </Card>
          </Col>
          <Col
                sm={4}
                className="card-tema"
                style={{ paddingBottom: 20, paddingTop: 50 }}
              >
                <Card  >
                  <Card.Img src={require('../../image/galeri2.png')} >
                    
                  </Card.Img>
                 
                </Card>
          </Col>
          <Col
                sm={4}
                className="card-tema"
                style={{ paddingBottom: 20, paddingTop: 50 }}
              >
                <Card  >
                  <Card.Img src={require('../../image/galeri3.png')} >
                    
                  </Card.Img>
                 
                </Card>
          </Col>
          <Col
                sm={2}
                className="card-tema"
                style={{ paddingBottom: 20, paddingTop: 50 }}
              >
                <Card  >
                  <Card.Img src={require('../../image/galeri4.png')} >
                    
                  </Card.Img>
                 
                </Card>
          </Col>

          <Col
                sm={3}
                className="card-tema"
                style={{ paddingBottom: 20, paddingTop: 50 ,}}
              >
                <Card  >
                  <Card.Img src={require('../../image/galeri5.png')} >
                    
                  </Card.Img>
                 
                </Card>
          </Col>
          <Col
                sm={3}
                className="card-tema"
                style={{ paddingBottom: 20, paddingTop: 50 }}
              >
                <Card  >
                  <Card.Img src={require('../../image/galeri6.png')} >
                    
                  </Card.Img>
                 
                </Card>
          </Col>
          <Col
                sm={3}
                className="card-tema"
                style={{ paddingBottom: 20, paddingTop: 50 }}
              >
                <Card  >
                  <Card.Img src={require('../../image/galeri7.png')} >
                    
                  </Card.Img>
                 
                </Card>
          </Col>

          <Col
                sm={4}
                className="card-tema"
                style={{ paddingBottom: 20, paddingTop: 50 ,}}
              >
                <Card  >
                  <Card.Img src={require('../../image/galeri8.png')} >
                    
                  </Card.Img>
                 
                </Card>
          </Col>
          <Col
                sm={3}
                className="card-tema"
                style={{ paddingBottom: 20, paddingTop: 50 }}
              >
                <Card  >
                  <Card.Img src={require('../../image/galeri9.png')} >
                    
                  </Card.Img>
                 
                </Card>
          </Col>
          <Col
                sm={4}
                className="card-tema"
                style={{ paddingBottom: 20, paddingTop: 50 }}
              >
                <Card  >
                  <Card.Img src={require('../../image/galeri10.png')} >
                    
                  </Card.Img>
                 
                </Card>
          </Col>

          <Col
                sm={6}
                className="card-tema"
                style={{ paddingBottom: 20, paddingTop: 50 }}
              >
                <Card  >
                  <Card.Img src={require('../../image/galeri11.png')} >
                    
                  </Card.Img>
                 
                </Card>
          </Col>
          <Col
                sm={6}
                className="card-tema"
                style={{ paddingBottom: 20, paddingTop: 50 }}
              >
                <Card  >
                  <Card.Img src={require('../../image/galeri12.png')} >
                    
                  </Card.Img>
                 
                </Card>
          </Col>
            </Row>
            <img src={require('../../image/vin5.png')} style={{width:"100%",position:"relative",zIndex:"1",marginTop:"100px"}}/>
            <section style={{position:"absolute",zIndex:"2",top:"4500px",right:"100px"}}>
            <p style={{fontFamily:"Corinthia",fontSize:"100px",color:"#2B292A"}}>Lokasi</p>
              <link href="https://fonts.googleapis.com/css?family=Corinthia" rel="stylesheet"></link>
              <Row>
                

          <Col
                sm={6}
                className="card-tema"
                style={{ paddingBottom: 20, paddingTop: 50 }}
              >
                <Card  style={{width:"500px"}}>
                  <Card.Img src={require('../../image/vinlokasi.png')}  >
                    
                  </Card.Img>
                 
                </Card>
          </Col>
          <Col
                sm={6}
                className="card-tema"
                style={{ paddingBottom: 20, paddingTop: 50 }}
              >
                <Card  style={{backgroundColor:"rgba(0, 0, 0, 0.0",borderColor:"rgba(0, 0, 0, 0.0",color:"#000"}}>
                  <Card.Text style={{textAlign:"center",fontSize:"15px"}} >
                  <p>Kota Batam</p>
                <p style={{fontFamily:"Corinthia",fontSize:"50px"}}>Akad Nikah</p>
                <link href="https://fonts.googleapis.com/css?family=Corinthia" rel="stylesheet"></link>
                <p>Perum. Legenda Malaka Blok G4 No. 12A Batam Centre - Kota Batam</p>
                <p>22 Desember 2022 09.00</p>
                <p>Sampai Selesai</p>
                <Button style={{backgroundColor:"#8D7147",borderColor:"#fff"}}>Lihat Lokasi</Button>
                  </Card.Text>
                 
                </Card>
          </Col>

          <Col
                sm={8}
                className="card-tema"
                style={{ paddingBottom: 20, paddingTop: 50 }}
              >
                <Card  style={{backgroundColor:"rgba(0, 0, 0, 0.0",borderColor:"rgba(0, 0, 0, 0.0",color:"#000"}}>
                  <Card.Text style={{textAlign:"center",fontSize:"15px"}} >
                  <p>Kota Batam</p>
                <p style={{fontFamily:"Corinthia",fontSize:"50px"}}>Resepsi</p>
                <link href="https://fonts.googleapis.com/css?family=Corinthia" rel="stylesheet"></link>
                <p>Perum. Legenda Malaka Blok G4 No. 12A Batam Centre - Kota Batam</p>
                <p>22 Desember 2022 11.00</p>
                <p>Sampai Selesai</p>
                <Button style={{backgroundColor:"#8D7147",borderColor:"#fff"}}>Lihat Lokasi</Button>
                  </Card.Text>
                 
                </Card  >
                
          </Col>
          <Col
                sm={4}
                className="card-tema"
                style={{ paddingBottom: 20, paddingTop: 50 }}
              >
                <Card  style={{width:"500px"}}>
                  <Card.Img src={require('../../image/vinlokasi.png')} >
                    
                  </Card.Img>
                 
                </Card>
                
          </Col>
          
          
             
             
              </Row>
              
              <p style={{fontFamily:"Corinthia",fontSize:"100px",color:"#444444",marginTop:"40px", marginLeft:"100px"}}>Map Lokasi</p>
            
             <img src={require('../../image/maps.png')} style={{width:"500px",position:"relative",marginLeft:"100px"}}/>
             <p><Button style={{backgroundColor:"#8D7147",borderColor:"#fff",marginTop:"50px",marginLeft:"100px"}}>View Maps</Button></p>
             
            </section>
            
            
            </section>
            <img src={require('../../image/vin6.png')} style={{width:"100%",position:"relative",zIndex:"1",marginTop:"500px"}}/>
             <section style={{position:"absolute",zIndex:"2",top:"6030px",right:"350px"}}>
              <p style={{fontFamily:"Corinthia",fontSize:"100px",color:"#000",marginTop:"170px"}}>Ampau Cashless</p>
              <link href="https://fonts.googleapis.com/css?family=Corinthia" rel="stylesheet"></link>
              <p style={{color:"#000"}}>Tanpa mengurangi rasa hormat , bagi anda yang ingin memberi tanda kasih untuk kami melalui</p>
              <p style={{color:"#000"}}>Mandiri</p>
              <p style={{color:"#000"}}>Yunita Andriani</p>
              <p style={{color:"#000"}}>1020009931731</p>
              <Button style={{backgroundColor:"#8D7147",borderColor:"#fff"}}>
              Copy No. Rekening
              </Button>
              <p style={{marginTop:"20px"}}><Button style={{backgroundColor:"#8D7147",borderColor:"#fff"}}>Konfirmasi Hadiah</Button></p>

              <Card style={{backgroundColor:"#fff",borderColor:"#8D7147",marginTop:"150px"}}>
              <p style={{fontFamily:"Corinthia",fontSize:"100px",color:"#8D7147",marginTop:"40px", marginLeft:"100px"}}>Code  QR  Tamu</p>
              <p><Button style={{backgroundColor:"#8D7147",borderColor:"#8D7147"}}>Buka</Button></p>
              </Card>

              
              </section>
              <img src={require('../../image/vin7.png')} style={{width:"100%",position:"relative",zIndex:"1",marginTop:"500px"}}/>
              <section style={{position:"absolute",zIndex:"2",top:"7050px"}}>
              <p style={{fontFamily:"Corinthia",fontSize:"100px",color:"#000",marginTop:"170px"}}>Protokol Kesehatan</p>
              <link href="https://fonts.googleapis.com/css?family=Corinthia" rel="stylesheet"></link>
              

              <Row className="justify-content-md-center" >
          <Col
                sm={2}
                className="card-tema"
                style={{ paddingBottom: 20, }}
              >
                <Card className="card-tema" style={{borderRadius:"15px",backgroundColor:"#fff",width:"130px"}}>                  <Card.Img  src={require('../../image/protokol1.png')} style={{padding:"20px"}}>
                    
                  </Card.Img>
                 <div>
                  <p style={{fontFamily:"Caveat",fontSize:"20px"}}>Keep Distance</p>
              <link href="https://fonts.googleapis.com/css?family=Caveat" rel="stylesheet"></link>
                 </div>
                </Card>
                
          </Col>
          <Col
                sm={2}
                className="card-tema"
                style={{ paddingBottom: 20,  marginLeft:"10px"}}
              >
                <Card  style={{borderRadius:"15px",backgroundColor:"#fff",width:"130px"}}>
                  <Card.Img src={require('../../image/protokol2.png')} style={{padding:"20px"}}>
                    
                  </Card.Img>
                 <div>
                 <p style={{fontFamily:"Caveat",fontSize:"20px"}}>Do not Handshake</p>
              <link href="https://fonts.googleapis.com/css?family=Caveat" rel="stylesheet"></link>
                 </div>
                </Card>
          </Col>
          <Col
                sm={2}
                className="card-tema"
                style={{ paddingBottom: 20,  marginLeft:"10px"}}
              >
                <Card  style={{borderRadius:"15px",backgroundColor:"#fff",width:"130px"}}>
                  <Card.Img src={require('../../image/protokol3.png')} style={{padding:"20px"}}>
                    
                  </Card.Img>
                 <div>
                 <p style={{fontFamily:"Caveat",fontSize:"20px"}}>Wish Your Hands</p>
              <link href="https://fonts.googleapis.com/css?family=Caveat" rel="stylesheet"></link>
                 </div>
                </Card>
          </Col>
          <Col
                sm={2}
                className="card-tema"
                style={{ paddingBottom: 20,  marginLeft:"10px"}}
              >
                <Card  style={{borderRadius:"15px",backgroundColor:"#fff",width:"130px"}}>
                  <Card.Img src={require('../../image/protokol4.png')} style={{padding:"20px"}}>
                    
                  </Card.Img>
                 <div>
                 <p style={{fontFamily:"Caveat",fontSize:"20px"}}>Avoid Covid</p>
              <link href="https://fonts.googleapis.com/css?family=Caveat" rel="stylesheet"></link>
                 </div>
                </Card>
          </Col>
          <Col
                sm={2}
                className="card-tema"
                style={{ paddingBottom: 20,  marginLeft:"10px"}}
              >
                <Card  style={{borderRadius:"15px",backgroundColor:"#fff",width:"130px"}}>
                  <Card.Img src={require('../../image/protokol5.png')} style={{padding:"20px"}}>
                    
                  </Card.Img>
                 <div>
                 <p style={{fontFamily:"Caveat",fontSize:"18px"}}>Wear Mask Property</p>
              <link href="https://fonts.googleapis.com/css?family=Caveat" rel="stylesheet"></link>
                 </div>
                </Card>
          </Col>
        
          </Row>
<section style={{backgroundColor:"#fff"}}>
          <p style={{fontFamily:"Corinthia",fontSize:"100px",color:"#000",marginTop:"40px",backgroundColor:'#fff'}}>Komentar</p>
          <section style={{textAlign:"left",marginLeft:"100px",backgroundColor:"#fff"}}>
          <p><strong>Alan & Family</strong></p>
          Dear Yulian and Alfi, Congratulation on your sweet moment of togetherness, My god pour of you with his love endlesslyy. Were very sorry that we cant there for long due to the reason beyond our control. Put god as your leader on every move you both make. Be blessed amen
          <p>1 hour ago</p>

          <p style={{marginTop:"30px"}}><strong>Esti Ananda</strong></p>
          Happy wedding bep, semoga menjadi keluarga yang sakinah mawaddah warohmah
          <p>1 hour ago</p>

          <p style={{marginTop:"30px"}}><strong>Endah & Family</strong></p>
          Dear Yulian and Alfi, Congratulation on your sweet moment of togetherness, My god pour of you with his love endlesslyy. Were very sorry that we cant there for long due to the reason beyond our control. Put god as your leader on every move you both make. Be blessed amen
          <p>1 hour ago</p>

          <h1 style={{textAlign:"center",color:"#8D7147"}}>Berikan Ucapan</h1>
          <Form style={{textAlign:"center"}}>
            <input placeholder='Name' type="text"></input>
            <br></br>
            <input placeholder='Ucapan & Doa' style={{height:"60px",marginTop:"30px",backgrounColor:"#FFA8BA"}}type="text"></input>
          <br></br>
          <Button style={{backgroundColor:"#8D7147",borderColor:"#fff",marginTop:"30px",borderRadius:"20px"}}>Kirim</Button></Form>
          
          </section>
          <img src={require('../../image/vin8.png')} style={{width:"100%",marginTop:"30px"}}/>
              </section>
                </section>
     </section>
     
      );
    }

export default Vin2;