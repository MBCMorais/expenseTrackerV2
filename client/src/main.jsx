import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import App from './App';
import './index.css';
import Layout from './pages/Layout';
import Home from './pages/Home';
import About from './pages/About';

ReactDOM.createRoot(document.getElementById('root')).render(
	<React.StrictMode>
		<BrowserRouter>
			<Routes>
				<Route path='/' element={<Layout />}>
					<Route index element={<Home />} />
					<Route path='about' element={<About />} />
					{/* <Route path='contact' element={<Contact />} /> */}
					{/* <Route path='*' element={<NoPage />} /> */}
				</Route>
			</Routes>
		</BrowserRouter>
	</React.StrictMode>,
);
