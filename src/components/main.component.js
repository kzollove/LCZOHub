import React, { Component } from 'react';

export default class Main extends Component {
    render() {
        return(
            <div className="container">
                <h1>This is the main page.</h1>
                <h4>This page may include:</h4>
                <ul>
                    <li>To do lists</li>
                    <li>Post to slack</li>
                    <li>Post to twitter</li>
                    <li>Google calendar</li>
                </ul>
                <h4>For now it is just a list of things that could possibly be here</h4>
            </div>
        );
    }
}