import React, { Component } from 'react';
import { Grid, Col, Image } from 'react-bootstrap';

import Indic from "./Indic";

export default class Culture extends Component {

	render() {

		return (
			<div>

				<Grid>
					<Col xs={6} md={4}>
						<Image src="/assets/thumbnail.png" circle />
					</Col>
				</Grid>

				<Indic />
			</div>
		)
		
	}
}