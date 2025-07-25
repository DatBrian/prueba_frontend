import "./HomeNavBar.css"

const HomeNavBar = () => {
	return (
		<nav id="homeNavBar" className="home-nav-bar py-5">
			<div className="nav-container flex">
				<div className="w-full flex">

				<div className="px-6 h-full" id="logo">
					<img src="src\assets\images\logo2.png" width={100} alt="logo"/>
				</div>
				<div className="flex justify-around items-center" id="navButtons">
					<a href="">Home</a>
					<a href="">About</a>
					<a href="">Help</a>

				</div>
				</div>
				<div className="px-10" id="loginButton">
					<button >Login</button>
				</div>
			</div>
		</nav>
	);
};

export default HomeNavBar;
