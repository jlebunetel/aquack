import React, { Component } from 'react';
import { Grid, Col, Jumbotron, Button, ToggleButtonGroup, ToggleButton } from 'react-bootstrap';
import Carte from "./Carte";

export default class Indic extends Component {

	render() {
		return (
			<div>
				<Jumbotron>
					<h1>{this.props.fish}</h1>
				</Jumbotron>

				<div>
					<Grid>
						<Col md="4">
							<h1>Milieu Physique</h1>
							<ToggleButtonGroup name="physic" type="checkbox">
								<ToggleButton name="bathy" value={1} bsStyle="primary">Bathymétrie</ToggleButton>
								<ToggleButton name="courants" value={2} bsStyle="primary">Courants</ToggleButton>
								<ToggleButton name="houle" value={3} bsStyle="primary">Houle</ToggleButton>
								<ToggleButton name="hauteur" value={4} bsStyle="primary">Hauteur d eau</ToggleButton>
								<ToggleButton name="vents" value={5} bsStyle="primary">Vents</ToggleButton>
								<ToggleButton name="fonds" value={6} bsStyle="primary">Nature des fonds</ToggleButton>
							</ToggleButtonGroup>
						</Col>
						<Col md="4">
							<h1>Milieu Naturel</h1>
							<ToggleButtonGroup name="natural" type="checkbox">
								<ToggleButton name="especes" bsStyle="success" value={1}>Espèces spécifiques</ToggleButton>
								<ToggleButton name="milieu" bsStyle="success" value={2}>Qualité du milieu</ToggleButton>
							</ToggleButtonGroup>
						</Col>
						<Col md="4">
							<h1>Usages</h1>
							<ToggleButtonGroup name="usages" type="checkbox">
								<ToggleButton name="peche" value={1} bsStyle="warning">Cantonnements de pêche</ToggleButton>
								<ToggleButton name="trafic" value={2} bsStyle="warning">Trafic maritime</ToggleButton>
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

				<Carte />
			</div>
			)
	}
}
