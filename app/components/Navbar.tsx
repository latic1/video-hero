import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="relative z-10 w-full bg-transparent px-4 py-4">
      <div className="container mx-auto flex items-center justify-between">
        {/* Logo */}
        <a href="#" className="text-2xl font-bold text-white">
          <img src="/logo.svg" alt="Logo" />
        </a>

        {/* Navbar Links */}
        <div className="hidden space-x-8 text-lg font-medium text-white md:flex">
          <Link
            href="linkedin.com/in/latif-musah"
            target="_blank"
            className="hover:text-gray-400"
          >
            About Us
          </Link>
          <Link
            href="linkedin.com/in/latif-musah"
            target="_blank"
            className="d hover:text-gray-400 hover:underline"
          >
            News
          </Link>
        </div>

        {/* Hamburger Icon (visible on small screens) */}
        <div className="md:hidden">
          <button id="menu-btn" className="text-white focus:outline-none">
            <svg
              className="h-8 w-8"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16m-7 6h7"
              ></path>
            </svg>
          </button>
        </div>
      </div>
    </nav>
  );
}
