import React, { Component } from 'react';
import { Button, Grid, Col, Image } from 'react-bootstrap';

import Indic from "./Indic";

export default class Culture extends Component {
  
	constructor(props) {
		super(props);
		this.addFish = this.addFish.bind(this);
		this.state = {
			fish: []
		};

	}

	addFish(e) {
		let fish = e.target.value;
		let fishState = this.state.fish;

		if(fishState.indexOf(fish) === -1) {
			fishState.splice(fishState.indexOf(fish))
		} else {
			this.setState({
				fish: fishState.concat(fish) 
			})
		}
	}


	render() {

		return (

			<div>
				<div className="container well">
					<Col className="col-md-3 col-md-offset-1">
						<Button
						value= "poisson"
						onClick={this.addFish}
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
						onClick={this.addFish}
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
						onClick={this.addFish}
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