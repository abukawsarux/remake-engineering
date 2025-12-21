"use client";
import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { memo, useEffect, useState } from "react";

import Reveal from "../motion/Reveal";
import {
  FaFacebookF,
  FaLinkedinIn,
  FaInstagram,
  FaGoogle,
  FaBalanceScale,
  FaYelp,
  FaTiktok,
} from "react-icons/fa";
import Swal from "sweetalert2";
import { send } from "emailjs-com";

type ContactFormState = {
  name: string;
  email: string;
  phone: string;
  date: string;
  message: string;
};

type ContactFormErrors = {
  name?: string;
  email?: string;
  phone?: string;
  date?: string;
  message?: string;
};

const ContactForm = () => {
  const [showTitleOne, setShowTitleOne] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setShowTitleOne((prev) => !prev);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  const [emailForm, setEmailForm] = useState<ContactFormState>({
    name: "",
    email: "",
    phone: "",
    date: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);
  const [formErrors, setFormErrors] = useState<ContactFormErrors>({});

  const validate = (values: ContactFormState): ContactFormErrors => {
    const errors: ContactFormErrors = {};
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;

    if (!values.name) errors.name = "Name is required!";
    if (!values.email) errors.email = "Email is required!";
    else if (!regex.test(values.email)) errors.email = "Invalid email format!";
    if (!values.phone) errors.phone = "Phone number is required!";
    if (!values.date) errors.date = "Date is required!";
    if (!values.message) errors.message = "Message is required!";

    return errors;
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);

    const errors = validate(emailForm);
    setFormErrors(errors);

    if (Object.keys(errors).length === 0) {
      send(
        "service_6x5cpjm",
        "template_g8p45zg",
        emailForm,
        "hs3WVDN7AYB4zTkhu"
      )
        .then(() => {
          setLoading(false);
          Swal.fire({
            icon: "success",
            text: "Thank you for reaching out. We will respond shortly.",
            confirmButtonColor: "#131b2a",
          }).then(() => {
            setEmailForm({
              name: "",
              email: "",
              phone: "",
              date: "",
              message: "",
            });
          });
        })
        .catch((err) => {
          console.error("Email error:", err);
          setLoading(false);
          Swal.fire({
            icon: "error",
            text: "Something went wrong! Please try again.",
          });
        });
    } else {
      setLoading(false);
    }
  };

  const socialLinks = [
    {
      icon: FaFacebookF,
      url: "https://www.facebook.com/mccullochlawtpa",
    },
    {
      icon: FaLinkedinIn,
      url: "https://www.linkedin.com/company/mcculloch-law-p-a/",
    },
    {
      icon: FaInstagram,
      url: "https://www.instagram.com/mccullochlawtpa/",
    },
    {
      icon: FaBalanceScale,
      url: "",
    },
    {
      icon: FaYelp,
      url: "https://www.yelp.com/biz/mcculloch-law-p-a-tampa-10?utm_campaign=www_business_share_popup&utm_medium=copy_link&utm_source=(direct)",
    },
    // {
    //   icon: FaGoogle,
    //   url: "https://g.page/yourgooglebusiness",
    // },
    {
      icon: FaTiktok,
      url: "https://www.tiktok.com/@mcculllochlawtpa",
    },
  ];

  return (
    <div>
      <div className="relative w-full flex items-center justify-center bg-[#7F8880]">
        <div className="max-w-[1640px] mx-auto px-8 w-full py-10 lg:py-20">
          <div className="relative">
            <div className="w-full flex flex-col md:flex-row items-center justify-evenly gap-6">
              {/* Left Text */}
              <Reveal tag="h2" y={100} opacityFrom={0} duration={3}>
                <div className="flex flex-col gap-4 max-w-xl w-full rounded-md">
                  <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold text-white">
                    Contact Us Today. Get in Touch With Drew, Esq.
                  </h1>

                  <p className="text-base text-white">
                    Reach out now for trusted legal advice. Our attorneys are
                    ready to protect your rights.
                  </p>

                  <div className="mt-5">
                    <h3 className="text-xl md:text-2xl font-semibold text-white">
                      Phone Number <br />
                      <Link href="#">(813) 444-2817</Link>
                    </h3>
                  </div>

                  <div className="mt-5">
                    <h3 className="text-xl md:text-2xl font-semibold text-white">
                      Our Social Links
                    </h3>
                    <div className="text-white flex gap-2 mt-4">
                      {socialLinks.map(({ icon: Icon, url }, index) => (
                        <Link
                          href={url}
                          key={index}
                          target="_blank"
                          className="w-10 h-10 rounded-full bg-[#BA8E2D] flex items-center justify-center"
                        >
                          <Icon />
                        </Link>
                      ))}
                    </div>
                  </div>
                </div>
              </Reveal>

              {/* Right Form */}
              <Reveal tag="h2" y={100} opacityFrom={0} duration={3}>
                <div className="w-full bg-[#1A1A1A] p-10 rounded-md">
                  <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">
                    Request a Flexible Schedule
                  </h2>

                  <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
                    {/* Name & Email */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <input
                          type="text"
                          name="name"
                          value={emailForm.name}
                          onChange={(e) =>
                            setEmailForm({
                              ...emailForm,
                              name: e.target.value,
                            })
                          }
                          placeholder="Full name"
                          className="w-full px-4 py-3 rounded-md bg-white text-black outline-none"
                        />
                        {formErrors.name && (
                          <span className="text-red-500 text-sm">
                            {formErrors.name}
                          </span>
                        )}
                      </div>

                      <div>
                        <input
                          type="email"
                          name="email"
                          value={emailForm.email}
                          onChange={(e) =>
                            setEmailForm({
                              ...emailForm,
                              email: e.target.value,
                            })
                          }
                          placeholder="Email address"
                          className="w-full px-4 py-3 rounded-md bg-white text-black outline-none"
                        />
                        {formErrors.email && (
                          <span className="text-red-500 text-sm">
                            {formErrors.email}
                          </span>
                        )}
                      </div>
                    </div>

                    {/* Phone & Date */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <input
                          type="tel"
                          name="phone"
                          value={emailForm.phone}
                          onChange={(e) =>
                            setEmailForm({
                              ...emailForm,
                              phone: e.target.value,
                            })
                          }
                          placeholder="Phone number"
                          className="w-full px-4 py-3 rounded-md bg-white text-black outline-none"
                        />
                        {formErrors.phone && (
                          <span className="text-red-500 text-sm">
                            {formErrors.phone}
                          </span>
                        )}
                      </div>

                      <div>
                        <input
                          type="date"
                          name="date"
                          value={emailForm.date}
                          onChange={(e) =>
                            setEmailForm({
                              ...emailForm,
                              date: e.target.value,
                            })
                          }
                          className="w-full px-4 py-3 rounded-md bg-white text-black outline-none"
                        />
                        {formErrors.date && (
                          <span className="text-red-500 text-sm">
                            {formErrors.date}
                          </span>
                        )}
                      </div>
                    </div>

                    {/* Message */}
                    <div>
                      <textarea
                        name="message"
                        value={emailForm.message}
                        onChange={(e) =>
                          setEmailForm({
                            ...emailForm,
                            message: e.target.value,
                          })
                        }
                        placeholder="Describe your case or ask a question"
                        rows={4}
                        className="w-full px-4 py-3 rounded-md bg-white text-black outline-none"
                      ></textarea>
                      {formErrors.message && (
                        <span className="text-red-500 text-sm">
                          {formErrors.message}
                        </span>
                      )}
                    </div>

                    {/* Submit Button */}
                    <button
                      type="submit"
                      disabled={loading}
                      className={`w-full bg-[#BA8E2D] text-white font-semibold py-4 rounded-md ${
                        loading
                          ? "opacity-50 cursor-not-allowed"
                          : "hover:bg-yellow-400"
                      }`}
                    >
                      {loading ? "Sending..." : "Book An Appointment"}
                    </button>
                  </form>
                </div>
              </Reveal>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default memo(ContactForm);
