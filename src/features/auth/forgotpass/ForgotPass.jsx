"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import "../ui/FormsStyle.scss";

export default function ForgotPass() {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    // Имитация отправки (можно заменить на реальный API)
    setTimeout(() => {
      setMessage(`Ссылка для сброса отправлена на ${email}`);
      setLoading(false);
    }, 1500);
  };

  return (
    <div className="forgot-wrapper">
      <motion.div
        className="forgot-card"
        initial={{ opacity: 0, y: 60 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <motion.h2
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
        >
          Восстановление пароля
        </motion.h2>

        <p>Введите email, и мы отправим инструкцию</p>

        {message && (
          <motion.div
            className="success-message"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
          >
            {message}
          </motion.div>
        )}

        <form onSubmit={handleSubmit}>
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

          <motion.button
            type="submit"
            className="reset-btn"
            disabled={loading}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.97 }}
          >
            {loading ? "Отправляем..." : "Отправить ссылку"}
          </motion.button>
        </form>

        <div className="back-link">
          <a href="/login">Вернуться ко входу</a>
        </div>
      </motion.div>
    </div>
  );
}
