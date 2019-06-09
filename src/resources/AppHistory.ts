'use strict';

import {createBrowserHistory} from 'history';

const EventListener = require('../../utils/EventListener');

// @see https://github.com/ReactTraining/react-router/blob/master/FAQ.md#how-do-i-access-the-history-object-outside-of-components
const mBrowserHistory = createBrowserHistory();
const mHistory = mBrowserHistory;

export interface IHashChangeEvent {
	action: 'PUSH' | 'POP' | 'REPLACE' | 'UNKNOWN'
}

const mEventListener = new EventListener();
export const ACTION_PUSH = 'PUSH';
export const ACTION_POP = 'POP';
export const ACTION_REPLACE = 'REPLACE';
export const ACTION_UNKNOWN = 'UNKNOWN';
// Add listeners which will be triggered when the location is going to change.
// Currently, only the manual change of the location is supported.
const addOnHashChangeListener = (...params: any[]) => mEventListener.addListener(...params);

/* Get the browser history instance. */

const getBrowserHistory = () => mBrowserHistory;

/* Override the existed methods. */

const push = (path: string, state?: any) => {
	mEventListener.triggerEvent({action: ACTION_PUSH});
	return mHistory.push(path, state);
};
const replace = (path: string, state?: any) => {
	mEventListener.triggerEvent({action: ACTION_REPLACE});
	return mHistory.replace(path, state);
};
const goBack = () => {
	mEventListener.triggerEvent({action: ACTION_POP});
	return mHistory.goBack();
};
const getLocation = () => mHistory.location;

/* Add new methods. */

const canGoBack = () => mHistory.length > 1;

const goBackOrPush = (route: string) => {
	if (canGoBack()) {
		goBack();
	} else {
		push(route);
	}
};

export const AppHistory = {
	addOnHashChangeListener,
	getBrowserHistory,
	push,
	replace,
	goBack,
	canGoBack,
	goBackOrPush,
	getLocation,
};
