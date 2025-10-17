import { Card, CardContent, CardHeader, CardTitle } from "./SimpleCard";
import { Badge } from "./SimpleBadge";

export function PublicationsSection() {
  const publications = [
    {
      title: "Методика коррекции звукопроизношения у младших школьников",
      year: "2024",
      type: "Статья",
      description: "Разработка эффективных методов работы с детьми, имеющими нарушения звукопроизношения"
    },
    {
      title: "Использование игровых технологий в логопедической практике",
      year: "2023",
      type: "Доклад",
      description: "Применение современных игровых методик для развития речи учащихся"
    },
    {
      title: "Профилактика дисграфии и дислексии",
      year: "2023",
      type: "Методическая разработка",
      description: "Комплекс упражнений для профилактики нарушений письма и чтения"
    }
  ];

  return (
    <div className="space-y-6">
      <Card className="border-0 shadow-lg bg-white/90 backdrop-blur-sm">
        <CardHeader className="pb-4">
          <CardTitle>Публикации</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {publications.map((pub, index) => (
              <div 
                key={index} 
                className="p-4 rounded-lg border border-border bg-card"
              >
                <div className="flex items-start justify-between gap-4 mb-2">
                  <h3 className="flex-1">{pub.title}</h3>
                  <Badge variant="secondary">{pub.year}</Badge>
                </div>
                <Badge className="mb-2" variant="outline">{pub.type}</Badge>
                <p className="text-gray-500">{pub.description}</p>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
