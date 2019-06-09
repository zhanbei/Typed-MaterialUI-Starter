'use strict';

import React from 'react';
import {LayoutSimplePage} from '../../components/LayoutSimplePage/LayoutSimplePage';
import {useTransitionPageStyles} from '../resources/styles';
import {R} from './resources';

const title = R.title;

export const AboutPage = () => {
	const classes = useTransitionPageStyles();

	document.title = title;

	const renderAppBody = () => {
		return (
			<div className={classes.mainContentPaddingHolder}>
				<h1>{title}</h1>
				<p>This is the about us page.</p>
			</div>
		);
	};

	return (
		<LayoutSimplePage
			title={title}
			goBackOnIconExitClicked={true}
			domMainContent={renderAppBody()}
		/>
	);
};
