'use strict';

import {ACTION_POP, ACTION_PUSH, ACTION_UNKNOWN, AppHistory, IHashChangeEvent} from '../../resources/AppHistory';

const TRANSITION_IN_OR_OUT = 'transition-inout-style';
const TRANSITION_DEFAULT = 'fade';
const inoutCommon = ''; // `position: absolute; width: 100%; height: 100%;`;
// Styles of pushing(starting) a new page.
const pushEnter = `.${TRANSITION_IN_OR_OUT}-enter {${inoutCommon} z-index: 10; left: 100%;}\n`;
const pushEnterActive = `.${TRANSITION_IN_OR_OUT}-enter-active {${inoutCommon} z-index: 10; left: 0; transition: all 500ms ease-in;}\n`;
const pushEnterDone = `.${TRANSITION_IN_OR_OUT}-enter-done {${inoutCommon} z-index: 10; left: 0;}\n`;
const pushExit = `.${TRANSITION_IN_OR_OUT}-exit {${inoutCommon} z-index: 9; left: 0%;}\n`;
const pushExitActive = `.${TRANSITION_IN_OR_OUT}-exit-active {${inoutCommon} z-index: 9; left: 0;}\n`;
const pushExitDone = `.${TRANSITION_IN_OR_OUT}-exit-done {${inoutCommon} z-index: 9; left: 0;}\n`;
// Styles of popping(exiting) the current page.
const popEnter = `.${TRANSITION_IN_OR_OUT}-enter {${inoutCommon} z-index: 9; left: 0%;}\n`;
const popEnterActive = `.${TRANSITION_IN_OR_OUT}-enter-active {${inoutCommon} z-index: 9; left: 0;}\n`;
const popEnterDone = `.${TRANSITION_IN_OR_OUT}-enter-done {${inoutCommon} z-index: 9; left: 0;}\n`;
const popExit = `.${TRANSITION_IN_OR_OUT}-exit {${inoutCommon} z-index: 10; left: 0%;}\n`;
const popExitActive = `.${TRANSITION_IN_OR_OUT}-exit-active {${inoutCommon} z-index: 10; left: 100%; transition: all 500ms ease-in;}\n`;
const popExitDone = `.${TRANSITION_IN_OR_OUT}-exit-done {${inoutCommon} z-index: 10; left: 100%;}\n`;

const stylePushIn = pushEnter + pushEnterActive + pushEnterDone + pushExit + pushExitActive + pushExitDone;
const stylePopOut = popEnter + popEnterActive + popEnterDone + popExit + popExitActive + popExitDone;

// Adding a style element to head.
const sheet = document.createElement('style');
sheet.type = 'text/css';
sheet.innerHTML = stylePushIn;
let isInoutStyleCurrentlyPushingIn = true;
document.head.appendChild(sheet);

let nextAction = ACTION_UNKNOWN;

// Reset the transition style of INOUT on action changed.
AppHistory.addOnHashChangeListener((event: IHashChangeEvent) => {
	nextAction = event.action;
	switch (event.action) {
		case ACTION_PUSH:
			if (isInoutStyleCurrentlyPushingIn) {return;}
			sheet.innerHTML = stylePushIn;
			isInoutStyleCurrentlyPushingIn = true;
			break;
		case ACTION_POP:
			if (isInoutStyleCurrentlyPushingIn) {
				sheet.innerHTML = stylePopOut;
				isInoutStyleCurrentlyPushingIn = false;
				return;
			}
			break;
		default:
			break;
	}
});

// Get the css class name for the next transition.
export const getNextTransitionClassName = () => {
	if (nextAction === ACTION_PUSH || nextAction === ACTION_POP) {
		nextAction = ACTION_UNKNOWN;
		return TRANSITION_IN_OR_OUT;
	} else {
		console.warn('The current status is unknown and will use the default transition style.');
		// Keep classNames and timeout consistent with './resources/the transition-fade-inout.less'
		return TRANSITION_DEFAULT;
	}
};
