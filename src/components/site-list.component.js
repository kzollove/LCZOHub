import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Table } from 'reactstrap';
import axios from 'axios';

const Site = (props) => (
  <tr>
    <th scope="row"><Link to={"/site/" + props.site.code}>{props.site.name}</Link></th>
    <td><Link to={"/site/" + props.site.code}>{props.site.code}</Link></td>
    <td>{props.site.watershed}</td>
  </tr>
    );

export default class SiteList extends Component {
    constructor(props) {
        super(props);

        this.state = {sites: []};
    }

    componentDidMount() {
        axios.get('http://localhost:5000/sites/')
            .then(res => {
                this.setState({ sites: res.data })
            }).catch(err => console.log(err))
    }

    siteList() {
        return this.state.sites.map(currentsite => {
            return <Site site={currentsite} key={currentsite._id} />
        })
    }
    render() {
        return(
            <div className="container">
                <h1>This is the Site List page.</h1>
                <h4>This page may include:</h4>
                <ul>
                    <li>A list of all sites, divided by watershed</li>
                </ul>
                <h4>For now it is just a list of things that could possibly be here</h4>

            <Table hover>
              <thead>
                <tr>
                  <th>Site</th>
                  <th>Code</th>
                  <th>Watershed</th>
                </tr>
              </thead>
              <tbody>
                { this.siteList() }
              </tbody>
              </Table>
            </div>
        );
    }
}