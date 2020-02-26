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
              defaultValue={this.state.TextName}
              onInput={this.handleInputChange}
              placeholder="type here"
            />
          </form>
          <div className="card_wrapper">
          <div className="card" id="test">
        <div className="card_container">
            <div className="output_card_background">
                 <div id="root">
                 <p>
            {this.state.TextName}
        </p>
                </div>
            </div>
            <h3>Arial, Helvetica, sans-serif</h3>
        </div>
    </div>
    <div className="card" id="test2">
        <div className="card_container">
            <div className="output_card_background">
                 <div id="root">
                 <p>
            {this.state.TextName}
        </p>
                </div>
            </div>
            <h3>"Comic Sans MS", cursive, sans-serif</h3>
        </div>
    </div>
    <div className="card" id="test3">
        <div className="card_container">
            <div className="output_card_background">
                 <div id="root">
                 <p>
            {this.state.TextName}
        </p>
                </div>
            </div>
            <h3>Impact, Charcoal, sans-serif</h3>
        </div>
    </div>
    <div className="card" id="test4">
        <div className="card_container">
            <div className="output_card_background">
                 <div id="root">
                 <p>
            {this.state.TextName}
        </p>
                </div>
            </div>
            <h3>"Lucida Sans Unicode", "Lucida Grande", sans-serif</h3>
        </div>
    </div>
    <div className="card" id="test5">
        <div className="card_container">
            <div className="output_card_background">
                 <div id="root">
                 <p>
            {this.state.TextName}
        </p>
                </div>
            </div>
            <h3>Tahoma, Geneva, sans-serif</h3>
        </div>
    </div>
    <div className="card" id="test6">
        <div className="card_container">
            <div className="output_card_background">
                 <div id="root">
                 <p>
            {this.state.TextName}
        </p>
                </div>
            </div>
            <h3>"Trebuchet MS", Helvetica, sans-serif</h3>
        </div>
    </div>
    <div className="card" id="test7">
        <div className="card_container">
            <div className="output_card_background">
                 <div id="root">
                 <p>
            {this.state.TextName}
        </p>
                </div>
            </div>
            <h3>Verdana, Geneva, sans-serif</h3>
        </div>
    </div>
    <div className="card" id="test8">
        <div className="card_container">
            <div className="output_card_background">
                 <div id="root">
                 <p>
            {this.state.TextName}
        </p>
                </div>
            </div>
            <h3>"Courier New", Courier, monospace</h3>
        </div>
    </div>
    <div className="card" id="test9">
        <div className="card_container">
            <div className="output_card_background">
                 <div id="root">
                 <p>
            {this.state.TextName}
        </p>
                </div>
            </div>
            <h3>"Arial Black", Gadget, sans-serif</h3>
        </div>
    </div>
    <div className="card" id="test10">
        <div className="card_container">
            <div className="output_card_background">
                 <div id="root">
                 <p>
            {this.state.TextName}
        </p>
                </div>
            </div>
            <h3>"Lucida Console", Monaco, monospace</h3>
        </div>
    </div>
    </div>
      </Layout>
    )
  }
}
