
import HomeNavBar from "../../components/Forms/ui/navBar/homeNavBar/HomeNavBar";
import "./HomePage.css";

const HomePage = () => {
	return (
		<>
				<HomeNavBar/>
			<section className="flex h-screen w-screen">
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
				<div className="bg-white h-full" id="homeText">
					<div className="p-10 mt-14" id="welcomeText">
						<p className="text-8xl">Fast and secure loans </p>
						<div className="flex text-8xl gap-5">
							<p id="percent" className="italic w-fit">100%</p> <p className="w-fit">online</p>
						</div>
					</div>
					<div className="flex justify-center" >
						<button id="getStartedButton" className="bold italic">GET STARTED</button>
					</div>
				</div>
			</section>
			;
		</>
	);
};

export default HomePage;
