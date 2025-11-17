import { BasePage } from "../components/BasePage";
import { Article } from "../components/Article";
import { LinkList } from "../components/LinkList";
import { NBSP } from "../consts/typography";

export function ExtracurricularSection() {
  const extracurricularActivities = [
    // Здесь можно добавить данные о внеклассной работе
    // Пример структуры:
    // {
    //   title: "Название мероприятия",
    //   date: "Дата",
    //   role: "Роль",
    //   achievement: "Описание",
    //   category: "Категория",
    //   downloads: [
    //     {
    //       href: 'ссылка',
    //       text: "Текст ссылки",
    //       icon: 'link' as const
    //     }
    //   ]
    // }
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
              { text: activity.category, variant: 'outline' },
              { text: activity.role, variant: 'secondary' }
            ]}
            description={activity.achievement}
          >
            {activity.downloads && (
              <LinkList downloads={activity.downloads} />
            )}
          </Article>
        ))
      ) : (
        <p className="text-foreground/60">Информация о внеклассной работе будет добавлена позже.</p>
      )}
    </BasePage>
  );
}

