import React, { Component } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom'
import { Map, TileLayer, Marker, Popup } from 'react-leaflet';
import '../App.css';
import L from 'leaflet'
import { Container, Row, Col, UncontrolledCollapse, Button, Card, CardBody, Table } from 'reactstrap';
import queryString from 'query-string'

const Deployment = (props) => (
    <div>
        <p>Sonde: {props.dep.sonde}</p>
        <p>Logging since: {props.dep.dateDeployed.slice(0,10)}</p>
        <h3>End Deployment?</h3>
    </div> 
)

const Hobos = (props) => (
    <tr>
        <td>{props.hobo.hobo}</td>
    </tr>
)

const Campbell = (props) => (
    <tr>
        <td>{props.sensor}</td>
    </tr>
)

export default class MySite extends Component {
    constructor(props) {
        super(props);

        this.state = {
            location: {
                lat: 18.281988,
                lon: -65.788845
            },
            deployments: [],
            hobos: [],
            campbell: null,
            zoom: 10
        };
    }

    componentDidMount() {
        console.log(this.props)
        axios.get('http://localhost:5000' + this.props.location.pathname)
            .then(site => {
                this.setState({
                    site: site.data.name,
                    deployments: site.data.deployment,
                    hobos: site.data.hobos,
                    campbell: site.data.campbell,
                    location: {
                        lat: site.data.location.coordinates[1],
                        lon: site.data.location.coordinates[0]
                    },
                    zoom: 15
                })
            })
            .catch(err => console.error(err))
    }
    
    siteCoords() {
        var myIcon = L.icon({
            iconUrl: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABkAAAApCAYAAADAk4LOAAAFgUlEQVR4Aa1XA5BjWRTN2oW17d3YaZtr2962HUzbDNpjszW24mRt28p47v7zq/bXZtrp/lWnXr337j3nPCe85NcypgSFdugCpW5YoDAMRaIMqRi6aKq5E3YqDQO3qAwjVWrD8Ncq/RBpykd8oZUb/kaJutow8r1aP9II0WmLKLIsJyv1w/kqw9Ch2MYdB++12Onxee/QMwvf4/Dk/Lfp/i4nxTXtOoQ4pW5Aj7wpici1A9erdAN2OH64x8OSP9j3Ft3b7aWkTg/Fm91siTra0f9on5sQr9INejH6CUUUpavjFNq1B+Oadhxmnfa8RfEmN8VNAsQhPqF55xHkMzz3jSmChWU6f7/XZKNH+9+hBLOHYozuKQPxyMPUKkrX/K0uWnfFaJGS1QPRtZsOPtr3NsW0uyh6NNCOkU3Yz+bXbT3I8G3xE5EXLXtCXbbqwCO9zPQYPRTZ5vIDXD7U+w7rFDEoUUf7ibHIR4y6bLVPXrz8JVZEql13trxwue/uDivd3fkWRbS6/IA2bID4uk0UpF1N8qLlbBlXs4Ee7HLTfV1j54APvODnSfOWBqtKVvjgLKzF5YdEk5ewRkGlK0i33Eofffc7HT56jD7/6U+qH3Cx7SBLNntH5YIPvODnyfIXZYRVDPqgHtLs5ABHD3YzLuespb7t79FY34DjMwrVrcTuwlT55YMPvOBnRrJ4VXTdNnYug5ucHLBjEpt30701A3Ts+HEa73u6dT3FNWwflY86eMHPk+Yu+i6pzUpRrW7SNDg5JHR4KapmM5Wv2E8Tfcb1HoqqHMHU+uWDD7zg54mz5/2BSnizi9T1Dg4QQXLToGNCkb6tb1NU+QAlGr1++eADrzhn/u8Q2YZhQVlZ5+CAOtqfbhmaUCS1ezNFVm2imDbPmPng5wmz+gwh+oHDce0eUtQ6OGDIyR0uUhUsoO3vfDmmgOezH0mZN59x7MBi++WDL1g/eEiU3avlidO671bkLfwbw5XV2P8Pzo0ydy4t2/0eu33xYSOMOD8hTf4CrBtGMSoXfPLchX+J0ruSePw3LZeK0juPJbYzrhkH0io7B3k164hiGvawhOKMLkrQLyVpZg8rHFW7E2uHOL888IBPlNZ1FPzstSJM694fWr6RwpvcJK60+0HCILTBzZLFNdtAzJaohze60T8qBzyh5ZuOg5e7uwQppofEmf2++DYvmySqGBuKaicF1blQjhuHdvCIMvp8whTTfZzI7RldpwtSzL+F1+wkdZ2TBOW2gIF88PBTzD/gpeREAMEbxnJcaJHNHrpzji0gQCS6hdkEeYt9DF/2qPcEC8RM28Hwmr3sdNyht00byAut2k3gufWNtgtOEOFGUwcXWNDbdNbpgBGxEvKkOQsxivJx33iow0Vw5S6SVTrpVq11ysA2Rp7gTfPfktc6zhtXBBC+adRLshf6sG2RfHPZ5EAc4sVZ83yCN00Fk/4kggu40ZTvIEm5g24qtU4KjBrx/BTTH8ifVASAG7gKrnWxJDcU7x8X6Ecczhm3o6YicvsLXWfh3Ch1W0k8x0nXF+0fFxgt4phz8QvypiwCCFKMqXCnqXExjq10beH+UUA7+nG6mdG/Pu0f3LgFcGrl2s0kNNjpmoJ9o4B29CMO8dMT4Q5ox8uitF6fqsrJOr8qnwNbRzv6hSnG5wP+64C7h9lp30hKNtKdWjtdkbuPA19nJ7Tz3zR/ibgARbhb4AlhavcBebmTHcFl2fvYEnW0ox9xMxKBS8btJ+KiEbq9zA4RthQXDhPa0T9TEe69gWupwc6uBUphquXgf+/FrIjweHQS4/pduMe5ERUMHUd9xv8ZR98CxkS4F2n3EUrUZ10EYNw7BWm9x1GiPssi3GgiGRDKWRYZfXlON+dfNbM+GgIwYdwAAAAASUVORK5CYII',
            iconSize: [15,25],
            iconAnchor: [7.5, 25],
            popupAnchor: [0, -25]
        })
        return <Marker position={[this.state.location.lat, this.state.location.lon]} icon={myIcon}>
            <Popup></Popup>
            </Marker>
    }

    depList() {
        return this.state.deployments.map(currentdep => {
            return <Deployment dep={currentdep} key={currentdep._id} />
        })
    }

    hoboList() {
        return this.state.hobos.map(currenthobo => {
            return <Hobos hobo={currenthobo} key={currenthobo._id} />
        })
    }

    campbellList() {
        return this.state.campbell.sensors.map(currentsensor => {
            return <Campbell sensor={currentsensor} key={currentsensor._id} />
        })
    }

    render() {
        const position=[this.state.location.lat, this.state.location.lon]

        let deployment;
        if (this.state.deployments.length) {
            deployment = <div>
                        <Button color="primary" id="toggler1" style={{ marginBottom: '1rem' }}>
                        Deployment
                        </Button>
                        <UncontrolledCollapse toggler="#toggler1">
                        <Card>
                            <CardBody>
                            <Table hover>
                            <tbody>
                            { this.depList() }
                            </tbody>
                            </Table>
                            </CardBody>
                        </Card>
                        </UncontrolledCollapse>
                    </div>
        }
        else {
            deployment =     <div>
                                <p>No sonde deployed</p>
                                <h3><Link to={{pathname: "/deploy", state:{site: this.props.match.params.code}}} >Deploy a sonde?</Link></h3>
                            </div> 
        }

        let hobos;
        if (this.state.hobos.length) {
            hobos = <div>
                        <Button color="primary" id="toggler2" style={{ marginBottom: '1rem' }}>
                        HOBOs
                        </Button>
                        <UncontrolledCollapse toggler="#toggler2">
                        <Card>
                            <CardBody>
                            <Table hover>
                            <tbody>
                            { this.hoboList() }
                            </tbody>
                            </Table>
                            </CardBody>
                        </Card>
                        </UncontrolledCollapse>
                    </div>
        }
        else {
            hobos =    <tr>
                            <td>No HOBOs deployed</td>
                            <td>Deploy a HOBO?</td>
                        </tr> 
        }

        let campbell;
        if (this.state.campbell) {
            campbell = <div>
                        <Button color="primary" id="toggler3" style={{ marginBottom: '1rem' }}>
                        Campbell
                        </Button>
                        <UncontrolledCollapse toggler="#toggler3">
                        <Card>
                            <CardBody>
                            <Table hover>
                            <tbody>
                            { this.campbellList() }
                            </tbody>
                            </Table>
                            </CardBody>
                        </Card>
                        </UncontrolledCollapse>
                    </div>
        }
        else {
            campbell =     <tr>
                                <td>No HOBOs deployed</td>
                                <td>Deploy a HOBO?</td>
                            </tr> 
        }

        return(
            <Container>
            <div className="container">
            <h1>{this.state.site}</h1>
                <Row>
                    <Col xl="6" xs="12">
                        
                    <Map className="my-map" center={position} zoom={this.state.zoom}>
                        <TileLayer
                        attribution='&amp;copy <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                        />
                        { this.siteCoords() }
                    </Map>
                    </Col>
                    <Col xl="6" className="alin-center">
                        <div className=" accordion d-flex align-items-center flex-column">
                            <div className="mb-auto p-2 bd-highlight">
                                <div className="d-flex">
                                    { deployment }
                                </div>
                                <br/>
                            </div>
                            <div className="mb-auto p-2 bd-highlight">
                                <div className="d-flex">
                                    { hobos }
                                </div>
                                <br/>
                            </div>
                            <div className="mb-auto p-2 bd-highlight">
                                <div className="d-flex">
                                    { campbell }
                                </div>
                                <br/>
                            </div>
                        </div>
                    </Col>
                </Row>
            </div>
            </Container>
        );
    }
}