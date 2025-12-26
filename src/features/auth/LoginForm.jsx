"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { motion } from "framer-motion";
import AOS from "aos";
import "aos/dist/aos.css";
import "./ui/FormsStyle.scss";

const formVariants = {
  hidden: { opacity: 0, y: 60 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.9, ease: "easeOut", staggerChildren: 0.2 },
  },
};

const childVariants = {
  hidden: { opacity: 0, y: 25 },

  visible: { opacity: 1, y: 0 },
};

export default function LoginForm() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  useEffect(() => {
    AOS.init({ duration: 800, once: true, easing: "ease-out" });
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setLoading(true);

    try {
      const res = await fetch("https://dummyjson.com/auth/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ username, password }),
      });

      const data = await res.json();

      if (!res.ok) throw new Error(data.message || "Неверный логин или пароль");

      localStorage.setItem("token", data.token);
      localStorage.setItem("user", JSON.stringify(data));

      router.push("/");
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="auth-wrapper">
      <motion.div
        className="auth-card"
        initial="hidden"
        animate="visible"
        variants={formVariants}
      >
        <motion.h2 variants={childVariants} data-aos="fade-down">
          Вход
        </motion.h2>

        {error && (
          <motion.div className="error-alert" variants={childVariants}>
            {error}
          </motion.div>
        )}

        <form onSubmit={handleSubmit}>
          <motion.div className="form-group" variants={childVariants}>
            <label htmlFor="username">Имя пользователя</label>
            <input
              type="text"
              id="username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              placeholder="emilys"
              required
            />
          </motion.div>

          <motion.div className="form-group" variants={childVariants}>
            <label htmlFor="password">Пароль</label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="emilyspass"
              required
            />
          </motion.div>

          <motion.div className="forgot-password" variants={childVariants}>
            <a href="/forgot-password" data-aos="fade-right">
              Забыли пароль?
            </a>
          </motion.div>

          <motion.button
            type="submit"
            className="auth-btn"
            disabled={loading}
            variants={childVariants}
            whileHover={{ scale: 1.05, y: -3 }}
            whileTap={{ scale: 0.97 }}
          >
            {loading ? "Входим..." : "Войти"}
          </motion.button>
        </form>

        <motion.div className="switch-link" variants={childVariants}>
          Нет аккаунта? <a href="/signup">Зарегистрироваться</a>
        </motion.div>
      </motion.div>
    </div>
  );
}
