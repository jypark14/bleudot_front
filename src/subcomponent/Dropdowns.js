import React, { Component } from 'react';
import './Dropdowns.css';

class Dropdowns extends Component {
    constructor(props) {
      super(props);
      this.state = {
        languages: ["English (US)", "Korean", "Mandarin", "Japanese", "French", "Cantonese"],
        countries: ["United States", "South Korea", "Japan", "France", "Taiwan", "China"],
        dateFormats: ["MM/DD/YYYY", "YYYY/MM/DD", "Month D, Year"],
        timeFormats: ["1:00 PM", "13:00"],
        timeZones: ["(GMT - 05:00) Eastern", "(CST) Central Standard Time"]
      };
    }

  render() {
    return (
        <div>
        <div className="LR-text-container"> 
            <h1 className="LR-text">Language and Region</h1>
        </div>
        {/* Country */}
        <select onChange={this.props.changeCountryHandler} className="country">
            {this.state.countries.map(country => <option key={country}>{country}</option>)}
        </select>
        {/* Language */}
        <select onChange={this.props.changeLanguageHandler} className="language">
            {this.state.languages.map(language => <option key={language}>{language}</option>)}
        </select >
        {/* Date Format */}
        <select onChange={this.props.changeDateHandler} className="dateFormat">
            {this.state.dateFormats.map(dateFormat => <option key={dateFormat}>{dateFormat}</option>)}
        </select>
        {/* Time Format */}
        <select onChange={this.props.changeTimeHandler} className="timeFormat">
            {this.state.timeFormats.map(timeFormat => <option key={timeFormat}>{timeFormat}</option>)}
        </select>
        {/* Time Zone Text Box*/}
        <div className="timeZone-container"> 
            <h1 className="timeZone-text">Time zone</h1>
        </div>
        {/* Time Zone */}
        <select onChange={this.props.changeTimeZoneHandler} className="timeZone">
            {this.state.timeZones.map(timeZone => <option key={timeZone}>{timeZone}</option>)}
        </select>
        </div>
    );
  }
}

export default Dropdowns;
