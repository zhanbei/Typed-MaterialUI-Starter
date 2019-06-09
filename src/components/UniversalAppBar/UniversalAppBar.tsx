'use strict';

import React from 'react';
import PropTypes from 'prop-types';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';

import {AppHistory} from '../../resources/AppHistory';
import {ROUTE_HOME} from '../../resources/AppRoutes';

import {useStyles} from './styles';

export const UniversalAppBar = (props: UniversalAppBar.propTypes) => {
	const classes = useStyles();
	const {title, goBackOnIconExitClicked} = props;
	let {onIconExitClicked} = props;

	const goBackOrToSiteHomePage = () => {
		// Do nothing if the current page is the #AppHome page.
		if (location.pathname === ROUTE_HOME) {return;}
		AppHistory.goBackOrPush(ROUTE_HOME);
	};

	const renderLeftIcon = () => {
		if (!onIconExitClicked && goBackOnIconExitClicked) {onIconExitClicked = goBackOrToSiteHomePage;}
		if (onIconExitClicked) {
			return (<IconButton color="inherit" onClick={onIconExitClicked}><ArrowBackIcon/></IconButton>);
		}
		return undefined;
	};

	return (
		<AppBar position={'static'} className={classes.appBar}>
			<Toolbar>
				{renderLeftIcon()}
				<Typography variant="h6" color="inherit" style={{flex: 1}}>{title}</Typography>
			</Toolbar>
		</AppBar>
	);
};

UniversalAppBar.propTypes = {
	goBackOnIconExitClicked: PropTypes.bool,
	// Set a custom action on #IconExit clicked rather than the default #goBackOrPush().
	onIconExitClicked: PropTypes.func,
	title: PropTypes.string.isRequired,
};
