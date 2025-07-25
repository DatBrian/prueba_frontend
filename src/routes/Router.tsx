import { createBrowserRouter } from "react-router";
// import HomeLayout from "../layouts/HomeLayout/HomeLayout";
import ErrorPage from "../pages/Error/ErrorPage";
import Root from "./Root";
import { PrivateRoute } from "./PrivateRoute";
import AuthLayout from "../layouts/AuthLayout/AuthLayout";
import RegisterForm from "../components/Forms/RegisterForm/RegisterForm";

const router = createBrowserRouter([
	{
		path: "/auth",
		element: <AuthLayout />,
		children:[
			{
				path: "register",
				element: <RegisterForm/>
			}
		]
	},
	{
		index: true,
		path: "/",
		element: <Root />,
	},
	{
		element: <PrivateRoute />,
		errorElement: <ErrorPage />,
		children: [],
	},
]);

export default router;
