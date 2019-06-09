'use strict';

import React from 'react';
import {RouteComponentProps} from 'react-router';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';

import {AppHistory} from '../../resources/AppHistory';

import {useSimpleLayoutStyles} from '../resources/styles';

import {R} from './resources';

let titlePrefix = R.titlePrefix;
let title = titlePrefix;

interface IProps {
	topicId: string;
}

export const TopicPage = (props: RouteComponentProps<IProps>) => {
	const classes = useSimpleLayoutStyles();
	const {match} = props;

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
				<div>
					<p>This is the topic page of <span style={{fontWeight: 'bold'}}>{match.params.topicId}</span></p>
				</div>
			</div>
		);
	};

	// Reset the title of current page.
	document.title = title = titlePrefix + match.params.topicId;
	return (
		<div>
			{renderAppBar()}
			<div className={classes.toolbar}/>
			{renderAppBody()}
		</div>
	);
};
