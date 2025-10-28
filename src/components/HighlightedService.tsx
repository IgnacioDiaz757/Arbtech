"use client";

import { motion } from "framer-motion";

interface HighlightedServiceProps {
  title: string;
  description: string;
  icon: string;
  index: number;
  href?: string;
}

export default function HighlightedService({ title, description, icon, index, href }: HighlightedServiceProps) {
  const content = (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      whileHover={{ 
        y: -5, 
        scale: 1.02,
        transition: { duration: 0.2 }
      }}
      className="rounded-xl border border-white/20 bg-black text-white p-6 md:p-8 transition-all duration-200 hover:shadow-xl hover:shadow-[#003B0C] hover:border-[#003B0C]"
      style={{
        boxShadow: 'none'
      }}
    >
      <div className="text-4xl mb-4">{icon}</div>
      <h3 className="text-xl md:text-2xl font-semibold mb-3">{title}</h3>
      <p className="text-sm md:text-base text-white/80 mb-4">{description}</p>
      <div className="inline-flex items-center text-sm font-medium text-white hover:text-white/80 transition-colors">
        Ver más →
      </div>
    </motion.div>
  );

  return href ? (
    <a href={href} className="block">
      {content}
    </a>
  ) : (
    content
  );
}
