import React from "react";

const Navber = () => {
  const links = [
    { name: "About", href: "#about" },
    { name: "Skills", href: "#skills" },
    { name: "Projects", href: "#projects" },
    { name: "Education", href: "#education" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <div className="fixed top-0 left-0 w-full z-50 backdrop-blur-md">
      <nav className="navbar bg-black/70 text-gray-300 shadow-md px-6 py-3">
        {/* Navbar Start */}
        <div className="navbar-start">
          {/* Mobile Menu */}
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost lg:hidden text-cyan-400">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </label>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 p-2 shadow bg-[#0f0f0f] rounded-box w-52"
            >
              {links.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    className="text-gray-300 hover:text-cyan-400 transition-colors duration-300"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Logo / Brand */}
          <a className="btn btn-ghost text-2xl font-bold text-cyan-400 hover:text-cyan-500 transition">
            Tushar Debnath
          </a>
        </div>

        {/* Navbar Center - Desktop Links */}
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1 gap-4">
            {links.map((link, index) => (
              <li key={index}>
                <a
                  href={link.href}
                  className="text-gray-300 hover:text-cyan-400 transition-colors duration-300"
                >
                  {link.name}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Navbar End - CV Button */}
        <div className="navbar-end">
          <a
            href="/TusharDebnathCV.pdf" // ekhane tomader CV link dite hobe
            download
            className="btn bg-cyan-400 text-black font-semibold hover:bg-cyan-500 transition"
          >
            Download CV
          </a>
        </div>
      </nav>
    </div>
  );
};

export default Navber;
