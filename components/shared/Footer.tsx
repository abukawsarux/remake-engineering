"use client";

import Image from "next/image";
import Link from "next/link";
import { FaMapMarkerAlt, FaPhone } from "react-icons/fa";
import { FaFacebookF, FaLinkedinIn, FaInstagram } from "react-icons/fa6";

export default function Footer() {
  return (
    <footer className="bg-white py-14 text-gray-700 border-t">
      <div className="max-w-[1640px] mx-auto px-6 md:px-10">
        {/* Main Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-14">
          {/* Column 1 - Logo + Info */}
          <div>
            <Image
              src="/images/logo.png"
              alt="Company Logo"
              width={200}
              height={70}
              className="w-[180px] md:w-[200px]"
            />

            <p className="text-sm mt-4 leading-relaxed">
              Professional Digital Land Survey & <br />
              Soil Testing Services Across Bangladesh.
            </p>

            {/* Social Icons */}
            <div className="flex gap-4 text-primary text-lg mt-5">
              <Link href="#" aria-label="Facebook">
                <FaFacebookF />
              </Link>
              <Link href="#" aria-label="LinkedIn">
                <FaLinkedinIn />
              </Link>
              <Link href="#" aria-label="Instagram">
                <FaInstagram />
              </Link>
            </div>
          </div>

          {/* Column 2 - Quick Links */}
          <div>
            <h3 className="font-semibold text-lg mb-4 text-black">
              Quick Links
            </h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/" className="hover:text-primary">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/about" className="hover:text-primary">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/services" className="hover:text-primary">
                  Our Services
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-primary">
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3 - Services */}
          <div>
            <h3 className="font-semibold text-lg mb-4 text-black">Services</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link
                  href="/services/rtk-land-survey"
                  className="hover:text-primary"
                >
                  RTK Land Survey
                </Link>
              </li>
              <li>
                <Link
                  href="/services/digital-land-survey"
                  className="hover:text-primary"
                >
                  Digital Land Survey
                </Link>
              </li>
              <li>
                <Link
                  href="/services/topographic-survey"
                  className="hover:text-primary"
                >
                  Topographic Survey
                </Link>
              </li>
              <li>
                <Link href="/services/soil-test" className="hover:text-primary">
                  Soil Test & Geotechnical
                </Link>
              </li>
              <li>
                <Link
                  href="/services/construction-layout"
                  className="hover:text-primary"
                >
                  Construction Layout Survey
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 4 - Contact Info */}
          <div>
            <h3 className="font-semibold text-lg mb-4 text-black">
              Contact Info
            </h3>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start gap-3">
                <FaMapMarkerAlt className="text-primary mt-1" />
                <span>
                  Dhaka, Bangladesh <br />
                  Serving Nationwide
                </span>
              </li>

              <li className="flex items-center gap-3">
                <FaPhone className="text-primary" />
                <Link href="tel:+8801234567890" className="hover:text-primary">
                  +880 1234 567 890
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Footer */}
        <div className="border-t border-gray-200 mt-12 pt-5 text-center text-sm text-gray-500">
          © {new Date().getFullYear()} Digital Land Survey & Soil Test Agency.
          All Rights Reserved.
        </div>
      </div>
    </footer>
  );
}
