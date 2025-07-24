import { Button, Input, Label } from "../ui";

const RegisterForm = () => {
	return (
		<div className="bg-blue-400 rounded-xl flex min-h-full  flex-col justify-center px-6 py-12 lg:px-8">
			<div className="sm:mx-auto sm:w-full sm:max-w-sm">
				<h2 className="mt-10 text-center text-2xl/9 font-bold tracking-tight text-gray-900">
					Sign in to your account
				</h2>
			</div>

			<div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
				<form className="space-y-6" action="#" method="POST">
					<div>
						<Label htmlFor="email">Email</Label>
						<div className="mt-2">
							<Input
								type="email"
								name="email"
								id="email"
								required
							/>
						</div>
					</div>

					<div>
						<div className="flex items-center justify-between">
							<Label htmlFor="password">Password</Label>
							<div className="text-sm">
								<a
									href="#"
									className="font-semibold text-gray-700 hover:text-black"
								>
									Forgot password?
								</a>
							</div>
						</div>
						<div className="mt-2">
							<Input
								type="password"
								name="password"
								id="password"
								required
								minLength={6}
							/>
						</div>
					</div>

					<div>
						<Button type="submit">submit</Button>
					</div>
				</form>

				<p className="mt-10 text-center | text-sm/6 text-gray-700">
					U dont have an account ?
					<a
						href="#"
						className=" font-semibold text-indigo-600 hover:text-indigo-500"
					>
						. Click here to register!
					</a>
				</p>
			</div>
		</div>
	);
};

export default RegisterForm;
