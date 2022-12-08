import React from "react";
import { Container, Row, Col, Card, CardGroup,Button,Form,ButtonToolbar,Dropdown,ButtonGroup,DropdownButton } from "react-bootstrap";
import { Link,NavLink} from "react-router-dom";
import Layout from "../../components/Layout";
function Course1() {
    return (
        <Layout title="Tanam Uang | Course" showFooter showNavbar>
        <Container fluid className="home-about-section" id="about">
        <Container>
        
            <section>
            <p><span style={{ fontSize: "15px", color: "#ffff", fontWeight: "bold", fontFamily: "Inter", float:"left"}}>Event <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-chevron-right" viewBox="0 0 16 16">
            <path fill-rule="evenodd" d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z"/>
            </svg></span><span style={{ color: "#7883BF", fontWeight: "bold", fontFamily: "Inter", fontSize: "16px", marginLeft: "10px", float:"left" }}>Course</span></p>
            </section>
            <br></br>
            <br></br>
            <br></br>
            
            <section>
            <Card style={{backgroundColor:"#292828",width:"610px"}}>
            <Card.Text style={{color:"white",paddingLeft:"10px"}}>
            Ingin belajar? join member sekarang dan dapatkan promonya!
            <Button style={{marginLeft:"20px"}}>Jadi Member</Button>
            </Card.Text>
            </Card>
            </section>
        
        <section style={{float:"left",marginTop:"120px",marginBottom:"1500px", marginRight:"20px"}}>
        <p style={{color:"white"}}>Filter</p>
        <ButtonGroup vertical style={{width:"120px"}}>

        <DropdownButton
        as={ButtonGroup}
        title="Proteksi"
        id="bg-vertical-dropdown-1"
        >
        <Dropdown.Item eventKey="1">Asuransi</Dropdown.Item>
        </DropdownButton>

        <DropdownButton
        as={ButtonGroup}
        title="Investasi"
        id="bg-vertical-dropdown-2"
        >
        <Dropdown.Item eventKey="1">Saham</Dropdown.Item>
        <Dropdown.Item eventKey="2">Reksa Dana</Dropdown.Item>
        <Dropdown.Item eventKey="3">Obligasi</Dropdown.Item>
        <Dropdown.Item eventKey="4">Cryptocurrency</Dropdown.Item>
        </DropdownButton>

        <DropdownButton
            as={ButtonGroup}
        title="Ekonomi"
        id="bg-vertical-dropdown-3"
        >
            <Dropdown.Item eventKey="1">Ruang Lingkup Ekonomi</Dropdown.Item>
            <Dropdown.Item eventKey="2">Ekonomi Makro</Dropdown.Item>
        </DropdownButton>
        <Button>Bisnis</Button>
        <Button>Umum</Button>
    </ButtonGroup>
        </section>
        <section >
        
        <ButtonToolbar aria-label="Toolbar with button groups">
        <ButtonGroup className="me-2" aria-label="First group" style={{marginTop:"100px"}}>
        <Link to="/HomeCourse"><Button variant="transparant" style={{color:"white"}}>Akademi Online</Button> <Button variant="transparant" style={{color:"white"}}>Video Akademi</Button> </Link>
        </ButtonGroup>
        </ButtonToolbar>


            <Row style={{ color:"#ffff"}}>
            <img src={require('../../image/garis2.png')} />
                <Col sm><Card style={{ width: '18rem' ,backgroundColor:"#332F2F",boxShadow: "3px 2px 1px white",marginTop:"20px"}}>
                <Card.Img variant="top" src={require('../../image/vidmember1.png')} />
                <Card.Text >
                00:30:14 |<span style={{marginLeft:"10px"}}>4 chapters</span>
                </Card.Text>
            <Card.Body>
                <Card.Title style={{textAlign:"left"}}>Ubah inflasi menjadi Investasi....
            </Card.Title>
            </Card.Body>
            <Card.Body >
            <Button variant="primary" style={{width:"80px",borderRadius:"20px",fontSize:"12px"}}>Investasi</Button><span style={{marginLeft:"10px"}}><Button variant="success" style={{width:"80px",borderRadius:"20px",fontSize:"12px"}}>Obligasi</Button></span>
            </Card.Body>
            </Card>
            </Col>
            
                <Col sm><Card style={{ width: '18rem' ,backgroundColor:"#332F2F",boxShadow: "3px 2px 1px white",marginTop:"20px"}}>
                <Card.Img variant="top" src={require('../../image/vidmember1.png')} />
                <Card.Text >
                00:30:14 |<span style={{marginLeft:"10px"}}>4 chapters</span>
                </Card.Text>
            <Card.Body>
                <Card.Title style={{textAlign:"left"}}>Ubah inflasi menjadi Investasi....
            </Card.Title>
            </Card.Body>
            <Card.Body >
            <Button variant="primary" style={{width:"80px",borderRadius:"20px",fontSize:"12px"}}>Investasi</Button><span style={{marginLeft:"10px"}}><Button variant="success" style={{width:"80px",borderRadius:"20px",fontSize:"12px"}}>Obligasi</Button></span>
            </Card.Body>
            </Card>
            </Col>

                <Col sm><Card style={{ width: '18rem' ,backgroundColor:"#332F2F",boxShadow: "3px 2px 1px white",marginTop:"20px"}}>
                <Card.Img variant="top" src={require('../../image/vidmember1.png')} />
                <Card.Text >
                00:30:14 |<span style={{marginLeft:"10px"}}>4 chapters</span>
                </Card.Text>
            <Card.Body>
                <Card.Title style={{textAlign:"left"}}>Ubah inflasi menjadi Investasi....
            </Card.Title>
            </Card.Body>
            <Card.Body >
            <Button variant="primary" style={{width:"80px",borderRadius:"20px",fontSize:"12px"}}>Investasi</Button><span style={{marginLeft:"10px"}}><Button variant="success" style={{width:"80px",borderRadius:"20px",fontSize:"12px"}}>Obligasi</Button></span>
            </Card.Body>
            </Card>
            </Col>
            </Row>


            <Row style={{marginTop:"100px", color:"#ffff"}}>
                <Col sm><Card style={{ width: '18rem' ,backgroundColor:"#332F2F",boxShadow: "3px 2px 1px white"}}>
                <Card.Img variant="top" src={require('../../image/vidmember2.png')} />
                <Card.Text >
                00:30:14 |<span style={{marginLeft:"10px"}}>4 chapters</span>
                </Card.Text>
            <Card.Body>
                <Card.Title>Asuransi itu proteksi bukan investasi....
            </Card.Title>
            </Card.Body>
            <Card.Body >
            <Button variant="primary" style={{width:"80px",borderRadius:"20px",fontSize:"12px"}}>Investasi</Button><span style={{marginLeft:"10px"}}><Button variant="success" style={{width:"80px",borderRadius:"20px",fontSize:"12px"}}>Obligasi</Button></span>
            </Card.Body>
            </Card>
            </Col>
            
                <Col sm><Card style={{ width: '18rem' ,backgroundColor:"#332F2F",boxShadow: "3px 2px 1px white"}}>
                <Card.Img variant="top" src={require('../../image/vidmember2.png')} />
                <Card.Text >
                00:30:14 |<span style={{marginLeft:"10px"}}>4 chapters</span>
                </Card.Text>
            <Card.Body>
                <Card.Title>Asuransi itu proteksi bukan investasi....
            </Card.Title>
            </Card.Body>
            <Card.Body >
            <Button variant="primary" style={{width:"80px",borderRadius:"20px",fontSize:"12px"}}>Investasi</Button><span style={{marginLeft:"10px"}}><Button variant="success" style={{width:"80px",borderRadius:"20px",fontSize:"12px"}}>Obligasi</Button></span>
            </Card.Body>
            </Card>
            </Col>

                <Col sm><Card style={{ width: '18rem' ,backgroundColor:"#332F2F",boxShadow: "3px 2px 1px white",}}>
                <Card.Img variant="top" src={require('../../image/vidmember2.png')} />
                <Card.Text >
                00:30:14 |<span style={{marginLeft:"10px"}}>4 chapters</span>
                </Card.Text>
            <Card.Body>
                <Card.Title>Asuransi itu proteksi bukan investasi....
            </Card.Title>
            </Card.Body>
            <Card.Body >
            <Button variant="primary" style={{width:"80px",borderRadius:"20px",fontSize:"12px"}}>Investasi</Button><span style={{marginLeft:"10px"}}><Button variant="success" style={{width:"80px",borderRadius:"20px",fontSize:"12px"}}>Obligasi</Button></span>
            </Card.Body>
            </Card>
            </Col>
            </Row>


            <Row style={{marginTop:"100px", color:"#ffff"}}>
                <Col sm><Card style={{ width: '18rem' ,backgroundColor:"#332F2F",boxShadow: "3px 2px 1px white"}}>
                <Card.Img variant="top" src={require('../../image/vidmember3.png')} />
                <Card.Text >
                00:30:14 |<span style={{marginLeft:"10px"}}>4 chapters</span>
                </Card.Text>
            <Card.Body>
                <Card.Title>Memilih investasi di tengah fluktuasi...
            </Card.Title>
            </Card.Body>
            <Card.Body >
            <Button variant="primary" style={{width:"80px",borderRadius:"20px",fontSize:"12px"}}>Investasi</Button><span style={{marginLeft:"10px"}}><Button variant="success" style={{width:"80px",borderRadius:"20px",fontSize:"12px"}}>Obligasi</Button></span>
            </Card.Body>
            </Card>
            </Col>
            
                <Col sm><Card style={{ width: '18rem' ,backgroundColor:"#332F2F",boxShadow: "3px 2px 1px white"}}>
                <Card.Img variant="top" src={require('../../image/vidmember3.png')} />
                <Card.Text >
                00:30:14 |<span style={{marginLeft:"10px"}}>4 chapters</span>
                </Card.Text>
            <Card.Body >
                <Card.Title>Memilih investasi di tengah fluktuasi...
            </Card.Title>
            </Card.Body>
            <Card.Body >
            <Button variant="primary" style={{width:"80px",borderRadius:"20px",fontSize:"12px"}}>Investasi</Button><span style={{marginLeft:"10px"}}><Button variant="success" style={{width:"80px",borderRadius:"20px",fontSize:"12px"}}>Obligasi</Button></span>
            </Card.Body>
            </Card>
            </Col>

                <Col sm><Card style={{ width: '18rem' ,backgroundColor:"#332F2F",boxShadow: "3px 2px 1px white"}}>
                <Card.Img variant="top" src={require('../../image/vidmember3.png')} />
                <Card.Text >
                00:30:14 |<span style={{marginLeft:"10px"}}>4 chapters</span>
                </Card.Text>
            <Card.Body>
                <Card.Title>Memilih investasi di tengah fluktuasi...
            </Card.Title>
            </Card.Body>
            <Card.Body >
            <Button variant="primary" style={{width:"80px",borderRadius:"20px",fontSize:"12px"}}>Investasi</Button><span style={{marginLeft:"10px"}}><Button variant="success" style={{width:"80px",borderRadius:"20px",fontSize:"12px"}}>Obligasi</Button></span>
            </Card.Body>
            </Card>
            </Col>
            </Row>

            <Row style={{marginTop:"100px", color:"#ffff"}}>
                <Col sm><Card style={{ width: '18rem' ,backgroundColor:"#332F2F",boxShadow: "3px 2px 1px white"}}>
                <Card.Img variant="top" src={require('../../image/vidmember4.png')} />
                <Card.Text >
                00:30:14 |<span style={{marginLeft:"10px"}}>4 chapters</span>
                </Card.Text>
            <Card.Body>
                <Card.Title>Strategi bisnis modal kecil....
            </Card.Title>
            </Card.Body>
            <Card.Body >
            <Button variant="primary" style={{width:"80px",borderRadius:"20px",fontSize:"12px"}}>Investasi</Button><span style={{marginLeft:"10px"}}><Button variant="success" style={{width:"80px",borderRadius:"20px",fontSize:"12px"}}>Obligasi</Button></span>
            </Card.Body>
            </Card>
            </Col>
            
                <Col sm><Card style={{ width: '18rem' ,backgroundColor:"#332F2F",boxShadow: "3px 2px 1px white"}}>
                <Card.Img variant="top" src={require('../../image/vidmember4.png')} />
                <Card.Text >
                00:30:14 |<span style={{marginLeft:"10px"}}>4 chapters</span>
                </Card.Text>
            <Card.Body >
                <Card.Title>Strategi bisnis modal kecil....
            </Card.Title>
            </Card.Body>
            <Card.Body >
            <Button variant="primary" style={{width:"80px",borderRadius:"20px",fontSize:"12px"}}>Investasi</Button><span style={{marginLeft:"10px"}}><Button variant="success" style={{width:"80px",borderRadius:"20px",fontSize:"12px"}}>Obligasi</Button></span>
            </Card.Body>
            </Card>
            </Col>

                <Col sm><Card style={{ width: '18rem' ,backgroundColor:"#332F2F",boxShadow: "3px 2px 1px white"}}>
                <Card.Img variant="top" src={require('../../image/vidmember4.png')} />
                <Card.Text >
                00:30:14 |<span style={{marginLeft:"10px"}}>4 chapters</span>
                </Card.Text>
            <Card.Body>
                <Card.Title>Strategi bisnis modal kecil....
            </Card.Title>
            </Card.Body>
            <Card.Body >
            <Button variant="primary" style={{width:"80px",borderRadius:"20px",fontSize:"12px"}}>Investasi</Button><span style={{marginLeft:"10px"}}><Button variant="success" style={{width:"80px",borderRadius:"20px",fontSize:"12px"}}>Obligasi</Button></span>
            </Card.Body>
            </Card>
            </Col>
            </Row>
        </section>
        
        </Container>
        </Container>
        </Layout>
    );
}
export default Course1;
