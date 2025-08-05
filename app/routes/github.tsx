import { MagnifyingGlassIcon } from "@radix-ui/react-icons";
import axios from "axios";
import { useState } from "react";
import { toast } from "sonner";
import UserDetail from "~/components/UserDetail";
import { Button } from "~/components/ui/button";
import { Input } from "~/components/ui/input";
import { Skeleton } from "~/components/ui/skeleton";

interface IUser {
	avatar_url: string;
	name: string | null;
	bio: string | null;
	login: string | null; // considering this as username
	location: string | null;
	followers: number;
	public_repos: number;
}

const Github = () => {
	const [userName, setUserName] = useState("");
	const [user, setUser] = useState<IUser | undefined>(undefined);
	const [loading, setLoading] = useState(false);
	const [error, setError] = useState(false);

	const handleSearch = async () => {
		if (!userName.length) {
			toast.error("User name is required.");
			return;
		}

		setLoading(true);
		setError(false);

		try {
			const response = await axios.get<IUser>(
				`https://api.github.com/users/${userName}`,
			);
			setUser(response.data);
		} catch (error) {
			console.log("🚀 ~ handleSearch ~ error:", error);
			setError(true);
			setUser(undefined);
		} finally {
			setLoading(false);
		}
	};

	return (
		<div className="max-w-md p-6 mx-auto space-y-6 bg-white border border-gray-100 shadow-xl rounded-2xl">
			<h1 className="text-lg font-medium text-center text-gray-600">
				Enter a GitHub username to view profile
			</h1>
			<div className="flex items-center gap-3">
				<Input
					onChange={(e) => setUserName(e.target.value)}
					value={userName}
					type="text"
					placeholder="Search GitHub user"
					className="flex-1 px-4 py-2 transition-all duration-200 border border-gray-300 rounded-lg focus:border-blue-500 focus:ring-2 focus:ring-blue-100"
				/>
				<Button size="icon" onClick={handleSearch} type="button">
					<MagnifyingGlassIcon className="size-6" />
				</Button>
			</div>

			{error && (
				<p className="text-center text-red-500">User not found. Try again!</p>
			)}

			{(loading || user) && (
				<div className="flex flex-col items-center gap-4 p-6">
					{loading ? (
						<>
							<Skeleton className="w-24 h-24 rounded-full" />
							<div className="w-full space-y-2 text-center">
								<Skeleton className="w-2/3 mx-auto rounded h-7" />
								<Skeleton className="w-1/2 h-5 mx-auto rounded" />
							</div>
							<div className="flex flex-wrap justify-center w-full gap-4 mt-2">
								<Skeleton className="w-24 rounded-full h-7" />
								<Skeleton className="w-24 rounded-full h-7" />
								<Skeleton className="w-24 rounded-full h-7" />
							</div>
						</>
					) : (
						<>
							<img
								className="w-24 h-24 border-4 border-blue-200 rounded-full shadow-md"
								src={user?.avatar_url}
								alt="User avatar"
							/>
							<div className="space-y-2 text-center">
								<p className="text-2xl font-bold text-gray-800">
									{user?.name || user?.login}
								</p>
								{user?.bio && (
									<p className="text-base italic text-gray-600">{user?.bio}</p>
								)}
							</div>
							<div className="flex flex-wrap justify-center gap-4 mt-2">
								{user?.location && (
									<UserDetail detail={`📍 ${user?.location}`} />
								)}
								<UserDetail detail={`👥 ${user?.followers} Followers`} />
								<UserDetail detail={`📦 ${user?.public_repos} Repos`} />
							</div>
						</>
					)}
				</div>
			)}
		</div>
	);
};

export default Github;
