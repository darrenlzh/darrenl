import React from 'react'
import { render } from 'react-dom'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

import { Main } from './components/main.js'
import { MainPortfolio } from './components/main-portfolio.js'

class App extends React.Component {
	render() {
		return (
			<Router>
				<Switch>
					<Route exact path="/" component={Main} />
					<Route path="/portfolio" component={MainPortfolio} />
				</Switch>
			</Router>
		)
	}
}

render(<App />, document.getElementById('app'))
