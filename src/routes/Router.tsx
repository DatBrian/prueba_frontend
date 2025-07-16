import { createBrowserRouter } from "react-router";
import HomeLayout from "../layouts/HomeLayout/HomeLayout";
import ErrorPage from "../pages/Error/ErrorPage";
import Root from "./Root";
import AuthPage from "../pages/Auth/AuthPage";
import { PrivateRoute } from "./PrivateRoute";

const router = createBrowserRouter([
	{
		path: "/auth",
		element: <AuthPage />,
	},
	{
		element: <PrivateRoute />,
		errorElement: <ErrorPage />,
		children: [
			{
				path: "/",
				element: <HomeLayout />,
			},
		],
	},
]);

export default router;
