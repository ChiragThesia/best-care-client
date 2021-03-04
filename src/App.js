import Hospitals from './components/GetHospitals';
import { Container } from 'reactstrap';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';

//TODO: create welcome page and router.
function App() {
	return (
		<Container>
			<h1 className="App-header">Best Hospitals Near me</h1>
			<Router>
				<div>
					<nav>
						<Link to="/"> Home</Link>
						<Link to="/hospitals">Hospital Finder</Link>
					</nav>
					<Switch>
						<Route path="/hospitals">
							<Hospitals />
						</Route>
					</Switch>
				</div>
			</Router>
		</Container>
	);
}

export default App;
