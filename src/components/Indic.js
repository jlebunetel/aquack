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
		}
	}

	altIndic() {
		console.log("prout");
	}


	render() {

		const poisson = [2,4,6];
		const huitre = [];
		const algue = [];

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
				<Jumbotron>
					<h1>{this.props.fish}</h1>
				</Jumbotron>

				<div>
					<Grid>
						<Col md="4">
							<h1>Milieu Physique</h1>
							<ToggleButtonGroup name="physic" type="checkbox" defaultValue={poisson}>
								<ToggleButton checked = {bathy} name="bathy" value={1} bsStyle="primary" onClick={ this.altIndic } >Bathymétrie</ToggleButton>
								<ToggleButton checked = {bathy} name="courants" value={2} bsStyle="primary">Courants</ToggleButton>
								<ToggleButton name="houle" value={3} bsStyle="primary">Houle</ToggleButton>
								<ToggleButton name="hauteur" value={4} bsStyle="primary">Hauteur d eau</ToggleButton>
								<ToggleButton name="vents" value={5} bsStyle="primary">Vents</ToggleButton>
								<ToggleButton name="fonds" value={6} bsStyle="primary">Nature des fonds</ToggleButton>
							</ToggleButtonGroup>
						</Col>
						<Col md="4">
							<h1>Milieu Naturel</h1>
							<ToggleButtonGroup name="natural" type="checkbox">
								<ToggleButton name="especes" bsStyle="success" value={7}>Espèces spécifiques</ToggleButton>
								<ToggleButton name="milieu" bsStyle="success" value={8}>Qualité du milieu</ToggleButton>
							</ToggleButtonGroup>
						</Col>
						<Col md="4">
							<h1>Usages</h1>
							<ToggleButtonGroup name="usages" type="checkbox">
								<ToggleButton name="peche" value={9} bsStyle="warning">Cantonnements de pêche</ToggleButton>
								<ToggleButton name="trafic" value={10} bsStyle="warning">Trafic maritime</ToggleButton>
							</ToggleButtonGroup>
						</Col>
					</Grid>
				</div>
				<div>
					<Grid>
						<Col md="12">
							<br />
						</Col>
					</Grid>
				</div>

				<Carte 
				fish = {this.props.fish}/>
			</div>
			)
	}
}
