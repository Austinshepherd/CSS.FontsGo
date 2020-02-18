import React, { Component } from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import CardOne from "../components/card"
import CardTwo from "../components/cardTwo"


function useKey(key) {
  
  const [pressed, setPressed] = React.useState(false)

 
  const match = event => key.toLowerCase() === event.key.toLowerCase()

  const onDown = event => {
      if (match(event)) setPressed(true)
  }

  const onUp = event => {
      if (match(event)) setPressed(false)
  }

      React.useEffect(() => {
      window.addEventListener("keydown", onDown)
      window.addEventListener("keyup", onUp)
      return () => {
          window.removeEventListener("keydown", onDown)
          window.removeEventListener("keyup", onUp)
      }
  }, [key])

  return pressed


  }

  

class App extends Component {
  
  render() {
    const shift = useKey("shift")


  return (
  <Layout>
    <SEO title="Home" />
    <div className="header_background">
    <div className="title_container">
    <p className="SiteSubTitle">A default CSS font generator</p>
    <h1 className="SiteTitle">FontsGo</h1>
    </div>

    {shift && (
      <>
    <div className="form_container">
      <form>
        <p className="input_lbl">Type here:</p>
        <div className="textarea-border">
        <textarea rows="5" cols="120"></textarea>
        </div>
      </form>
    </div>
    </>
    )}
    </div>
    <CardOne />
    <CardTwo />
  </Layout>
  );
  }
  } 

  export default App


