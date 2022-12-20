import React from "react";
import { Container, Card, Button } from "react-bootstrap";
import Layout from "../../components/Layout";
import icon from "../../Assets/icon.png";

function MemberShip() {
  return (
    <Layout title="Tanam Uang | MemberShip" showFooter showNavbar>
      <Container fluid className="home-about-section" id="about">
        <Container>
          <Card
            className="bg-dark text-light"
            style={{
              height: "700px",
              width: "700px",
              margin: "-115px",
              color: "#332F2F",
              marginTop: "100px",
              left: "610px",
              top: "100px",
              border: "1px solid white",
            }}
          >
            <p
              style={{
                textAlign: "left",
                marginLeft: "20px",
                padding: "50px",
                fontSize: "30px",
                textTransform: "uppercase",
                fontWeight: "bold",
              }}
            >
              MemberShip<br></br>
              <p
                href="."
                style={{
                  fontSize: "14px",
                  textDecoration: "none",
                }}
              >
                Belum jadi member?<a href=".">Yuk, Beli Membership Sekarang</a>
              </p>
            </p>
            <hr style={{ marginTop: "-40px", color: "#7282D9" }}></hr>

            <section
              style={{
                float: "center",
                marginTop: "50px",
                marginRight: "200px",
              }}
            >
              <p style={{ fontSize: "18px" }}>
                <a href="/"></a>
                Dengan jadi member kamu bisa mendapatkan akses ke
              </p>
              <p style={{ textTransform: "uppercase", fontSize: "20px" }}>
                <a href="/">
                  <img
                    alt="img"
                    style={{ width: "64px", padding: "2px" }}
                    src={icon}
                  ></img>
                </a>
                700+ Video Modul Pembelajaran
              </p>
            </section>
          </Card>
          <Card
            className="bg-dark text-light"
            style={{
              height: "500px",
              width: "300px",
              left: "300px",
              margin: "-115px",
              color: "#332F2F",
              marginBottom: "500px",
              marginTop: "-600px",
              border: "1px solid white",
            }}
          >
            <Card.Img
              variant="top"
              src={require("../../image/testi1.png")}
              style={{
                width: "100px",
                marginTop: "20px",
                margin: "80px auto",
                zIndex: "1",
                borderRadius: "50%",
              }}
            />

            <Card.Text>
              <p
                style={{
                  marginLeft: "95px",
                  marginTop: "-60px",
                  fontSize: "20px",
                }}
              >
                Back to Bed
              </p>
            </Card.Text>
            <hr style={{ color: "#7282D9" }}></hr>
            <Button
              style={{
                margin: "50px auto",
                width: "70px",
                height: "25px",
                marginLeft: "210px",
                marginTop: "-180px",
                fontSize: "10px",
              }}
            >
              Change
            </Button>
            <div
              className="menu-hover"
              style={{
                marginTop: "120px",
                textAlign: "justify",
                marginLeft: "80px",
                fontWeight: "bold",
              }}
            >
              <ul>
                <a href="/Profile">Profile</a>
              </ul>

              <ul>
                <a href="/MemberShip">Membership</a>
              </ul>

              <ul>
                <a href="/RiwayatTransaksi">Riwayat Transaksi</a>
              </ul>

              <ul>
                <a href=".">Logout</a>
              </ul>
            </div>
            <Card.Text></Card.Text>
          </Card>
        </Container>
      </Container>
    </Layout>
  );
}
export default MemberShip;
