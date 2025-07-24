import type { LabelProps } from "./Label.types";

export const Label = ({ children, ...props }: LabelProps) => {
	return (
		<label className="block text-sm/6 font-medium text-gray-900" {...props}>
			{children}
		</label>
	);
};
