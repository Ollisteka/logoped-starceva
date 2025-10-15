import { Card, CardContent, CardHeader, CardTitle } from "./SimpleCard";
import { Badge } from "./SimpleBadge";

export function CompetitionsSection() {
  const competitions = [
    {
      title: "Всероссийский конкурс 'Учитель года'",
      year: "2024",
      level: "Региональный этап",
      result: "Лауреат",
      description: "Представление опыта работы по использованию инновационных методик в логопедической практике"
    },
    {
      title: "Конкурс методических разработок",
      year: "2023",
      level: "Муниципальный",
      result: "1 место",
      description: "Авторская программа коррекции дисграфии у младших школьников"
    },
    {
      title: "Лучший педагог образовательного учреждения",
      year: "2023",
      level: "Школьный",
      result: "Победитель",
      description: "Признание коллег и администрации за профессионализм и преданность делу"
    },
    {
      title: "Конкурс 'Современные образовательные технологии'",
      year: "2022",
      level: "Региональный",
      result: "Призёр",
      description: "Применение ИКТ в логопедической работе"
    }
  ];

  return (
    <div className="space-y-6">
      <Card className="border-0 shadow-lg bg-white/90 backdrop-blur-sm">
        <CardHeader className="pb-4">
          <CardTitle>Конкурсы и достижения</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {competitions.map((competition, index) => (
              <div 
                key={index} 
                className="p-5 rounded-lg border border-border bg-card hover:shadow-md transition-shadow"
              >
                <div className="flex items-start justify-between gap-4 mb-3">
                  <div className="flex-1">
                    <h3 className="mb-2">{competition.title}</h3>
                    <div className="flex flex-wrap gap-2 mb-2">
                      <Badge variant="secondary">{competition.year}</Badge>
                      <Badge variant="outline">{competition.level}</Badge>
                      <Badge className="bg-primary/10 text-primary hover:bg-primary/20">
                        {competition.result}
                      </Badge>
                    </div>
                  </div>
                </div>
                <p className="text-muted-foreground">{competition.description}</p>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
