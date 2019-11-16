import React from "react";
import DataProvider from "./DataProvider";
import Discover from './subcomponent/Discover';
import Nav from './nav';
import './stylesheets/App.css';

const App = () => (
  <DataProvider endpoint="http://bleudot-backend-api.herokuapp.com/events/" 
                render={data => <Discover data={data} />} />
);

export default App;
