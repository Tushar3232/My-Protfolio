import React from "react";

const Footer = () => {
  return (
    <footer className="bg-black text-gray-300 py-12 px-6">
      <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-8">

        {/* About Section */}
        <div className="space-y-4">
          <h3 className="text-2xl font-bold text-cyan-400">Tushar Debnath</h3>
          <p>
            Diploma in Computer Science and Technology student <br />
            Passionate about MERN stack, web development, and responsive design.
          </p>
          <p>© {new Date().getFullYear()} All rights reserved.</p>
        </div>

        {/* Contact Info */}
        <div className="space-y-2">
          <h4 className="text-xl font-semibold text-cyan-400">Contact</h4>
          <p>Email: <a href="mailto:tushardebnath@example.com" className="hover:underline text-white">tushardebnath@example.com</a></p>
          <p>Phone: <a href="tel:+880123456789" className="hover:underline text-white">+880 1234 56789</a></p>
          <p>Location: Tangail, Bangladesh</p>
        </div>

        {/* Social Links */}
        <div>
          <h4 className="text-xl font-semibold text-cyan-400 mb-4">Social</h4>
          <div className="flex gap-4">
            <a href="https://twitter.com/" target="_blank" rel="noopener noreferrer" className="hover:text-cyan-400 transition">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" className="fill-current">
                <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"/>
              </svg>
            </a>
            <a href="https://youtube.com/" target="_blank" rel="noopener noreferrer" className="hover:text-cyan-400 transition">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" className="fill-current">
                <path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z"/>
              </svg>
            </a>
            <a href="https://facebook.com/" target="_blank" rel="noopener noreferrer" className="hover:text-cyan-400 transition">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" className="fill-current">
                <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"/>
              </svg>
            </a>
            <a href="https://linkedin.com/" target="_blank" rel="noopener noreferrer" className="hover:text-cyan-400 transition">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" className="fill-current">
                <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.761 0 5-2.239 5-5v-14c0-2.761-2.239-5-5-5zm-11 19h-3v-10h3v10zm-1.5-11.268c-.966 0-1.75-.784-1.75-1.75s.784-1.75 1.75-1.75 1.75.784 1.75 1.75-.784 1.75-1.75 1.75zm13.5 11.268h-3v-5.604c0-1.338-.025-3.065-1.868-3.065-1.869 0-2.155 1.459-2.155 2.969v5.7h-3v-10h2.879v1.367h.041c.401-.758 1.379-1.556 2.838-1.556 3.034 0 3.595 1.997 3.595 4.592v5.597z"/>
              </svg>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
