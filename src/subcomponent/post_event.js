import React, { Component } from 'react';
import axios from 'axios'
class PostEvent extends Component {
	constructor(props) {
		super(props)

		this.state = {
			name: '',
			date: '',
			description: '',
			start_date: '',
			start_time: '',
			end_time: '',
			end_date: '',
			location: '',
			recurring: '',
			user: ''
		}
	}

	changeHandler = (e) => {
		this.setState({[e.target.name]: e.target.value})
	}

	submitHandler = e => {
		e.preventDefault()
		console.log(this.state)
		axios.post("http://bleudot-backend-api.herokuapp.com/events", this.state)
		.then(response => {
			console.log(`Response: ${response}`)
		})
		.catch(error => {
			console.log(`Error: ${error}`)
		})
	}

	render() {
		const { name, date, description, start_date, start_time, end_time, end_date, location, recurring, user } = this.state
		return (
			<div>
				<form onSubmit={this.submitHandler}>
					<div>
						<label for="name">Name</label>
						<input type="text" name="name" value={name} onChange={this.changeHandler}></input> <br/>
						<label for="date">Date</label>
						<input type="date" name="date" value={date} onChange={this.changeHandler}></input><br/>
						<label for="description">Description</label>
						<input type="text" name="description" value={description} onChange={this.changeHandler}></input><br/>
						<label for="start_date">Start Date</label>
						<input type="date" name="start_date" value={start_date} onChange={this.changeHandler}></input><br/>
						<label for="start_time">Start Time</label>
						<input type="time" name="start_time" value={start_time} onChange={this.changeHandler}></input><br/>
						<label for="end_date">End Date</label>
						<input type="date" name="end_date" value={end_date} onChange={this.changeHandler}></input><br/>
						<label for="end_time">End Time</label>
						<input type="time" name="end_time" value={end_time} onChange={this.changeHandler}></input><br/>
						<label for="location">Location</label>
						<input type="text" name="location" value={location} onChange={this.changeHandler}></input><br/>
						<label for="recurring">Recurring?</label>
						<input type="checkbox" name="recurring" onChange={this.changeHandler}></input><br/>
						<input type="hidden" name="user" value="1" onChange={this.changeHandler}></input><br/>
						<button type="submit">Submit</button>
					</div>
				</form>
			</div>
		);
	}
}

export default PostEvent;