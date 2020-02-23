import React, { Component } from 'react';
import Background from '../images/IMG_4637.jpg';

var sectionStyle = {
    width: "100%",
    backgroundImage: `url( ${Background } )`

}

export default class Main extends Component {
    render() {
        return(
            <div className="back-image" style= {sectionStyle}>
                <img src={ Background } className="back-image"/>
            </div>
        );
    }
}