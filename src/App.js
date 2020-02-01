import React from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.css';

import Navbar from "./components/navbar.component";
import Main from "./components/main.component"


function App() {
  return (
    <Router>
      <Navbar />
      <br />
      <Route path="/" exact component={ Main } />
      {/* <Route path="/site-map" component={ SiteMap } />
      <Route path="/site-list" component={ SiteList } />
      <Route path="/site-create" component={ CreateSite } />
      <Route path="/site-edit/:id" component={ EditSite } />

      <Route path="/deploy" component={ DeploySonde } />
      <Route path="/hobolog" component={ HoboLog } /> */}


    </Router>
  );
}

export default App;
