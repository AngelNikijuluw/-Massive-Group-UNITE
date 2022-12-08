import React from "react";
import Layout from "../../components/Layout";
import {
  Container,
  Row,
  Col,
  Card,
  CardGroup,
  Button,
  Form,
  InputGroup,
} from "react-bootstrap";

function Artikel4() {
  return (
    <Layout title="Tanam Uang | Artikel" showFooter showNavbar>
      <Container fluid className="home-about-section" id="about">
        <Container>
          <section style={{ color: "white", paddingTop: "100px" }}>
            <h3>
            Perencanaan Keuangan: Manfaat untuk Pribadi
            </h3>
            <Card.Img
              variant="top"
              src={require("../../image/kategori1_4.jpg")}
            />
            <Card.Text>
              <span>10 november 2022</span>
              <span style={{ float: "right" }}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="blue"
                  class="bi bi-facebook"
                  viewBox="0 0 16 16"
                  style={{ marginRight: "10px" }}
                >
                  <path d="M16 8.049c0-4.446-3.582-8.05-8-8.05C3.58 0-.002 3.603-.002 8.05c0 4.017 2.926 7.347 6.75 7.951v-5.625h-2.03V8.05H6.75V6.275c0-2.017 1.195-3.131 3.022-3.131.876 0 1.791.157 1.791.157v1.98h-1.009c-.993 0-1.303.621-1.303 1.258v1.51h2.218l-.354 2.326H9.25V16c3.824-.604 6.75-3.934 6.75-7.951z" />
                </svg>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="green"
                  class="bi bi-whatsapp"
                  viewBox="0 0 16 16"
                  style={{ marginRight: "10px" }}
                >
                  <path d="M13.601 2.326A7.854 7.854 0 0 0 7.994 0C3.627 0 .068 3.558.064 7.926c0 1.399.366 2.76 1.057 3.965L0 16l4.204-1.102a7.933 7.933 0 0 0 3.79.965h.004c4.368 0 7.926-3.558 7.93-7.93A7.898 7.898 0 0 0 13.6 2.326zM7.994 14.521a6.573 6.573 0 0 1-3.356-.92l-.24-.144-2.494.654.666-2.433-.156-.251a6.56 6.56 0 0 1-1.007-3.505c0-3.626 2.957-6.584 6.591-6.584a6.56 6.56 0 0 1 4.66 1.931 6.557 6.557 0 0 1 1.928 4.66c-.004 3.639-2.961 6.592-6.592 6.592zm3.615-4.934c-.197-.099-1.17-.578-1.353-.646-.182-.065-.315-.099-.445.099-.133.197-.513.646-.627.775-.114.133-.232.148-.43.05-.197-.1-.836-.308-1.592-.985-.59-.525-.985-1.175-1.103-1.372-.114-.198-.011-.304.088-.403.087-.088.197-.232.296-.346.1-.114.133-.198.198-.33.065-.134.034-.248-.015-.347-.05-.099-.445-1.076-.612-1.47-.16-.389-.323-.335-.445-.34-.114-.007-.247-.007-.38-.007a.729.729 0 0 0-.529.247c-.182.198-.691.677-.691 1.654 0 .977.71 1.916.81 2.049.098.133 1.394 2.132 3.383 2.992.47.205.84.326 1.129.418.475.152.904.129 1.246.08.38-.058 1.171-.48 1.338-.943.164-.464.164-.86.114-.943-.049-.084-.182-.133-.38-.232z" />
                </svg>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="blue"
                  class="bi bi-telegram"
                  viewBox="0 0 16 16"
                  style={{ marginRight: "10px" }}
                >
                  <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM8.287 5.906c-.778.324-2.334.994-4.666 2.01-.378.15-.577.298-.595.442-.03.243.275.339.69.47l.175.055c.408.133.958.288 1.243.294.26.006.549-.1.868-.32 2.179-1.471 3.304-2.214 3.374-2.23.05-.012.12-.026.166.016.047.041.042.12.037.141-.03.129-1.227 1.241-1.846 1.817-.193.18-.33.307-.358.336a8.154 8.154 0 0 1-.188.186c-.38.366-.664.64.015 1.088.327.216.589.393.85.571.284.194.568.387.936.629.093.06.183.125.27.187.331.236.63.448.997.414.214-.02.435-.22.547-.82.265-1.417.786-4.486.906-5.751a1.426 1.426 0 0 0-.013-.315.337.337 0 0 0-.114-.217.526.526 0 0 0-.31-.093c-.3.005-.763.166-2.984 1.09z" />
                </svg>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="green"
                  class="bi bi-line"
                  viewBox="0 0 16 16"
                  style={{ marginRight: "10px" }}
                >
                  <path d="M8 0c4.411 0 8 2.912 8 6.492 0 1.433-.555 2.723-1.715 3.994-1.678 1.932-5.431 4.285-6.285 4.645-.83.35-.734-.197-.696-.413l.003-.018.114-.685c.027-.204.055-.521-.026-.723-.09-.223-.444-.339-.704-.395C2.846 12.39 0 9.701 0 6.492 0 2.912 3.59 0 8 0ZM5.022 7.686H3.497V4.918a.156.156 0 0 0-.155-.156H2.78a.156.156 0 0 0-.156.156v3.486c0 .041.017.08.044.107v.001l.002.002.002.002a.154.154 0 0 0 .108.043h2.242c.086 0 .155-.07.155-.156v-.56a.156.156 0 0 0-.155-.157Zm.791-2.924a.156.156 0 0 0-.156.156v3.486c0 .086.07.155.156.155h.562c.086 0 .155-.07.155-.155V4.918a.156.156 0 0 0-.155-.156h-.562Zm3.863 0a.156.156 0 0 0-.156.156v2.07L7.923 4.832a.17.17 0 0 0-.013-.015v-.001a.139.139 0 0 0-.01-.01l-.003-.003a.092.092 0 0 0-.011-.009h-.001L7.88 4.79l-.003-.002a.029.029 0 0 0-.005-.003l-.008-.005h-.002l-.003-.002-.01-.004-.004-.002a.093.093 0 0 0-.01-.003h-.002l-.003-.001-.009-.002h-.006l-.003-.001h-.004l-.002-.001h-.574a.156.156 0 0 0-.156.155v3.486c0 .086.07.155.156.155h.56c.087 0 .157-.07.157-.155v-2.07l1.6 2.16a.154.154 0 0 0 .039.038l.001.001.01.006.004.002a.066.066 0 0 0 .008.004l.007.003.005.002a.168.168 0 0 0 .01.003h.003a.155.155 0 0 0 .04.006h.56c.087 0 .157-.07.157-.155V4.918a.156.156 0 0 0-.156-.156h-.561Zm3.815.717v-.56a.156.156 0 0 0-.155-.157h-2.242a.155.155 0 0 0-.108.044h-.001l-.001.002-.002.003a.155.155 0 0 0-.044.107v3.486c0 .041.017.08.044.107l.002.003.002.002a.155.155 0 0 0 .108.043h2.242c.086 0 .155-.07.155-.156v-.56a.156.156 0 0 0-.155-.157H11.81v-.589h1.525c.086 0 .155-.07.155-.156v-.56a.156.156 0 0 0-.155-.157H11.81v-.589h1.525c.086 0 .155-.07.155-.156Z" />
                </svg>

                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="blue"
                  class="bi bi-twitter"
                  viewBox="0 0 16 16"
                >
                  <path d="M5.026 15c6.038 0 9.341-5.003 9.341-9.334 0-.14 0-.282-.006-.422A6.685 6.685 0 0 0 16 3.542a6.658 6.658 0 0 1-1.889.518 3.301 3.301 0 0 0 1.447-1.817 6.533 6.533 0 0 1-2.087.793A3.286 3.286 0 0 0 7.875 6.03a9.325 9.325 0 0 1-6.767-3.429 3.289 3.289 0 0 0 1.018 4.382A3.323 3.323 0 0 1 .64 6.575v.045a3.288 3.288 0 0 0 2.632 3.218 3.203 3.203 0 0 1-.865.115 3.23 3.23 0 0 1-.614-.057 3.283 3.283 0 0 0 3.067 2.277A6.588 6.588 0 0 1 .78 13.58a6.32 6.32 0 0 1-.78-.045A9.344 9.344 0 0 0 5.026 15z" />
                </svg>
              </span>
            </Card.Text>
            <Card style={{ backgroundColor: "#262424" }}>
              <Card.Body>
                <p style={{ textAlign: "left" }}>
                Dalam melakukan apapun, menyusun rencana akan membuat hal yang ingin dikerjakan menjadi lebih tersusun begitupun dengan perencanaan keuangan. Rencana sendiri dibutuhkan untuk siapapun yang ingin lebih cepat dan efektif dalam mencapai tujuan. Perencanaan keuangan adalah strategi untuk mencapai tujuan hidup. Manajemen keuangan yang cermat menjadi sangat penting untuk mendukung kehidupan kita saat ini dan di masa mendatang menjadi lebih baik. Manfaat dari perencanaan keuangan bisa dirasakan dengan adanya “arah dan arti” keputusan finansial seseorang. Melalui pengelolaan keuangan, seseorang bisa mengerti bagaimana setiap keputusan keuangan yang dibuat berdampak ke area lain dari keseluruhan situasi keuangan dirinya.
                <p>Berikut merupakan beberapa kondisi atau kejadian yang dapat mempengaruhi perencanaan keuangan seseorang:</p>
                  <ul>
                    <li>
                    Status perkawinan (belum menikah atau sudah menikah)
                    </li>
                    <li>
                    Kondisi pekerjaan (sudah memiliki pekerjaan tetap atau belum)
                    </li>
                    <li>
                    Usianya (umur yang semakin bertambah)
                    </li>
                    <li>
                    Kondisi keluarga (jumlah anggota keluarga yang menjadi tanggungan)
                    </li>
                    <li>Kondisi perekonomian nasional (kemudahan dalam mencari pekerjaan dan penghasilan)</li>
                    <li>
                    Tingkat pendidikan (tingkat pendidikan mempengaruhi penghasilan), serta</li>
                  </ul>
                  <h5>Manfaat Perencanaan Keuangan</h5>
                  <ol>
                    <li>Mengalokasikan Keuangan</li>
                    <p>Manfaat yang bisa didapatkan dari perencanaan keuangan adalah untuk mengalokasikan keuangan pribadi maupun bisnis yang Anda jalankan. Dengan membuat daftar perencanaan keuangan, maka keuangan milik perusahaan akan dialokasikan untuk membiayai segala kepentingan yang dapat memiliki manfaat dalam lini perusahaan.<p></p>Begitupun untuk kebutuhan pribadi, perencanaan keuangan bisa membantu Anda untuk membuat daftar prioritas kebutuhan. Perencanaan keuangan seperti ini juga akan mengontrol setiap pos-pos anggaran yang tidak terlalu penting atau sifatnya dapat ditunda. Sehingga kestabilan keuangan bisnis maupun pribadi tetap terjaga.</p>
                    <li>Peningkatan Produktivitas</li>
                    <p>Perencanaan keuangan dapat menjadi jembatan untuk meningkatkan produktivitas. Caranya adalah dengan merencanakan pembiayaan untuk lini produktivitas yang belum terjamah yang didahului dengan rapat atau kesepakatan bersama dari setiap pihak yang memiliki kewenangan di dalam lingkup perusahaan.<p></p>Dengan adanya kemajuan produktivitas perusahaan, maka pada waktu yang akan datang, perencanaan ini akan sukses untuk memajukan perusahaan ke posisi yang lebih unggul dan maju dari sebelumnya. Secara tidak langsung, dengan perencanaan keuangan bisnis Anda dapat membangun masa depan bisnis yang lebih baik.</p>
                    <li>Investasi</li>
                    <p>Perencanaan keuangan yang baik sudah seharusnya meliputi kehidupan pribadi, pilihan risiko, dan tujuan masa depan. Hal ini digunakan untuk memilih investasi yang tepat sesuai kebutuhan, tujuan dan kepribadian Anda. Perencanaan keuangan membantu Anda merencanakan dan menciptakan aset keuangan untuk masa depan.</p>
                  </ol>
                  
                </p>
              </Card.Body>
            </Card>

            <h1 style={{ paddingTop: "100px" }}>
              <Row>
                <Col sm={3} style={{ color: "white", fontSize: "30px" }}>
                  Recent Article
                </Col>
              </Row>
            </h1>
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
                    src={require("../../image/kategori1_artikel1.png")}style=
                    {{height:"180px"}}
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
                    src={require("../../image/kategori1_2.png")} style=
                    {{height:"180px"}}
                  />
                  <Card.Body>
                    <Card.Title>
                    Cara Mengatur Keuangan dengan Seimbang 
                    </Card.Title>
                    <Card.Text>
                    Langkah pertama yang wajib dilakukan dalam mengatur keuangan adalah dengan menyusun sebuah anggaran keuangan .....
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
                    src={require("../../image/kategori1_3.png")}style=
                    {{height:"180px"}}
                  />
                  <Card.Body>
                  <Card.Title>
                    Mengelola Keuangan  Bijak  bagi Mahasiswa
                    </Card.Title>
                    <Card.Text>
                    Tentu saja hal yang pertama kali kita lakukan untuk mengelola keuangan adalah dengan menyusun skala prioritas. Kita harus..
                    </Card.Text>
                  </Card.Body>
                  <Card.Body>
                  <Card.Link href="/Artikel3">Read More</Card.Link>
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
export default Artikel4;
