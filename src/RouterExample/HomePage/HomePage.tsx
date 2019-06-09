'use strict';

import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';

import {AppHistory} from '../../resources/AppHistory';
import {ROUTE_ABOUT, ROUTE_TOPICS} from '../../resources/AppRoutes';

import {useSimpleLayoutStyles} from '../resources/styles';

import {R} from './resources';

const title = R.title;

// The home page with router.
export const HomePage = () => {
	const classes = useSimpleLayoutStyles();

	const goToAboutPage = () => AppHistory.push(ROUTE_ABOUT);
	const goToTopicsPage = () => AppHistory.push(ROUTE_TOPICS);

	const renderAppBar = () => {
		return (
			<AppBar>
				<Toolbar>
					<Typography variant="h6" color="inherit" style={{flex: 1}}>{title}</Typography>
				</Toolbar>
			</AppBar>
		);
	};

	const renderAppBody = () => {
		return (
			<div className={classes.mainContentWithPaddingHolder}>
				<h1>{title}</h1>
				<div style={{margin: '20px'}}>
					<Button color="primary" onClick={goToAboutPage}>About Page</Button>
					<Button color="primary" onClick={goToTopicsPage}>Topics Page</Button>
				</div>
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
