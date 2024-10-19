import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="flex justify-between items-center py-5 px-10 bg-gray-800 text-white rounded-b-lg">
      {/* Company Logo and Name */}
      <div className="flex items-center space-x-6">
        <img
          src="/logo.jpg"
          alt="Company Logo"
          className="h-10 w-10"
        />
        <div className="text-xl font-bold font-serif italic mt-1">Alpha Company </div>
      </div>

      {/* Navigation Links */}
      <div className="space-x-6">
        <Link href="/" className="hover:text-gray-400">Home</Link>
        <Link href="/about" className="hover:text-gray-400">About</Link>
        <Link href="/career-option" className="hover:text-gray-400">Career Option</Link>
        <Link href="/news" className="hover:text-gray-400">News</Link>
        <Link href="/contactus" className="hover:text-gray-400">Contact Us</Link>
      </div>
    </nav>
  );
}
