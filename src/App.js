import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';
import HomePage from './components/HomePage';
import HeroMenu from './components/HeroMenu';

class App extends Component {
	state = {
		menu: false,
	};

	render() {
		const { menu } = this.state;

		return (
			<Router>
				<div>
					{menu && <HeroMenu />}

					<Switch>
						<Route path="/" component={HomePage} />
					</Switch>
				</div>
			</Router>
		);
	}
}

export default App;
