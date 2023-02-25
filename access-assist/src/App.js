// import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { Routes, Route } from 'react-router-dom';
import Home from './routes/home/home.component';
import Contact from './routes/contact/contact.component';
import Navigation from './routes/navigation/navigation.component';
// import Authentication from './routes/authentication/authentication.component';
import About from './routes/about/about.component';
// import MyProfile from './routes/myprofile/myprofile.component';
function App() {
	return (
		// <BrowserRouter>
		<Routes>
			<Route path='/' element={<Navigation />}>
				<Route index element={<Home />} />
				{/* <Route path='/auth' element={<Authentication />} /> */}
				<Route path='/contact' element={<Contact />} />
				<Route path='/about' element={<About />} />
				{/* <Route path='/myprofile' element={<MyProfile />} /> */}
			</Route>
		</Routes>
		// </BrowserRouter>
	);
}

export default App;
