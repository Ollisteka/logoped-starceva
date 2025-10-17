import { Card, CardContent, CardHeader, CardTitle } from "./SimpleCard";
import { Badge } from "./SimpleBadge";

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
    <div className="space-y-6">
      <Card className="border-0 shadow-lg bg-white/90 backdrop-blur-sm">
        <CardHeader className="pb-4">
          <CardTitle>Спортивные мероприятия</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid gap-4 md:grid-cols-2">
            {sportsEvents.map((event, index) => (
              <div 
                key={index} 
                className="p-4 rounded-lg border border-border bg-card"
              >
                <div className="flex items-start justify-between gap-2 mb-2">
                  <h3 className="flex-1">{event.title}</h3>
                </div>
                <div className="flex gap-2 mb-3">
                  <Badge variant="outline">{event.category}</Badge>
                  <Badge variant="secondary">{event.role}</Badge>
                </div>
                <p className="text-sm text-gray-500 mb-2">{event.date}</p>
                <p className="text-primary/80">{event.achievement}</p>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
