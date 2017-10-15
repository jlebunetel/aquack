import React, { Component } from 'react';
import { Grid, Col, Jumbotron, Button, ToggleButtonGroup, ToggleButton } from 'react-bootstrap';
import Carte from "./Carte";

export default class Indic extends Component {

	constructor(props) {
		super(props);
		this.state = {
			bathy: false,
			courants: false,
			houle: false,
			hauteur: false,
			vents: false,
			fonds: false,
			especes: false,
			milieu: false,
			peche: false,
			trafic: false,
			indic: []
		}
	}


	componentDidUpdate() {
		const indicPoisson = [1,2,3,6,7,8,9,10];
		const indicHuitre = [1,2,4,6,7,8,9,10];
		const indicHuitrePoisson = [1,2,3,4,6,7,8,9,10];
		const indicAlgue = [1,2,3,4,5,6,7,8,9,10];
		let indic;

		let propsFish = this.props.fish;
		console.log(propsFish);

		if (propsFish.includes("algue")) {
			indic = indicAlgue;
		} else if (propsFish.includes("huitre")){
			if (propsFish.includes("poisson")){
				indic = indicHuitrePoisson;
			} else {
				indic = indicHuitre;
			}
		} else if (propsFish.includes("poisson")){
			indic = indicPoisson;
		} else {
			indic = [];
		}
		this.setState = {
			indic: indic,
		};
		console.log(this.state.indic)
	}

	altIndic() {
		console.log("...");
	}

	render() {

		let bathy = this.state.bathy;
		let courants = this.state.courants;
		let houle = this.state.houle;
		let hauteur = this.state.hauteur;
		let vents = this.state.vents;
		let fonds = this.state.fonds;
		let especes = this.state.especes;
		let milieu = this.state.milieu;
		let peche = this.state.peche;
		let trafic = this.state.trafic;

		return (
			<div>
				<h2 className="text-center"><span className="text-primary">Milieu Physique</span> . <span className="text-success">Milieu Naturel</span> . <span className="text-warning">Usages</span></h2>
				<ToggleButtonGroup name="physic" type="checkbox" bsStyle="small" defaultValue={this.state.indic}>

					<ToggleButton checked = {bathy} name="bathy" value={1} bsSize="small" bsStyle="primary" onClick={ this.altIndic } >Bathymétrie</ToggleButton>
					<ToggleButton checked = {courants} name="courants" value={2} bsSize="small" bsStyle="primary">Courants</ToggleButton>
					<ToggleButton checked = {houle} name="houle" value={3} bsSize="small" bsStyle="primary">Houle</ToggleButton>
					<ToggleButton checked = {hauteur} name="hauteur" value={4} bsSize="small" bsStyle="primary">Hauteur d eau</ToggleButton>
					<ToggleButton checked = {vents} name="vents" value={5} bsSize="small" bsStyle="primary">Vents</ToggleButton>
					<ToggleButton checked = {fonds} name="fonds" value={6} bsSize="small" bsStyle="primary">Nature des fonds</ToggleButton>
					<ToggleButton checked = {especes} name="especes" bsSize="small" bsStyle="success" value={7}>Espèces spécifiques</ToggleButton>
					<ToggleButton checked = {milieu} name="milieu" bsSize="small" bsStyle="success" value={8}>Qualité du milieu</ToggleButton>
					<ToggleButton checked = {peche} name="peche" value={9} bsSize="small" bsStyle="warning">Cantonnements de pêche</ToggleButton>
					<ToggleButton checked = {trafic} name="trafic" value={10} bsSize="small" bsStyle="warning">Trafic maritime</ToggleButton>

				</ToggleButtonGroup>

				<br/>

				<Carte 
				fish = {this.props.fish}/>
			</div>
			)
	}
}
