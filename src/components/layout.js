import React, { Component } from "react"
import Loadable from "react-loadable"
import Navbar from "./Navbar/Navbar_Page"
import WaterMark from "./Watermark/Watermark"
import "../assets/css/theme.css"
// Import Material Ico
import "../assets/css/materialdesignicons.min.css"

// Import Bootstrap Css
import "../assets/css/mobiriseicons.css"

// Import Custom Css
import "../assets/css/menu.css"
import "../assets/css/style.css"

//Colors
import "../assets/css/colors/default.css"
import Footer from "./Footer/footer"

const LoadableNav = Loadable({
  loader: () => import("./LoadableNav/LoadableNav"),
  loading: Navbar,
})

class Layout extends Component {
  render() {
    return (
      <>
        <WaterMark />
        <LoadableNav />
        {this.props.children}
        <Footer />
      </>
    )
  }
}

export default Layout
