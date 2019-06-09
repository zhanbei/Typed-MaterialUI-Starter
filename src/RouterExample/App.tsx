'use strict';

import React from 'react'
import {Route, Router, Switch} from 'react-router-dom'

import HomePage from './HomePage/HomePage';
import AboutPage from './AboutPage/AboutPage';
import TopicsPage from './TopicsPage/TopicsPage';
import TopicPage from './TopicPage/TopicPage';

import routes from '../resources/AppRoutes';

const AppHistory = require('../resources/AppHistory');
const mAppBrowserHistory = AppHistory.getBrowserHistory();

// App entrance used browser router with react-router.
// @see https://reacttraining.com/react-router/web/example/basic
class App extends React.Component {
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
		)
	}
}

export default App;