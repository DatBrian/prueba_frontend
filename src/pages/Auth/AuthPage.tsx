import RegisterForm from "../../components/Forms/RegisterForm/RegisterForm";
import "./AuthPage.css";

const AuthPage = () => {
	return (
		<section id="authSection" className="flex w-full h-5/6 p-5">
			<div className="flex h-full w-full overflow-hidden">
				<div className="authForm h-full w-full lg:w-1/2">
					<div className="h-full">
						<RegisterForm />
					</div>
				</div>

				<div
					id="loginImg"
					className="hidden lg:block lg:w-1/2 h-full overflow-hidden"
				>
					<img
						src="src/assets/images/pruebam.png"
						alt="Auth background"
						className="w-full h-full object-cover"
					/>
				</div>
			</div>
		</section>
	);
};

export default AuthPage;
