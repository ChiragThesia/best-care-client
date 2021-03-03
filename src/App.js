import Hospitals from './components/GetHospitals';
import { Container } from 'reactstrap';

function App() {
	return (
		<Container>
			<h1 className="App-header">Best Hospitals Near me</h1>
			<Hospitals />
		</Container>
	);
}

export default App;
