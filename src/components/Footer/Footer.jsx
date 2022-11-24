import React from "react";
import "./footer.css";
import { Container, Row, Col, ListGroup, ListGroupItem } from "reactstrap";
import { Link } from "react-router-dom";

const Footer = () => {
  const year = new Date().getFullYear();
  return (
    <footer className="footer">
      <Container>
        <Row>
          <Col lg="4" className="mb-4" md="6">
            <div>
              <h1 className="text-white footer_text-uzshop">UzShop</h1>
            </div>
            <p className="footer__text mt-4">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut dicta
              magnam impedit corrupti labore nihil deserunt voluptates
              voluptatibus, illum tenetur!
            </p>
          </Col>
          <Col lg="4" className="mb-4" md="3 ">
            <div className="footer__quicl-links">
              <h4 className="quick__links-title">Useful Links</h4>
              <ListGroup>
                <ListGroupItem className="ps-0 border-0">
                  <Link to="/shop">Shop</Link>
                </ListGroupItem>
                <ListGroupItem className="ps-0 border-0">
                  <Link to="/cart">Cart</Link>
                </ListGroupItem>
                <ListGroupItem className="ps-0 border-0">
                  <Link to="/login">login</Link>
                </ListGroupItem>
                <ListGroupItem className="ps-0 border-0">
                  <Link to="#">Privacy Policy</Link>
                </ListGroupItem>
              </ListGroup>
            </div>
          </Col>
          <Col lg="4" md="3">
            <div className="footer__quicl-links">
              <h4 className="quick__links-title">About</h4>
              <ListGroup className="footer__contacts">
                <ListGroupItem className="align-items-center d-flex gap-3 ps-0 border-0">
                  <span>
                    <i class="ri-map-pin-line"></i>
                  </span>
                  <p>Grojecka 70, Warsaw</p>
                </ListGroupItem>
                <ListGroupItem className="align-items-center d-flex gap-3 ps-0 border-0">
                  <span>
                    <i class="ri-phone-line"></i>
                  </span>
                  <p>+48 600 516 406</p>
                </ListGroupItem>
                <ListGroupItem className="align-items-center d-flex gap-3 ps-0 border-0">
                  <span>
                    <i class="ri-mail-line"></i>
                  </span>
                  <p>ikboljonme@gmail.com</p>
                </ListGroupItem>
                <ListGroupItem className="align-items-center d-flex gap-3 ps-0 border-0">
                  <i class="ri-whatsapp-line"></i>
                  <p>WhatsApp</p>
                </ListGroupItem>
              </ListGroup>
            </div>
          </Col>
        </Row>
        <Row>
          <Col lg="12">
            <div className="footer__copyright">
              <span>
                <i class="ri-copyright-line"></i>
              </span>
              <p>Copyright {year} developed by Ikboljon. All rights reserved</p>
            </div>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
