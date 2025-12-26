"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import "./Event.scss";

const cardVariants = {
  hidden: { opacity: 0, y: 60, scale: 0.95 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.8,
      ease: "easeOut",
    },
  },
};

export default function Event() {
  const events = [
    {
      image: "/images/news-image1.png",
      title: "TWO COFFEE FOR 1 PRICE",
      buttonText: "More",
    },
    {
      image: "/images/news-image2.png",
      title: "TWO COFFEE FOR 1 PRICE",
      buttonText: "More",
    },
    {
      image: "/images/news-image3.png",
      title: "SUMMER SPECIAL OFFER",
      buttonText: "More",
    },
    {
      image: "/images/news-image4.png",
      title: "WEEKEND DOUBLE POINTS",
      buttonText: "More",
    },
    {
      image: "/images/news-image5.png",
      title: "NEW MENU LAUNCH",
      buttonText: "More",
    },
  ];

  return (
    <section className="event-section">
      <div className="container">
        <motion.div
          className="event-header"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <h1 className="title">
            Our New <span className="highlight">Events</span>
          </h1>

          <p className="description">
            Only in 2021 we have made more than 100,000 orders for you, your
            loved ones, all of you, and in 2022 we are ready to destroy the
            market
          </p>
        </motion.div>
        <div className="events-grid">
          {events.map((event, index) => (
            <motion.div
              key={index}
              className="event-card"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              variants={cardVariants}
              transition={{ delay: index * 0.15 }}
              whileHover={{ scale: 1.04, y: -12 }}
            >
              <Image
                src={event.image}
                alt={event.title}
                fill
                sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                className="event-image"
              />
              <div className="event-overlay">
                <h3 className="event-title">{event.title}</h3>
                <button className="event-btn">{event.buttonText}</button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
