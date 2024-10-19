import { FaInstagram, FaLinkedin, FaEnvelope } from 'react-icons/fa'; // For social icons

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-3  rounded-t-lg">
      <div className="container mx-auto text-center">
        {/* Footer Text */}
        <p className="text-lg font-serif italic mt-1">
          Design & Developed By 
        </p>
        <p className="text-1xl font-serif italic mt-1">
          Muhammad Kashif 
        </p>

        {/* Social Media Icons */}
        <div className="flex justify-center space-x-6 mt-4">
          {/* Instagram */}
          <a
            href="https://www.instagram.com/muhammad_kashif164"
            target="_blank"
            rel="noopener noreferrer"
            className="text-pink-500 hover:text-pink-400 transition"
          >
            <FaInstagram size={30} />
          </a>

          {/* LinkedIn */}
          <a
            href="https://www.linkedin.com/in/muhammad-kashif7016"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-500 hover:text-blue-400 transition"
          >
            <FaLinkedin size={30} />
          </a>

          {/* Gmail */}
          <a
            href="mailto:muhammad.kashif7016992@gmail.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-red-500 hover:text-red-400 transition"
          >
            <FaEnvelope size={30} />
          </a>
        </div>
      </div>
    </footer>
  );
}
