import React, { Component } from "react"
import Navbar from "../Navbar/Navbar_Page"

class LoadableNav extends Component {
  constructor(props) {
    super(props)
    this.state = {
      pos: document.documentElement.scrollTop,
      imglight: false,
      navClass: "",
    }
  }

  componentDidMount() {
    window.addEventListener("scroll", this.scrollNavigation, true)
  }

  componentWillUnmount() {
    window.removeEventListener("scroll", this.scrollNavigation, true)
  }

  scrollNavigation = () => {
    var scrollup = document.documentElement.scrollTop

    if (scrollup > this.state.pos) {
      this.setState({ navClass: "darkheader", imglight: false })
    } else if (window.innerWidth <= 768) {
      this.setState({ navClass: "darkheader", imglight: false })
    } else {
      this.setState({ navClass: "", imglight: true })
    }
  }

  render() {
    return (
      <React.Fragment>
        <Navbar navclass={this.state.navClass} imglight={this.state.imglight} />
        {this.props.children}
      </React.Fragment>
    )
  }
}

export default LoadableNav
