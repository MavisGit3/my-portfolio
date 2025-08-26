"use client";
import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, User } from "lucide-react";

import About from "@/src/components/about";
import Contact from "@/src/components/contact";
import Experience from "@/src/components/experience";
import Projects from "@/src/components/projects";
import Hero from "@/src/components/hero";
import Skills from "@/src/components/skills";
import { TypewriterEffect } from "@/src/components/typewriter";
import Footer from "@/src/components/footer";

const navItems = [
  { name: "Home", href: "/" },
  { name: "About", href: "#about" },
  { name: "Projects", href: "#projects" },
  { name: "Skills", href: "#skill" },
  { name: "Experience", href: "#experience" },
  { name: "Contact", href: "#contact" },
];

export default function Home() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const pathname = usePathname();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const scrollToSection = (
    e: React.MouseEvent<HTMLAnchorElement>,
    sectionId: string
  ) => {
    e.preventDefault();
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setIsMenuOpen(false);
    }
  };

  return (
    <main>
      {/* Navbar */}
      <div className="sticky top-0 z-50 bg-black/70 backdrop-blur-md border-b border-b-gray-900 h-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            {/* Logo */}
            <Link href="/" className="flex-shrink-0 flex items-center">
              <span className="flex text-xl font-serif gap-2 text-orange-400">
                <User className="flex" /> Mavis Ogodu Ayikpo
              </span>
            </Link>

            {/* Desktop Menu */}
            <div className="hidden sm:flex sm:space-x-8">
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={(e) => scrollToSection(e, item.href.substring(1))}
                  className={`inline-flex px-3.5 pt-5 border-b-2 text-sm font-medium h-full ${
                    pathname === item.href
                      ? "border-orange-200"
                      : "border-transparent text-white hover:border-orange-400 hover:text-orange-200 transition duration-300"
                  }`}
                >
                  {item.name}
                </Link>
              ))}
            </div>

            {/* Mobile menu button */}
            <div className="flex items-center sm:hidden h-10">
              <button
                type="button"
                className="inline-flex items-center justify-center p-1 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-gray-500 transition duration-300"
                onClick={toggleMenu}
              >
                {isMenuOpen ? (
                  <X className="block h-6 w-6" aria-hidden="true" />
                ) : (
                  <Menu className="block h-6 w-6" aria-hidden="true" />
                )}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile menu */}
        {isMenuOpen && (
          <div className="sm:hidden bg-black/80 backdrop-blur-md">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={(e) => scrollToSection(e, item.href.substring(1))}
                className={`block px-3 py-2 border-l-4 text-base font-medium ${
                  pathname === item.href
                    ? "  bg-black/80 backdrop-blur-md border-orange-200 text-gray-400"
                    : "border-transparent text-white hover:bg-gray-950 hover:border-gray-300 hover:text-gray-600 transition duration-300"
                }`}
              >
                {item.name}
              </Link>
            ))}
          </div>
        )}
      </div>
      
      {/* hero page */}
      <Hero /> 
      {/* TypeWriterEffect page */}
      <TypewriterEffect />
      {/* About page */}
      <About />
      {/* projects page */}
      <Projects />
      {/* skills page */}
      <Skills />
      {/* Experince page */}
      <Experience />
      {/* Contact page */}
      <Contact />
      {/* Footer page */}
      <Footer />
    </main>
  );
}
