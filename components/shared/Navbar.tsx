"use client";

import { Menu, X, ChevronDown } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { IoIosCall } from "react-icons/io";

const Navbar: React.FC = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [isSticky, setIsSticky] = useState(false);
  const [practiceOpen, setPracticeOpen] = useState(false); // mobile dropdown
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setIsSticky(window.scrollY > 150);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const navItems = [
    { href: "/", label: "Home" },
    { href: "/about", label: "About The Attorney" },
    { href: "/practice", label: "Practice Areas", dropdown: true },
    { href: "/testimonials", label: "Testimonials" },
    { href: "/blogs", label: "Blogs" },
    { href: "/contact", label: "Contact Us" },
  ];

  return (
    <div className="w-full relative">
      {/* TOP BAR */}
      <div className="w-full bg-white text-gray-700 border-b">
        <div className="max-w-[1640px] mx-auto px-8 flex justify-between items-center text-sm py-2">
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-2">
              <IoIosCall className="text-[#BA8E2D]" />
              <span className="font-medium">(813) 444-2817</span>
            </div>

            <p className="hidden md:block text-gray-600">
              Call a law firm that cares, available 24/7 for a free
              consultation.
            </p>
          </div>

          <Link
            href="/contact"
            className="bg-[#BA8E2D] text-white px-4 py-3 rounded-sm hover:bg-yellow-700 transition"
          >
            Book an Appointment
          </Link>
        </div>
      </div>

      {/* MAIN NAVBAR */}
      <header
        className={`transition-all duration-700 ${
          isSticky
            ? "fixed top-0 left-0 right-0 bg-white/90 backdrop-blur-md shadow z-50"
            : "relative bg-white"
        }`}
      >
        <div className="max-w-[1640px] mx-auto px-8 py-4 flex justify-between items-center relative">
          {/* LOGO */}
          <Link href="/" className="flex items-center">
            <Image
              src="/images/logo.png"
              alt="Logo"
              width={1000}
              height={500}
              className="w-[180px] md:w-[240px] h-auto"
            />
          </Link>

          {/* DESKTOP MENU */}
          <nav className="hidden md:flex gap-8 text-gray-800 font-medium items-center">
            {navItems.map((item) =>
              item.dropdown ? (
                <div key={item.href} className="relative group">
                  {/* CLICKABLE MAIN LINK */}
                  <Link
                    href={item.href}
                    className={`flex items-center gap-1 hover:text-yellow-700 transition ${
                      pathname === item.href ? "text-yellow-700 underline" : ""
                    }`}
                  >
                    {item.label}
                    <ChevronDown size={16} className="mt-[2px]" />
                  </Link>

                  {/* DROPDOWN */}
                  <div
                    className="
                      absolute left-0 top-[calc(100%+10px)]
                      w-[220px] bg-white shadow-lg rounded-sm
                      opacity-0 invisible 
                      group-hover:opacity-100 group-hover:visible 
                      transition-all duration-300
                      py-2 z-50
                    "
                  >
                    <Link
                      href="/practice#personal-injury"
                      className="block px-4 py-2 hover:bg-gray-100"
                    >
                      Personal Injury
                    </Link>
                    <Link
                      href="/practice#criminal-defense"
                      className="block px-4 py-2 hover:bg-gray-100"
                    >
                      Criminal Defense
                    </Link>
                  </div>
                </div>
              ) : (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`hover:text-yellow-700 transition ${
                    pathname === item.href ? "text-yellow-700 underline" : ""
                  }`}
                >
                  {item.label}
                </Link>
              )
            )}
          </nav>

          {/* MOBILE MENU BUTTON */}
          <button
            className="md:hidden"
            onClick={() => setMobileOpen(!mobileOpen)}
          >
            {mobileOpen ? <X size={26} /> : <Menu size={26} />}
          </button>

          {/* MOBILE MENU */}
          {mobileOpen && (
            <div className="md:hidden absolute top-full left-0 w-full bg-white px-8 py-4 space-y-4 border-t shadow z-40">
              {navItems.map((item) =>
                item.dropdown ? (
                  <div key={item.href}>
                    <button
                      className="w-full flex justify-between items-center text-gray-700"
                      onClick={() => setPracticeOpen(!practiceOpen)}
                    >
                      {item.label}
                      <ChevronDown
                        className={`${
                          practiceOpen ? "rotate-180" : ""
                        } transition`}
                      />
                    </button>

                    {/* MOBILE DROPDOWN */}
                    {practiceOpen && (
                      <div className="ml-4 mt-2 space-y-2">
                        <Link
                          href="/practice#personal-injury"
                          onClick={() => setMobileOpen(false)}
                          className="block text-gray-600"
                        >
                          Personal Injury
                        </Link>
                        <Link
                          href="/practice#criminal-defense"
                          onClick={() => setMobileOpen(false)}
                          className="block text-gray-600"
                        >
                          Criminal Defense
                        </Link>
                      </div>
                    )}
                  </div>
                ) : (
                  <Link
                    key={item.href}
                    href={item.href}
                    onClick={() => setMobileOpen(false)}
                    className={`block ${
                      pathname === item.href
                        ? "text-yellow-700"
                        : "text-gray-700"
                    }`}
                  >
                    {item.label}
                  </Link>
                )
              )}
            </div>
          )}
        </div>
      </header>

      {/* Spacer for sticky */}
      {isSticky && <div className="h-[80px]" />}
    </div>
  );
};

export default Navbar;
