"use client";

import { useState } from "react";

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 flex h-[70px] items-center justify-between border-b border-gray-200 bg-surface-light/90 px-6 backdrop-blur-md dark:border-gray-800 dark:bg-surface-dark/90 md:px-10 lg:px-40">
      <div className="flex items-center gap-3 text-text-main dark:text-white">
        <div className="flex size-8 items-center justify-center rounded-lg bg-primary/10 text-primary dark:bg-primary/20">
          <span className="material-symbols-outlined text-[20px]">smart_toy</span>
        </div>
        <h2 className="font-display text-2xl font-bold tracking-tight">Mostafa.AI</h2>
      </div>

      <button
        onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        className="flex h-10 w-10 items-center justify-center rounded-full text-text-main hover:bg-gray-100 dark:text-white dark:hover:bg-gray-800 md:hidden"
      >
        <span className="material-symbols-outlined">menu</span>
      </button>

      {/* Desktop Menu */}
      <nav className="hidden gap-8 md:flex">
        <a className="text-xl font-medium text-text-main hover:text-primary dark:text-gray-300 dark:hover:text-primary" href="#work">
          Work
        </a>
        <a className="text-xl font-medium text-text-main hover:text-primary dark:text-gray-300 dark:hover:text-primary" href="#skills">
          Skills
        </a>
        <a className="text-xl font-medium text-text-main hover:text-primary dark:text-gray-300 dark:hover:text-primary" href="#about">
          About
        </a>
      </nav>

      <div className="hidden md:block">
        <a href="#contact" className="flex h-10 items-center justify-center rounded-xl bg-primary px-5 text-base font-bold text-white transition hover:bg-blue-700">
          Contact Me
        </a>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="absolute left-0 right-0 top-[70px] bg-surface-light dark:bg-surface-dark border-b border-gray-200 dark:border-gray-800 md:hidden">
          <nav className="flex flex-col gap-4 p-6">
            <a className="text-xl font-medium text-text-main hover:text-primary dark:text-gray-300 dark:hover:text-primary" href="#work">
              Work
            </a>
            <a className="text-base font-medium text-text-main hover:text-primary dark:text-gray-300 dark:hover:text-primary" href="#skills">
              Skills
            </a>
            <a className="text-base font-medium text-text-main hover:text-primary dark:text-gray-300 dark:hover:text-primary" href="#about">
              About
            </a>
            <a href="#contact" className="flex h-10 items-center justify-center rounded-xl bg-primary px-9 text-base font-bold text-white transition hover:bg-blue-700">
              Contact Me
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}
