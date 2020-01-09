import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <h1>System Update</h1>
    <p>Nous mettons à jour notre plateforme, nous nous excusons pour la gêne occasionée.</p>
    <p>Pour toutes, questions n'hésitez pas à nous contacter et à nous suivre sur les réseaux sociaux.</p>
    <p>A bientôt.</p>
    <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
      <Image />
    </div>
    <Link to="/page-2/">Go to page 2</Link>
  </Layout>
)

export default IndexPage
