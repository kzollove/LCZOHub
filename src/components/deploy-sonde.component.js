import React, { Component } from 'react';

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
                Deploy a sonde using this form
            </div>
        );
    }
}