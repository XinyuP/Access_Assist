// import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { Routes, Route } from 'react-router-dom';
import Home from './routes/home/home.component';
import Contact from './routes/contact/contact.component';
import Navigation from './routes/navigation/navigation.component';
import Map from './routes/map/map.component';
import About from './routes/about/about.component';
import Address from './routes/address/address.component';
import Form from './routes/form/form.component';
function App() {
	return (
		// <BrowserRouter>
		<Routes>
			<Route path='/' element={<Navigation />}>
				<Route index element={<Home />} />
				<Route path='/contact' element={<Contact />} />
				<Route path='/about' element={<About />} />
				<Route path='/address' element={<Address />} />
				<Route path='/map' element={<Map />} />
				<Route path='/form' element={<Form />} />
			</Route>
		</Routes>
		// </BrowserRouter>
	);
}

export default App;

// 16 124 241
