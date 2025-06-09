"use client";

import { useState } from "react";
import Link from "next/link";
import {
  Menu,
  Recycle,
  Map,
  FastForward,
  X,
  Home,
  ClipboardCheck,
  CreditCard,
  Calendar,
} from "lucide-react";

import clsx from "clsx";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <nav className="bg-gray-800 p-4">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        {/* Logo */}
        <Link
          href="/"
          className="text-orange-500 text-xl font-bold flex items-center gap-2">
          <Home className="w-6 h-6 text-orange-500" /> My Website
        </Link>

        {/* Mobile Menu Toggle */}
        <button
          className="text-orange-500 md:hidden"
          onClick={() => setOpen(!open)}>
          {open ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>

        {/* Navigation Links */}
        <ul
          style={{ display: "flex", flexWrap: "nowrap", gap: "6px" }}
          className={clsx(
            "md:flex gap-6 absolute md:relative bg-gray-800 md:bg-transparent top-16 left-0 w-full md:w-auto p-4 md:p-0 md:flex-row flex-col transition-all duration-300",
            open ? "block" : "hidden md:block"
          )}>
          <li>
            <Link
              href="/profile"
              className="bg-slate-700 p-2 rounded text-orange-500 flex items-center gap-2 hover:bg-slate-600">
              <Map className="w-5 h-5 text-orange-500" /> Postcode
            </Link>
          </li>
          <li>
            <Link
              href="/profile"
              className="bg-slate-700 p-2 rounded text-orange-500 flex items-center gap-2 hover:bg-slate-600">
              <Recycle className="w-5 h-5 text-orange-500" /> Waste Type
            </Link>
          </li>
          <li>
            <Link
              href="/settings"
              className="bg-slate-700 p-2 rounded text-orange-500 flex items-center gap-2 hover:bg-slate-600">
              <FastForward className="w-5 h-5 text-orange-500" /> Select Skip
            </Link>
          </li>
          <li>
            <Link
              href="/settings"
              className="bg-slate-700 p-2 rounded text-orange-500 flex items-center gap-2 hover:bg-slate-600">
              <ClipboardCheck className="w-5 h-5 text-orange-500" /> Permit
              Check
            </Link>
          </li>
          <li>
            <Link
              href="/settings"
              className="bg-slate-700 p-2 rounded text-orange-500 flex items-center gap-2 hover:bg-slate-600">
              <Calendar className="w-5 h-5 text-orange-500" /> Choose Date
            </Link>
          </li>
          <li>
            <Link
              href="/settings"
              className="bg-slate-700 p-2 rounded text-orange-500 flex items-center gap-2 hover:bg-slate-600">
              <CreditCard className="w-5 h-5 text-orange-500" /> Payment
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
