import React from 'react'

class Add extends React.Component {
	constructor() {
		super()
		this.state = {
			id: '',
			title: '',
			image: '',
			description: '',
			rating: '',
			addFlag: false
		}
		this.handleChange = this.handleChange.bind(this)
		this.handleShow = this.handleShow.bind(this)
	}
	
	handleChange(event) {
		let {name, value} = event.target
		this.setState({
			[name]: value
		})
	}
	
	handleShow() {
		this.setState({
			image: '',
			title: '',
			description: '',
			rating: 0,
			addFlag: !this.state.addFlag
		})
	}
	
	render() {
		return(
			this.state.addFlag ?
			<div class='add-single-item'>
				<p>Image URL: </p><input name="image" onChange={this.handleChange} />
				<p>Title: </p><input name="title" onChange={this.handleChange} />
				<p>Description: </p><input name="description" onChange={this.handleChange} />
				<p>Rating: </p><select name="rating" onChange={this.handleChange}>
					<option value='0'>Select value</option>
					<option value='1'>1</option>
					<option value='2'>2</option>
					<option value='3'>3</option>
					<option value='4'>4</option>
					<option value='5'>5</option>
					<option value='6'>6</option>
					<option value='7'>7</option>
					<option value='8'>8</option>
					<option value='9'>9</option>
					<option value='10'>10</option></select>
					
				<button onClick={() => {this.props.add(this.state.image, this.state.title, this.state.description, this.state.rating); this.handleShow()}}>Add New</button>
			</div>
			:
			<button onClick={this.handleShow}>Add New</button>
		)
	}
}

export default Add