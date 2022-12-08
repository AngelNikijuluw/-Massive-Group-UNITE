import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import logo from "../Assets/logo.png";
import {
  AiOutlineTwitter,
  AiFillInstagram,
  AiTwotoneEnvironment,
  AiOutlineWhatsApp,
  AiFillMail,
  AiOutlineFacebook,
  AiOutlineYoutube,
} from "react-icons/ai";

function Footer() {
  return (
    <Container fluid className="footer">
      <Row>
        <Col md="4" className="footer-copywright">
          <img src={logo} alt="img"></img>
          <div>
            <ul>
              <a href="/">
                <AiTwotoneEnvironment size={20} />
              </a>
              SOHO CAPITAL podomoro city
            </ul>
            <ul>
              <a href="/">
                <AiOutlineWhatsApp size={20} />
              </a>
              +6281456778920
            </ul>
            <ul>
              <a href="/">
                <AiFillMail size={20} />
              </a>
              cs@tanamuang.id
            </ul>
          </div>
        </Col>
        <Col md="2" className="footer-copywright">
          <h3
            style={{
              textAlign: "justify",
              fontWeight: "bold",
              paddingTop: "20px",
              paddingBottom: "20px",
            }}
          >
            Tanam Uang
          </h3>
          <div style={{ textAlign: "justify" }}>
            <ul>
              <a href=".">Edukasi</a>
            </ul>
            <ul>
              <a href=".">Event</a>
            </ul>
            <ul>
              <a href=".">Jadi Member</a>
            </ul>
            <ul>
              <a href=".">Artikel</a>
            </ul>
          </div>
        </Col>

        <Col md="2" className="footer-copywright">
          <h3
            style={{
              textAlign: "justify",
              fontWeight: "bold",
              paddingTop: "20px",
              paddingBottom: "20px",
            }}
          >
            Bantuan & panduan
          </h3>
          <div style={{ textAlign: "justify" }}>
            <ul>
              <a href=".">Syarat dan ketentuan</a>
            </ul>
            <ul>
              <a href=".">Kebijakan privasi</a>
            </ul>
            <ul>
              <a href=".">Komunitas</a>
            </ul>
            <ul>
              <a href=".">Hubungi kami</a>
            </ul>
          </div>
        </Col>
        <Col md="4" className="footer-body">
          <h3>Follow Us</h3>
          <ul className="footer-icons">
            <li className="social-icons">
              <a
                href="."
                style={{ color: "white" }}
                target="_blank"
                rel="noopener noreferrer"
              >
                <AiOutlineFacebook size={30} />
              </a>
            </li>
            <li className="social-icons">
              <a
                href="."
                style={{ color: "white" }}
                target="_blank"
                rel="noopener noreferrer"
              >
                <AiFillInstagram size={30} />
              </a>
            </li>
            <li className="social-icons">
              <a
                href="."
                style={{ color: "white" }}
                target="_blank"
                rel="noopener noreferrer"
              >
                <AiOutlineTwitter size={30} />
              </a>
            </li>
            <li className="social-icons">
              <a
                href="."
                style={{ color: "white" }}
                target="_blank"
                rel="noopener noreferrer"
              >
                <AiOutlineYoutube size={30} />
              </a>
            </li>
            <h3
              style={{
                paddingTop: "80px",
                fontSize: "16px",
                fontWeight: "bold",
              }}
            >
              TANAM UANG - 2022
            </h3>
          </ul>
        </Col>
      </Row>
    </Container>
  );
}

export default Footer;
