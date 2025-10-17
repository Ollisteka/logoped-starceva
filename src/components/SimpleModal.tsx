import React, { useEffect } from 'react';

interface ImageGalleryModalProps {
  images: string[];
  currentIndex: number;
  onClose: () => void;
  onNext: () => void;
  onPrev: () => void;
}

export function ImageGalleryModal({ images, currentIndex, onClose, onNext, onPrev }: ImageGalleryModalProps) {
  const handleBackdropClick = (e: React.MouseEvent) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  const handleKeyDown = (e: KeyboardEvent) => {
    switch (e.key) {
      case 'ArrowLeft':
        onPrev();
        break;
      case 'ArrowRight':
        onNext();
        break;
      case 'Escape':
        onClose();
        break;
    }
  };

  useEffect(() => {
    document.addEventListener('keydown', handleKeyDown);
    return () => {
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, [onPrev, onNext, onClose]);

  return (
    <div 
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        backgroundColor: 'rgba(0, 0, 0, 0.8)',
        zIndex: 50,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
      }}
      onClick={handleBackdropClick}
    >
      <div style={{
        position: 'relative',
        maxWidth: '56rem',
        maxHeight: '100%',
        padding: '16px'
      }}>
        {/* Close button */}
        <button
          onClick={onClose}
          style={{
            position: 'absolute',
            top: '-48px',
            right: '0',
            color: 'white',
            background: 'none',
            border: 'none',
            cursor: 'pointer',
            zIndex: 10
          }}
          onMouseEnter={(e) => e.target.style.color = '#d1d5db'}
          onMouseLeave={(e) => e.target.style.color = 'white'}
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <line x1="18" y1="6" x2="6" y2="18"/>
            <line x1="6" y1="6" x2="18" y2="18"/>
          </svg>
        </button>

        {/* Navigation buttons */}
        {images.length > 1 && (
          <>
            <button
              onClick={onPrev}
              style={{
                position: 'absolute',
                left: '16px',
                top: '50%',
                transform: 'translateY(-50%)',
                color: 'white',
                background: 'none',
                border: 'none',
                cursor: 'pointer',
                zIndex: 10
              }}
              onMouseEnter={(e) => e.target.style.color = '#d1d5db'}
              onMouseLeave={(e) => e.target.style.color = 'white'}
            >
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <polyline points="15,18 9,12 15,6"/>
              </svg>
            </button>
            <button
              onClick={onNext}
              style={{
                position: 'absolute',
                right: '16px',
                top: '50%',
                transform: 'translateY(-50%)',
                color: 'white',
                background: 'none',
                border: 'none',
                cursor: 'pointer',
                zIndex: 10
              }}
              onMouseEnter={(e) => e.target.style.color = '#d1d5db'}
              onMouseLeave={(e) => e.target.style.color = 'white'}
            >
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <polyline points="9,18 15,12 9,6"/>
              </svg>
            </button>
          </>
        )}

        {/* Main image */}
        <img
          src={images[currentIndex]}
          alt={`Фото ${currentIndex + 1}`}
          style={{
            maxWidth: '100%',
            maxHeight: '80vh',
            objectFit: 'contain',
            borderRadius: '8px',
            display: 'block'
          }}
        />

        {/* Image counter */}
        {images.length > 1 && (
          <div style={{
            position: 'absolute',
            bottom: '16px',
            left: '50%',
            transform: 'translateX(-50%)',
            backgroundColor: 'rgba(0, 0, 0, 0.5)',
            color: 'white',
            padding: '4px 12px',
            borderRadius: '9999px',
            fontSize: '14px'
          }}>
            {currentIndex + 1} / {images.length}
          </div>
        )}
      </div>
    </div>
  );
}