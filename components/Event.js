import React from 'react';
import LocationInput from './location-input';
import TimeInput from './time-input';
import ColorInput from './color-input';

class Event extends React.Component {
  render () {
    return (
      <div>
          {/* Not sure what is going inside the banner so I left it blank*/}
        <div className="banner">
          Add Banner
        </div>

        <div className="two-column form">
          <input name="event-name" value="Event Name" /> 
          <button className="event-button">Save</button>
        </div>
        <div className="two-column time-location-row">
          <TimeInput />
          <LocationInput />
        </div>
        <div className="one-column align-right">
          <ColorInput />
        </div>
        <div className="one-column">
          <input type="text" name="description-box" value="Add description..." required/>
        </div>
        <div className="one-column">
          <a className="add-link-text" href="">Add Links</a>
          <label className="switch">
            Make Event RSVP
          </label>
          <input type="checkbox" />
            <span className="slider round"></span>
          <select name="rsvp-list">
            <option value="option1">Option 1</option>
            <option value="option2">Option 2</option>
          </select>
        </div>
        <div className="one-column align-right">
          <button>Delete</button>
        </div>
        {/* Applying CSS, taking care of the layout at here */}
        <style jsx> {`
          .banner {
            width: 358px;
            height: 105px;
            border: 1px solid #03BFED;
            box-sizing: border-box;
            border-radius: 4px;

            font-family: Nunito;
            font-style: normal;
            font-weight: normal;
            font-size: 14px;

            text-align: center;
            vertical-align: middle;
            line-height: 105px;
            color: #03BFED;
          }
          
          .two-column {
            display: grid;
            grid-template-columns: repeat(2, 1fr);
          }
          
          .form {
            display: block;
            margin: 23px 0;
            margin-left: 21px;
          }

          .event-button {
            width: 56px;
            height: 25px;
            border: 1px solid #03BFED;
            box-sizing: border-box;
            border-radius: 4px;
            margin-left: 25px;

            font-family: Nunito;
            font-style: normal;
            font-weight: normal;
            font-size: 14px;
            line-height: 19px;

            color: #03BFED;
          }
          
          .form input {
            width: 268px;
            height: 25px;
            padding-left: 19px;
            
            border: 1px solid #5F5F5F;
            box-sizing: border-box;
            border-radius: 4px;

            font-family: Nunito;
            font-style: normal;
            font-weight: normal;
            font-size: 14px;
            line-height: 19px;

            color: #5F5F5F;
          }

          .event-button:hover {
            background-color: #03BFED;
            color: #ffffff;
          }

          .time-location-row {
            grid-column-gap: 55px;
          }

        `}
        </style>
      </div>
    )
  }
}

export default Event;