import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import HomePage from './components/homePage';
import './App.scss';
import Transactions from './components/Transactions';

function App() {
	return (
		<BrowserRouter>
			<div className="container-fluid">
				<HomePage />
				<Transactions />
			</div>
		</BrowserRouter>
	);
}

export default App;
