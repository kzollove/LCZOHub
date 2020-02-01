import React, { Component } from 'react';

export default class SiteMap extends Component {
    render() {
        return(
            <div className="container">
                <h1>This is the Site Map page.</h1>
                <h4>This page may include:</h4>
                <ul>
                    <li>A map with all of the sites marked</li>
                    <li>A small link above or below the map to get to list view of all sites</li>
                    <li>A card component from which you can select which sites display</li>
                    <ul>
                        <li>By watershed</li>
                        <li>By sampling</li>
                        <li>By tag</li>
                    </ul>
                    <li>Links to the most pertinent functions</li>
                </ul>
                <h4>For now it is just a list of things that could possibly be here</h4>
            </div>
        );
    }
}