"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { motion } from "framer-motion";
import "../ui/FormsStyle.scss";

export default function SignUpForm() {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setLoading(true);

    // Имитация регистрации (dummyjson не поддерживает)
    setTimeout(() => {
      if (username && email && password) {
        // Сохраняем "нового" пользователя
        localStorage.setItem("token", "fake-token-for-demo");
        localStorage.setItem("user", JSON.stringify({ username, email }));
        router.push("/");
      } else {
        setError("Заполните все поля");
      }
      setLoading(false);
    }, 1500);
  };

  return (
    <div className="signup-wrapper">
      <motion.div
        className="signup-card"
        initial={{ opacity: 0, y: 60 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <motion.h2>Регистрация</motion.h2>

        {error && <div className="error-alert">{error}</div>}

        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="username">Имя пользователя</label>
            <input
              type="text"
              id="username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              placeholder="Ваше имя"
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="your@email.com"
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="password">Пароль</label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Минимум 6 символов"
              required
            />
          </div>

          <motion.button
            type="submit"
            className="signup-btn"
            disabled={loading}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.97 }}
          >
            {loading ? "Регистрируем..." : "Зарегистрироваться"}
          </motion.button>
        </form>

        <div className="back-link">
          Уже есть аккаунт? <a href="/login">Войти</a>
        </div>
      </motion.div>
    </div>
  );
}
