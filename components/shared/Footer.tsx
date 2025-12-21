"use client";

import Image from "next/image";
import Link from "next/link";
import { FaMapMarkerAlt } from "react-icons/fa";
import {
  FaEnvelope,
  FaGlobe,
  FaPhone,
  FaYoutube,
  FaSquareXTwitter,
} from "react-icons/fa6";

import {
  FaFacebookF,
  FaLinkedinIn,
  FaInstagram,
  FaGoogle,
  FaBalanceScale,
  FaYelp,
  FaTiktok,
} from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-[#1D3446] py-14 text-white">
      <div className="max-w-[1640px] mx-auto px-6 md:px-10">
        {/* Main Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-14">
          {/* Column 1 - Logo + Info */}
          <div>
            <Image
              src="/images/footer-logo.png"
              alt="Logo"
              width={200}
              height={70}
              className="w-[180px] md:w-[240px]"
            />

            <p className="text-sm mt-4 leading-relaxed">
              Available 24 hours a day, <br /> 7 days a week.
            </p>

            {/* Social Icons */}
            {/* Social Icons */}
            <div className="flex gap-4 text-[#D4A017] text-lg mt-5">
              <Link
                href="https://www.facebook.com/mccullochlawtpa"
                aria-label="Facebook"
                target="_blank"
              >
                <FaFacebookF />
              </Link>

              <Link
                href="https://www.linkedin.com/company/mcculloch-law-p-a/"
                aria-label="LinkedIn"
                target="_blank"
              >
                <FaLinkedinIn />
              </Link>

              <Link
                href="https://www.instagram.com/mccullochlawtpa/"
                aria-label="Instagram"
                target="_blank"
              >
                <FaInstagram />
              </Link>

              {/* Avvo (no official icon in react-icons – using FaBalanceScale as the legal symbol) */}
              <Link href="#" aria-label="Avvo">
                <FaBalanceScale />
              </Link>

              {/* Yelp */}
              <Link
                href="https://www.yelp.com/biz/mcculloch-law-p-a-tampa-10?utm_campaign=www_business_share_popup&utm_medium=copy_link&utm_source=(direct)"
                aria-label="Yelp"
                target="_blank"
              >
                <FaYelp />
              </Link>

              <Link
                href="https://x.com/McCullochLawTPA"
                aria-label="Google My Business"
                target="_blank"
              >
                <FaSquareXTwitter />
              </Link>

              {/* TikTok */}
              <Link
                href="https://www.tiktok.com/@mcculllochlawtpa"
                aria-label="TikTok"
                target="_blank"
              >
                <FaTiktok />
              </Link>
            </div>
          </div>

          {/* Column 2 - Quick Links */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/" className="hover:text-[#D4A017]">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/about" className="hover:text-[#D4A017]">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/practice" className="hover:text-[#D4A017]">
                  Our Services
                </Link>
              </li>
              {/* <li>
                <Link href="/case-study" className="hover:text-[#D4A017]">
                  Case Study
                </Link>
              </li> */}
              <li>
                <Link href="/blogs" className="hover:text-[#D4A017]">
                  Our Blog
                </Link>
              </li>
              <li>
                <Link href="/about" className="hover:text-[#D4A017]">
                  Our Attorney
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3 - Services */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Services</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link
                  href="https://mccullochlawpa-website.vercel.app/practice/auto-accident"
                  className="hover:text-[#D4A017]"
                >
                  Auto Accidents
                </Link>
              </li>
              <li>
                <Link
                  href="https://mccullochlawpa-website.vercel.app/practice/slip-trip-fall"
                  className="hover:text-[#D4A017]"
                >
                  Slip and Fall
                </Link>
              </li>
              <li>
                <Link
                  href="https://mccullochlawpa-website.vercel.app/practice/dog-bites"
                  className="hover:text-[#D4A017]"
                >
                  Dog Bites
                </Link>
              </li>
              <li>
                <Link
                  href="https://mccullochlawpa-website.vercel.app/practice/drug-crimes"
                  className="hover:text-[#D4A017]"
                >
                  Drug Crimes
                </Link>
              </li>
              <li>
                <Link
                  href="https://mccullochlawpa-website.vercel.app/practice/dui"
                  className="hover:text-[#D4A017]"
                >
                  DUI
                </Link>
              </li>
              <li>
                <Link
                  href="https://mccullochlawpa-website.vercel.app/practice/domestic-violence"
                  className="hover:text-[#D4A017]"
                >
                  Domestic Violence
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 4 - Contact Info */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Contact Info</h3>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start gap-3">
                <FaMapMarkerAlt className="text-[#D4A017] mt-1" />
                <span>
                  238 East Davis Boulevard, Ste 202 <br />
                  Tampa, FL 33606
                </span>
              </li>

              <li className="flex items-center gap-3">
                <FaPhone className="text-[#D4A017]" />
                <Link href="tel:8134442817" className="hover:text-[#D4A017]">
                  (813) 444-2817
                </Link>
              </li>

              {/* <li className="flex items-center gap-3">
                <FaEnvelope className="text-[#D4A017]" />
                <Link
                  href="mailto:attorney@mcfloridalaw.com"
                  className="hover:text-[#D4A017]"
                >
                  attorney@mcfloridalaw.com
                </Link>
              </li> */}
              <li className="flex items-center gap-3">
                <FaEnvelope className="text-[#D4A017]" />
                <Link
                  href="mailto:attorney@mcfloridalaw.com"
                  className="hover:text-[#D4A017]"
                >
                  Drew@MCFloridaLaw.com
                </Link>
              </li>
              <li className="flex items-center gap-3">
                <FaEnvelope className="text-[#D4A017]" />
                <Link
                  href="mailto:attorney@mcfloridalaw.com"
                  className="hover:text-[#D4A017]"
                >
                  LsJones131@gmail.com
                </Link>
              </li>

              {/* <li className="flex items-center gap-3">
                <FaGlobe className="text-[#D4A017]" />
                <Link
                  href="https://mcfloridalaw.com"
                  target="_blank"
                  className="hover:text-[#D4A017]"
                >
                  mcfloridalaw.com
                </Link>
              </li> */}
            </ul>
          </div>
        </div>

        {/* Bottom Footer */}
        <div className="border-t border-gray-600 mt-12 pt-5 text-center text-sm">
          © 2025 McCulloch Law P.A. All Rights Reserved.
        </div>
      </div>
    </footer>
  );
}
