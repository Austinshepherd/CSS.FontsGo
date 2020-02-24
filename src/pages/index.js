import React from "react"
import KeyboardEventHandler from 'react-keyboard-event-handler';
import Layout from "../components/layout"
import SEO from "../components/seo"
import CardOne from "../components/card"
import CardTwo from "../components/cardTwo"



const Home = (props) => (
  
  <Layout>
    <SEO title="Home" />
    <div className="header_background">
    <div className="title_container">
    <p className="SiteSubTitle">A default CSS font generator</p>
    <h1 className="SiteTitle">FontsGo</h1>
    </div>

    <div className="form_container">
    <KeyboardEventHandler
    handleKeys={['a', 'b', 'c']}
    onKeyEvent={(key, e) => console.log(`do something upon keydown event of ${key}`)} >
      <form>
        <p className="input_lbl">Type here:</p>
        <div className="textarea-border">
        <textarea rows="5" cols="120"></textarea>
        </div>
      </form>
      </KeyboardEventHandler>
    </div>
    </div>
    <CardOne />
    <CardTwo />
  </Layout>
)

  export default Home


