import Image from "next/image";
import Link from "next/link";

export default function Navbar() {
  return (
    <div className="text-black pl-20 pr-20 pt-2">
      <div className="flex justify-between items-center">
        <div>
          <Image src="/images/logo.png" alt="Logo" width={120} height={40} />
        </div>
        <div className="flex space-x-6">
          <Link href="/" className="hover:text-blue-400 cursor-pointer">
            Home
          </Link>
          <Link href="/about" className="hover:text-blue-400 cursor-pointer">
            About Us
          </Link>
          <Link href="/products" className="hover:text-blue-400 cursor-pointer">Products</Link>
          <p className="hover:text-blue-400 cursor-pointer">Career</p>
          <p className="hover:text-blue-400 cursor-pointer">Events</p>
        </div>
        <div>
          <Link href="/contactus">
            <button className="bg-[#009FE4] text-white py-2 px-10 rounded hover:bg-[#007AB8] transition duration-300">
              Contact
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}
