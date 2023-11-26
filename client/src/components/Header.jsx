import { FaSearch } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { useEffect, useState } from "react";

export default function Header() {
  const { currentUser } = useSelector((state) => state.user);
  const [searchTerm, setSearchTerm] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    const urlParams = new URLSearchParams(window.location.search);
    urlParams.set("searchTerm", searchTerm);
    const searchQuery = urlParams.toString();
    navigate(`/search?${searchQuery}`);
  };

  useEffect(() => {
    const urlParams = new URLSearchParams(location.search);
    const searchTermFromUrl = urlParams.get("searchTerm");
    if (searchTermFromUrl) {
      setSearchTerm(searchTermFromUrl);
    }
  }, [location.search]);
  return (
    <header className="bg-stone-300 shadow-md">
      <div className="flex justify-between items-center max-w-6xl mx-auto p-5">
        <Link to="/">
          <h1 className="font-bold text-sm sm:text-xl flex flex-wrap">
            <span className="text-red-500">Arya</span>
            <span className="text-stone-700">Estate</span>
          </h1>
        </Link>
        <form
          onSubmit={handleSubmit}
          className="bg-stone-100 p-3 rounded-xl flex items-center"
        >
          <input
            type="text"
            placeholder="search..."
            className="bg-transparent focus:outline-none w-24 sm:w-64"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <button>
            <FaSearch className="text-stone-500" />
          </button>
        </form>

        <ul className="flex gap-5">
          <Link to="/">
            <li className="hidden sm:inline text-stone-700 hover:text-red-500">
              Home
            </li>
          </Link>
          <Link to="/about">
            <li className="hidden sm:inline text-stone-700 hover:text-red-500">
              About
            </li>
          </Link>

          <Link to="/profile">
            {currentUser ? (
              <img
                src={currentUser.avatar}
                className="rounded-full h-7 w-7 object-cover"
                alt="profile image"
              />
            ) : (
              <li className=" text-stone-700 hover:text-red-500">Sign In</li>
            )}
          </Link>
        </ul>
      </div>
    </header>
  );
}
