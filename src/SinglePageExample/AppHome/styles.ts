'use strict';

import {_styles} from '../../resources/MuiStyles';

// export const useStyles = makeStyles((theme: Theme) => {
// 	const styles = useAppStyles(theme);
// 	return createStyles({
// 		toolbar: styles.toolbar,
// 		mainContentWithPaddingHolder: styles.mainContentWithPaddingHolder,
// 	});
// });

// Directly use the styles for react class components.
export const styles = ({
	// FIX-ME With unhandled warnings.
	// Warning: Unsupported style property @media (min-width:0px) and (orientation: landscape).
	// Did you mean @media (minWidth:0px) and (orientation: landscape)?
	toolbar: _styles.toolbar,
	mainContentWithPaddingHolder: _styles.mainContentWithPaddingHolder,
});
// console.log('_styles.mainContentWithPaddingHolder', _styles.mainContentWithPaddingHolder, _styles.toolbar);
