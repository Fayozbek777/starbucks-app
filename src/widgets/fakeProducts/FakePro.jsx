"use client";

import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from "swiper/modules";
import { motion } from "framer-motion";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/autoplay";
import "./FakePro.scss";
import { useRouter } from "next/navigation";

const cardVariants = {
  hidden: { opacity: 0, y: 60, scale: 0.92 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.7,
      ease: "easeOut",
    },
  },
};

export default function FakePro() {
  const router = useRouter();

  const products = [
    {
      image: "/images/coffe-image1.png",
      title: "Fast",
      desc: "Our cafe will serve you quickly",
      price: "7,45$",
      volume: "330 ml",
    },
    {
      image: "/images/coffe-image2.png",
      title: "Latte",
      desc: "Our cafe will serve you quickly",
      price: "9,20$",
      volume: "360 ml",
    },
    {
      image: "/images/coffe-image3.png",
      title: "Cappuccino",
      desc: "Our cafe will serve you quickly",
      price: "8,45$",
      volume: "300 ml",
    },
    {
      image: "/images/coffe-image1.png",
      title: "Fast",
      desc: "Our cafe will serve you quickly",
      price: "6,45$",
      volume: "380 ml",
    },
  ];

  return (
    <section className="fakepro-section">
      <div className="container">
        <motion.div
          className="header-box"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9, ease: "easeOut" }}
        >
          <h1 className="title">
            New Our <span className="highlight">Products</span>
          </h1>

          <p className="description">
            Have time to buy the most harmonious drinks in the new Starbucks
            coffee and don't forget about the discount!
          </p>
        </motion.div>
        <Swiper
          modules={[Autoplay, Navigation]}
          spaceBetween={30}
          slidesPerView={1}
          breakpoints={{
            640: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
          loop={true}
          autoplay={{
            delay: 3000,
            disableOnInteraction: false,
          }}
          navigation={{
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
          }}
          className="products-swiper"
        >
          {products.map((product, index) => (
            <SwiperSlide key={index}>
              <motion.div
                className="product-card"
                variants={cardVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.3 }}
                transition={{ delay: index * 0.15 }}
                whileHover={{ scale: 1.04, y: -12 }}
              >
                <div className="img-box">
                  <Image
                    src={product.image}
                    alt={product.title}
                    width={210}
                    height={241}
                    className="product-img"
                  />
                </div>

                <h2 className="product-title">{product.title}</h2>
                <p className="product-desc">{product.desc}</p>

                <div className="price-box">
                  <h3 className="price">{product.price}</h3>
                  <h4 className="volume">{product.volume}</h4>
                </div>

                <button
                  className="buy-btn"
                  onClick={() => router.push("/login")}
                >
                  Buy Product
                </button>
              </motion.div>
            </SwiperSlide>
          ))}
        </Swiper>

        {/* Кастомные стрелки */}
        <div className="custom-navigation">
          <button className="swiper-button-prev custom-arrow">
            <span>←</span>
          </button>
          <button className="swiper-button-next custom-arrow">
            <span>→</span>
          </button>
        </div>
      </div>
    </section>
  );
}
