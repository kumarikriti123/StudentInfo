function Footer() {
    return (
      <footer className="bg-gray-800 text-white py-6 relative mt-[20vh]">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center mb-4">
            <div>
              <h2 className="text-xl font-bold">Coding Age</h2>
              <p className="text-sm text-gray-400">
                By Coding Age ~ Web Dev Interns
              </p>
            </div>
  
            <div className="mt-4 md:mt-0">
              <ul className="flex space-x-4">
                <li>
                  <a
                    href="#home"
                    className="hover:text-blue-400 transition-colors"
                  >
                    Home
                  </a>
                </li>
                <li>
                  <a
                    href="#about"
                    className="hover:text-blue-400 transition-colors"
                  >
                    About
                  </a>
                </li>
                <li>
                  <a
                    href="#features"
                    className="hover:text-blue-400 transition-colors"
                  >
                    Features
                  </a>
                </li>
                <li>
                  <a
                    href="#contact"
                    className="hover:text-blue-400 transition-colors"
                  >
                    Contact
                  </a>
                </li>
              </ul>
            </div>
  
            <div className="mt-4 md:mt-0">
              <ul className="flex space-x-4">
                <li>
                  <a
                    href="https://github.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-blue-400 transition-colors"
                  >
                    <i className="fab fa-github"></i> GitHub
                  </a>
                </li>
                <li>
                  <a
                    href="https://linkedin.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-blue-400 transition-colors"
                  >
                    <i className="fab fa-linkedin"></i> LinkedIn
                  </a>
                </li>
                <li>
                  <a
                    href="https://twitter.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-blue-400 transition-colors"
                  >
                    <i className="fab fa-twitter"></i> Twitter
                  </a>
                </li>
              </ul>
            </div>
          </div>
  
          <div className="text-center border-t border-gray-600 pt-4 text-sm text-gray-400">
            &copy; {new Date().getFullYear()} Coding Age. All rights are not
            reserved yet.
          </div>
        </div>
      </footer>
    );
  }
  
  export default Footer;
  