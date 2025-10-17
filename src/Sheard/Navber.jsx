import React from "react";

const Navber = () => {
  const links = [
    { name: "About", href: "#about" },
    { name: "Skills", href: "#skills" },
    { name: "Projects", href: "#projects" },
    { name: "Education", href: "#education" },
    { name: "Contact", href: "#contact" },
    { name: "Hobby", href: "#hobby" },
  ];

  return (
    <div className="fixed top-0 left-0 w-full z-50 backdrop-blur-md">
      <nav className="navbar bg-black/70 text-gray-300 shadow-md px-6 py-3 flex justify-between items-center">
        {/* Logo / Brand */}
        <a className="text-2xl font-bold text-cyan-400 hover:text-cyan-500 transition">
          Tushar Debnath
        </a>

        {/* Desktop Links */}
        <div className="hidden lg:flex gap-6">
          {links.map((link, index) => (
            <a
              key={index}
              href={link.href}
              className="text-gray-300 hover:text-cyan-400 transition-colors duration-300"
            >
              {link.name}
            </a>
          ))}
        </div>

        {/* Desktop CV Button */}
        <div className="hidden lg:block">
          <a
            href="/TusharDebnathCV.pdf"
            download
            className="btn bg-cyan-400 text-black font-semibold hover:bg-cyan-500 transition"
          >
            Download CV
          </a>
        </div>

        {/* Mobile Menu */}
        <div className="lg:hidden dropdown dropdown-end">
          <label tabIndex={0} className="btn btn-ghost text-cyan-400">
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
            className="menu dropdown-content mt-3 p-4 shadow bg-[#0f0f0f] rounded-box w-52 flex flex-col gap-3"
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

            {/* Mobile CV Button */}
            <li className="mt-2">
              <a
                href="/TusharDebnathCV.pdf"
                download
                className="btn w-full bg-cyan-400 text-black font-semibold hover:bg-cyan-500 transition"
              >
                Download CV
              </a>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
};

export default Navber;
