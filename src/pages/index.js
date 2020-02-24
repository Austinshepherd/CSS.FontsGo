import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"



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
  
  render() {
    return (
      <Layout>
        <SEO title="Home" />
        <div className="header_background">
          <div className="title_container">
            <p className="SiteSubTitle">Web Safe CSS Fonts</p>
            <h1 className="SiteTitle">FontsGo</h1>
          </div>
          </div>
        
          <form >

            <textarea
              type="text"
              name="TextName"
              value={this.state.TextName}
              onInput={this.handleInputChange}
            />
          </form>
          <div className="card_wrapper">
          <div className="cardOne" id="test">
        <div className="card_container">
            <div className="output_card_background">
                 <div id="root">
                 <p>
            {this.state.TextName}
        </p>
                </div>
            </div>
        </div>
    </div>
    <div className="cardOne" id="test2">
        <div className="card_container">
            <div className="output_card_background">
                 <div id="root">
                 <p>
            {this.state.TextName}
        </p>
                </div>
            </div>
        </div>
    </div>
    <div className="cardOne" id="test3">
        <div className="card_container">
            <div className="output_card_background">
                 <div id="root">
                 <p>
            {this.state.TextName}
        </p>
                </div>
            </div>
        </div>
    </div>
    <div className="cardOne" id="test4">
        <div className="card_container">
            <div className="output_card_background">
                 <div id="root">
                 <p>
            {this.state.TextName}
        </p>
                </div>
            </div>
        </div>
    </div>
    <div className="cardOne" id="test2">
        <div className="card_container">
            <div className="output_card_background">
                 <div id="root">
                 <p>
            {this.state.TextName}
        </p>
                </div>
            </div>
        </div>
    </div>
    <div className="cardOne" id="test2">
        <div className="card_container">
            <div className="output_card_background">
                 <div id="root">
                 <p>
            {this.state.TextName}
        </p>
                </div>
            </div>
        </div>
    </div>
    <div className="cardOne" id="test2">
        <div className="card_container">
            <div className="output_card_background">
                 <div id="root">
                 <p>
            {this.state.TextName}
        </p>
                </div>
            </div>
        </div>
    </div>
    <div className="cardOne" id="test2">
        <div className="card_container">
            <div className="output_card_background">
                 <div id="root">
                 <p>
            {this.state.TextName}
        </p>
                </div>
            </div>
        </div>
    </div>
    <div className="cardOne" id="test2">
        <div className="card_container">
            <div className="output_card_background">
                 <div id="root">
                 <p>
            {this.state.TextName}
        </p>
                </div>
            </div>
        </div>
    </div>
    <div className="cardOne" id="test2">
        <div className="card_container">
            <div className="output_card_background">
                 <div id="root">
                 <p>
            {this.state.TextName}
        </p>
                </div>
            </div>
        </div>
    </div>
    <div className="cardOne" id="test2">
        <div className="card_container">
            <div className="output_card_background">
                 <div id="root">
                 <p>
            {this.state.TextName}
        </p>
                </div>
            </div>
        </div>
    </div>
    </div>
      </Layout>
    )
  }
}
