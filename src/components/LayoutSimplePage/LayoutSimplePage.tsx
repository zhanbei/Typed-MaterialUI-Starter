'use strict';

import React from 'react';
import PropTypes from 'prop-types';
import {UniversalAppBar} from '../UniversalAppBar/UniversalAppBar';
import {useStyles} from './styles';

export const LayoutSimplePage = (props: LayoutSimplePage.propTypes) => {
	const classes = useStyles();
	const {title, goBackOnIconExitClicked, onIconExitClicked, domMainContent} = props;
	return (
		<div className={classes.pageHolder}>
			<UniversalAppBar
				title={title}
				onIconExitClicked={onIconExitClicked}
				goBackOnIconExitClicked={goBackOnIconExitClicked}
			/>
			<div className={classes.bodyHolder}>
				<div className={classes.contentHolder}>
					<div className={classes.mainContentHolder}>
						{domMainContent}
					</div>
				</div>
			</div>
		</div>
	);
};

LayoutSimplePage.propTypes = {
	/* Extract values from ...UniversalAppBar.propTypes,*/
	/* The start of the ...UniversalAppBar.propTypes. */
	goBackOnIconExitClicked: PropTypes.bool,
	onIconExitClicked: PropTypes.func,
	title: PropTypes.string.isRequired,
	/* The end of the ...UniversalAppBar.propTypes. */
	domMainContent: PropTypes.node.isRequired,
};
