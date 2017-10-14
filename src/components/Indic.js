import React, { Component } from 'react';
import { Jumbotron } from 'react-bootstrap';

import Carte from "./Carte";

export default class Indic extends Component {

	render() {

		return (
			<div>
				<Jumbotron>
					<h1>{this.props.fish}</h1>
				</Jumbotron>
				
				<Carte />
			</div>
		)
		
	}
}
