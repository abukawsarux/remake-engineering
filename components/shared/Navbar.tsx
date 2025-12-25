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
  const [servicesOpen, setServicesOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setIsSticky(window.scrollY > 150);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const navItems = [
    { href: "/", label: "Home" },
    { href: "/", label: "About Us" },
    {
      href: "/",
      label: "Our Services",
      dropdown: true,
    },
    { href: "/", label: "Our Equipment" },
    { href: "/", label: "Our Projects" },
    { href: "/", label: "Gallery" },
    { href: "/", label: "Contact Us" },
  ];

  return (
    <div className="w-full relative">
      {/* TOP BAR */}
      <div className="w-full bg-white border-b">
        <div className="max-w-[1640px] mx-auto px-6 md:px-8 flex justify-between items-center text-sm py-2">
          <div className="flex items-center gap-3 text-gray-700 text-base">
            <IoIosCall className="text-[#FC860A]" />
            <span className="font-medium">+1 838-838-8323</span>
            <span className="hidden md:inline text-gray-500">
              Professional Survey & Engineering Services
            </span>
          </div>

          <Link
            href="/contact"
            className="bg-[#FC860A] text-white px-8 py-3 rounded-sm hover:bg-orange-600 transition text-base"
          >
            Get a Quote
          </Link>
        </div>
      </div>

      {/* MAIN NAVBAR */}
      <header
        className={`transition-all duration-500 ${
          isSticky
            ? "fixed top-0 left-0 right-0 bg-white/95 backdrop-blur shadow z-50"
            : "relative bg-white"
        }`}
      >
        <div className="max-w-[1640px] mx-auto px-6 md:px-8 py-4 flex justify-between items-center">
          {/* LOGO */}
          <Link href="/" className="flex items-center">
            <Image
              src="/images/logo.png"
              alt="Logo"
              width={1000}
              height={500}
              className="w-[170px] md:w-[200px] h-auto"
            />
          </Link>

          {/* DESKTOP MENU */}
          <nav className="hidden md:flex gap-8 font-medium text-gray-800 items-center">
            {navItems.map((item) =>
              item.dropdown ? (
                <div key={item.href} className="relative group">
                  <Link
                    href={item.href}
                    className={`flex items-center gap-1 hover:text-[#FC860A] ${
                      pathname === item.href ? "text-[#FC860A] underline" : ""
                    }`}
                  >
                    {item.label}
                    <ChevronDown size={16} />
                  </Link>

                  {/* DROPDOWN */}
                  <div className="absolute left-0 top-full mt-3 w-[240px] bg-white shadow-lg rounded-sm opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all z-50 py-2">
                    <Link
                      href="/services/rtk-survey"
                      className="block px-4 py-2 hover:bg-gray-100"
                    >
                      RTK Land Survey
                    </Link>
                    <Link
                      href="/services/digital-survey"
                      className="block px-4 py-2 hover:bg-gray-100"
                    >
                      Digital Land Survey
                    </Link>
                    <Link
                      href="/services/soil-test"
                      className="block px-4 py-2 hover:bg-gray-100"
                    >
                      Soil Test & Geotechnical
                    </Link>
                  </div>
                </div>
              ) : (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`hover:text-[#FC860A] transition ${
                    pathname === item.href ? "text-[#FC860A] underline" : ""
                  }`}
                >
                  {item.label}
                </Link>
              )
            )}
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
            {navItems.map((item) =>
              item.dropdown ? (
                <div key={item.href}>
                  <button
                    className="w-full flex justify-between items-center font-medium"
                    onClick={() => setServicesOpen(!servicesOpen)}
                  >
                    {item.label}
                    <ChevronDown
                      className={`transition ${
                        servicesOpen ? "rotate-180" : ""
                      }`}
                    />
                  </button>

                  {servicesOpen && (
                    <div className="ml-4 mt-2 space-y-2 text-gray-600">
                      <Link href="/services/rtk-survey">RTK Land Survey</Link>
                      <Link href="/services/digital-survey">
                        Digital Land Survey
                      </Link>
                      <Link href="/services/soil-test">
                        Soil Test & Geotechnical
                      </Link>
                    </div>
                  )}
                </div>
              ) : (
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
              )
            )}
          </div>
        )}
      </header>

      {/* Sticky Spacer */}
      {isSticky && <div className="h-[88px]" />}
    </div>
  );
};

export default Navbar;
