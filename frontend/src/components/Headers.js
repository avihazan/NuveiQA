import React from 'react';
import './Headers.module.css';

const Header = () => {
	return (
		<div>
			<header className="homePage">
				<div className="logo">
					<img src="https://nuvei.com/wp-content/uploads/2022/10/Nuvei_Logo_2022.png"></img>
				</div>
				<span className="title">Transaction table</span>
			</header>
		</div>
	);
};

export default Header;


