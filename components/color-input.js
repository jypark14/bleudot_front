import React from 'react';

class ColorInput extends React.component {
	render() {
		return (
			<div className="color-input">
				<span className="icon-label">Color</span>
				<div className="color-palette">
					<span className="circle-palette orange"></span>
					<span className="circle-palette blue"></span>
					<span className="circle-palette green"></span>
					<span className="circle-palette gray-green"></span>
				</div>
			</div>
		)
	}
}

export default ColorInput;