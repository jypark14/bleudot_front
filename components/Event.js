import React from 'react';
import LocationInput from './location-input';
import TimeInput from './time-input';
import ColorInput from './color-input';

class Event extends React.Component {
  render () {
    return (
      <div className="event-container">
        <div className="event-container-content">
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
          <div className="one-column input">
            <input type="text" name="description-box" placeholder="Add description..." required/>
          </div>
          <div className="one-column add-link">
            <a className="label-style add-link-text" href="">Add Links</a>
          </div>

          <div className="two-column switch">
            <label className="label-style">
                Make Event RSVP
            </label>
            <input type="checkbox" name="" className="toggle-btn"/>
          </div>

          <div className="one-column rsvp-list-div align-left">
            <select name="rsvp-list">
              <option value="">RSVP List</option>
              <option value="">--------</option>
              <option value="option1">Option 1</option>
              <option value="option2">Option 2</option>
            </select>
          </div>
          <div className="one-column align-right">
            <button className="event-button delete-btn">Delete</button>
          </div>
        </div>
        
        {/* Applying CSS, taking care of the layout at here */}
        <style jsx> {`
          .event-container {
            width: 407px;
            // height: 497px;

            background: #FFFFFF;
            border: 1px solid #5F5F5F;
            box-sizing: border-box;
            box-shadow: 0px 4px 4px rgba (0, 0, 0, 0.25), 0px 4px 4px rgba(0, 0, 0, 0.25);
            backdrop-filter: blur(4px);
            border-radius: 4px;
          }

          .event-container-content {
            padding: 23px 37px 23px 12px;
          }
          .two-column {
            margin-left: 21px;
          }
          .one-column {
            margin-left: 21px;
          }
          
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
            margin-top: 23px;
            margin-bottom: 23px;
            grid-column-gap: 13px;

          }

          .event-button {
            padding: 4px 13px;

            border: 1px solid #03BFED;
            box-sizing: border-box;
            border-radius: 4px;

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

          .input input{
            width: 339px;
            height: 79px;

            border: 1px solid #5F5F5F;
            box-sizing: border-box;
            border-radius: 4px;

          }
          
          .input input[type=text]::placeholder {
            text-indent: 9px;
            text-align: left;
          }
          .one-column {
            display: grid;
          }
          .add-link {
            margin-top: 14px;
          }

          .label-style {
            font-family: Roboto;
            font-style: normal;
            font-weight: normal;
            font-size: 14px;
            line-height: 16px;
            color: #5F5F5F;
          }

          .switch {
            margin-top: 18px;
            margin-bottom: 18px;
            grid-template-columns: auto auto;
            grid-column-gap: 2px;
            justify-content: start;
            align-items: start;
          }

          .toggle-btn {
            width: 24px;
            height: 13px;
            position: relative;
            -webkit-appearance: none;

            background: #E2E1E1;
            border-radius: 16px;  
            outline: none;        
          }

          .toggle-btn:checked:nth-of-type(1) {
            background: linear-gradient(0deg, #03BFED, #03BFED);
          }

          .toggle-btn:checked:nth-of-type(2) {
            background: linear-gradient(0deg, #70a1ff, #1e90ff);
          }

          .toggle-btn:before {
            content: '';
            position: absolute;
            top: 0;
            left: 0;
            width: 13px;
            height: 13px;
            background: #FFFFFF;
            border: 1px solid #03BFED;
            border-radius: 7px;
            box-sizing: border-box;
            transform: scale(.98,.96);
            transition: .5s;
          }

          .toggle-btn:checked:before {
            left: 11px;
          }

          .rsvp-list-div select {
						min-width: 122px;
						border: none;
						border-bottom: 1px solid #5F5F5F;
						background-color: #ffffff;
						border-radius: 1px;
					}
          
          .delete-btn {
            color: #5F5F5F;
            mix-blend-mode: normal;
            border: 1px solid #5F5F5F;
            text-transform: uppercase;
          }
          
          .delete-btn:hover {
            background-color: #5F5F5F;
          }

          .align-right {
            justify-content: right;
          }

          .align-left {
            justify-content: left;
          } 
        `}
        </style>
      </div>
    )
  }
}

export default Event;