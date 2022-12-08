import React from "react";
import Layout from "../../components/Layout";
import {
  Container,
  Row,
  Col,
  Card,
  Button,
  Form,
  InputGroup,
} from "react-bootstrap";

function HomeArtikel() {
  return (
    <Layout title="Tanam Uang | Artikel" showFooter showNavbar>
      <Container fluid className="home-about-section" id="about">
        <Container>
          <section>
            <p>
              <span
                style={{
                  fontSize: "15px",
                  color: "#ffff",
                  fontWeight: "bold",
                  fontFamily: "Inter",
                  float: "left",
                }}
              >
                Course{" "}
                <svg
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
              </span>
              <span
                style={{
                  color: "#7883BF",
                  fontWeight: "bold",
                  fontFamily: "Inter",
                  fontSize: "16px",
                  marginLeft: "10px",
                  float: "left",
                }}
              >
                Artikel
              </span>
            </p>
          </section>
          <br></br>
          <br></br>
          <br></br>

          <section>
            <InputGroup className="col-5">
              <Form.Control
                placeholder="Search"
                aria-describedby="basic-addon2"
              />
              <Button
                variant="outline-secondary"
                id="button-addon2"
                style={{ backgroundColor: "#434C77", width: "50px" }}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="dark"
                  class="bi bi-search"
                  viewBox="0 0 16 16"
                >
                  <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z" />
                </svg>
              </Button>
            </InputGroup>
            <p>
              <span
                style={{
                  color: "#7883BF",
                  fontWeight: "bold",
                  fontFamily: "Inter",
                  fontSize: "20px",
                  marginLeft: "10px",
                  float: "left",
                  marginTop: "20px",
                }}
              >
                Berdasarkan Kategori
              </span>
            </p>
          </section>

          <section className="buttonartikel">
            <Button className="buttonartikel">Perencanaan Keuangan</Button>
            <Button variant="outline-primary" className="buttonartikel">
              Investasi
            </Button>
            <Button variant="outline-primary" className="buttonartikel">
              Saham
            </Button>
            <Button variant="outline-primary" className="buttonartikel">
              Bisnis
            </Button>
          </section>

          <section>
            <Row style={{ marginTop: "100px", color: "#ffff" }}>
              <Col sm>
                <Card
                  style={{
                    width: "18rem",
                    backgroundColor: "#332F2F",
                    boxShadow: "3px 2px 1px white",
                  }}
                >
                  <Card.Img
                    variant="top"
                    src={require("../../image/kategori1_artikel1.png")}
                    style={{ height: "180px" }}
                  />
                  <Card.Body>
                    <Card.Title>
                      Hadapi Resesi 2023, Jangan Asal Memilih Instrument
                      Investasi
                    </Card.Title>
                    <Card.Text style={{ textAlign: "left" }}>
                      Resesi 2023, Benarkah Sangat Menyeramkan? Sejak beberapa
                      bulan lalu, resesi 2023 jadi salah satu....
                    </Card.Text>
                  </Card.Body>
                  <Card.Body>
                    <Card.Link href="/Artikel1">Read More</Card.Link>
                  </Card.Body>
                </Card>
              </Col>

              <Col sm>
                <Card
                  style={{
                    width: "18rem",
                    backgroundColor: "#332F2F",
                    boxShadow: "3px 2px 1px white",
                  }}
                >
                  <Card.Img
                    variant="top"
                    src={require("../../image/kategori1_2.png")}
                    style={{ height: "180px" }}
                  />
                  <Card.Body>
                    <Card.Title>
                      Cara Mengatur Keuangan dengan Seimbang
                    </Card.Title>
                    <Card.Text>
                      Langkah pertama yang wajib dilakukan dalam mengatur
                      keuangan adalah dengan menyusun sebuah anggaran keuangan
                      .....
                    </Card.Text>
                  </Card.Body>
                  <Card.Body>
                    <Card.Link href="/Artikel2">Read More</Card.Link>
                  </Card.Body>
                </Card>
              </Col>

              <Col sm>
                <Card
                  style={{
                    width: "18rem",
                    backgroundColor: "#332F2F",
                    boxShadow: "3px 2px 1px white",
                  }}
                >
                  <Card.Img
                    variant="top"
                    src={require("../../image/kategori1_3.png")}
                    style={{ height: "180px" }}
                  />
                  <Card.Body>
                    <Card.Title>
                      Mengelola Keuangan Bijak bagi Mahasiswa
                    </Card.Title>
                    <Card.Text>
                      Tentu saja hal yang pertama kali kita lakukan untuk
                      mengelola keuangan adalah dengan menyusun skala prioritas.
                      Kita harus..
                    </Card.Text>
                  </Card.Body>
                  <Card.Body>
                    <Card.Link href="/Artikel3">Read More</Card.Link>
                  </Card.Body>
                </Card>
              </Col>
            </Row>

            <Row style={{ marginTop: "100px", color: "#ffff" }}>
              <Col sm>
                <Card
                  style={{
                    width: "18rem",
                    backgroundColor: "#332F2F",
                    boxShadow: "3px 2px 1px white",
                  }}
                >
                  <Card.Img
                    variant="top"
                    src={require("../../image/kategori1_4.jpg")}
                    style={{ height: "180px" }}
                  />
                  <Card.Body>
                    <Card.Title>
                      Perencanaan Keuangan: Manfaat untuk Pribadi
                    </Card.Title>
                    <Card.Text>
                      Dalam melakukan apapun, menyusun rencana akan membuat hal
                      yang ingin dikerjakan menjadi lebih....
                    </Card.Text>
                  </Card.Body>
                  <Card.Body>
                    <Card.Link href="/Artikel4">Read More</Card.Link>
                  </Card.Body>
                </Card>
              </Col>

              <Col sm>
                <Card
                  style={{
                    width: "18rem",
                    backgroundColor: "#332F2F",
                    boxShadow: "3px 2px 1px white",
                  }}
                >
                  <Card.Img
                    variant="top"
                    src={require("../../image/kategori1_5.jpg")}
                    style={{ height: "180px" }}
                  />
                  <Card.Body>
                    <Card.Title>
                      Perencanaan Keuangan Yang Baik Diperlukan
                    </Card.Title>
                    <Card.Text>
                      Apa yang paling penting direncanakan dalam merencanakan
                      keuangan? Secara garis besar....
                    </Card.Text>
                  </Card.Body>
                  <Card.Body>
                    <Card.Link href="/Artikel5">Read More</Card.Link>
                  </Card.Body>
                </Card>
              </Col>

              <Col sm>
                <Card
                  style={{
                    width: "18rem",
                    backgroundColor: "#332F2F",
                    boxShadow: "3px 2px 1px white",
                  }}
                >
                  <Card.Img
                    variant="top"
                    src={require("../../image/kategori1_6.jpeg")}
                    style={{ height: "180px" }}
                  />
                  <Card.Body>
                    <Card.Title>
                      Pentingnya Perencanaan Keuangan dalam Keluarga
                    </Card.Title>
                    <Card.Text>
                      Salah satu poin krusial dalam perencanaan keuangan adalah
                      menentukan pos pengeluaran. Di titik ....
                    </Card.Text>
                  </Card.Body>
                  <Card.Body>
                    <Card.Link href="/Artikel6">Read More</Card.Link>
                  </Card.Body>
                </Card>
              </Col>
            </Row>
          </section>
          <section style={{ marginTop: "100px" }}>
            <p>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="100"
                height="50"
                fill="currentColor"
                class="bi bi-chevron-left"
                viewBox="0 0 16 16"
              >
                <path
                  fill-rule="evenodd"
                  d="M11.354 1.646a.5.5 0 0 1 0 .708L5.707 8l5.647 5.646a.5.5 0 0 1-.708.708l-6-6a.5.5 0 0 1 0-.708l6-6a.5.5 0 0 1 .708 0z"
                />
              </svg>

              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="100"
                height="50"
                fill="#434C77"
                class="bi bi-1-circle-fill"
                viewBox="0 0 16 16"
              >
                <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0ZM9.283 4.002H7.971L6.072 5.385v1.271l1.834-1.318h.065V12h1.312V4.002Z" />
              </svg>

              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="100"
                height="50"
                fill="currentColor"
                class="bi bi-2-circle"
                viewBox="0 0 16 16"
              >
                <path d="M1 8a7 7 0 1 0 14 0A7 7 0 0 0 1 8Zm15 0A8 8 0 1 1 0 8a8 8 0 0 1 16 0ZM6.646 6.24v.07H5.375v-.064c0-1.213.879-2.402 2.637-2.402 1.582 0 2.613.949 2.613 2.215 0 1.002-.6 1.667-1.287 2.43l-.096.107-1.974 2.22v.077h3.498V12H5.422v-.832l2.97-3.293c.434-.475.903-1.008.903-1.705 0-.744-.557-1.236-1.313-1.236-.843 0-1.336.615-1.336 1.306Z" />
              </svg>

              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="100"
                height="50"
                fill="currentColor"
                class="bi bi-3-circle"
                viewBox="0 0 16 16"
              >
                <path d="M7.918 8.414h-.879V7.342h.838c.78 0 1.348-.522 1.342-1.237 0-.709-.563-1.195-1.348-1.195-.79 0-1.312.498-1.348 1.055H5.275c.036-1.137.95-2.115 2.625-2.121 1.594-.012 2.608.885 2.637 2.062.023 1.137-.885 1.776-1.482 1.875v.07c.703.07 1.71.64 1.734 1.917.024 1.459-1.277 2.396-2.93 2.396-1.705 0-2.707-.967-2.754-2.144H6.33c.059.597.68 1.06 1.541 1.066.973.006 1.6-.563 1.588-1.354-.006-.779-.621-1.318-1.541-1.318Z" />
                <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0ZM1 8a7 7 0 1 0 14 0A7 7 0 0 0 1 8Z" />
              </svg>

              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="100"
                height="50"
                fill="currentColor"
                class="bi bi-chevron-right"
                viewBox="0 0 16 16"
              >
                <path
                  fill-rule="evenodd"
                  d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z"
                />
              </svg>
            </p>
          </section>
          <br></br>
          <br></br>
          <br></br>
        </Container>
      </Container>
    </Layout>
  );
}
export default HomeArtikel;
