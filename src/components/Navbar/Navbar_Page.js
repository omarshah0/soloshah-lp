import React, { Component } from "react"
import { Container } from "reactstrap"
// import { Link } from "react-router-dom";
import { Link } from "gatsby"
import ScrollspyNav from "./scrollSpy"

//Import Images
import lightlogo from "../../assets/images/logo-light.png"
import darklogo from "../../assets/images/logo-dark.png"

class NavbarPage extends Component {
  constructor(props) {
    super(props)
    this.state = {
      navItems: [
        { id: 1, idnm: "home", navheading: "Home" },
        { id: 2, idnm: "features", navheading: "Features" },
        { id: 3, idnm: "service", navheading: "Services" },
        // { id: 4, idnm: "client", navheading: "Client" },
        { id: 4, idnm: "team", navheading: "Team" },
        { id: 5, idnm: "pricing", navheading: "Pricing" },
        { id: 6, idnm: "contact", navheading: "Contact" },
      ],
      isOpen: false,
    }
    this.toggleLine = this.toggleLine.bind(this)
  }

  toggleLine() {
    this.setState(prevState => ({ isOpen: !prevState.isOpen }))
  }

  render() {
    //Store all Navigationbar Id into TargetID variable(Used for Scrollspy)
    let targetId = this.state.navItems.map(item => {
      return item.idnm
    })
    return (
      <React.Fragment>
        <header
          id="topnav"
          className={
            this.props.isNotSticky === true
              ? "defaultscroll sticky " + this.props.navclass
              : "defaultscroll fixed-top sticky " + this.props.navclass
          }
        >
          <Container>
            <div>
              <Link to="/" className="logo text-uppercase">
                {this.props.imglight === true ? (
                  <img
                    src={lightlogo}
                    alt=""
                    className="logo-light"
                    height="100"
                  />
                ) : (
                  <img
                    src={darklogo}
                    alt=""
                    className="logo-dark"
                    height="100"
                  />
                )}
              </Link>
            </div>
            <div className="menu-extras">
              <div className="menu-item">
                <Link
                  to="#"
                  onClick={this.toggleLine}
                  className={
                    this.state.isOpen ? "navbar-toggle open" : "navbar-toggle"
                  }
                >
                  <div className="lines">
                    <span></span>
                    <span></span>
                    <span></span>
                  </div>
                </Link>
              </div>
            </div>
            <ScrollspyNav
              scrollTargetIds={targetId}
              scrollDuration="300"
              headerBackground="false"
              activeNavClass="active"
            >
              <div
                id="navigation"
                style={{ display: this.state.isOpen ? "block" : "none" }}
              >
                <ul className="navigation-menu">
                  {this.state.navItems.map((item, key) => (
                    <li
                      key={key}
                      className={item.navheading === "Home" ? "active" : ""}
                    >
                      <a href={"#" + item.idnm}> {item.navheading}</a>
                    </li>
                  ))}
                </ul>
              </div>
            </ScrollspyNav>
          </Container>
        </header>
      </React.Fragment>
    )
  }
}

export default NavbarPage
