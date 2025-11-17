import { BasePage } from "../components/BasePage";
import { Article } from "../components/Article";
import { LinkList } from "../components/LinkList";
import { PhotoGallery } from "../components/PhotoGallery";
import { NBSP } from "../consts/typography";

export function ExtracurricularSection() {
  const extracurricularActivities = [
    {
      title: "Видеовизитка по безопасности дорожного движения",
      date: "2025",
      achievement: `Участвовала в${NBSP}создании видеовизитки по безопасности дорожного движения.`,
      downloads: [
        {
          href: 'https://vk.com/wall-205395714_1680',
          text: "Видео Вконтакте",
          icon: 'link' as const
        }
      ]
    },
    {
      title: "Открытый урок по безопасности движения в зимнее время",
      date: "2025",
      achievement: `Провела открытый урок совместно с${NBSP}сотрудником ДПС ОГИДПС по безопасности движения в${NBSP}зимнее время.`,
      photos: {
        basePath: "winter-movement",
        images: [
          {
            src: "1.jpg",
            alt: "Светлана Александровна и сотрудник ДПС ОГИДПС выступают перед детьми, сидящими за партой",
          },
          {
            src: "2.jpg",
            alt: "Дети раскрашивают раскраску на тему движения",
          },
          {
            src: "3.jpg",
            alt: "Дети раскрашивают раскраску на тему движения",
          },
        ],
      },
    },
    {
      title: "Открытие логопедической недели",
      date: "2025",
      achievement: `На открытии логопедической недели для${NBSP}обучающихся начальной школы провела игру «Буквенные мячики» и${NBSP}«Составь слово», весёлую артикуляционную и${NBSP}пальчиковые гимнастику.`,
      downloads: [
        {
          href: 'https://vk.com/wall-205395714_1688',
          text: "Пост Вконтакте",
          icon: 'link' as const
        }
      ]
    }
  ];

  return (
    <BasePage heading="Внеклассная работа">
      {extracurricularActivities.length > 0 ? (
        extracurricularActivities.map((activity, index) => (
          <Article
            key={index}
            title={activity.title}
            year={activity.date}
            badges={[
            ]}
            description={activity.achievement}
          >
            {activity.downloads && (
              <LinkList downloads={activity.downloads} />
            )}
            {activity.photos && (
              <PhotoGallery photos={activity.photos} title={activity.title} />
            )}
          </Article>
        ))
      ) : (
        <p className="text-foreground/60">Информация о внеклассной работе будет добавлена позже.</p>
      )}
    </BasePage>
  );
}

