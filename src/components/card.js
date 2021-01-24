import React from 'react';
import ReactDOM from 'react-dom';
import Radium, {StyleRoot} from 'radium';
import "./card.css"
import Button from '@material-ui/core/Button';


import FadeIn from 'react-fade-in';


export default class Card extends React.Component {
    constructor(props) {
        super(props);
    }


    render() {
        return(
            <div className = "container">
                <h2> {this.props.tag} </h2>
                <p style = {{textAlign: "center"}}>
                    {this.props.description}
                </p>

                <div className = "button-container">
                    <Button variant="contained" color="primary" >
                        Github
                    </Button>
                </div>
                
                <div className = "button-container" style = {{display: this.props.hasPage ? "inline-block" : "none"}}>
                    <Button variant="contained" color="primary" >
                        Sida
                    </Button>
                </div>
            </div>
        )
    }
}
