"use client";

import React, { useState } from "react";
import { HoveredLink, Menu, MenuItem, ProductItem } from "./navbar-menu";
import { cn } from "../../lib/utils";

export function NavbarDemo() {
  return (
    <div className="relative w-full flex items-center justify-center">
      <Navbar className="top-2" />

    </div>
  );
}

export function Navbar({ className }: { className?: string }) {
  const [active, setActive] = useState<string | null>(null);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
    setActive(null); // Close any open dropdowns when toggling mobile menu
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
    setActive(null);
  };

  return (
    <div
      className={cn("fixed top-0 inset-x-0 z-50 bg-white/80 backdrop-blur-md border-b border-gray-200", className)}
    >
      {/* Desktop Layout */}
      <div className="hidden lg:flex max-w-7xl mx-auto items-center justify-between px-4 py-4">
        
        {/* Logo on the right */}
        <div className="w-10 h-10">
          <img
            src="/logo-placeholder.png"
            alt="Logo"
            className="w-full h-full object-contain"
          />
        </div>

        {/* Centered Menu */}
        <Menu setActive={setActive}>
          <MenuItem setActive={() => setActive(null)} active={active} item="الرئيسية">
            {null}
          </MenuItem>
          <MenuItem setActive={() => setActive(null)} active={active} item="من نحن">
            {null}
          </MenuItem>
          <MenuItem setActive={setActive} active={active} item="الخدمات">
            <div className="text-sm grid grid-cols-2 gap-10 p-4 max-w-2xl">
              <ProductItem
                title="الكهرباء الإنشائية"
                href="/services/electrical"
                src="https://images.unsplash.com/photo-1618522284999-3430d5f5f2da?w=400&h=200&fit=crop&crop=center"
                description="نبنلاب نمبلن يسمنبمت سينب بت بتمسيبتز منيمتب سينبيتسم."
              />
              <ProductItem
                title="الميكانيكا"
                href="/services/mechanical"
                src="https://images.unsplash.com/photo-1581092335397-9583eb92d232?w=400&h=200&fit=crop&crop=center"
                description="نبنلاب نمبلن يسمنبمت سينب بت بتمسيبتز منيمتب سينبيتسم."
              />
              <ProductItem
                title="مكافحة الحريق"
                href="/services/fire-safety"
                src="https://images.unsplash.com/photo-1760139546356-0a90390364d3?w=400&h=200&fit=crop&crop=center"
                description="نبنلاب نمبلن يسمنبمت سينب بت بتمسيبتز منيمتب سينبيتسم."
              />
              <ProductItem
                title="السباكة والصرف"
                href="/services/plumbing"
                src="https://images.unsplash.com/photo-1639600993675-2281b2c939f0?w=400&h=200&fit=crop&crop=center"
                description="نبنلاب نمبلن يسمنبمت سينب بت بتمسيبتز منيمتب سينبيتسم."
              />
              <ProductItem
                title="المصاعد"
                href="/services/elevators"
                src="https://images.unsplash.com/photo-1566714865935-725933a78973?w=400&h=200&fit=crop&crop=center"
                description="نبنلاب نمبلن يسمنبمت سينب بت بتمسيبتز منيمتب سينبيتسم."
              />
              <ProductItem
                title="البيوت الذكية"
                href="/services/smart-homes"
                src="https://images.unsplash.com/photo-1706774609219-56c61f8b3c51?w=400&h=200&fit=crop&crop=center"
                description="نبنلاب نمبلن يسمنبمت سينب بت بتمسيبتز منيمتب سينبيتسم."
              />
            </div>
          </MenuItem>
          <MenuItem setActive={setActive} active={active} item="اتصل بنا">
            <div className="flex flex-col gap-4 text-sm">
              <HoveredLink href="/deals">العروض</HoveredLink>
              <HoveredLink href="/consultation">الاستشارات</HoveredLink>
            </div>
          </MenuItem>
        </Menu>


        {/* Action Button on the left */}
        <button className="bg-white text-black border border-black rounded-full px-4 py-2 transition-colors duration-200 hover:bg-black hover:text-white text-sm font-medium">
          احصل على عرض
        </button>
      </div>

      {/* Mobile Layout */}
      <div className="lg:hidden">
        <div className="flex items-center justify-between px-4 py-4">
          {/* Mobile Logo */}
          <div className="w-8 h-8">
            <img
              src="/logo-placeholder.png"
              alt="Logo"
              className="w-full h-full object-contain"
            />
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={toggleMobileMenu}
            className="p-2 rounded-md text-gray-700 hover:text-gray-900 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500"
            aria-expanded="false"
          >
            <span className="sr-only">افتح القائمة الرئيسية</span>
            <svg
              className={cn("h-6 w-6", isMobileMenuOpen ? "hidden" : "block")}
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              aria-hidden="true"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
            <svg
              className={cn("h-6 w-6", isMobileMenuOpen ? "block" : "hidden")}
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              aria-hidden="true"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        {/* Mobile Menu */}
        <div className={cn("lg:hidden", isMobileMenuOpen ? "block" : "hidden")}>
          <div className="px-2 pt-2 pb-3 space-y-1 bg-white border-t border-gray-200">
            {/* Mobile Action Button */}
            <div className="px-3 py-2">
              <button className="w-full bg-indigo-600 text-white rounded-full px-4 py-2 transition-colors duration-200 hover:bg-indigo-700 text-sm font-medium">
                احصل على عرض
              </button>
            </div>

            {/* Mobile Menu Items */}
            <a
              href="/"
              className="block px-3 py-2 text-base font-medium text-gray-900 hover:text-indigo-600 hover:bg-gray-50 rounded-md"
              onClick={closeMobileMenu}
            >
              الرئيسية
            </a>
            <a
              href="/about"
              className="block px-3 py-2 text-base font-medium text-gray-900 hover:text-indigo-600 hover:bg-gray-50 rounded-md"
              onClick={closeMobileMenu}
            >
              من نحن
            </a>

            {/* Mobile Services Dropdown */}
            <div className="relative">
              <button
                onClick={() => setActive(active === "services" ? null : "services")}
                className="w-full text-left px-3 py-2 text-base font-medium text-gray-900 hover:text-indigo-600 hover:bg-gray-50 rounded-md flex items-center justify-between"
              >
                الخدمات
                <svg
                  className={cn("h-5 w-5 transition-transform duration-200", active === "services" ? "rotate-180" : "")}
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>

              <div className={cn("mt-2 space-y-2", active === "services" ? "block" : "hidden")}>
                <a href="/services/electrical" className="block px-6 py-2 text-sm text-gray-700 hover:text-indigo-600 hover:bg-gray-50 rounded-md" onClick={closeMobileMenu}>
                  الكهرباء الإنشائية
                </a>
                <a href="/services/mechanical" className="block px-6 py-2 text-sm text-gray-700 hover:text-indigo-600 hover:bg-gray-50 rounded-md" onClick={closeMobileMenu}>
                  الميكانيكا
                </a>
                <a href="/services/fire-safety" className="block px-6 py-2 text-sm text-gray-700 hover:text-indigo-600 hover:bg-gray-50 rounded-md" onClick={closeMobileMenu}>
                  مكافحة الحريق
                </a>
                <a href="/services/plumbing" className="block px-6 py-2 text-sm text-gray-700 hover:text-indigo-600 hover:bg-gray-50 rounded-md" onClick={closeMobileMenu}>
                  السباكة والصرف
                </a>
                <a href="/services/elevators" className="block px-6 py-2 text-sm text-gray-700 hover:text-indigo-600 hover:bg-gray-50 rounded-md" onClick={closeMobileMenu}>
                  المصاعد
                </a>
                <a href="/services/smart-homes" className="block px-6 py-2 text-sm text-gray-700 hover:text-indigo-600 hover:bg-gray-50 rounded-md" onClick={closeMobileMenu}>
                  البيوت الذكية
                </a>
              </div>
            </div>

            {/* Mobile Contact Dropdown */}
            <div className="relative">
              <button
                onClick={() => setActive(active === "contact" ? null : "contact")}
                className="w-full text-left px-3 py-2 text-base font-medium text-gray-900 hover:text-indigo-600 hover:bg-gray-50 rounded-md flex items-center justify-between"
              >
                اتصل بنا
                <svg
                  className={cn("h-5 w-5 transition-transform duration-200", active === "contact" ? "rotate-180" : "")}
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>

              <div className={cn("mt-2 space-y-2", active === "contact" ? "block" : "hidden")}>
                <a href="/deals" className="block px-6 py-2 text-sm text-gray-700 hover:text-indigo-600 hover:bg-gray-50 rounded-md" onClick={closeMobileMenu}>
                  العروض
                </a>
                <a href="/consultation" className="block px-6 py-2 text-sm text-gray-700 hover:text-indigo-600 hover:bg-gray-50 rounded-md" onClick={closeMobileMenu}>
                  الاستشارات
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}


