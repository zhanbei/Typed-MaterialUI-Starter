'use strict';

const styles = require('../../resources/MuiStyles');

module.exports = theme => {
	const styles = styles(theme);
	return {
		toolbar: styles.toolbar,
		mainContentWithPaddingHolder: styles.mainContentWithPaddingHolder,
	};
};
