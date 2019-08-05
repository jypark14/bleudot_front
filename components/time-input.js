import React from 'react';
import Clock from './icons/clock';

class TimeInput extends React.Component {
	render() {
		return (
			<form className="time-input">
				<div className="time-input-label">
					<Clock /><span className="icon-label">Time</span>
				</div>
				<div className="time-input-btn-list">
					<div className="time-input-btn">
							<label for="sample_1">0:00 - 0:00</label>
							<input type="radio" id="sample_1" 
										name="time-radio" value="0:00 - 0:00" checked />
					</div>

					<div className="time-input-btn">
						<label for="sample_2">0:00 - 0:00</label>
						<input type="radio" id="sample_2"
									name="time-radio" value="0:00 - 0:00" />
					</div>

					<div className="time-input-btn">
						<label for="sample_3">0:00 - 0:00</label>
						<input type="radio" id="sample_3"
									name="time-radio" value="0:00 - 0:00" />
					</div>
				</div>
					
				
				<style jsx> {`
					.time-input {
						width: 136px;
					}
					.time-input-btn-list {
						display: grid;
						grid-row-gap: 4px;
						width: 100%;
						height: 59px;
						overflow: scroll;
					}

					.time-input-btn {
						border: 1px solid #5F5F5F;
						box-sizing: border-box;
						border-radius: 3px;
					}

					.time-input-label {
						margin-bottom: 13px;
					}
					.icon-label {
						margin-left: 4px;
						font-family: Roboto;
						font-style: normal;
						font-weight: normal;
						font-size: 14px;
						line-height: 16px;
						color: #5F5F5F;
					}
					
					label {
						padding: 0 35px;
						color: #5F5F5F;
						font-family: Nunito;
						font-style: normal;
						font-weight: normal;
						font-size: 10px;
						line-height: 14px;
					}

					input[type="radio"] {
						cursor: pointer;
						width: 10px;
						height: 10px;
						border: 1px solid #5F5F5F;
						box-sizing: border-box;
						border-radius: 3px;
					}


					
				
				`}

				</style>
			</form>
		)
	}
}

export default TimeInput;