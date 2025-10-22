import { BasePage } from "../components/BasePage";
import { Badge } from "../components/SimpleBadge";
import { LinkList } from "../components/LinkList";
import { PhotoGallery } from "../components/PhotoGallery";
import { BASE_PATH } from "../consts/paths";
import { NBSP } from "../consts/typography";

export function MentorshipSection() {

  const mentorshipActivities = [
    {
      title: "Кураторство студентов УрГПУ (ИСО)",
      period: "2025",
      description: `Провела мастеркласс для студентов УрГПУ по теме «Содержание работы учителя-логопеда с${NBSP}обучающимися с${NBSP}нарушением интеллекта»`,
      downloads: [
        {
          href: `${BASE_PATH}/documents/mentors-2025-urgpu-mk.docx`,
          text: "Мастеркласс"
        },
        {
          href: `${BASE_PATH}/documents/award-letter-nastavnichestvo.pdf`,
          text: "Благодарственное письмо"
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
    <BasePage heading="Наставничество">
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
            <LinkList downloads={activity.downloads} />
          )}

          {activity.photos && (
            <PhotoGallery 
              photos={activity.photos} 
              title={activity.title} 
            />
          )}
        </div>
      ))}
    </BasePage>
  );
}
