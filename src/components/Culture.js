import React, { Component } from 'react';
import { Button, Col, ToggleButton, ToggleButtonGroup, Image } from 'react-bootstrap';

import Indic from "./Indic";
import IndicPoisson from "./IndicPoisson";
import IndicAlgue from "./IndicAlgue";
import IndicHuitre from "./IndicHuitre";
import IndicHuitrePoisson from "./IndicHuitrePoisson";


export default class Culture extends Component {
  
	constructor(props) {
		super(props);
		this.sortFish = this.sortFish.bind(this);
		this.addFish = this.addFish.bind(this);
		this.removeFish = this.removeFish.bind(this);
		this.evalFish = this.evalFish.bind(this);
		this.state = {
			fish: [],
		};

	}

	addFish(e) {
		let catFish = e.target.value;
		let stateFish = this.state.fish;;

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

		let index = stateFish.indexOf(catFish);

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

	sortFish(methode) {
        return (
            <div>
                {{
                    1: <Indic fish = { this.state.fish }/>,             
                    2: <IndicPoisson fish = { this.state.fish }/>,             
                    3: <IndicHuitre fish = { this.state.fish }/>,                   
                    4: <IndicAlgue fish = { this.state.fish }/>,                   
                    5: <IndicHuitrePoisson fish = { this.state.fish }/>                  
                }[methode]}
            </div>
        );
	}


	render() {

		let stateFish = this.state.fish;
		let methode = 1;
		if (stateFish.includes("algue")) {
			methode = 4;
		} else if (stateFish.includes("huitre")){
			if (stateFish.includes("poisson")){
				methode = 5;
			} else {
				methode = 3;
			}
		} else if (stateFish.includes("poisson")){
			methode = 2;
		} else {
			methode = 1;
		}

		return (

			<div>
				<div className="container well">
					<Col className="col-md-3 col-md-offset-1">
						<Button
						value= "poisson"
						bsStyle="info"
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
						bsStyle="info"
						onClick={this.evalFish}
						>
							<Image 
							src="./moules.png"
							circle
							responsive />
						</Button>
					</Col>
					<Col className="col-md-3 col-md-offset-1">
						<Button
						value= "algue"
						bsStyle="info"
						onClick={this.evalFish}
						>
							<Image 
							src="./algue.png"
							circle
							responsive />
						</Button>
					</Col>

				</div>

				{ this.sortFish(methode) }
			</div>
		)
	}
}