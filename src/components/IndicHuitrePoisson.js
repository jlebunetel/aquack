import React, { Component } from 'react';
import { Grid, Col, Jumbotron, Button, ToggleButtonGroup, ToggleButton } from 'react-bootstrap';
import Carte from "./Carte";

export default class Indic extends Component {

	altIndic() {
		console.log("...");
	}

	render() {
		const indicHuitrePoisson = [1,2,3,4,6,7,8,9,10];
		return (
			<div>
				<h2 className="text-center"><span className="text-primary">Milieu Physique</span> . <span className="text-success">Milieu Naturel</span> . <span className="text-warning">Usages</span></h2>
				<ToggleButtonGroup name="physic" type="checkbox" bsStyle="small" defaultValue={indicHuitrePoisson}>

					<ToggleButton name="bathy" value={1} bsSize="small" bsStyle="primary" onClick={ this.altIndic } >Bathymétrie</ToggleButton>
					<ToggleButton name="courants" value={2} bsSize="small" bsStyle="primary">Courants</ToggleButton>
					<ToggleButton name="houle" value={3} bsSize="small" bsStyle="primary">Houle</ToggleButton>
					<ToggleButton name="hauteur" value={4} bsSize="small" bsStyle="primary">Hauteur d eau</ToggleButton>
					<ToggleButton name="vents" value={5} bsSize="small" bsStyle="primary">Vents</ToggleButton>
					<ToggleButton name="fonds" value={6} bsSize="small" bsStyle="primary">Nature des fonds</ToggleButton>
					<ToggleButton name="especes" bsSize="small" bsStyle="success" value={7}>Espèces spécifiques</ToggleButton>
					<ToggleButton name="milieu" bsSize="small" bsStyle="success" value={8}>Qualité du milieu</ToggleButton>
					<ToggleButton name="peche" value={9} bsSize="small" bsStyle="warning">Cantonnements de pêche</ToggleButton>
					<ToggleButton name="trafic" value={10} bsSize="small" bsStyle="warning">Trafic maritime</ToggleButton>

				</ToggleButtonGroup>

				<br/>

				<Carte 
				fish = {this.props.fish}/>
			</div>
			)
	}
}
