import React from "react";
import { Container, Card, Button } from "react-bootstrap";
import Layout from "../../components/Layout";

function Profile() {
  return (
    <Layout title="Tanam Uang | Profile" showFooter showNavbar>
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
              }}
            >
              <span style={{ color: "#7282D9", fontSize: "30px" }}>Hallo,</span>{" "}
              <span> Back to Bed!</span>
              <p style={{ fontSize: "14px" }}>Lengkapi Profile</p>
            </p>
            <hr style={{ marginTop: "-40px", color: "#7282D9" }}></hr>

            <form
              class="needs-validation"
              style={{ marginLeft: "150px", marginTop: "80px" }}
              novalidate
            >
              <div class="row">
                <div style={{ marginRight: "50px" }} class="col-md-4 mb-3">
                  <label
                    style={{ textAlign: "justify" }}
                    for="validationCustom01"
                  >
                    Nama Lengkap
                    <input
                      type="text"
                      class="form-control"
                      id="validationCustom01"
                      value="Back to Bed"
                      required
                    ></input>
                    <div class="valid-feedback">Look</div>
                  </label>
                </div>
                <div class="col-md-4 mb-3">
                  <label
                    style={{ textAlign: "justify" }}
                    for="validationCustom01"
                  >
                    Email
                    <input
                      type="text"
                      class="form-control"
                      value="B2B@gmail.com"
                      required
                    ></input>
                    <div class="valid-feedback">Look</div>
                  </label>
                </div>
              </div>
            </form>
            <form
              class="needs-validation"
              style={{ marginLeft: "150px" }}
              novalidate
            >
              <div class="row">
                <div class="col-md-4 mb-3" style={{ marginRight: "50px" }}>
                  <label
                    style={{ textAlign: "justify" }}
                    for="validationCustom01"
                  >
                    No Telepon
                    <input
                      type="text"
                      class="form-control"
                      id="validationCustom01"
                      value="+6281344256733"
                      required
                    ></input>
                    <div class="valid-feedback">Look</div>
                  </label>
                </div>
                <div class="col-md-4 mb-3">
                  <label
                    style={{ textAlign: "justify" }}
                    for="validationCustom01"
                  >
                    Tanggal Lahir
                    <input
                      type="text"
                      class="form-control"
                      id="validationCustom01"
                      value="08/11/2022"
                      required
                    ></input>
                    <div class="valid-feedback">Look</div>
                  </label>
                </div>
              </div>
            </form>

            <form
              class="needs-validation"
              style={{ marginLeft: "150px" }}
              novalidate
            >
              <div class="row">
                <div class="col-md-4 mb-3" style={{ marginRight: "50px" }}>
                  <label
                    style={{ textAlign: "justify" }}
                    for="validationCustom01"
                  >
                    Gender
                    <input
                      type="text"
                      class="form-control"
                      id="validationCustom01"
                      value="Laki-Laki"
                      required
                    ></input>
                    <div class="valid-feedback">Look</div>
                  </label>
                </div>
                <div class="col-md-4 mb-3">
                  <label
                    style={{ textAlign: "justify" }}
                    for="validationCustom01"
                  >
                    Kota Domisili
                    <input
                      type="text"
                      class="form-control"
                      id="validationCustom01"
                      value="Jakarta"
                      required
                    ></input>
                    <div class="valid-feedback">Look</div>
                  </label>
                </div>
              </div>
            </form>
            <button
              style={{
                marginLeft: "450px",
                marginTop: "100px",
                backgroundColor: "#434C77",
              }}
            >
              Save
            </button>
            <span style={{ marginLeft: "-400px" }}>
              Ubah Pasword? <a href=".">Klik Disini</a>
            </span>
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
export default Profile;
