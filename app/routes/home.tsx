import { CalendarIcon, GitHubLogoIcon } from "@radix-ui/react-icons";
import { Link } from "react-router";
import { Button } from "~/components/ui/button";
import type { Route } from "./+types/home";

export function meta(meta: Route.MetaArgs) {
	return [
		{ title: "New React Router App" },
		{ name: "description", content: "Welcome to React Router!" },
	];
}

export default function Home() {
	return (
		<div className="min-h-[calc(100vh-2rem)] flex flex-col items-center justify-center space-y-8 p-8">
			<div className="space-y-4 text-center">
				<h1 className="text-4xl font-bold tracking-tight">
					Select where you'd like to go!
				</h1>
			</div>

			<div className="flex flex-col gap-4 sm:flex-row">
				<Link to={"/todo"}>
					<Button
						size="lg"
						className="w-[200px] transition-transform hover:scale-105"
						variant="default"
					>
						<CalendarIcon className="w-5 h-5 mr-2" />
						Todo App
					</Button>
				</Link>
				<Link to={"/github"}>
					<Button
						size="lg"
						className="w-[200px] transition-transform hover:scale-105"
						variant="outline"
					>
						<GitHubLogoIcon className="w-5 h-5 mr-2" />
						GitHub
					</Button>
				</Link>
			</div>
		</div>
	);
}
