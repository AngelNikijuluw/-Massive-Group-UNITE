import React from "react";
import { Container, Row, Col,Button,Card,Form } from "react-bootstrap";
import Layout from "../../components/Layout";
import {AiFillPlayCircle,AiOutlineCaretDown} from "react-icons/ai";

function ContentCourse9() {
    return (
      <section>
      <Layout title="Tanam Uang | Home" showFooter showNavbar>
        <Container fluid className="home-section" id="home">
          <Container className="home-content">
            <Row>
              <Col md={7} className="home-header">
                <h1 style={{ paddingBottom: 15 }} className="heading">
                Mengenal Konsep 

                  
                </h1>

                <h1 className="heading-name">
                Keseimbangan (Ekuilibrium)
                </h1>

                <div style={{ padding: 20, textAlign: "left" }}>
                  
                </div>
                <p style={{marginLeft:"60px"}}>Akses semua materi dengan</p>
                <Button  style={{width:"100px",borderRadius:"20px",fontSize:"12px",color: "white",
                    backgroundColor: "#5E6BAD"}}>Bisnis</Button><span style={{marginLeft:"10px",}}><Button style={{width:"100px",borderRadius:"20px",fontSize:"12px",color: "white",
                    backgroundColor: "#5E6BAD"}}>6 Chapters</Button></span><span style={{marginLeft:"10px"}}><Button  style={{width:"100px",borderRadius:"20px",fontSize:"12px",color: "white",
                    backgroundColor: "#5E6BAD"}}>00:15:00 </Button></span>
                <button 
                  style={{
                    color: "white",
                    marginLeft: "50px",
                    backgroundColor: "#5E6BAD",
                    marginTop:"20px",
                    borderRadius:"10px"
                  }}
                >
                  Jadi Member
                </button>
              </Col>

              <Col md={5} style={{ paddingBottom: 20, paddingLeft: 100 }}>
                <img src={require('../../image/course3_3.jpeg')} 
                  alt="home pic"
                  className="img-fluid"
                  style={{ maxHeight: "450px", zIndex:"1",position:"relative",filter:"contrast(50%)"}}
                  
                />
                <AiFillPlayCircle style={{height:"60px",width:"80px",zIndex:"2",position:"absolute",right:"250px",top:"250px"}}/>
                <h3 style={{height:"100px",width:"250px",zIndex:"2",position:"absolute",right:"200px",top:"300px"}}>
                <strong>Mengenal Konsep</strong>
                <strong> Keseimbangan (Ekuilibrium)</strong>
                </h3>
              </Col>
              
            </Row>
          </Container>
        </Container>
        <Container>
        <section style={{marginBottom:"500px",marginTop:"100px"}}>
        <div style={{backgroundColor:"transparent",float:"left",width:"700px"}}>
        <Card style={{backgroundColor:"transparent", color:"white",textAlign:"left",marginRight:"200px"}}>
        <h3 >Tentang Cours</h3>
        <p>
        Permintaan dan penawaran barang dan jasa akan membentuk harga keseimbang atau ekuiulibrium. Pada kenyataannya, titik keseimbangan terjadi di kehidupan kamu setiap hari. Keseimbangan yang dimaksud adalah kuantitas dan harga yang sama-sama diterima penjual dan pembeli dan tidak ada yang ingin menambah kuantitas permintaan dan penawarannya.</p>
        <p>Modul Mengenal Konsep Keseimbangan (Ekuilibrium) ini cocok untuk kamu yang mau mengenal lebih dalam konsep ekuilibrium. Melalui modul ini, kamu akan mempelajari:</p>
        <ol>
            <li>Konsep ekuilibrium</li>
            <li>Faktor pengubah titik keseimbangan</li>
            <li>Menghitung titik ekuilibrium</li>
        </ol>
        Setelah menyelesaikan modul ini, kamu dapat mengerti konsep ekuilibrium dan mengerti konsep pengubah harga dan kuantitas barang dalam ekonomi. Selamat belajar!</Card>
    </div>
    <div style={{color:"white"}}>
    Struktur Cours
    <Card style={{backgroundColor:"transparent", textAlign:"left",width:"400px", paddingTop:"10px"}}>
      <Card style={{backgroundColor:"#332F2F",boxShadow:"1px 2px 3px white"}}>
        <Form style={{float:"right", }}>
      <fieldset disabled>
        <Form.Group className="mb-3" >
        <Card.Header>Mengenal Konsep Keseimbangan (Ekuilibrium) <AiOutlineCaretDown/></Card.Header>
          <Form.Check 
            type="checkbox"
            id="disabledFieldsetCheck"
            label="Bisnis Tidak Perlu Modal Besar"
          />
          <Form.Check
            type="checkbox"
            id="disabledFieldsetCheck"
            label="Riset"
          />
          <Form.Check
            type="checkbox"
            id="disabledFieldsetCheck"
            label="Produk"
          />
          <Form.Check
            type="checkbox"
            id="disabledFieldsetCheck"
            label="Pemasaran"
          />
          <Form.Check
            type="checkbox"
            id="disabledFieldsetCheck"
            label="Operasional"
          />
          <Form.Check
            type="checkbox"
            id="disabledFieldsetCheck"
            label="Lean"
          />
        </Form.Group>
      </fieldset>
    </Form></Card></Card></div>
    </section>

        </Container>
      </Layout>
    </section>
    );
}
export default ContentCourse9;
