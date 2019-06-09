'use strict';

import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import {R} from './resources';
import {styles} from './styles';

const title = R.title;

export class AppHome extends React.PureComponent {

	renderAppBar = () => {
		return (
			<AppBar>
				<Toolbar>
					<Typography variant="h6" color="inherit" style={{flex: 1}}>{title}</Typography>
				</Toolbar>
			</AppBar>
		);
	};

	renderAppBody = () => {
		return (
			<div style={styles.mainContentWithPaddingHolder}>
				<h1>{title}</h1>
				<p>{R.description}</p>
			</div>
		);
	};

	render() {
		document.title = title;
		return (
			<div>
				{this.renderAppBar()}
				<div style={styles.toolbar}/>
				{this.renderAppBody()}
			</div>
		);
	}
}
