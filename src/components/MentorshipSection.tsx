import { Link } from "./Link";
import { Card, CardContent, CardHeader, CardTitle } from "./SimpleCard";
import { useState } from "react";
import { ImageGalleryModal } from "./SimpleModal";
import { Badge } from "./SimpleBadge";
import { BASE_PATH } from "../consts/paths";
import { NBSP } from "../consts/typography";

// Функция для форматирования заголовков в ID
const formatHeading = (title: string): string => {
  return title.replace(/\s+/g, '-').toLowerCase();
};

export function MentorshipSection() {
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

  const openGallery = (photos: typeof mentorshipActivities[number]['photos'], imageIndex: number = 0) => {
    const imagesWithPaths = photos.images.map(img => ({
      src: `${BASE_PATH}/photos/${photos.basePath}/${img.src}`,
      alt: img.alt
    }));
    setCurrentGalleryImages(imagesWithPaths);
    setSelectedImageIndex(imageIndex);
  };

  const mentorshipActivities = [
    {
      title: "Кураторство студентов УрГПУ (ИСО)",
      period: "2025",
      description: `Провела мастеркласс для студентов УрГПУ по теме «Содержание работы учителя-логопеда с${NBSP}обучающимися с${NBSP}нарушением интеллекта»`,
      downloads: [
        {
          href: `${BASE_PATH}/documents/mentors-2025-urgpu-mk.docx`,
          text: "Скачать мастеркласс"
        },
        {
          href: `${BASE_PATH}/documents/award-letter-nastavnichestvo.pdf`,
          text: "Скачать благодарственное письмо"
        }],
      photos: {
        basePath: 'mentors-2025-urgpu',
        images: [
          { src: '1.jpg', alt: 'Групповое фото Светланы Александровны и студентов УрГПУ' },
          { src: '2.jpg', alt: 'Светлана Александровна и студентка УрГПУ занимаются с ребёнком перед зеркалом, у ребёнка высунут язык' },
          { src: '3.jpg', alt: 'Светлана Александровна и студентка УрГПУ занимаются с ребёнком перед зеркалом, студентка и ребёнок улыбаются' }
        ]
      }
    }
  ];

  return (
    <>
      <div className="space-y-6">
        <Card className="border-0 shadow-lg bg-white/90 backdrop-blur-sm">
          <CardHeader className="pb-4">
            <CardTitle>Наставничество</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-6">
              {mentorshipActivities.map((activity, index) => (
                <div
                  key={index}
                  className="p-5 rounded-lg border border-border bg-card"
                >
                  <div className="flex items-start justify-between gap-4 mb-3">
                    <h3 className="flex-1">{activity.title}</h3>
                    <Badge variant="secondary">{activity.period}</Badge>
                  </div>
                  <p className="text-gray-500 mb-4">{activity.description}</p>

                  {activity.downloads && (
                    <div className="flex flex-col gap-2">
                      {activity.downloads.map((download, index) => (
                      <Link key={index} href={download.href}>
                        {download.text || "Скачать"}
                      </Link>
                      ))}
                    </div>
                  )}

                  {activity.photos && (
                    <section className="border-t border-gray-200 pt-6 mt-6" aria-labelledby={`gallery-heading-${formatHeading(activity.title)}`}>
                      <h4 id={`gallery-heading-${formatHeading(activity.title)}`} className="mb-4 text-sm font-medium text-gray-700">Фотографии</h4>
                      <div 
                        role="img" 
                        aria-label={`Галерея фотографий: ${activity.title}`}
                        className="flex flex-wrap gap-2 pb-2"
                      >
                        {activity.photos.images.map((image, imgIndex) => (
                          <button
                            key={imgIndex}
                            onClick={() => openGallery(activity.photos, imgIndex)}
                            className="w-20 h-20 relative border-0 bg-transparent p-0 rounded-lg overflow-hidden cursor-pointer group"
                            aria-label={`Открыть галерею, изображение ${imgIndex + 1} из ${activity.photos.images.length}`}
                            aria-describedby={`image-${imgIndex}`}
                          >
                            <img
                              src={`${BASE_PATH}/photos/${activity.photos.basePath}/${image.src}`}
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
                  )}
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
      {selectedImageIndex !== null && (
        <ImageGalleryModal
          images={currentGalleryImages}
          currentIndex={selectedImageIndex}
          onClose={() => setSelectedImageIndex(null)}
          onNext={handleNextImage}
          onPrev={handlePrevImage}
        />
      )}
    </>
  );
}
