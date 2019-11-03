import React from "react";
import DataProvider from "./DataProvider";
import Discover from './subcomponent/Discover';
import Nav from './Nav';
import './stylesheets/App.css';

const App = () => (
  <React.Fragment>
    <Nav />
    <DataProvider endpoint="http://bleudot-backend-api.herokuapp.com/events" 
                  render={data => <Discover data={data} />} />
  </React.Fragment>
);

export default App;
