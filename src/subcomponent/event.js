import React from 'react';
import PropTypes from 'prop-types';
// import LinesEllipsis from 'react-lines-ellipsis'
// import './movie.css';

function Event({name, date, description, location, start_time}) {
    return (
        <div className="Movie">
            <div className="Movie__Columns">
                {name}
            </div>
            <div className="Movie__Columns">
                <h1> {date} </h1>
                <div className="Movie__Genres">
                    {description}
                </div>
                <div className="Movie__Synopsis">
                    {location}
                </div>
								<div>
									{start_time}
								</div>
            </div>
        </div>
    )
}

Event.propTypes = {
    name: PropTypes.string.isRequired,
    date: PropTypes.string.isRequired,
    description: PropTypes.array.isRequired,
		location: PropTypes.string.isRequired,
		start_time: PropTypes.string.isRequired
}

export default Event;