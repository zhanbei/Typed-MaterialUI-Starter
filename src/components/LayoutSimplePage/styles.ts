'use strict';

import {useAppStyles} from '../../resources/MuiStyles';
import {createStyles, makeStyles, Theme} from '@material-ui/core/styles';
import {CSSProperties} from '@material-ui/core/styles/withStyles';

export const useStyles = makeStyles((theme: Theme) => {
	const styles = useAppStyles(theme);
	return createStyles({
		pageHolder: styles.pageHolder as CSSProperties,
		bodyHolder: styles.bodyHolder,
		contentHolder: styles.contentHolder,
		mainContentHolder: styles.mainContentHolder,
	});
});
