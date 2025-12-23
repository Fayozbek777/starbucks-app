"use client";

import { useState } from "react";
import Image from "next/image";
import "./Cook.scss";

export default function Cook() {
  const [isVideoOpen, setIsVideoOpen] = useState(false);

  const openVideo = () => setIsVideoOpen(true);
  const closeVideo = () => setIsVideoOpen(false);

  return (
    <section className="cook-section">
      <div className="container">
        <div className="cook-content">
          <div className="cook-left">
            <div className="cook-image-wrapper">
              <Image
                src="/images/cook-image.png"
                alt="Professional chef cooking"
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                className="cook-main-img"
                priority
              />
            </div>

            <div className="discount-badge">
              <Image
                src="/images/discount-image.png"
                alt="Discount badge"
                width={280}
                height={280}
                className="discount-img"
                priority
              />
            </div>

            <div className="lines-bg">
              <Image
                src="/images/cook-lines.png"
                alt="Decorative lines"
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                className="cook-lines"
              />
            </div>
          </div>
          <div className="cook-right">
            <h2 className="title">
              We make <span className="highlight">delicious</span>
            </h2>

            <p className="description">
              Only in 2021 we have made more than 100,000 orders for you, your
              loved ones, all of you, and in 2022 we are ready to destroy the
              market
            </p>

            <button className="btn" onClick={openVideo}>
              Cooking process
            </button>

            <div className="mini-image">
              <Image
                src="/images/cook-mini-image.png"
                alt="Mini cooking scene"
                width={280}
                height={180}
                className="mini-img"
              />
            </div>
          </div>
        </div>
      </div>
      {isVideoOpen && (
        <div className="video-modal" onClick={closeVideo}>
          <div
            className="video-modal-content"
            onClick={(e) => e.stopPropagation()}
          >
            <button className="modal-close" onClick={closeVideo}>
              ×
            </button>
            <iframe
              width="100%"
              height="100%"
              src="https://www.youtube.com/embed/DCG6SngV9yI?autoplay=1"
              title="Cooking Process"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
        </div>
      )}
    </section>
  );
}
