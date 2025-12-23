"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import AOS from "aos";
import "./Navbar.scss";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [hasOpenedOnce, setHasOpenedOnce] = useState(false);

  useEffect(() => {
    if (isOpen && !hasOpenedOnce) {
      setHasOpenedOnce(true);
    }
    AOS.init({
      duration: 700,
      once: true,
      easing: "ease-out",
    });
  }, [isOpen, hasOpenedOnce]);

  const toggleMenu = () => setIsOpen(!isOpen);
  const closeMenu = () => setIsOpen(false);

  const menuVariants = {
    initial: { x: "100%" },
    animate: { x: 0, transition: { duration: 0.45, ease: [0.4, 0, 0.2, 1] } },
    exit: { x: "100%", transition: { duration: 0.35, ease: "easeInOut" } },
  };

  return (
    <nav className={`navbar ${isOpen ? "menu-open" : ""}`}>
      <div className="nav-container">
        <div className="logo">
          <Link href="/" onClick={closeMenu}>
            <Image
              src="/images/logo-image.png"
              width={240}
              height={45}
              alt="Logo"
              priority
            />
          </Link>
        </div>
        <div className="nav-links">
          <Link
            href="/"
            className="nav-item"
            data-aos="fade-down"
            data-aos-delay="100"
          >
            Home
          </Link>
          <Link
            href="#"
            className="nav-item"
            data-aos="fade-down"
            data-aos-delay="200"
          >
            Select
          </Link>
          <Link
            href="#"
            className="nav-item"
            data-aos="fade-down"
            data-aos-delay="300"
          >
            Shop
          </Link>
          <Link
            href="#"
            className="nav-item"
            data-aos="fade-down"
            data-aos-delay="400"
            id="admin-panel"
          >
            Admin
          </Link>
        </div>

        <button
          className={`burger ${isOpen ? "active" : ""}`}
          onClick={toggleMenu}
          aria-label="Toggle menu"
        >
          <span />
          <span />
          <span />
        </button>
      </div>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="mobile-menu"
            variants={menuVariants}
            initial={hasOpenedOnce ? false : "initial"}
            animate="animate"
            exit="exit"
          >
            <div className="mobile-menu-content">
              <Link
                href="/"
                className="mobile-item"
                onClick={closeMenu}
                data-aos="fade-up"
                data-aos-delay="100"
              >
                Home
              </Link>
              <Link
                href="#"
                className="mobile-item"
                onClick={closeMenu}
                data-aos="fade-up"
                data-aos-delay="200"
              >
                Select
              </Link>
              <Link
                href="#"
                className="mobile-item"
                onClick={closeMenu}
                data-aos="fade-up"
                data-aos-delay="300"
              >
                Shop
              </Link>
              <Link
                href="#"
                className="mobile-item"
                id="admin-panel"
                onClick={closeMenu}
                data-aos="fade-up"
                data-aos-delay="400"
              >
                Admin
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
