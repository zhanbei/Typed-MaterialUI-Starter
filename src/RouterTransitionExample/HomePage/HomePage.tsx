'use strict';

import React from 'react';
import Button from '@material-ui/core/Button';

import {LayoutSimplePage} from '../../components/LayoutSimplePage/LayoutSimplePage';
import {AppHistory} from '../../resources/AppHistory';
import {ROUTE_ABOUT, ROUTE_TOPICS} from '../../resources/AppRoutes';

import {useTransitionPageStyles} from '../resources/styles';

import {R} from './resources';

const title = R.title;

// The home page with router.
export const HomePage = () => {
	const classes = useTransitionPageStyles();

	document.title = title;

	const goToAboutPage = () => AppHistory.push(ROUTE_ABOUT);
	const goToTopicsPage = () => AppHistory.push(ROUTE_TOPICS);

	const renderAppBody = () => {
		return (
			<div className={classes.mainContentPaddingHolder}>
				<h1>{title}</h1>
				<div>
					<Button color="primary" onClick={goToAboutPage}>About Page</Button>
					<Button color="primary" onClick={goToTopicsPage}>Topics Page</Button>
				</div>
			</div>
		);
	};

	return (
		<LayoutSimplePage
			title={title}
			domMainContent={renderAppBody()}
		/>
	);
};
