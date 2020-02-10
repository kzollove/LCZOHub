import React from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.css';

import Navbar from "./components/navbar.component";
import Main from "./components/main.component"
import SiteMap from "./components/site-map.component"
import SiteList from "./components/site-list.component"
import CreateSite from "./components/create-site.component"
import EditSite from "./components/edit-site.component"
import DeploySonde from "./components/deploy-sonde.component"
import HoboLog from "./components/hobolog.component"
import MySite from "./components/my-site.component"
import Sensors from "./components/sensors.component"
import SondeLog from "./components/sondelog.component"
import CR1000 from "./components/campbell.component"
import Sampling from "./components/sampling.component"






function App() {
  return (
    <Router>
      <Navbar />
      <br />
      <Route path="/" exact component={ Main } />

      <Route path="/site-map" component={ SiteMap } />
      <Route path="/site-list" component={ SiteList } />
      <Route path="/site-create" component={ CreateSite } />
      <Route path="/site-edit/:id" component={ EditSite } />
      <Route path="/sites/:code" component={ MySite } />

      <Route path="/sensors" component={ Sensors } />
      <Route path="/sampling" component={ Sampling } />

      <Route path="/deploy" component={ DeploySonde } />
      <Route path="/hobolog" component={ HoboLog } />
      <Route path="/sondelog" component={ SondeLog } />
      <Route path="/campbell" component={ CR1000 } />


    </Router>
  );
}

export default App;
