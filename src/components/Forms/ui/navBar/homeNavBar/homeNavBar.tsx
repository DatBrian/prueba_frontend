const homeNavBar = () => {
	return (
		<nav className="home-nav-bar">
			<div className="nav-container">
				<a href="/" className="nav-logo">
					Zinobe
				</a>
				<ul className="nav-links">
					<li>
						<a href="/about">About</a>
					</li>
					<li>
						<a href="/contact">Contact</a>
					</li>
				</ul>
			</div>
		</nav>
	);
};

export default homeNavBar;
