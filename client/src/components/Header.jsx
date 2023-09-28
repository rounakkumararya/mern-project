import { FaSearch } from "react-icons/fa";
import { Link } from "react-router-dom";

export default function Header() {
  return (
    <header className="bg-stone-300 shadow-md">
      <div className="flex justify-between items-center max-w-6xl mx-auto p-5">
        <Link to="/">
          <h1 className="font-bold text-sm sm:text-xl flex flex-wrap">
            <span className="text-red-500">Arya</span>
            <span className="text-stone-700">Estate</span>
          </h1>
        </Link>
        <form className="bg-stone-100 p-3 rounded-xl flex items-center">
          <input
            type="text"
            placeholder="search..."
            className="bg-transparent focus:outline-none w-24 sm:w-64"
          />
          <FaSearch className="text-stone-500" />
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
          <Link to="/sign-in">
            <li className="sm:inline text-stone-700 hover:text-red-500">
              Sign In
            </li>
          </Link>
        </ul>
      </div>
    </header>
  );
}
