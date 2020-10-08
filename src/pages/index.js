import React from "react"
import Loadable from "react-loadable"
import loadingComp from "../components/loadingComp"
import Section from "../components/Section/section"
import Features from "../components/Features/features"
import GetStarted from "../components/Get Started/get-started"
import Services from "../components/Services/services"
import Team from "../components/Team/our-team"
import Pricing from "../components/Pricing/pricing"
import GetInTouch from "../components/Get in Touch/get-in-touch"
import Layout from "../components/layout"
import SEO from "../components/seo"

const LoadableClients = Loadable({
  loader: () => import("../components/Clients/clients"),
  loading: loadingComp,
})

const IndexPage = () => (
  <Layout>
    <SEO title="SoloShah" />
    <Section />
    <Features />
    <GetStarted />
    <Services />
    <LoadableClients />
    <Team />
    <Pricing />
    <GetInTouch />
  </Layout>
)

export default IndexPage
