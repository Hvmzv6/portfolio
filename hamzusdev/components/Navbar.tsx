"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Projects", path: "/projects" },
    { name: "Contact", path: "/contact" },
  ];

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-background/85 backdrop-blur-md border-b border-border transition-all duration-300">
      <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
        {/* Branding Logo */}
        <Link
          href="/"
          className="font-mono text-sm font-bold tracking-tighter hover:text-accent transition-colors"
        >
          &lt;Hamza Safsafi /&gt;
        </Link>

        {/* Desktop Nav Links */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => {
            const isActive = pathname === link.path;
            return (
              <Link
                key={link.path}
                href={link.path}
                className={`relative py-1 text-sm font-medium transition-colors hover:text-foreground ${isActive ? "text-foreground" : "text-muted-foreground"
                  }`}
              >
                {link.name}
                {isActive && (
                  <span className="absolute bottom-0 left-0 w-full h-0.5 bg-accent rounded-full" />
                )}
              </Link>
            );
          })}
        </div>

        {/* Mobile Hamburger toggle */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden p-2 text-foreground focus:outline-none"
          aria-label="Toggle Navigation Menu"
        >
          <div className="w-6 h-5 relative flex flex-col justify-between">
            <span
              className={`w-full h-0.5 bg-current rounded-full transition-all duration-300 origin-left ${isOpen ? "rotate-45 translate-x-1" : ""
                }`}
            />
            <span
              className={`w-full h-0.5 bg-current rounded-full transition-all duration-300 ${isOpen ? "opacity-0" : "opacity-100"
                }`}
            />
            <span
              className={`w-full h-0.5 bg-current rounded-full transition-all duration-300 origin-left ${isOpen ? "-rotate-45 translate-x-1" : ""
                }`}
            />
          </div>
        </button>
      </div>

      {/* Mobile Drawer menu */}
      <div
        className={`md:hidden absolute top-16 left-0 w-full bg-background/95 backdrop-blur-lg border-b border-border transition-all duration-300 ease-in-out origin-top ${isOpen ? "opacity-100 scale-y-100 h-auto visible" : "opacity-0 scale-y-95 h-0 invisible"
          }`}
      >
        <div className="px-6 py-8 flex flex-col gap-6">
          {navLinks.map((link) => {
            const isActive = pathname === link.path;
            return (
              <Link
                key={link.path}
                href={link.path}
                onClick={() => setIsOpen(false)}
                className={`text-lg font-medium transition-colors hover:text-foreground ${isActive ? "text-accent pl-2 border-l-2 border-accent" : "text-muted-foreground"
                  }`}
              >
                {link.name}
              </Link>
            );
          })}
        </div>
      </div>
    </nav>
  );
}
