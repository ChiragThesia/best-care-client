import Hospitals from './components/GetHospitals';
import Home from './components/Home';
import About from './components/About';

import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import './App.css';

//TODO: create welcome page and router.
function App() {
	return (
		<div className="container">
			<Router>
				<div>
					<div className="navContainer">
						<nav className="navbar">
							<Link className="navLink" to="/">
								Home
							</Link>
							<Link className="navLink" to="/hospitals">
								Hospital Finder
							</Link>
							<Link className="navLink" to="/about">
								Information
							</Link>
						</nav>
					</div>

					<Switch>
						<Route exact path="/">
							<Home />
						</Route>
						<Route path="/hospitals">
							<Hospitals />
						</Route>
						<Route path="/about">
							<About />
						</Route>
					</Switch>
				</div>
			</Router>
		</div>
	);
}

export default App;
