import Link from "next/link";

function Footer() {
  return (
    <footer className="bg-black text-gray-400 py-12">
      <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 px-4 sm:px-6 lg:px-8">
        <div>
          <h2 className="text-white text-lg font-semibold mb-4">About Us</h2>
          <p className="mb-4">
            Dance Academy is a premier institution dedicated to teaching the art
            and discipline of dance. We nurture talent from the ground up,
            fostering a vibrant community of passionate dancers.
          </p>
        </div>
        <div>
          <h2 className="text-white text-lg font-semibold mb-4">Quick Links</h2>
          <ul>
            <li>
              <a
                href="#"
                className="hover:text-white transition-colors duration-300"
              >
                Home
              </a>
            </li>
            <li>
              <a
                href="#"
                className="hover:text-white transition-colors duration-300"
              >
                About
              </a>
            </li>
            <li>
              <a
                href="#"
                className="hover:text-white transition-colors duration-300"
              >
                Courses
              </a>
            </li>
            <li>
              <a
                href="#"
                className="hover:text-white transition-colors duration-300"
              >
                Contact
              </a>
            </li>
          </ul>
        </div>
        <div>
          <h2 className="text-white text-lg font-semibold mb-4">Follow Us</h2>
          <div className="flex space-x-4">
            <Link
              target="_blank"
              href="https://github.com/piyusss11"
              className="hover:text-white transition-colors duration-300"
            >
              Github
            </Link>
            <Link
              target="_blank"
              href="https://x.com/piyusss11"
              className="hover:text-white transition-colors duration-300"
            >
              Twitter
            </Link>
            <Link
              target="_blank"
              href="https://www.linkedin.com/in/piyusss11/"
              className="hover:text-white transition-colors duration-300"
            >
              Linkedin
            </Link>
          </div>
        </div>
        <div>
          <h2 className="text-white text-lg font-semibold mb-4">Contact Us</h2>
          <p>Gurgaon, India</p>
          <p>Gurgaon 122001</p>
          <p>Email: info@danceschool.com</p>
          <p>Phone: (123) 456-7890</p>
        </div>
      </div>
      <p className="text-center text-xs pt-8">
        © 2024 Dance School. All rights reserved.
      </p>
    </footer>
  );
}

export default Footer;
