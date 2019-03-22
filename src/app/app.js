import React from 'react';
import { render } from 'react-dom';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { LocalizeProvider } from 'react-localize-redux';

import Main from './components/main.js';
import { MainPortfolio } from './components/main-portfolio.js';

export default class App extends React.Component {
	constructor(props) {
		super(props);
	}

	render() {
		return (
			<LocalizeProvider>
				<Router>
					<Switch>
						<Route exact path="/" component={Main} />
						<Route path="/portfolio" component={MainPortfolio} />
					</Switch>
				</Router>
			</LocalizeProvider>
		);
	}
}
