"use client";

import { motion } from "framer-motion";

interface AnimatedProfileCardProps {
  name: string;
  role: string;
  description: string;
  imageSrc: string;
  index: number;
}

export default function AnimatedProfileCard({ 
  name, 
  role, 
  description, 
  imageSrc, 
  index 
}: AnimatedProfileCardProps) {
  return (
    <motion.article
      key={name}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.2 }}
      whileHover={{ 
        y: -8, 
        scale: 1.02,
        transition: { duration: 0.2 }
      }}
      className="group overflow-hidden rounded-xl border border-[#003B0C] bg-black text-white transition-all duration-200 hover:shadow-xl hover:shadow-[#003B0C] hover:border-[#003B0C]"
    >
      <div className="relative aspect-[4/3] w-full overflow-hidden">
        <img
          src={imageSrc}
          alt={name}
          className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
        />
      </div>
      <div className="p-6 md:p-8">
        <motion.h3 
          className="text-xl md:text-2xl font-semibold"
          whileHover={{ color: "#1e90ff" }}
        >
          {name}
        </motion.h3>
        <p className="text-sm md:text-base text-white/80 mt-1">{role}</p>
        <p className="text-sm md:text-base text-white/80 mt-3">{description}</p>
        <div className="mt-4 flex flex-wrap gap-2">
          <span className="rounded-full border border-[#003B0C] px-3 py-1 text-xs text-white/80">Compromiso</span>
          <span className="rounded-full border border-[#003B0C] px-3 py-1 text-xs text-white/80">Calidad</span>
          <span className="rounded-full border border-[#003B0C] px-3 py-1 text-xs text-white/80">Eficiencia</span>
        </div>
      </div>
    </motion.article>
  );
}
