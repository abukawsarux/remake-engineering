"use client";

import { Menu, X } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { IoIosCall } from "react-icons/io";

const Navbar: React.FC = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [isSticky, setIsSticky] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setIsSticky(window.scrollY > 150);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const navItems = [
    { href: "/", label: "Home" },
    { href: "/about", label: "About Us" },
    { href: "/services", label: "Our Services" },
    { href: "/equipment", label: "Our Equipment" },
    { href: "/projects", label: "Our Projects" },

    { href: "/contact", label: "Contact Us" },
  ];

  return (
    <div className="w-full relative">
      {/* TOP BAR */}

      {/* MAIN NAVBAR */}
      <header
        className={`transition-all duration-500 ${
          isSticky
            ? "fixed top-0 left-0 right-0 bg-white/95 backdrop-blur shadow z-50"
            : "relative bg-white"
        }`}
      >
        <div className="max-w-[1640px] mx-auto px-6 md:px-8 py-2 flex justify-between items-center">
          {/* LOGO */}
          <Link href="/" className="flex items-center">
            <Image
              src="/images/logo.png"
              alt="Logo"
              width={1000}
              height={500}
              className="w-[170px] md:w-[190px] h-auto"
            />
          </Link>

          {/* DESKTOP MENU */}
          <nav className="hidden md:flex gap-8 font-medium text-gray-800 items-center">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={`hover:text-[#FC860A] transition ${
                  pathname === item.href ? "text-[#FC860A] underline" : ""
                }`}
              >
                {item.label}
              </Link>
            ))}
          </nav>

          {/* MOBILE BUTTON */}
          <button
            className="md:hidden"
            onClick={() => setMobileOpen(!mobileOpen)}
          >
            {mobileOpen ? <X size={26} /> : <Menu size={26} />}
          </button>
        </div>

        {/* MOBILE MENU */}
        {mobileOpen && (
          <div className="md:hidden bg-white border-t shadow px-6 py-4 space-y-4">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setMobileOpen(false)}
                className={`block font-medium ${
                  pathname === item.href ? "text-[#FC860A]" : "text-gray-700"
                }`}
              >
                {item.label}
              </Link>
            ))}
          </div>
        )}
      </header>

      {/* Sticky Spacer */}
      {isSticky && <div className="h-[88px]" />}
    </div>
  );
};

export default Navbar;
