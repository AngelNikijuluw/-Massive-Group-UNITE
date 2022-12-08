import React from "react";
import { Container, Row, Col, Card, CardGroup, Button } from "react-bootstrap";

function Home2() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <section>
          <Row>
            <div className="col-8">
              <Card
                className="bg-dark text-white  "
                style={{ top: "150px", float: "left" }}
              >
                <Card.Img src={require("../../image/video1.jpg")} />
                <Card.ImgOverlay>
                  <Card.Title>
                    <h2 style={{ marginTop: "220px" }}>
                      <p>
                        <span
                          style={{
                            color: "#ffff",
                            fontWeight: "bold",
                            fontFamily: "Inter",
                          }}
                        >
                          CARA ATUR{" "}
                        </span>
                      </p>
                      <p>
                        <span
                          style={{
                            color: "#ffff",
                            fontWeight: "bold",
                            fontFamily: "Inter",
                          }}
                        >
                          KEUANGAN{" "}
                        </span>
                      </p>
                      <Button
                        style={{
                          color: "black",
                          fontWeight: "bold",
                          fontFamily: "Inter",
                          backgroundColor: "#5E6BAD",
                          webkitboxStroke: "1px white",
                          boxShadow: "3px 2px 1px black",
                        }}
                      >
                        Untuk Pemula
                      </Button>
                    </h2>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="50"
                      height="50"
                      fill="currentColor"
                      class="bi bi-play-circle-fill"
                      viewBox="0 0 16 16"
                      style={{
                        position: "absolute",
                        left: "350px",
                        top: "200px",
                      }}
                    >
                      <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM6.79 5.093A.5.5 0 0 0 6 5.5v5a.5.5 0 0 0 .79.407l3.5-2.5a.5.5 0 0 0 0-.814l-3.5-2.5z" />
                    </svg>
                  </Card.Title>
                  <Card.Text>
                    <h5>
                      <p>
                        <span style={{ color: "#ffff", fontFamily: "Inter" }}>
                          Jessica Aurel
                        </span>
                      </p>
                    </h5>
                  </Card.Text>
                </Card.ImgOverlay>
              </Card>
            </div>
            <div
              className=" col-4"
              style={{ float: "right", marginTop: "160px" }}
            >
              <h1>
                <p>
                  <span
                    style={{
                      fontSize: "30px",
                      color: "#ffff",
                      fontWeight: "bold",
                      fontFamily: "Inter",
                    }}
                  >
                    Belajar Cara
                  </span>
                  <span
                    style={{
                      color: "#7883BF",
                      fontWeight: "bold",
                      fontFamily: "Inter",
                      fontSize: "30px",
                      marginLeft: "10px",
                    }}
                  >
                    Mengatur
                  </span>
                </p>
                <p>
                  <span
                    style={{
                      fontSize: "30px",
                      color: "#7883BF",
                      fontWeight: "bold",
                      fontFamily: "Inter",
                    }}
                  >
                    Fondasi Keuangan,
                  </span>
                </p>
                <p>
                  <span
                    style={{
                      fontSize: "30px",
                      color: "#ffff",
                      fontWeight: "bold",
                      fontFamily: "Inter",
                    }}
                  >
                    Bebas dari Hutang
                  </span>
                </p>
                <p>
                  <span
                    style={{
                      fontSize: "30px",
                      color: "#ffff",
                      fontWeight: "bold",
                      fontFamily: "Inter",
                    }}
                  >
                    dan Belajar
                  </span>
                </p>
                <p>
                  <span
                    style={{
                      fontSize: "30px",
                      color: "#7883BF",
                      fontWeight: "bold",
                      fontFamily: "Inter",
                    }}
                  >
                    Berinvestasi
                  </span>
                </p>
                <Button
                  style={{
                    fontFamily: "Inter",
                    fontWeight: "bold",
                    backgroundColor: "#5E6BAD",
                    webkitboxStroke: "1px white",
                    boxShadow: "3px 2px 1px black",
                  }}
                >
                  Jadi Member
                </Button>
              </h1>
            </div>
          </Row>
        </section>

        <section style={{ marginTop: "90px", width: "1455px" }}>
          <Row style={{}}>
            <Col xs={6} md={2}>
              <Card
                className="xs=6 md=4 card bg-dark card text-light"
                style={{ boxShadow: "3px 2px 1px white" }}
              >
                <Card.Img src={require("../../image/video2.png")} />
                <Card.ImgOverlay>
                  &nbsp;
                  <Card.Title
                    style={{
                      fontWeight: "bold",
                      fontFamily: "Inter",
                      textAlign: "center",
                      color: "#ffff",
                      fontSize: "20px",
                    }}
                  >
                    Cara Memulai Investasi
                  </Card.Title>
                  <Card.Text
                    style={{
                      fontFamily: "Inter",
                      color: "#ffff",
                      fontWeight: "bold",
                      textShadow: "3px 2px 1px black",
                      fontSize: "11px",
                    }}
                  >
                    MENGENAL SIKLUS EKONOMI DANSIKLUS PASAR SAHAM
                  </Card.Text>
                  <Card.Text style={{ fontFamily: "Inter", color: "#ffff" }}>
                    John Wilson
                  </Card.Text>
                </Card.ImgOverlay>
              </Card>
            </Col>
            <Col xs={6} md={2}>
              <Card
                className="xs=6 md=4 card bg-dark card text-light"
                style={{ boxShadow: "3px 2px 1px white" }}
              >
                <Card.Img
                  variant="top"
                  src={require("../../image/video3.png")}
                />
                <Card.ImgOverlay>
                  &nbsp;
                  <Card.Title
                    style={{
                      fontWeight: "bold",
                      fontFamily: "Inter",
                      textAlign: "center",
                      color: "#ffff",
                      fontSize: "18px",
                    }}
                  >
                    Mengenal Siklus Ekonomi Pasar Saham
                  </Card.Title>
                  <Card.Text
                    style={{
                      fontFamily: "Inter",
                      color: "#ffff",
                      fontWeight: "bold",
                      textShadow: "3px 2px 1px black",
                      fontSize: "11px",
                    }}
                  >
                    CARA MEMULAI INVESTASI BAGI PEMULA
                  </Card.Text>
                  <Card.Text style={{ fontFamily: "Inter", color: "#ffff" }}>
                    Aulia Vanessa
                  </Card.Text>
                </Card.ImgOverlay>
              </Card>
            </Col>
            <Col xs={6} md={2}>
              <Card
                className="xs=6 md=4 card bg-dark card text-light"
                style={{ boxShadow: "3px 2px 1px white" }}
              >
                <Card.Img
                  variant="top"
                  src={require("../../image/video4.png")}
                />
                <Card.ImgOverlay>
                  &nbsp;
                  <Card.Title
                    style={{
                      fontWeight: "bold",
                      fontFamily: "Inter",
                      textAlign: "center",
                      color: "#ffff",
                      fontSize: "20px",
                    }}
                  >
                    Bangun Bisnis untuk Pemula
                  </Card.Title>
                  <Card.Text
                    style={{
                      fontFamily: "Inter",
                      color: "#ffff",
                      fontWeight: "bold",
                      textShadow: "3px 2px 1px black",
                      fontSize: "11px",
                    }}
                  >
                    MENGENAL SIKLUS EKONOMI DANSIKLUS PASAR SAHAM
                  </Card.Text>
                  <Card.Text style={{ fontFamily: "Inter", color: "#ffff" }}>
                    John Wilson
                  </Card.Text>
                </Card.ImgOverlay>
              </Card>
            </Col>
          </Row>
        </section>

        <section style={{ marginTop: "100px" }}>
          <h1>
            <Row>
              <Col sm={3} style={{ color: "white", fontSize: "30px" }}>
                Recent Article
              </Col>
              <Col
                style={{
                  color: "#7883BF",
                  fontSize: "15px",
                  textAlign: "right",
                  marginTop: "15px",
                }}
              >
                Show all article{" "}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  class="bi bi-caret-right"
                  viewBox="0 0 16 16"
                >
                  <path d="M6 12.796V3.204L11.481 8 6 12.796zm.659.753 5.48-4.796a1 1 0 0 0 0-1.506L6.66 2.451C6.011 1.885 5 2.345 5 3.204v9.592a1 1 0 0 0 1.659.753z" />
                </svg>
              </Col>
            </Row>
          </h1>
          <Row>
            <Col xs={6} md={3}>
              <Card
                className="xs=6 md=4 card bg-dark card text-light"
                style={{ boxShadow: "3px 2px 1px white" }}
              >
                <Card.Img
                  variant="top"
                  src={require("../../image/artikel1.png")}
                />
                <Card.Body>
                  <Card.Title
                    style={{ fontWeight: "bold", fontFamily: "Inter" }}
                  >
                    Mengenal Jenis Investasi yang Cocok Untuk Pemula
                  </Card.Title>
                  <Card.Text style={{ fontFamily: "Inter", fontSize: "14px" }}>
                    Beberapa contoh investasi yang cocok untuk pemula di
                    antaranya longer.
                  </Card.Text>
                  Read More{" "}
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="currentColor"
                    class="bi bi-caret-right"
                    viewBox="0 0 16 16"
                  >
                    <path d="M6 12.796V3.204L11.481 8 6 12.796zm.659.753 5.48-4.796a1 1 0 0 0 0-1.506L6.66 2.451C6.011 1.885 5 2.345 5 3.204v9.592a1 1 0 0 0 1.659.753z" />
                  </svg>
                </Card.Body>
              </Card>
            </Col>
            <Col xs={6} md={3}>
              <Card
                className="xs=6 md=4 card bg-dark card text-light"
                style={{ boxShadow: "3px 2px 1px white" }}
              >
                <Card.Img
                  variant="top"
                  src={require("../../image/artikel2.png")}
                />
                <Card.Body>
                  <Card.Title
                    style={{ fontWeight: "bold", fontFamily: "Inter" }}
                  >
                    Mengenal Jenis Investasi yang Cocok Untuk Pemula
                  </Card.Title>
                  <Card.Text style={{ fontFamily: "Inter", fontSize: "14px" }}>
                    Beberapa contoh investasi yang cocok untuk pemula di
                    antaranya longer.
                  </Card.Text>
                  Read More{" "}
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="currentColor"
                    class="bi bi-caret-right"
                    viewBox="0 0 16 16"
                  >
                    <path d="M6 12.796V3.204L11.481 8 6 12.796zm.659.753 5.48-4.796a1 1 0 0 0 0-1.506L6.66 2.451C6.011 1.885 5 2.345 5 3.204v9.592a1 1 0 0 0 1.659.753z" />
                  </svg>
                </Card.Body>
              </Card>
            </Col>
            <Col xs={6} md={3}>
              <Card
                className="xs=6 md=4 card bg-dark card text-light"
                style={{ boxShadow: "3px 2px 1px white" }}
              >
                <Card.Img
                  variant="top"
                  src={require("../../image/artikel3.png")}
                />
                <Card.Body>
                  <Card.Title
                    style={{ fontWeight: "bold", fontFamily: "Inter" }}
                  >
                    Mengenal Jenis Investasi yang Cocok Untuk Pemula
                  </Card.Title>
                  <Card.Text style={{ fontFamily: "Inter", fontSize: "14px" }}>
                    Beberapa contoh investasi yang cocok untuk pemula di
                    antaranya longer.
                  </Card.Text>
                  Read More{" "}
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="currentColor"
                    class="bi bi-caret-right"
                    viewBox="0 0 16 16"
                  >
                    <path d="M6 12.796V3.204L11.481 8 6 12.796zm.659.753 5.48-4.796a1 1 0 0 0 0-1.506L6.66 2.451C6.011 1.885 5 2.345 5 3.204v9.592a1 1 0 0 0 1.659.753z" />
                  </svg>
                </Card.Body>
              </Card>
            </Col>
            <Col xs={6} md={3}>
              <Card
                className="xs=6 md=4 card bg-dark card text-light"
                style={{ boxShadow: "3px 2px 1px white" }}
              >
                <Card.Img
                  variant="top"
                  src={require("../../image/artikel4.png")}
                />
                <Card.Body>
                  <Card.Title
                    style={{ fontWeight: "bold", fontFamily: "Inter" }}
                  >
                    Mengenal Jenis Investasi yang Cocok Untuk Pemula
                  </Card.Title>
                  <Card.Text style={{ fontFamily: "Inter", fontSize: "14px" }}>
                    Beberapa contoh investasi yang cocok untuk pemula di
                    antaranya longer.
                  </Card.Text>
                  Read More{" "}
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="currentColor"
                    class="bi bi-caret-right"
                    viewBox="0 0 16 16"
                  >
                    <path d="M6 12.796V3.204L11.481 8 6 12.796zm.659.753 5.48-4.796a1 1 0 0 0 0-1.506L6.66 2.451C6.011 1.885 5 2.345 5 3.204v9.592a1 1 0 0 0 1.659.753z" />
                  </svg>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </section>

        <section
          className="justify-content-md-center"
          style={{ marginTop: "100px", textAlign: "center" }}
        >
          <h2
            style={{
              color: "#7883BF",
              fontFamily: "Inter",
              fontWeight: "bold",
              textShadow: "3px 2px 1px black",
            }}
          >
            MEMBERSHIP PREMIUM
          </h2>
          <h6 style={{ color: "#ffff", fontFamily: "Inter" }}>
            Belajar atur keuangan dan investasi 1 tahun penuh cuma bayar mulai
            dari Rp 100.000,- per bulan
          </h6>
        </section>
        <section
          style={{
            marginTop: "20px",
            marginLeft: "50px",
            textAlign: "center",
            boxShadow: "3px 2px 1px white",
            borderRadius: "15px 15px 15px 15px",
            width: "926px",
            height: "220px",
          }}
        >
          <CardGroup style={{ textAlign: "center" }}>
            <Card
              className="bg-dark text-light"
              style={{ height: "220px", textAlign: "center" }}
            >
              <Card.Body>
                <Card.Title style={{ fontWeight: "bold", fontFamily: "Inter" }}>
                  JADI MEMBER PREMIUM
                </Card.Title>
                <Card.Text style={{ fontFamily: "Inter" }}>
                  <Card.Img
                    variant="top"
                    src={require("../../image/icon1.png")}
                    style={{ width: "30px", margin: "10px" }}
                  />
                  700+ Video Modul Pembelajaran
                </Card.Text>
              </Card.Body>
            </Card>
            <Card className="bg-dark text-light">
              <Card.Body>
                <Card.Title style={{ fontWeight: "bold", fontFamily: "Inter" }}>
                  12 Bulan<p>Rp 125.000 /bulan</p>
                </Card.Title>
                <Card.Text style={{ textAlign: "center", fontFamily: "Inter" }}>
                  <span style={{ textDecoration: "line-through red" }}>
                    Rp 3.500.000
                  </span>
                  <p>Rp 1.500.000</p>
                  <Button
                    style={{
                      color: "white",
                      fontWeight: "bold",
                      fontFamily: "Inter",
                      backgroundColor: "#5E6BAD",
                      webkitboxStroke: "1px white",
                      boxShadow: "3px 2px 1px black",
                    }}
                  >
                    Beli Sekarang
                  </Button>
                </Card.Text>
              </Card.Body>
            </Card>
          </CardGroup>
        </section>
        <section>
          <Card
            className="bg-dark text-light"
            style={{
              height: "500px",
              width: "auto",
              margin: "-115px",
              color: "#332F2F",
              marginTop: "100px",
            }}
          >
            <Card.Body>
              <Card.Title
                style={{
                  textAlign: "center",
                  color: "#7282D9",
                  textShadow: "3px 2px 1px black",
                }}
              >
                TESTIMONI MEMBER{" "}
                <p style={{ color: "white", fontSize: "15px" }}>
                  JULIA VERREN -private sector employee
                </p>
              </Card.Title>
              <Card.Img
                variant="top"
                src={require("../../image/testi1.png")}
                style={{
                  width: "400px",
                  margin: "10px",
                  position: "relative",
                  float: "left",
                  zIndex: "1",
                }}
              />
              <Card.Img
                variant="top"
                src={require("../../image/icon2.png")}
                style={{
                  width: "40px",
                  marginLeft: "50px",
                  position: "absolute",
                  marginTop: "60px",
                  zIndex: "3",
                }}
              />
              <svg
                style={{ zIndex: "3", float: "right", width: "50px" }}
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                class="bi bi-chevron-right"
                viewBox="0 0 16 16"
              >
                <path
                  fill-rule="evenodd"
                  d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z"
                />
              </svg>
              <Card
                className="bg-dark text-light"
                style={{
                  width: "40rem",
                  left: "350px",
                  position: "absolute",
                  marginTop: "80px",
                  padding: "50px",
                  zIndex: "2",
                  boxShadow: "3px 2px 1px white",
                }}
              >
                <Card.Title
                  style={{ fontFamily: "Inter", textAlign: "justify" }}
                >
                  At first I couldn't manage my finances properly, the results
                  of my salary just ran out without knowing what it was spent
                  on, until using this website I could manage my income and
                  where my financial expenses went. I also started learning to
                  invest. thank you team Plant money{" "}
                  <img
                    src={require("../../image/iconbintang.png")}
                    alt="img"
                    style={{
                      width: "150px",
                      position: "absolute",
                      marginTop: "30px",
                      zIndex: "3",
                      left: "50px",
                    }}
                  />
                </Card.Title>
                <Card.Img
                  variant="top"
                  src={require("../../image/icon3.png")}
                  style={{
                    width: "80px",
                    marginLeft: "230px",
                    position: "absolute",
                    marginTop: "140px",
                    zIndex: "3",
                  }}
                />
              </Card>
            </Card.Body>
          </Card>
        </section>
        <br></br>
        <br></br>
        <br></br>
      </Container>
    </Container>
  );
}
export default Home2;
