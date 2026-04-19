import Link from "next/link";

const Navbar = () => {
  return (
    <nav className="bg-blue-600 text-white px-6 py-4 shadow-md">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        {/* Logo */}
        <h1 className="text-xl font-bold">MyApp</h1>

        {/* Menu */}
        <ul className="flex gap-6">
          <li>
            <Link href="/" className="hover:text-gray-200">
              Dashboard
            </Link>
          </li>
          <li>
            <Link href="/quotes" className="hover:text-gray-200">
              All Quotes
            </Link>
          </li>
          <li>
            <Link href="/contact" className="hover:text-gray-200">
              Contact Us
            </Link>
          </li>
          <li>
            <Link href="/about" className="hover:text-gray-200">
              About Us
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
