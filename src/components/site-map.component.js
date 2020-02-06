import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Map, TileLayer, Marker, Popup } from 'react-leaflet';
import '../App.css';
import axios from 'axios';

export default class SiteMap extends Component {
    constructor(props) {
        super(props);

        this.state = {
            sites: []
        };
    }

    componentDidMount() {
        var siteArray = []
        axios.get('http://localhost:5000/sites/')
            .then(res => {
                res.data.forEach((site => siteArray.push({
                    name: site.name,
                    location: {
                      lat: site.location.coordinates[1],
                      lon: site.location.coordinates[0]
                    }
                  })))
                
                this.setState({
                    sites: siteArray
                })
            }).catch(err => console.log(err))
    }
    render() {
        const position = [18.281988, -65.788845]
        return(
            <div className="container">
                <Map className="map" center={position} zoom={this.state.zoom}>
                    <TileLayer
                    attribution='&amp;copy <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                    />
                    <Marker position={position}>
                    <Popup>
                        A pretty CSS3 popup. <br /> Easily customizable.
                    </Popup>
                    </Marker>
                </Map>
                <span className="label">See all sites in <Link to={"/site-list/"}>list view</Link></span>
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