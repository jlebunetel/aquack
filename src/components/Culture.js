import React, { Component } from 'react';
import { Button, Col, Image } from 'react-bootstrap';

import Indic from "./Indic";

export default class Culture extends Component {
  
	constructor(props) {
		super(props);
		this.addFish = this.addFish.bind(this);
		this.removeFish = this.removeFish.bind(this);
		this.evalFish = this.evalFish.bind(this);
		this.state = {
			fish: [],
		};

	}

	addFish(e) {
		let catFish = e.target.value;
		let stateFish = this.state.fish;

		let addPoisson = stateFish.concat("poisson");
		let addHuitre = stateFish.concat("huitre");
		let addAlgue = stateFish.concat("algue");

		if (catFish === "poisson") {
			this.setState({
				fish: addPoisson				
			})
				
		} else if (catFish === "huitre") {
			this.setState({
				fish: addHuitre
			}) 
		} else {
			this.setState({
				fish: addAlgue
			}) 
		}
	}

	removeFish(e) {
		let catFish = e.target.value;
		let stateFish = this.state.fish;

		let index = stateFish.indexOf(catFish)

		stateFish.splice(index, 1);
		this.setState({
			fish: stateFish });
	}

	evalFish(e) {
		let catFish = e.target.value;
		let stateFish = this.state.fish;

		if (stateFish.includes(catFish)) {
			this.removeFish(e)
		}
		else {
			this.addFish(e)
		}
	}

	render() {


		return (

			<div>
				<div className="container well">
					<Col className="col-md-3 col-md-offset-1">
						<Button
						value= "poisson"
						bsStyle="primary"
						onClick={this.evalFish}
						>
							<Image 
							src="./fish.png"
							circle
							responsive
							/>
						</Button>
					</Col>
					<Col className="col-md-3 col-md-offset-1">
						<Button
						value= "huitre"
						bsStyle="warning"
						onClick={this.evalFish}
						>
							<Image 
							src="./fish.png"
							circle
							responsive />
						</Button>
					</Col>
					<Col className="col-md-3 col-md-offset-1">
						<Button
						value= "algue"
						bsStyle="success"
						onClick={this.evalFish}
						>
							<Image 
							src="./fish.png"
							circle
							responsive />
						</Button>
					</Col>

				</div>

				<Indic 
				fish = { this.state.fish } />
			</div>
		)
	}
}