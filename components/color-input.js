import React from 'react';

class ColorInput extends React.Component {
	render() {
		return (
			<div className="color-input">
				<span className="icon-label">Color</span>
				<div className="color-palette">
					<div className="circle-palette orange"></div>
					<div className="circle-palette blue"></div>
					<div className="circle-palette green"></div>
					<div className="circle-palette gray-green"></div>
				</div>

				<style jsx> {`
					.color-input {
						display: grid;
						padding-left: 189px;
						grid-template-columns: repeat(2, auto);
						margin: 16px 0;
					}
					.icon-label {
						font-family: Roboto;
						font-style: normal;
						font-weight: normal;
						font-size: 14px;
						line-height: 16px;
						color: #5F5F5F;
					}

					.color-palette {
						display: grid;
						grid-template-columns: repeat(4, 17px);
						grid-column-gap: 9px;
					}

					.circle-palette {
						width: 17px;
						height: 17px;
						border: 1px solid #ffffff;
						border-radius: 9px;
						box-sizing: border-box;
					}

					.orange {
						background: #FF9040;
						border-color: #FF9040;
					}

					.blue {
						background: #03BFED;
						border-color: #03BFED;
					}

					.green {
						background: #63CCC7;
						border-color: #63CCC7;
					}

					.gray-green {
						background: #A4CAD3;
						border-color: #A4CAD3;
					}


				`}
				</style>
			</div>
		)
	}
}

export default ColorInput;