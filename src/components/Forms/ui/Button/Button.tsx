import "./Button.css";
import type { ButtonProps } from "./Button.types";

export const Button = ({ children, ...props }: ButtonProps) => {
	return (
		<button
			className="customButton flex w-full justify-center rounded-md px-3 py-1.5 text-sm/6 font-semibold text-black shadow-xs hover:bg-indigo-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
			{...props}
		>
			{children}
		</button>
	);
};

