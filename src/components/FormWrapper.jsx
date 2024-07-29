import React from "react";
import {
	Card,
	CardContent,
	CardDescription,
	CardHeader,
	CardTitle,
} from "@/components/ui/card";

const FormWrapper = ({ children, title, className, ...props }) => {
	return (
		<Card className={`bg-transparent ${className}`} {...props}>
			<CardHeader>
				<CardTitle className="text-3xl">{title}</CardTitle>
			</CardHeader>

			<CardContent>{children}</CardContent>
		</Card>
	);
};

export default FormWrapper;
