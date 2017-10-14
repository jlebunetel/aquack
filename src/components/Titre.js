import React, { Component } from 'react';
import { Jumbotron } from 'react-bootstrap';

export default class Titre extends Component {

	render() {

		return (
			<div>
				<Jumbotron
				bsStyle="primary">
					<h1>Décid'Aqua</h1>
					<p>Aide à la décision pour identifier les zones propices à l'aquaculture marine</p>
				</Jumbotron>

			</div>
		)
		
	}
}