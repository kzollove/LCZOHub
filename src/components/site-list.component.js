import React, { Component } from 'react';

export default class SiteList extends Component {
    render() {
        return(
            <div className="container">
                <h1>This is the Site Map page.</h1>
                <h4>This page may include:</h4>
                <ul>
                    <li>A list of all sites, divided by watershed</li>
                </ul>
                <h4>For now it is just a list of things that could possibly be here</h4>
            </div>
        );
    }
}