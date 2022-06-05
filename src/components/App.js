import React, { Component, useState } from "react";
import '../styles/App.css';

class App extends Component {
    constructor(props) {
        super(props)
        this.state = {
            renderBall: false,
            posi : 0,
            ballPosition: { left: "0px" }
        };
        this.renderChoice = this.renderBallOrButton.bind(this)
        this.buttonClickHandler = this.buttonClickHandler.bind(this)
        // this.ballHandler = this.ballHandler.bind(this)
    };

    buttonClickHandler() {
        this.setState({renderBall : true})
   }
    ballHandler(e) {
        // console.log('here', e.key)
        if(e.key === "ArrowRight"){
            this.setState({posi: this.state.posi+5})
            this.setState({ballPosition : {left : `${this.state.posi}px`}})}
        
   }
    renderBallOrButton() {
		if (this.state.renderBall) {
		    return <div className="ball" style={this.state.ballPosition}></div>
		} else {
		    return <button onClick={this.buttonClickHandler} >Click For One Ball</button>
		}
    }

    // bind ArrowRight keydown event
    componentDidMount() {
        document.addEventListener("keydown", this.ballHandler.bind(this));
    }

    render() {
        return (
            <div className="playground">
                {this.renderBallOrButton()}
            </div>
        )
    }
}


export default App;
