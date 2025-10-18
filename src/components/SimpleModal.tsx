import React, { useEffect, useRef } from 'react';

interface ImageGalleryModalProps {
  images: { src: string; alt: string }[];
  currentIndex: number;
  onClose: () => void;
  onNext: () => void;
  onPrev: () => void;
}

export function ImageGalleryModal({ images, currentIndex, onClose, onNext, onPrev }: ImageGalleryModalProps) {
  const imageRef = useRef<HTMLImageElement>(null);
  const closeButtonRef = useRef<HTMLButtonElement>(null);
  const prevButtonRef = useRef<HTMLButtonElement>(null);
  const nextButtonRef = useRef<HTMLButtonElement>(null);
  const getFocusableElements = () => {
    const elements = [closeButtonRef];
    if (images.length > 1) {
      elements.push(prevButtonRef, nextButtonRef);
    }
    return elements.filter(ref => ref.current);
  };

  const handleBackdropClick = (e: React.MouseEvent) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  const handleKeyDown = (e: KeyboardEvent) => {
    switch (e.key) {
      case 'ArrowLeft':
        e.preventDefault();
        onPrev();
        // Сохраняем фокус на текущем элементе
        setTimeout(() => {
          const currentFocused = document.activeElement;
          if (currentFocused && currentFocused !== imageRef.current) {
            (currentFocused as HTMLElement).focus();
          }
        }, 0);
        break;
      case 'ArrowRight':
        e.preventDefault();
        onNext();
        // Сохраняем фокус на текущем элементе
        setTimeout(() => {
          const currentFocused = document.activeElement;
          if (currentFocused && currentFocused !== imageRef.current) {
            (currentFocused as HTMLElement).focus();
          }
        }, 0);
        break;
      case 'Escape':
        onClose();
        break;
      case 'Tab':
        e.preventDefault();
        const availableElements = getFocusableElements();
        if (availableElements.length === 0) return;
        
        const currentFocused = document.activeElement;
        const currentIndex = availableElements.findIndex(ref => ref.current === currentFocused);
        
        let nextIndex;
        if (e.shiftKey) {
          nextIndex = currentIndex > 0 ? currentIndex - 1 : availableElements.length - 1;
        } else {
          nextIndex = currentIndex < availableElements.length - 1 ? currentIndex + 1 : 0;
        }
        
        availableElements[nextIndex]?.current?.focus();
        break;
    }
  };

  useEffect(() => {
    document.addEventListener('keydown', handleKeyDown);
    return () => {
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, [onPrev, onNext, onClose]);

  // Автоматический фокус на изображение при открытии (только если нет другого фокуса)
  useEffect(() => {
    if (imageRef.current && !document.activeElement?.closest('button')) {
      imageRef.current.focus();
    }
  }, [currentIndex]);

  return (
    <div 
      className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center"
      onClick={handleBackdropClick}
      role="dialog"
      aria-modal="true"
      aria-labelledby="gallery-title"
      aria-describedby="gallery-description"
    >
      <div className="relative max-w-4xl max-h-full p-4">
        <h2 id="gallery-title" className="sr-only">
          Галерея изображений
        </h2>
        <p id="gallery-description" className="sr-only">
          {images[currentIndex].alt}. Изображение {currentIndex + 1} из {images.length}. Используйте стрелки для навигации, Escape для закрытия.
        </p>

        <button
          ref={closeButtonRef}
          onClick={onClose}
          className="absolute -top-12 right-0 text-white bg-transparent border-none cursor-pointer z-10 hover:text-gray-300 transition-colors"
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <line x1="18" y1="6" x2="6" y2="18"/>
            <line x1="6" y1="6" x2="18" y2="18"/>
          </svg>
          <span className="sr-only">Закрыть галерею</span>
        </button>

        {/* Navigation buttons */}
        {images.length > 1 && (
          <>
            <button
              ref={prevButtonRef}
              onClick={onPrev}
              className="absolute left-4 top-1/2 -translate-y-1/2 text-white bg-transparent border-none cursor-pointer z-10 hover:text-gray-300 transition-colors"
              aria-label={`Предыдущее изображение: ${currentIndex > 0 ? images[currentIndex - 1].alt : images[images.length - 1].alt}`}
            >
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <polyline points="15,18 9,12 15,6"/>
              </svg>
            </button>
            <button
              ref={nextButtonRef}
              onClick={onNext}
              className="absolute right-4 top-1/2 -translate-y-1/2 text-white bg-transparent border-none cursor-pointer z-10 hover:text-gray-300 transition-colors"
              aria-label={`Следующее изображение: ${currentIndex < images.length - 1 ? images[currentIndex + 1].alt : images[0].alt}`}
            >
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <polyline points="9,18 15,12 9,6"/>
              </svg>
            </button>
          </>
        )}

        <figure 
          className="flex flex-col items-center"
          role="img"
          aria-label={`${images[currentIndex].alt}. Изображение ${currentIndex + 1} из ${images.length}`}
        >
          <img
            ref={imageRef}
            src={images[currentIndex].src}
            alt={images[currentIndex].alt}
            className="max-w-full max-h-[80vh] object-contain rounded-lg block focus:outline-none focus:ring-2 focus:ring-white focus:ring-opacity-50"
            tabIndex={0}
            role="presentation"
          />
          <figcaption className="sr-only">
            {images[currentIndex].alt}
          </figcaption>
        </figure>

        {images.length > 1 && (
          <div 
            className="absolute bottom-4 left-1/2 -translate-x-1/2 bg-black/50 text-white px-3 py-1 rounded-full text-sm"
            aria-live="polite"
            aria-label={`Изображение ${currentIndex + 1} из ${images.length}`}
          >
            {currentIndex + 1} / {images.length}
          </div>
        )}
      </div>
    </div>
  );
}