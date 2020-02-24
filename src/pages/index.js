import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import CardOne from "../components/card"
import CardTwo from "../components/cardTwo"


export default class IndexPage extends React.Component {
  state = {
    TextName: "",
  }
  handleInputChange = event => {
    const target = event.target
    const value = target.value
    const name = target.name
    this.setState({
      [name]: value,
    })
  }
  handleKeyPress = event => {
    event.preventDefault()
    alert(`Welcome ${this.state.TextName}`)
  }
  render() {
    return (
      <Layout>
        <SEO title="Home" />
        <div className="header_background">
          <div className="title_container">
            <p className="SiteSubTitle">A default CSS font generator</p>
            <h1 className="SiteTitle">FontsGo</h1>
          </div>
          </div>
          <form>

            <textarea
              type="text"
              name="TextName"
              value={this.state.Text}
              onKeyPress={this.handleKeyPress}
            />
          </form>
          <CardOne />
          <CardTwo />
      </Layout>
    )
  }
}
