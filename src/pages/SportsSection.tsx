import { BasePage } from "../components/BasePage";
import { Article } from "../components/Article";
import { LinkList } from "../components/LinkList";
import { NBSP } from "../consts/typography";

export function SportsSection() {
  const sportsEvents = [
    {
      title: "Открытый урок ко дню гражданской обороны РФ",
      date: "Октябрь 2025",
      role: "Организатор",
      achievement: `В качестве закрепления темы «Пожарная безопасность» был проведен совместный практический урок с${NBSP}пожарными`,
      category: "Организация",
      downloads: [
        {
          href: 'https://vk.com/wall-205395714_1606',
          text: "Пост Вконтакте",
          icon: 'link' as const
        }
      ]
    },
    {
      title: "День здоровья",
      date: "Сентябрь 2025",
      role: "Организатор",
      achievement: `Провела спортивную игру «Веселые старты». Дети с${NBSP}ОВЗ из${NBSP}первых классов состязались в${NBSP}беге, прыжках; собирали яблоки и${NBSP}бросали картошку; делали веселую разминку и${NBSP}отгадвали загадки. Вместе с родителями закидывали кольца на кольцеброс.`,
      category: "Организация",
      downloads: [
        {
          href: 'https://vk.com/wall-205395714_1580',
          text: "Пост Вконтакте",
          icon: 'link' as const
        }
      ]
    }
  ];

  return (
    <BasePage heading="Спортивные мероприятия">
      {sportsEvents.map((event, index) => (
        <Article
          key={index}
          title={event.title}
          year={event.date}
          badges={[
            { text: event.category, variant: 'outline' },
            { text: event.role, variant: 'secondary' }
          ]}
          description={event.achievement}
        >
          {event.downloads && (
            <LinkList downloads={event.downloads} />
          )}
        </Article>
      ))}
    </BasePage>
  );
}
