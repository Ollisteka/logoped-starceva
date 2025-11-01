import { useCallback, useEffect } from 'react';

interface UseImageGalleryKeyboardProps {
  closeButtonRef: React.RefObject<HTMLButtonElement | null>;
  imageRef: React.RefObject<HTMLImageElement | null>;
  imagesCount: number;
  nextButtonRef: React.RefObject<HTMLButtonElement | null>;
  onClose: () => void;
  onNext: () => void;
  onPrev: () => void;
  prevButtonRef: React.RefObject<HTMLButtonElement | null>;
}

/**
 * Хук для обработки клавиатурных событий в модальном окне галереи изображений
 */
export function useImageGalleryKeyboard({
  closeButtonRef,
  imageRef,
  imagesCount,
  nextButtonRef,
  onClose,
  onNext,
  onPrev,
  prevButtonRef,
}: UseImageGalleryKeyboardProps): void {
  /**
   * Обработчик клавиатурных событий
   */
  const handleKeyDown = useCallback(
    (e: KeyboardEvent): void => {
      /**
       * Сохраняет фокус на текущем элементе после навигации
       */
      function preserveFocus(): void {
        setTimeout(() => {
          const currentFocused = document.activeElement;
          if (currentFocused && currentFocused !== imageRef.current) {
            (currentFocused as HTMLElement).focus();
          }
        }, 0);
      }

      /**
       * Обрабатывает навигацию стрелками с сохранением фокуса
       */
      function handleArrowNavigation(navigationCallback: () => void): void {
        navigationCallback();
        preserveFocus();
      }

      /**
       * Получает список доступных фокусируемых элементов
       */
      function getFocusableElements(): React.RefObject<HTMLElement | null>[] {
        const elements: React.RefObject<HTMLElement | null>[] = [closeButtonRef];
        if (imagesCount > 1) {
          elements.push(prevButtonRef, nextButtonRef);
        }
        return elements.filter(ref => ref.current);
      }

      /**
       * Обрабатывает навигацию по Tab между фокусируемыми элементами
       */
      function handleTabNavigation(e: KeyboardEvent, availableElements: React.RefObject<HTMLElement | null>[]): void {
        e.preventDefault();
        const currentFocused = document.activeElement;
        const currentIndex = availableElements.findIndex(ref => ref.current === currentFocused);

        const nextIndex = e.shiftKey
          ? currentIndex > 0
            ? currentIndex - 1
            : availableElements.length - 1
          : currentIndex < availableElements.length - 1
            ? currentIndex + 1
            : 0;

        availableElements[nextIndex]?.current?.focus();
      }

      switch (e.key) {
        case 'ArrowLeft':
          e.preventDefault();
          handleArrowNavigation(onPrev);
          break;
        case 'ArrowRight':
          e.preventDefault();
          handleArrowNavigation(onNext);
          break;
        case 'Escape':
          onClose();
          break;
        case 'Tab': {
          const availableElements = getFocusableElements();
          if (availableElements.length === 0) {
            return;
          }
          handleTabNavigation(e, availableElements);
          break;
        }
      }
    },
    [closeButtonRef, imageRef, imagesCount, nextButtonRef, onClose, onNext, onPrev, prevButtonRef]
  );

  useEffect(() => {
    document.addEventListener('keydown', handleKeyDown);
    return () => {
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, [handleKeyDown]);
}
