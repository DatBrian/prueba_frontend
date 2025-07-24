import "./HomePage.css";

const HomePage = () => {
	return (
		<>
			<section className="flex h-screen w-screen">
				<div></div>
				<div
					id="homeImg"
					className="hidden lg:block h-full overflow-hidden"
				>
					<img
						src="src/assets/images/pruebam.png"
						alt="Auth background"
						className="w-full h-full object-cover"
					/>
				</div>
			</section>
			;
		</>
	);
};

export default HomePage;
