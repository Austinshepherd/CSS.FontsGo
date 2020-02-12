import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <div className="title_container">
    <p className="SiteSubTitle">A default CSS font generator</p>
    <h1 className="SiteTitle">FontsGo</h1>
    </div>
    <div className="form_container">
      <form>
        <p className="input_lbl">Type here:</p>
        <div class="textarea-border">
        <textarea rows="5" cols="120"></textarea>
        </div>
      </form>
    </div>
  </Layout>
)

export default IndexPage
