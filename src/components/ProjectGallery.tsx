"use client";

import { useState } from "react";
import Image from "next/image";
import ImageModal from "./ImageModal";

interface Project {
  src: string;
  alt: string;
  category: string;
  images: string[]; // Array de 3 imágenes
}

interface ProjectGalleryProps {
  projects: Project[];
}

export default function ProjectGallery({ projects }: ProjectGalleryProps) {
  const [modalOpen, setModalOpen] = useState(false);
  const [currentProject, setCurrentProject] = useState<Project | null>(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const openModal = (project: Project, imageIndex: number = 0) => {
    setCurrentProject(project);
    setCurrentImageIndex(imageIndex);
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
    setCurrentProject(null);
    setCurrentImageIndex(0);
  };

  const nextImage = () => {
    if (currentProject && currentImageIndex < currentProject.images.length - 1) {
      setCurrentImageIndex(currentImageIndex + 1);
    }
  };

  const prevImage = () => {
    if (currentImageIndex > 0) {
      setCurrentImageIndex(currentImageIndex - 1);
    }
  };

  const goToImage = (index: number) => {
    setCurrentImageIndex(index);
  };

  return (
    <>
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {projects.map((project, index) => (
          <div key={index} className="space-y-2">
            {/* Título del proyecto */}
            <div className="text-center mb-2">
              <h3 className="text-base sm:text-lg font-semibold text-white">{project.alt}</h3>
              <p className="text-xs sm:text-sm text-white/70">{project.category}</p>
            </div>
            
            {/* Imagen principal */}
            <figure
              className="relative aspect-[4/3] overflow-hidden rounded-lg border border-[#003B0C] bg-black group cursor-pointer hover:shadow-lg hover:shadow-[#003B0C]"
              onClick={() => openModal(project, 0)}
            >
              <Image
                src={project.images[0]}
                alt={project.alt}
                fill
                sizes="(max-width: 768px) 100vw, 33vw"
                className="object-cover transition-transform duration-300 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-black/30 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <p className="text-white text-sm font-medium">Haz clic para ver galería</p>
              </div>
            </figure>

            {/* Miniaturas de las otras 2 imágenes */}
            <div className="flex gap-2">
              {project.images.slice(1).map((image, imgIndex) => (
                <figure
                  key={imgIndex}
                  className="relative aspect-[4/3] w-16 overflow-hidden rounded border border-[#003B0C] bg-black cursor-pointer hover:shadow-md hover:shadow-[#003B0C]"
                  onClick={() => openModal(project, imgIndex + 1)}
                >
                  <Image
                    src={image}
                    alt={`${project.alt} - ${imgIndex + 2}`}
                    fill
                    sizes="64px"
                    className="object-cover transition-transform duration-200 hover:scale-110"
                  />
                </figure>
              ))}
            </div>
          </div>
        ))}
      </div>

      {/* Modal */}
      {currentProject && (
        <ImageModal
          isOpen={modalOpen}
          onClose={closeModal}
          images={currentProject.images}
          currentIndex={currentImageIndex}
          onNext={nextImage}
          onPrev={prevImage}
          onGoToImage={goToImage}
          projectTitle={currentProject.alt}
        />
      )}
    </>
  );
}
