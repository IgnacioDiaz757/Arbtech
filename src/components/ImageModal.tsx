"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import Image from "next/image";

interface ImageModalProps {
  isOpen: boolean;
  onClose: () => void;
  images: string[];
  currentIndex: number;
  onNext: () => void;
  onPrev: () => void;
  onGoToImage: (index: number) => void;
  projectTitle: string;
}

export default function ImageModal({ 
  isOpen, 
  onClose, 
  images, 
  currentIndex, 
  onNext, 
  onPrev, 
  onGoToImage,
  projectTitle 
}: ImageModalProps) {

  if (!isOpen) return null;

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 backdrop-blur-sm"
        onClick={onClose}
      >
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 0.8, opacity: 0 }}
          className="relative max-w-4xl max-h-[90vh] w-full mx-4"
          onClick={(e) => e.stopPropagation()}
        >
          {/* Header */}
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-xl font-semibold text-white">{projectTitle}</h3>
            <button
              onClick={onClose}
              className="text-white/70 hover:text-white text-2xl font-bold"
            >
              ×
            </button>
          </div>

          {/* Image Container */}
          <div className="relative w-full max-h-[70vh] overflow-hidden rounded-lg flex items-center justify-center">
            <Image
              src={images[currentIndex]}
              alt={`${projectTitle} - Imagen ${currentIndex + 1}`}
              width={800}
              height={600}
              sizes="(max-width: 1024px) 100vw, 80vw"
              className="object-contain max-w-full max-h-full"
              priority
            />
          </div>

          {/* Navigation */}
          <div className="flex items-center justify-between mt-4">
            <button
              onClick={onPrev}
              disabled={currentIndex === 0}
              className="px-4 py-2 bg-white/10 text-white rounded-lg hover:bg-white/20 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              ← Anterior
            </button>
            
            <div className="text-white/70 text-sm">
              {currentIndex + 1} de {images.length}
            </div>
            
            <button
              onClick={onNext}
              disabled={currentIndex === images.length - 1}
              className="px-4 py-2 bg-white/10 text-white rounded-lg hover:bg-white/20 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              Siguiente →
            </button>
          </div>

          {/* Thumbnails */}
          <div className="flex gap-2 mt-4 justify-center">
            {images.map((image, index) => (
              <button
                key={index}
                onClick={() => onGoToImage(index)}
                className={`relative w-16 h-12 rounded overflow-hidden ${
                  index === currentIndex ? 'ring-2 ring-white' : 'opacity-50'
                }`}
              >
                <Image
                  src={image}
                  alt={`Thumbnail ${index + 1}`}
                  fill
                  sizes="64px"
                  className="object-cover"
                />
              </button>
            ))}
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}
