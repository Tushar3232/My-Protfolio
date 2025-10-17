// src/Components/AnimatedSection.jsx
import React from "react";
import { motion } from "framer-motion";

const AnimatedSection = ({ children, delay = 0 }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}      // শুরুতে section নিচ থেকে + opacity 0
      whileInView={{ opacity: 1, y: 0 }}  // scroll এ আসলে fade + slide হবে
      viewport={{ once: true, amount: 0.2 }} // viewport এ 20% দেখলেই animate হবে, একবার করে
      transition={{ duration: 0.8, delay }} // animation duration + delay
      className="w-full"
    >
      {children}
    </motion.div>
  );
};

export default AnimatedSection;
