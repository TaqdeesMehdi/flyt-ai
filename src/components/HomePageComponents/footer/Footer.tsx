import React from "react";
import { MessageCircle } from "lucide-react";
import {
  FaFacebook,
  FaInstagram,
  FaLinkedin,
  FaTwitter,
  FaYoutube,
} from "react-icons/fa";
import Link from "next/link";
import Image from "next/image";
import { Company } from "./Company";
import { Product } from "./Product";
import { Legal } from "./Legal";
import { Countries } from "./Countries";

export const Footer = () => {
  return (
    <footer className="bg-white border-t border-gray-100 py-12 px-4">
      <div className="max-w-6xl mx-auto">
        {/* main footer content the grid column functionality */}
        <div className="grid grid-cols-1 md:grid-cols-5 gap-8 mb-8">
          <div className="md:col-span-1">
            <Image
              src="/logo.svg"
              alt="LOGO"
              width={60}
              height={60}
              className="text-white font-bold text-sm"
            />
            <p className="text-sm text-gray-600">Your AI travel agent.</p>
          </div>
          <Company />
          <Product />
          <Legal />
          <Countries />
        </div>

        {/* Last ending part of the footer */}
        <div className="flex flex-col md:flex-row justify-between items-center pt-8 border-t border-gray-100">
          <div className="text-sm text-gray-500 mb-4 md:mb-0">
            © 2025 All right reserved by Flyt AI
          </div>

          {/* social buttons/icons */}
          <div className="flex items-center space-x-3">
            <Link
              href="#"
              className="w-8 h-8 bg-teal-500 rounded-full flex items-center justify-center text-white hover:bg-teal-600 transition-colors"
            >
              <FaFacebook size={16} />
            </Link>
            <Link
              href="#"
              className="w-8 h-8 bg-teal-500 rounded-full flex items-center justify-center text-white hover:bg-teal-600 transition-colors"
            >
              <FaInstagram size={16} />
            </Link>
            <Link
              href="#"
              className="w-8 h-8 bg-teal-500 rounded-full flex items-center justify-center text-white hover:bg-teal-600 transition-colors"
            >
              <FaLinkedin size={16} />
            </Link>
            <Link
              href="#"
              className="w-8 h-8 bg-teal-500 rounded-full flex items-center justify-center text-white hover:bg-teal-600 transition-colors"
            >
              <FaTwitter size={16} />
            </Link>
            <Link
              href="#"
              className="w-8 h-8 bg-teal-500 rounded-full flex items-center justify-center text-white hover:bg-teal-600 transition-colors"
            >
              <FaYoutube size={16} />
            </Link>
            <Link
              href="#"
              className="w-8 h-8 bg-teal-500 rounded-full flex items-center justify-center text-white hover:bg-teal-600 transition-colors"
            >
              <MessageCircle size={16} />
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};
