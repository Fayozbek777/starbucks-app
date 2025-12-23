"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import "./Intro.scss";

const leftSideVariants = {
  hidden: { opacity: 0, x: -60, scale: 0.94 },
  visible: {
    opacity: 1,
    x: 0,
    scale: 1,
    transition: {
      duration: 0.9,
      ease: [0.25, 0.1, 0.25, 1],
      staggerChildren: 0.14,
    },
  },
};

const rightSideVariants = {
  hidden: { opacity: 0, x: 60, scale: 0.94 },
  visible: {
    opacity: 1,
    x: 0,
    scale: 1,
    transition: { duration: 1, ease: [0.25, 0.1, 0.25, 1], delay: 0.25 },
  },
};

const childVariants = {
  hidden: { opacity: 0, y: 25 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7 } },
};

export default function Intro() {
  return (
    <section className="intro-section">
      <div className="container">
        <div className="intro-content">
          <motion.div
            className="intro-left"
            initial="hidden"
            animate="visible"
            variants={leftSideVariants}
          >
            <motion.h1 className="title" variants={childVariants}>
              New Cafe by <span className="highlight">StarBucks</span>
            </motion.h1>

            <motion.p className="description" variants={childVariants}>
              Have time to buy the most harmonious drinks in the new Starbucks
              coffee and don't forget about the discount!
            </motion.p>

            <motion.div className="buttons" variants={childVariants}>
              <button className="btn primary">Select a coffee</button>
              <button className="btn secondary">More</button>
            </motion.div>

            <motion.div className="stats" variants={childVariants}>
              <div className="stat-item">
                <div className="stat-value">
                  9k<span className="highlight">+</span>
                </div>
                <div className="stat-label">
                  Premium
                  <br />
                  Users
                </div>
              </div>

              <div className="stat-item">
                <div className="stat-value">
                  2k<span className="highlight">+</span>
                </div>
                <div className="stat-label">
                  Happy
                  <br />
                  Customers
                </div>
              </div>

              <div className="stat-item">
                <div className="stat-value">
                  28<span className="highlight">+</span>
                </div>
                <div className="stat-label">
                  Awards
                  <br />
                  Winning
                </div>
              </div>
            </motion.div>
          </motion.div>
          <motion.div
            className="intro-right"
            initial="hidden"
            animate="visible"
            variants={rightSideVariants}
          >
            <div className="image-wrapper">
              <div className="lines-bg">
                <Image
                  src="/images/lines-images.png"
                  alt="Decorative lines"
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="lines-image"
                />
              </div>
              <Image
                src="/images/coofe-image.png"
                alt="Starbucks new cafe coffee"
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                priority
                className="coffee-image"
              />
            </div>
          </motion.div>
        </div>
      </div>
      <div className="blur-circle blur-1" />
      <div className="blur-circle blur-2" />
      <div className="blur-circle blur-3" />
    </section>
  );
}
