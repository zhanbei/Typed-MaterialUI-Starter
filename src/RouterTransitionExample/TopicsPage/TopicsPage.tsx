'use strict';

import React from 'react';
import Button from '@material-ui/core/Button';

import {LayoutSimplePage} from '../../components/LayoutSimplePage/LayoutSimplePage';
import {AppHistory} from '../../resources/AppHistory';
import {getTopicPath} from '../../resources/AppRoutes';

import {useTransitionPageStyles} from '../resources/styles';

import {R} from './resources';

const title = R.title;

export const TopicsPage = () => {
	const classes = useTransitionPageStyles();

	document.title = title;

	const goToTopicPage = (topic: string) => AppHistory.push(getTopicPath(topic));

	const renderAppBody = () => {
		return (
			<div className={classes.mainContentPaddingHolder}>
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

	return (
		<LayoutSimplePage
			title={title}
			goBackOnIconExitClicked={true}
			domMainContent={renderAppBody()}
		/>
	);
};
