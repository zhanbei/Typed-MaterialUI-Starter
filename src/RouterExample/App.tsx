'use strict';

import React from 'react';
import {Route, Router, Switch} from 'react-router-dom';

import {HomePage} from './HomePage/HomePage';
import {AboutPage} from './AboutPage/AboutPage';
import {TopicsPage} from './TopicsPage/TopicsPage';
import {TopicPage} from './TopicPage/TopicPage';

import {AppHistory} from '../resources/AppHistory';
import * as routes from '../resources/AppRoutes';

const mAppBrowserHistory = AppHistory.getBrowserHistory();

// App entrance used browser router with react-router.
// @see https://reacttraining.com/react-router/web/example/basic
export class App extends React.PureComponent {
	render() {
		return (
			<Router history={mAppBrowserHistory}>
				<Switch>
					<Route exact path={routes.ROUTE_HOME} component={HomePage}/>
					<Route exact path={routes.ROUTE_ABOUT} component={AboutPage}/>
					<Route exact path={routes.ROUTE_TOPICS} component={TopicsPage}/>
					<Route exact path={routes.ROUTE_TOPIC} component={TopicPage}/>
				</Switch>
			</Router>
		);
	}
}
