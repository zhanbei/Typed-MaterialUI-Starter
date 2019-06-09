'use strict';

import React from 'react';
import {RouteComponentProps} from 'react-router';
import {LayoutSimplePage} from '../../components/LayoutSimplePage/LayoutSimplePage';

import {useTransitionPageStyles} from '../resources/styles';
import {R} from './resources';

interface IProps {
	topicId: string;
}

let titlePrefix = R.titlePrefix;
let title = titlePrefix;

export const TopicPage = (props: RouteComponentProps<IProps>) => {
	const classes = useTransitionPageStyles();
	const {match} = props;

	document.title = title;
	const renderAppBody = () => {
		return (
			<div className={classes.mainContentPaddingHolder}>
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
		<LayoutSimplePage
			title={title}
			goBackOnIconExitClicked={true}
			domMainContent={renderAppBody()}
		/>
	);
};
