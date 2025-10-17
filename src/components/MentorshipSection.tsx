import { DownloadButton } from "./DownloadButton";
import { Card, CardContent, CardHeader, CardTitle } from "./SimpleCard";
import { useState } from "react";
import { ImageGalleryModal } from "./SimpleModal";
import { Badge } from "./SimpleBadge";
import { mentorshipImages } from "../assets/images";

export function MentorshipSection() {
  const [selectedImageIndex, setSelectedImageIndex] = useState<number | null>(null);
  const [currentGalleryImages, setCurrentGalleryImages] = useState<string[]>([]);

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

  const openGallery = (photos: string[], imageIndex: number = 0) => {
    setCurrentGalleryImages(photos);
    setSelectedImageIndex(imageIndex);
  };

  const mentorshipActivities = [
    {
      title: "Кураторство студентов УрГПУ (ИСО)",
      period: "2025",
      description: "Работа над проектом",
      download: {
        href: `/documents/award-letter-nastavnichestvo.pdf`,
        text: "Скачать благодарственное письмо"
      },
      photos: mentorshipImages['mentors-2025-urgpu']
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

                  {activity.download && (
                    <DownloadButton href={activity.download.href}>
                      {activity.download.text || "Скачать"}
                    </DownloadButton>
                  )}

                  {activity.photos && (
                    <div className="border-t border-gray-200 pt-6 mt-6">
                      <h4 className="mb-4 text-sm font-medium text-gray-700">Фотографии</h4>
                      <div className="flex flex-wrap gap-2 pb-2">
                        {activity.photos?.map((image, imgIndex) => (
                          <button
                            key={imgIndex}
                            onClick={() => openGallery(activity.photos, imgIndex)}
                            className="w-20 h-20 relative border-0 bg-transparent p-0 rounded-lg overflow-hidden cursor-pointer group"
                          >
                            <img
                              src={image}
                              alt={`Фото ${imgIndex + 1}`}
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
                    </div>
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
