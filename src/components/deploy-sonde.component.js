import React, { Component } from 'react';
import { Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';
import DatePicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css"

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
            comments: []
        }
    }

    // componentDidMount()

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
            date: date
        })
    }

    onChangeComment(e) {
        this.setState({
            comments: [e.target.value]
        })
    }

    onSubmit(e) {
        e.preventDefault();
        const deployment = {
            sonde: this.state.sonde,
            site: this.state.site,
            dateDeployed: this.state.dateDeployed,
            isDeployed: true,
            comments: this.state.comments
        }

        console.log(deployment)

        window.location = '/'
    }

    render() {
        return(
            <div className="container">
<Form>
      <FormGroup>
        <Label for="sonde">Sonde</Label>
        <Input type="text" name="sonde" id="sonde" placeholder="Sonde" />
      </FormGroup>
      <FormGroup>
        <Label for="examplePassword">Password</Label>
        <Input type="password" name="password" id="examplePassword" placeholder="password placeholder" />
      </FormGroup>
      <FormGroup>
        <Label for="exampleSelect">Select</Label>
        <Input type="select" name="select" id="exampleSelect">
          <option>1</option>
          <option>2</option>
          <option>3</option>
          <option>4</option>
          <option>5</option>
        </Input>
      </FormGroup>
      <FormGroup>
        <Label for="exampleSelectMulti">Select Multiple</Label>
        <Input type="select" name="selectMulti" id="exampleSelectMulti" multiple>
          <option>1</option>
          <option>2</option>
          <option>3</option>
          <option>4</option>
          <option>5</option>
        </Input>
      </FormGroup>
      <FormGroup>
        <Label for="exampleText">Text Area</Label>
        <Input type="textarea" name="text" id="exampleText" />
      </FormGroup>
      <FormGroup>
        <Label for="exampleFile">File</Label>
        <Input type="file" name="file" id="exampleFile" />
        <FormText color="muted">
          This is some placeholder block-level help text for the above input.
          It's a bit lighter and easily wraps to a new line.
        </FormText>
      </FormGroup>
      <FormGroup tag="fieldset">
        <legend>Radio Buttons</legend>
        <FormGroup check>
          <Label check>
            <Input type="radio" name="radio1" />{' '}
            Option one is this and that—be sure to include why it's great
          </Label>
        </FormGroup>
        <FormGroup check>
          <Label check>
            <Input type="radio" name="radio1" />{' '}
            Option two can be something else and selecting it will deselect option one
          </Label>
        </FormGroup>
        <FormGroup check disabled>
          <Label check>
            <Input type="radio" name="radio1" disabled />{' '}
            Option three is disabled
          </Label>
        </FormGroup>
      </FormGroup>
      <FormGroup check>
        <Label check>
          <Input type="checkbox" />{' '}
          Check me out
        </Label>
      </FormGroup>
      <Button>Submit</Button>
    </Form>            </div>
        );
    }
}