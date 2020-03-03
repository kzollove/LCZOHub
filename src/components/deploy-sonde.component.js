import React, { Component } from 'react';
import { Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';
import DatePicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css"
import axios from 'axios'

export default class DeploySonde extends Component {
    constructor(props) {
        super(props);

        this.onChangeSonde = this.onChangeSonde.bind(this)
        this.onChangeSite = this.onChangeSite.bind(this)
        this.onChangeDate = this.onChangeDate.bind(this)
        this.onChangeComment = this.onChangeComment.bind(this)
        this.onSubmit = this.onSubmit.bind(this)

        this.state = {
            sonde: '',
            site: '',
            sites: [],
            dateDeployed: new Date(),
            comment: '',
        }
    }

    componentDidMount() {
      axios.get('http://localhost:5000/sites/')
        .then(res => {
          if (res.data.length > 0) {
            this.setState({
              sites: res.data.map(site => site.name),
              site: res.data[0].name
            })
          }
        })
    }

    onChangeSonde(e) {
        this.setState({
            sonde: e.target.value
        })
    }

    onChangeSite(e) {
        this.setState({
            site: e.target.value
        })
    }
    onChangeDate(date) {
        this.setState({
            dateDeployed: date
        })
        console.log(this.state)

    }

    onChangeComment(e) {
        this.setState({
            comment: e.target.value
        })
        console.log(this.state)
    }

    onSubmit(e) {
        e.preventDefault();
        const deployment = {
            sonde: this.state.sonde,
            site: this.state.site,
            dateDeployed: this.state.dateDeployed,
            isDeployed: true,
            comment: [this.state.comment, this.state.dateDeployed]
        }

        console.log(deployment)

        // window.location = '/'
    }

    render() {
        return(
            <div className="container">
              <h1>Deploy a Sonde</h1>
<Form>
      <FormGroup>
        <Label for="sonde">Sonde</Label>
        <Input type="text" name="sonde" value={this.state.sonde} onChange={this.onChangeSonde} id="sonde" placeholder="Sonde" />
      </FormGroup>
      <FormGroup>
        <Label for="site">Site</Label>
        <Input type="select" name="site" value={this.state.site} onChange={this.onChangeSite} id="site">
          {this.state.sites.map((site) => {
            return <option
                      key={site}
                      value={site}>
                      {site}
                    </option>
          })}
        </Input>
      </FormGroup>
      <FormGroup>
        <Label for="date">Date Deployed</Label>
        <DatePicker
          selected={this.state.dateDeployed}
          onChange={this.onChangeDate}
        />
      </FormGroup>
      <FormGroup>
        <Label for="comment">Leave a comment with this deployment</Label>
        <Input type="textarea" value={this.state.comment} onChange={this.onChangeComment} name="comment" id="comment" />
      </FormGroup>
      <Button onClick={this.onSubmit}>Submit</Button>
    </Form>
    </div>
        );
    }
}