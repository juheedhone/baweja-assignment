import { MagnifyingGlassIcon } from "@radix-ui/react-icons";
import axios from "axios";
import { useEffect } from "react";

const Github = () => {
  useEffect(() => {
    axios
      .get("https://api.github.com/users/facebook")
      .then((res) => console.log(res.data));
  }, []);

  return (
    <div>
      <input className="border border-gray-400 rounded-md" type="text" id="text" ></input>
      <button type="button">{<MagnifyingGlassIcon />}</button>
    </div>
  );
};

export default Github;
