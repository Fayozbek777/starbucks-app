"use client";

import Image from "next/image";
import "./benefit.scss";

export default function Benefit() {
  const benefits = [
    {
      icon: "/images/hearth-image.png",
      title: "Tasty",
      text: "We have the most delicious coffee",
    },
    {
      icon: "/images/rocket-image.png",
      title: "Fast",
      text: "Our cafe will serve you quickly",
    },
    {
      icon: "/images/money-image.png",
      title: "Available",
      text: "Cafe will serve at the most pleasant prices",
    },
  ];

  return (
    <section className="benefit-section">
      <div className="container">
        <div className="benefit-card">
          <div className="discount-badge">
            <Image
              src="/images/discount-image.png"
              alt="Discount"
              width={220}
              height={220}
              className="discount-img"
              priority
            />
          </div>
          <div className="blur blur-1" />
          <div className="blur blur-2" />
          <div className="benefits-grid">
            {benefits.map((item, index) => (
              <div
                key={index}
                className="benefit-item"
                data-aos="fade-up"
                data-aos-delay={index * 150}
              >
                <div className="icon-wrapper">
                  <Image
                    src={item.icon}
                    alt={item.title}
                    width={140}
                    height={140}
                    className="benefit-icon"
                  />
                </div>
                <h3 className="benefit-title">{item.title}</h3>
                <p className="benefit-text">{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
