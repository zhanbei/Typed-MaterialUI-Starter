'use strict';

import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';

import {AppHistory} from '../../resources/AppHistory';
import {getTopicPath} from '../../resources/AppRoutes';

import {useSimpleLayoutStyles} from '../resources/styles';

import {R} from './resources';

const title = R.title;

export const TopicsPage = () => {
	const classes = useSimpleLayoutStyles();

	const goToTopicPage = (topic: string) => AppHistory.push(getTopicPath(topic));

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
				<h2>Some Topics of Pages</h2>
				<ul>
					<li>
						<Button color="primary" onClick={() => goToTopicPage('rendering')}>
							Rendering with React
						</Button>
					</li>
					<li>
						<Button color="primary" onClick={() => goToTopicPage('components')}>
							Components
						</Button>
					</li>
					<li>
						<Button color="primary" onClick={() => goToTopicPage('props-v-state')}>
							Props v. State
						</Button>
					</li>
				</ul>
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
