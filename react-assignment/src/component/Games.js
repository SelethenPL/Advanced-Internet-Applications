import React from 'react'
import gamesData from '../gamesData.json'
import GameElement from './GameItem'
import Add from './Add'
import './Games.css'

class Games extends React.Component {
	constructor() {
		super()
		this.state = {
			games: gamesData,
			display: gamesData,
			search: "",
			sortFlag: false
		}
		this.handleDelete = this.handleDelete.bind(this)
		this.handleSearch = this.handleSearch.bind(this)
		
		this.handleSort = this.handleSort.bind(this)
		this.handleAdd = this.handleAdd.bind(this)
		this.handleUpdate = this.handleUpdate.bind(this)
	}
	
	handleDelete(id) {
		const x = this.state.games.filter(item => item.id !== id)
		this.setState({
			games: x,
			display: x
		})
	}
	
	handleSearch(event) {
		const {title, value} = event.target
		this.setState({
			[title]: value
		})
		const x = this.state.games.filter( item => {
			return item.title.toLowerCase().indexOf(value.toLowerCase()) !== -1
		})
		this.setState({
			display: x
		})
	}

	handleSort() {
		if (!this.state.sortFlag) {
			const data = this.state.games.sort((a,b) => a.rating > b.rating)
			this.setState({
				display: data,
				sortFlag: !this.state.sortFlag
			})
			
		} else {
			const data = this.state.games.sort((a,b) => a.rating < b.rating)
			this.setState({
				display: data,
				sortFlag: !this.state.sortFlag
			})
		}
	}
	
	handleAdd(image, title, description, rating) {
		let max = 0
		for(let i = 0; i < this.state.games.length; i++)
			if (max < this.state.games[i].id)
				max = this.state.games[i].id
			
		let newItem = {}
		newItem['id'] = 10 + 1
		newItem['image'] = image
		newItem['title'] = title
		newItem['description'] = description
		newItem['rating'] = rating
		
		let x = this.state.games
		x.push(newItem)
		
		this.setState({
			games: x,
			display: x
		})
	}

	handleUpdate(id, rating) {
		const x = this.state.games.filter( item => {
			if (item.id === id)
				item.rating = rating
			return item
		})
		this.setState({
			games: x,
			display: x
		})
	}

	render() {
		const x = this.state.display.map( item => 
			<GameElement key={item.id} id={item.id} title={item.title}
						description={item.description} image={item.image} rating={item.rating}
						onDelete={this.handleDelete} 
						onUpdate={this.handleUpdate} />);
		return (
			<div class='main'>
				<div class='utility'>
					<button onClick={this.handleSort}>Sort By Rating</button>
					<input class='search' placeholder='Search...' type='text' value={this.search} onChange={this.handleSearch} />
					<Add add={this.handleAdd} />
					<hr/>
				</div>
				<div class='data'>
					{x}
				</div>
			</div>)
	}
}

export default Games;