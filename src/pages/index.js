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
          <h1 className="SiteTitle">FontsGo</h1>
            <p className="SiteSubTitle">CSS Fonts</p>
            <p className="caution">(fonts vary by operating system)</p>
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
          <div className="card" id="test26">
        <div className="card_container">
            <div className="output_card_background">
                 <div id="root">
                 <p className="CrdTxt">
            {this.state.TextName}
        </p>
                </div>
            </div>
            <h3> Comic Sans MS, Comic Sans, cursive</h3>
        </div>
    </div>
    <div className="card" id="test35">
        <div className="card_container">
            <div className="output_card_background">
                 <div id="root">
                 <p className="CrdTxt">
            {this.state.TextName}
        </p>
                </div>
            </div>
            <h3>Chalkduster, fantasy</h3>
        </div>
    </div>
    <div className="card" id="test27">
        <div className="card_container">
            <div className="output_card_background">
                 <div id="root">
                 <p className="CrdTxt">
            {this.state.TextName}
        </p>
                </div>
            </div>
            <h3>Apple Chancery, cursive</h3>
        </div>
    </div>
    <div className="card" id="test28">
        <div className="card_container">
            <div className="output_card_background">
                 <div id="root">
                 <p className="CrdTxt">
            {this.state.TextName}
        </p>
                </div>
            </div>
            <h3>Bradley Hand, cursive</h3>
        </div>
    </div>
    <div className="card" id="test29">
        <div className="card_container">
            <div className="output_card_background">
                 <div id="root" className="CrdTxt">
                 <p>
            {this.state.TextName}
        </p>
                </div>
            </div>
            <h3>Brush Script MT, "Brush Script Std", cursive</h3>
        </div>
    </div>
    <div className="card" id="test33">
        <div className="card_container">
            <div className="output_card_background">
                 <div id="root">
                 <p className="CrdTxt">
            {this.state.TextName}
        </p>
                </div>
            </div>
            <h3>Impact, fantasy</h3>
        </div>
    </div>
   
    <div className="card" id="test31">
        <div className="card_container">
            <div className="output_card_background">
                 <div id="root">
                 <p className="CrdTxt">
            {this.state.TextName}
        </p>
                </div>
            </div>
            <h3>URW Chancery L, cursive</h3>
        </div>
    </div>
    <div className="card" id="test40">
        <div className="card_container">
            <div className="output_card_background">
                 <div id="root">
                 <p className="CrdTxt">
            {this.state.TextName}
        </p>
                </div>
            </div>
            <h3>Trattatello, fantasy</h3>
        </div>
    </div>
    <div className="card" id="test30">
        <div className="card_container">
            <div className="output_card_background">
                 <div id="root">
                 <p className="CrdTxt">
            {this.state.TextName}
        </p>
                </div>
            </div>
            <h3>Snell Roundhand, cursive</h3>
        </div>
    </div>
    <div className="card" id="test34">
        <div className="card_container">
            <div className="output_card_background">
                 <div id="root">
                 <p className="CrdTxt">
            {this.state.TextName}
        </p>
                </div>
            </div>
            <h3>Luminari, fantasy</h3>
        </div>
    </div>
   
    <div className="card" id="test36">
        <div className="card_container">
            <div className="output_card_background">
                 <div id="root">
                 <p className="CrdTxt">
            {this.state.TextName}
        </p>
                </div>
            </div>
            <h3>Jazz LET, fantasy</h3>
        </div>
    </div>
    <div className="card" id="test37">
        <div className="card_container">
            <div className="output_card_background">
                 <div id="root">
                 <p className="CrdTxt">
            {this.state.TextName}
        </p>
                </div>
            </div>
            <h3>Blippo, fantasy</h3>
        </div>
    </div>
    <div className="card" id="test38">
        <div className="card_container">
            <div className="output_card_background">
                 <div id="root">
                 <p className="CrdTxt">
            {this.state.TextName}
        </p>
                </div>
            </div>
            <h3>Stencil Std, fantasy</h3>
        </div>
    </div>
    <div className="card" id="test39">
        <div className="card_container">
            <div className="output_card_background">
                 <div id="root">
                 <p className="CrdTxt">
            {this.state.TextName}
        </p>
                </div>
            </div>
            <h3>Marker Felt, fantasy</h3>
        </div>
    </div>
    <div className="card" id="test32">
        <div className="card_container">
            <div className="output_card_background">
                 <div id="root">
                 <p className="CrdTxt">
            {this.state.TextName}
        </p>
                </div>
            </div>
            <h3>cursive</h3>
        </div>
    </div>
    <div className="card" id="test41">
        <div className="card_container">
            <div className="output_card_background">
                 <div id="root">
                 <p className="CrdTxt">
            {this.state.TextName}
        </p>
                </div>
            </div>
            <h3>fantasy</h3>
        </div>
    </div>
          <div className="card" id="test">
        <div className="card_container">
            <div className="output_card_background">
                 <div id="root">
                 <p className="CrdTxt">
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
                 <p className="CrdTxt">
            {this.state.TextName}
        </p>
                </div>
            </div>
            <h3>Helvetica, sans-serif</h3>
        </div>
    </div>
    <div className="card" id="test3">
        <div className="card_container">
            <div className="output_card_background">
                 <div id="root">
                 <p className="CrdTxt">
            {this.state.TextName}
        </p>
                </div>
            </div>
            <h3>Verdana, sans-serif</h3>
        </div>
    </div>
    <div className="card" id="test4">
        <div className="card_container">
            <div className="output_card_background">
                 <div id="root">
                 <p className="CrdTxt">
            {this.state.TextName}
        </p>
                </div>
            </div>
            <h3>Trebuchet MS, sans-serif</h3>
        </div>
    </div>
    <div className="card" id="test5">
        <div className="card_container">
            <div className="output_card_background">
                 <div id="root">
                 <p className="CrdTxt">
            {this.state.TextName}
        </p>
                </div>
            </div>
            <h3>Gill Sans, sans-serif</h3>
        </div>
    </div>
    <div className="card" id="test6">
        <div className="card_container">
            <div className="output_card_background">
                 <div id="root">
                 <p className="CrdTxt">
            {this.state.TextName}
        </p>
                </div>
            </div>
            <h3>Noto Sans, sans-serif</h3>
        </div>
    </div>
    <div className="card" id="test7">
        <div className="card_container">
            <div className="output_card_background">
                 <div id="root">
                 <p className="CrdTxt">
            {this.state.TextName}
        </p>
                </div>
            </div>
            <h3>Avantgarde, TeX Gyre Adventor, URW Gothic L, sans-serif</h3>
        </div>
    </div>
    <div className="card" id="test8">
        <div className="card_container">
            <div className="output_card_background">
                 <div id="root">
                 <p className="CrdTxt">
            {this.state.TextName}
        </p>
                </div>
            </div>
            <h3>Optima, sans-serif</h3>
        </div>
    </div>
    <div className="card" id="test9">
        <div className="card_container">
            <div className="output_card_background">
                 <div id="root">
                 <p className="CrdTxt">
            {this.state.TextName}
        </p>
                </div>
            </div>
            <h3>Arial Narrow, sans-serif</h3>
        </div>
    </div>
    <div className="card" id="test10">
        <div className="card_container">
            <div className="output_card_background">
                 <div id="root">
                 <p className="CrdTxt">
            {this.state.TextName}
        </p>
                </div>
            </div>
            <h3>sans-serif</h3>
        </div>
    </div>
    <div className="card" id="test11">
        <div className="card_container">
            <div className="output_card_background">
                 <div id="root">
                 <p className="CrdTxt">
            {this.state.TextName}
        </p>
                </div>
            </div>
            <h3>Times,Times New Roman, serif</h3>
        </div>
    </div>
    <div className="card" id="test12">
        <div className="card_container">
            <div className="output_card_background">
                 <div id="root">
                 <p className="CrdTxt">
            {this.state.TextName}
        </p>
                </div>
            </div>
            <h3>Didot, serif</h3>
        </div>
    </div> 
    <div className="card" id="test13">
        <div className="card_container">
            <div className="output_card_background">
                 <div id="root">
                 <p className="CrdTxt">
            {this.state.TextName}
        </p>
                </div>
            </div>
            <h3>Georgia, serif</h3>
        </div>
    </div>
    <div className="card" id="test14">
        <div className="card_container">
            <div className="output_card_background">
                 <div id="root">
                 <p className="CrdTxt">
            {this.state.TextName}
        </p>
                </div>
            </div>
            <h3>Palatino, URW Palladio L, serif</h3>
        </div>
    </div>
    <div className="card" id="test15">
        <div className="card_container">
            <div className="output_card_background">
                 <div id="root">
                 <p className="CrdTxt">
            {this.state.TextName}
        </p>
                </div>
            </div>
            <h3>Bookman, URW Bookman L, serif</h3>
        </div>
    </div>
    <div className="card" id="test16">
        <div className="card_container">
            <div className="output_card_background">
                 <div id="root">
                 <p className="CrdTxt">
            {this.state.TextName}
        </p>
                </div>
            </div>
            <h3>New Century Schoolbook, TeX Gyre Schola, serif</h3>
        </div>
    </div> 
    <div className="card" id="test17">
        <div className="card_container">
            <div className="output_card_background">
                 <div id="root">
                 <pclassName="CrdTxt">
            {this.state.TextName}
        </p>
                </div>
            </div>
            <h3>American Typewriter, serif</h3>
        </div>
    </div>
    <div className="card" id="test18">
        <div className="card_container">
            <div className="output_card_background">
                 <div id="root">
                 <p className="CrdTxt">
            {this.state.TextName}
        </p>
                </div>
            </div>
            <h3>serif</h3>
        </div>
    </div>
    <div className="card" id="test20">
        <div className="card_container">
            <div className="output_card_background">
                 <div id="root">
                 <p className="CrdTxt">
            {this.state.TextName}
        </p>
                </div>
            </div>
            <h3>Courier New, monospace</h3>
        </div>
    </div>
    <div className="card" id="test21">
        <div className="card_container">
            <div className="output_card_background">
                 <div id="root">
                 <p className="CrdTxt">
            {this.state.TextName}
        </p>
                </div>
            </div>
            <h3>Courier, monospace</h3>
        </div>
    </div>
    <div className="card" id="test22">
        <div className="card_container">
            <div className="output_card_background">
                 <div id="root">
                 <p className="CrdTxt">
            {this.state.TextName}
        </p>
                </div>
            </div>
            <h3>FreeMono, monospace</h3>
        </div>
    </div>
    <div className="card" id="test23">
        <div className="card_container">
            <div className="output_card_background">
                 <div id="root">
                 <p className="CrdTxt">
            {this.state.TextName}
        </p>
                </div>
            </div>
            <h3>OCR A Std, monospace</h3>
        </div>
    </div>
    <div className="card" id="test24">
        <div className="card_container">
            <div className="output_card_background">
                 <div id="root">
                 <p className="CrdTxt">
            {this.state.TextName}
        </p>
                </div>
            </div>
            <h3>DejaVu Sans Mono, monospace</h3>
        </div>
    </div>
    <div className="card" id="test25">
        <div className="card_container">
            <div className="output_card_background">
                 <div id="root">
                 <p className="CrdTxt">
            {this.state.TextName}
        </p>
                </div>
            </div>
            <h3>monospace</h3>
        </div>
    </div>
    </div>
      </Layout>
    )
  }
};
