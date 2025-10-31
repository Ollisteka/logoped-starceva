import { useState } from "react";
import { createPortal } from "react-dom";
import { ImageGalleryModal } from "./SimpleModal";
import { getPhotoPath } from "../helpers/urlBuilders";

// Функция для форматирования заголовков в ID
const formatHeading = (title: string): string => {
  return title.replace(/\s+/g, '-').toLowerCase();
};

interface PhotoImage {
  src: string;
  alt: string;
}

interface PhotoGalleryData {
  basePath: string;
  images: PhotoImage[];
}

interface PhotoGalleryProps {
  photos: PhotoGalleryData;
  title: string;
  className?: string;
}

export function PhotoGallery({ photos, title, className = "" }: PhotoGalleryProps) {
  const [selectedImageIndex, setSelectedImageIndex] = useState<number | null>(null);
  const [currentGalleryImages, setCurrentGalleryImages] = useState<{ src: string; alt: string }[]>([]);

  const handleNextImage = () => {
    if (selectedImageIndex !== null && currentGalleryImages.length > 0) {
      setSelectedImageIndex((selectedImageIndex + 1) % currentGalleryImages.length);
    }
  };

  const handlePrevImage = () => {
    if (selectedImageIndex !== null && currentGalleryImages.length > 0) {
      setSelectedImageIndex(
        selectedImageIndex === 0 ? currentGalleryImages.length - 1 : selectedImageIndex - 1
      );
    }
  };

  const openGallery = (imageIndex: number = 0) => {
    const imagesWithPaths = photos.images.map(img => ({
      src: getPhotoPath(`${photos.basePath}/${img.src}`),
      alt: img.alt
    }));
    setCurrentGalleryImages(imagesWithPaths);
    setSelectedImageIndex(imageIndex);
  };

  return (
    <>
      <section 
        className={`border-t border-gray-200 pt-6 mt-6 ${className}`} 
        aria-labelledby={`gallery-heading-${formatHeading(title)}`}
      >
        <h4 id={`gallery-heading-${formatHeading(title)}`} className="mb-4 text-sm font-medium text-gray-700">
          Фотографии
        </h4>
        <div 
          role="img" 
          aria-label={`Галерея фотографий: ${title}`}
          className="flex flex-wrap gap-2 pb-2"
        >
          {photos.images.map((image, imgIndex) => (
            <button
              key={imgIndex}
              onClick={() => openGallery(imgIndex)}
              className="w-20 h-20 relative border-0 bg-transparent p-0 rounded-lg overflow-hidden cursor-pointer group"
              aria-label={`Открыть галерею, изображение ${imgIndex + 1} из ${photos.images.length}`}
              aria-describedby={`image-${imgIndex}`}
            >
              <img
                src={getPhotoPath(`${photos.basePath}/${image.src}`)}
                alt={image.alt}
                id={`image-${imgIndex}`}
                className="w-full h-full object-cover transition-transform duration-200 ease-in-out group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-transparent flex items-center justify-center transition-colors duration-200 ease-in-out group-hover:bg-black/30">
                <div className="opacity-0 transition-opacity duration-200 ease-in-out group-hover:opacity-100">
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="white"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <circle cx="11" cy="11" r="8" />
                    <path d="m21 21-4.35-4.35" />
                    <line x1="11" y1="8" x2="11" y2="14" />
                    <line x1="8" y1="11" x2="14" y2="11" />
                  </svg>
                </div>
              </div>
            </button>
          ))}
        </div>
      </section>
      
      {selectedImageIndex !== null && createPortal(
        <ImageGalleryModal
          images={currentGalleryImages}
          currentIndex={selectedImageIndex}
          onClose={() => setSelectedImageIndex(null)}
          onNext={handleNextImage}
          onPrev={handlePrevImage}
        />,
        document.body
      )}
    </>
  );
}
