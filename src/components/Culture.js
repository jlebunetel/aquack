import React, { Component } from 'react';
import { Button, Grid, Col, Image } from 'react-bootstrap';

import Indic from "./Indic";

export default class Culture extends Component {
  
	constructor(props) {
		super(props);
		this.addFish = this.addFish.bind(this);
		this.state = {
			bathy: [],
			courants: [],
			houle: [],
			hauteur: [],
			vents: [],
			fond: [],
			especes: [],
			milieu: [],
			peche: [],
			trafic: [],
		};

	}

	addFish(e) {
		let fish = e.target.value;
		let fishState = this.state.fish;
		if(fishState.includes(fish)) {
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
						bsStyle="primary"
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