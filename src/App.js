import React from "react";
import DataProvider from "./DataProvider";
import Discover from './subcomponent/Discover';
import Nav from './nav';
import './stylesheets/App.css';

const temp = [
  {id: 0, name: "Korean Food Sale", organization: "Korean Student Association", date: ["OCT","08","2019"], start_time:"10 AM", end_time:"2PM", category: "upcoming"},
  {id: 1, name: "Korean Food Sale", organization: "Korean Student Association", date: ["OCT","08","2019"], start_time:"10 AM", end_time:"2PM", category: "trending"},
  {id: 2, name: "Korean Food Sale", organization: "Korean Student Association", date: ["OCT","08","2019"], start_time:"10 AM", end_time:"2PM",category: "upcoming"},
  {id: 3, name: "Korean Food Sale", organization: "Korean Student Association", date: ["OCT","08","2019"], start_time:"10 AM", end_time:"2PM",category: "upcoming"},
  {id: 4, name: "Korean Food Sale", organization: "Korean Student Association", date: ["OCT","08","2019"], start_time:"10 AM", end_time:"2PM",category: "upcoming"},
  {id: 5, name: "Korean Food Sale", organization: "Korean Student Association", date: ["OCT","08","2019"], start_time:"10 AM", end_time:"2PM",category: "near"},
]

const App = () => (
  <React.Fragment>
    <Nav />
    <DataProvider endpoint="http://bleudot-backend-api.herokuapp.com/events/" 
                  render={data => <Discover data={data} />} />
  </React.Fragment>
);

export default App;
