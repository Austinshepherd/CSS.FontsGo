import React from "react"
import "../components/layout"



export default class CardOne extends React.Component {
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
          
    <div className="Cards_A">
    <div className="cardOne">
        <div className="card_container">
            <div className="output_card_background">
                 <div id="root">
                </div>
            </div>
        </div>
    </div>
    <div className="cardTwo">
    <div className="card_container">
        <div className="output_card_background">
        <p className="CrdTxt">
            {this.state.TextName}
        </p>
        </div>
        
        </div>
    </div>
<div className="cardThree">
        <div className="card_container">
            <div className="output_card_background">
            <p>
             {this.state.TextName}
             </p>
             <div>
            </div>
            </div>
        </div>
    </div>

    </div>
   
      )
      }
    }
