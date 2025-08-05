import { MagnifyingGlassIcon } from "@radix-ui/react-icons";
import axios from "axios";
import { useState } from "react";

interface IUser {
  avatar_url: string;
  name: string;
  bio: string;
  location: string;
  number_followers: number;
  repositories: number;
}

const Github = () => {
  const [userName, setUserName] = useState("");
  const [user, setUser] = useState<IUser | undefined>(undefined);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  const handleSearch = async () => {
    if (!userName.length) return;
    setLoading(true);
    setError(false);
    try {
      const response = await axios.get<IUser>(
        `https://api.github.com/users/${userName}`
      );
      console.log("🚀 ~ handleSearch ~ userData:", response);
      setUser(response.data);
    } catch (error) {
      setError(true);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-md p-4 mx-auto space-y-4">
      <div className="flex items-center gap-2">
        <input
          onChange={(e) => setUserName(e.target.value)}
          value={userName}
          className="flex-grow px-3 py-2 border border-gray-400 rounded-md"
          type="text"
          placeholder="Search GitHub user"
        />
        <button
          onClick={handleSearch}
          type="button"
          className="p-2 text-white bg-blue-500 rounded-md hover:bg-blue-600"
        >
          <MagnifyingGlassIcon />
        </button>
      </div>

      {loading && <p className="text-blue-500">Loading...</p>}
      {error && <p className="text-red-500">User not found. Try again!</p>}
      {user && (
        <div className="p-4 border rounded-md shadow">
          <p className="text-lg font-medium">Name: {user.name} </p>
          <img className="rounded-full" src={user.avatar_url} alt="" />
          <p className="text-lg font-medium">{user.bio}</p>
        </div>
      )}
    </div>
  );
};

export default Github;
