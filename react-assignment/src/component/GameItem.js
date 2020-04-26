import React from 'react'

class GameItem extends React.Component {
	constructor() {
		super()
		this.state = {
			id: '',
			title: '',
			image: '',
			description: '',
			rating: ''
		}
		this.handleEdit = this.handleEdit.bind(this)
		this.handleChange = this.handleChange.bind(this)
	}
	
	handleEdit(){
		this.setState({
			editFlag: !this.state.editFlag
		})
	}
	
	// used to edit rating
	handleChange(event) {
		const {name, value} = event.target
		this.setState({[name]: value})
	}

	componentDidMount() {
		this.setState({
			id: this.props.id,
			title: this.props.title,
			image: this.props.image,
			description: this.props.description,
			rating: this.props.rating,
			editFlag: false
		})
	}
	
	
	render() {
		return (
			!this.state.editFlag ?
			<div class='single-item'>
				<div class='image'>
					<img src={this.state.image} alt='' style={{'height':'200px', 'width':'200px'}} />
				</div>
				<div class='description'>
					<p>{this.state.title}</p>
					<p>Description: {this.state.description}</p>
					<p>Rating: {this.state.rating}</p>
					
                    <button onClick={this.handleEdit}>Edit</button>
                    <button onClick={() => this.props.onDelete(this.props.id)}>Delete</button>
				</div>
				<hr/>
			</div>
			:
			<div class='single-item'>
				<div class='image'>
					<img src={this.state.image} alt='' style={{'height':'200px', 'width':'200px'}} />
				</div>
				<div class='description'>
					<p>{this.state.title}</p>
					<p>Description: {this.state.description}</p>
					<p>Rating: </p><select name='rating' onChange={this.handleChange}>
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
						<option value='10'>10</option>
					</select>
					
                    <button onClick={() => {this.props.onUpdate(this.state.id, this.state.rating); this.handleEdit()}}>Save</button>
                    <button onClick={() => this.props.onDelete(this.props.id)}>Delete</button>
				</div>
				<hr/>
			</div>
		)
	}
}

export default GameItem