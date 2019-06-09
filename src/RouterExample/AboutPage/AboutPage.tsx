'use strict';

import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import {AppHistory} from '../../resources/AppHistory';

import {useSimpleLayoutStyles} from '../resources/styles';

import {R} from './resources';

const title = R.title;

export const AboutPage = () => {
	const classes = useSimpleLayoutStyles();

	const renderAppBar = () => {
		return (
			<AppBar>
				<Toolbar>
					<IconButton color="inherit" onClick={() => AppHistory.goBack()}>
						<ArrowBackIcon/>
					</IconButton>
					<Typography variant="h6" color="inherit" style={{flex: 1}}>{title}</Typography>
				</Toolbar>
			</AppBar>
		);
	};

	const renderAppBody = () => {
		return (
			<div className={classes.mainContentWithPaddingHolder}>
				<h1>{title}</h1>
				<p>This is the about us page.</p>
			</div>
		);
	};

	document.title = title;
	return (
		<div>
			{renderAppBar()}
			<div className={classes.toolbar}/>
			{renderAppBody()}
		</div>
	);
};
