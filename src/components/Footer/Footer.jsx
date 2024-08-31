import React from "react";
import { Github } from "lucide-react";
import { Container } from "../index";
import SocialLinkButton from "../SocialLinkButton";

const Footer = () => {
	const navItems = [
		{
			icon: Github,
			url: "https://github.com/KanoAb08",
		},
	];

	return (
		<footer className="sticky bottom-0 dark:bg-background bg-background">
			<Container
				className={
					"min-h-14 py-2 flex gap-2 flex-col sm:flex-row sm:gap-6 justify-center items-center"
				}
			>
				<ul className="flex flex-wrap justify-center items-center gap-2">
					<li className="text-2xl font-medium">Abhay Patel /</li>
					{navItems.map((item, index) => (
						<li key={index} className="flex">
							<SocialLinkButton url={item.url}>
								<item.icon />
							</SocialLinkButton>
						</li>
					))}
				</ul>
			</Container>
		</footer>
	);
};

export default Footer;
