import React, { Component } from 'react';
import { Jumbotron } from 'react-bootstrap';

export default class Titre extends Component {

	render() {

		return (
			<div>
				<Jumbotron>
					<h1>Hackuaculture Marine</h1>
					<p>Trouvez votre bonheur</p>
				</Jumbotron>

			</div>
		)
		
	}
}