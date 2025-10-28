"use client";

import { motion } from "framer-motion";

interface AnimatedCardProps {
  title: string;
  description: string;
  index: number;
}

export default function AnimatedCard({ title, description, index }: AnimatedCardProps) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      whileHover={{ 
        y: -8, 
        scale: 1.02,
        transition: { duration: 0.2 }
      }}
      className="rounded-xl border border-white/20 bg-black text-white p-8 md:p-10 transition-all duration-200 hover:shadow-xl hover:border-white/40"
    >
      <motion.h3 
        className="text-xl md:text-2xl font-semibold"
        whileHover={{ color: "#1e90ff" }}
      >
        {title}
      </motion.h3>
      <p className="text-sm md:text-base text-white/80 mt-3">{description}</p>
    </motion.article>
  );
}
