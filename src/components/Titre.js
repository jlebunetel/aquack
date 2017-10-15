import React, { Component } from 'react';
import { Jumbotron, Image } from 'react-bootstrap';

export default class Titre extends Component {

	render() {

		return (
			<div>
				<Jumbotron
				bsStyle="primary">
					<Image 
					src="./logo.png"
					/>
					<p>Aide à la décision pour identifier les zones propices à l'aquaculture marine</p>
				</Jumbotron>

			</div>
		)
		
	}
}