'use strict';

import {useAppStyles} from '../../resources/MuiStyles';
import {createStyles, makeStyles, Theme} from '@material-ui/core/styles';

export const getSimpleLayoutStyles = (theme: Theme) => {
	const styles = useAppStyles(theme);
	return {
		toolbar: styles.toolbar,
		mainContentWithPaddingHolder: styles.mainContentWithPaddingHolder,
	};
};

export const useSimpleLayoutStyles = makeStyles((theme: Theme) => {
	return createStyles(getSimpleLayoutStyles(theme));
});
