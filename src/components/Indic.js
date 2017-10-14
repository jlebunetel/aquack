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
								<ToggleButton value={1} bsStyle="primary">Bathymétrie</ToggleButton>
								<ToggleButton value={2} bsStyle="primary">Courants</ToggleButton>
								<ToggleButton value={3} bsStyle="primary">Hauteur de vagues</ToggleButton>
							</ToggleButtonGroup>
						</Col>
						<Col md="4">
							<h1>Milieu Naturel</h1>
							<ToggleButtonGroup name="natural" type="checkbox">
								<ToggleButton value={1}>Espaces sensibles</ToggleButton>
								<ToggleButton value={2}>Qualité du milieu</ToggleButton>
							</ToggleButtonGroup>
						</Col>
						<Col md="4">
							<h1>Usages</h1>
							<ToggleButtonGroup name="physic" type="checkbox">
								<ToggleButton value={1} bsStyle="warning">Zones militaires</ToggleButton>
								<ToggleButton value={2} bsStyle="warning">Pêche</ToggleButton>
								<ToggleButton value={3} bsStyle="warning">Trafic maritime</ToggleButton>
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
