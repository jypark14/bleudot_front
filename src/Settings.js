import React, { Component } from 'react';
import './settingsStyle.css';
import Dropdowns from './subcomponent/Dropdowns';
import settingsLine from './assets/settingsLine.png';
import Footer from './subcomponent/Footer';
import Header from './subcomponent/Header';

class Settings extends Component {
    constructor(props) {
        super(props);
        this.state = {
            selectedCountry: "United States",
            selectedLanguage: "",
            selectedDateFormat: "",
            selectedTimeFormat: "",
            selectedTimeZone: "",
        };
    }

    /* Keeps track of which language was selected */
    changeLanguageHandler = (event) => {
        this.setState({selectedLanguage : event.target.value}, ()=>console.log(this.state.selectedLanguage))
    };

    /* Keeps track of which country was selected */
    changeCountryHandler = (event) => {
        this.setState({selectedCountry : event.target.value}, ()=>console.log(this.state.selectedCountry))
    };

    /* Keeps track of which date was selected */
    changeDateHandler = (event) => {
        this.setState({selectedDateFormat : event.target.value}, ()=>console.log(this.state.selectedDateFormat))
    };

    /* Keeps track of which time was selected */
    changeTimeHandler = (event) => {
        this.setState({selectedTimeFormat : event.target.value}, ()=>console.log(this.state.selectedTimeFormat))
    };
    /* Keeps track of which time was selected */
    changeTimeZoneHandler = (event) => {
        this.setState({selectedTimeZone : event.target.value}, ()=>console.log(this.state.selectedTimeZone))
    };
    render() {
    return (
      <div className="container">
          <Dropdowns selectedCountry={this.state.selectedCountry} changeCountryHandler={this.changeCountryHandler}
                      selectedLanguage={this.state.selectedLanguage} changeLanguageHandler={this.changeLanguageHandler}
                      selectedDateFormat={this.state.selectedDateFormat} changeDateHandler={this.changeDateHandler}
                      selectedTimeFormat={this.state.selectedTimeFormat} changeTimeHandler={this.changeTimeHandler}
                      selectedTimeZone={this.state.selectedTimeZone} changeTimeZoneHandler={this.changeTimeZoneHandler}
          />
          <img src={settingsLine} alt="divider" className="line"></img>
          <Footer/>
          <Header/>
      </div>
    );
  }
}

export default Settings;

