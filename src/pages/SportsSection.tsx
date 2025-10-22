import { BasePage } from "../components/BasePage";
import { Article } from "../components/Article";

export function SportsSection() {
  const sportsEvents = [
    {
      title: "Школьная спартакиада",
      date: "Сентябрь 2024",
      role: "Участник",
      achievement: "Командное 2 место в эстафете",
      category: "Командные"
    },
    {
      title: "День здоровья",
      date: "Май 2024",
      role: "Организатор",
      achievement: "Организация логопедической станции на квесте",
      category: "Организация"
    },
    {
      title: "Педагогический турнир по волейболу",
      date: "Март 2024",
      role: "Участник",
      achievement: "3 место в городском этапе",
      category: "Командные"
    },
    {
      title: "Лыжные гонки",
      date: "Февраль 2024",
      role: "Участник",
      achievement: "Участие в районных соревнованиях",
      category: "Индивидуальные"
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
        </Article>
      ))}
    </BasePage>
  );
}
