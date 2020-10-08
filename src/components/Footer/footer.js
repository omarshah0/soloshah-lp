import React, { Component } from "react"
import { Link } from "gatsby"
import { Container, Row, Col } from "reactstrap"

//Import Footer link
import FooterLinks from "./footer-links"

class Footer extends Component {
  state = {
    footerItems: [
      {
        title: "about SoloShah",
        links: [
          { linkTitle: "About Us", link: "#" },
          { linkTitle: "Press", link: "#" },
          { linkTitle: "Job Opening", link: "#" },
          { linkTitle: "Terms", link: "#" },
          { linkTitle: "Privacy", link: "#" },
        ],
      },
      {
        title: "resources",
        links: [
          { linkTitle: "Blog", link: "#" },
          { linkTitle: "Help Center", link: "#" },
          { linkTitle: "Academy", link: "#" },
          { linkTitle: "Video Terms", link: "#" },
          { linkTitle: "Monitoring Grader", link: "#" },
          { linkTitle: "SoloShah API", link: "#" },
        ],
      },
      {
        title: "more info",
        links: [
          { linkTitle: "Pricing", link: "#" },
          { linkTitle: "For Marketing", link: "#" },
          { linkTitle: "For CEOs", link: "#" },
          { linkTitle: "For Agencies", link: "#" },
          { linkTitle: "Our Apps", link: "#" },
        ],
      },
    ],
  }
  render() {
    return (
      <React.Fragment>
        <section className="section bg-light">
          <Container>
            <Row>
              <Col lg="3">
                <p className="text-uppercase footer-title">Help center</p>
                <ul className="list-unstyled company-sub-menu">
                  <li>
                    <Link to="#">Accounting </Link>
                  </li>
                  <li>
                    <Link to="#">Billing</Link>
                  </li>
                  <li>
                    <Link to="#">General Question</Link>
                  </li>
                </ul>
              </Col>
              {this.state.footerItems.map((item, key) => (
                <Col lg="2" key={key}>
                  <p className="text-uppercase footer-title">{item.title}</p>
                  <ul className="list-unstyled company-sub-menu">
                    {item.links.map((fLink, key) => (
                      <li key={key}>
                        <Link to={fLink.link}>{fLink.linkTitle}</Link>
                      </li>
                    ))}
                  </ul>
                </Col>
              ))}

              <Col lg="3">
                <p className="text-uppercase footer-title">Contact Us</p>
                <div className="contact-us">
                  <p>Europe: +1 00 12 34 5</p>
                  <p>US: +1 67 89 01 23 4</p>
                  <p>support@example.com</p>
                </div>
                <ul className="footer-icons list-inline mt-4">
                  <li className="list-inline-item">
                    <Link to="#" className="">
                      <i className="mdi mdi-facebook"></i>
                    </Link>
                  </li>
                  <li className="list-inline-item">
                    <Link to="#" className="">
                      <i className="mdi mdi-twitter"></i>
                    </Link>
                  </li>
                  <li className="list-inline-item">
                    <Link to="#" className="">
                      <i className="mdi mdi-google-plus"></i>
                    </Link>
                  </li>
                  <li className="list-inline-item">
                    <Link to="#" className="">
                      <i className="mdi mdi-apple"></i>
                    </Link>
                  </li>
                </ul>
              </Col>
            </Row>
          </Container>
        </section>
        <FooterLinks />
      </React.Fragment>
    )
  }
}

export default Footer
