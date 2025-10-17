import { Card, CardContent, CardHeader, CardTitle } from "./SimpleCard";
import { DownloadButton } from "./DownloadButton";

export function PedkopilaSection() {
  const materials = [
    {
      title: "Дидактические игры для развития фонематического слуха",
      category: "Методические материалы",
      description: "Сборник игр и упражнений для работы над фонематическим восприятием"
    },
    {
      title: "Артикуляционная гимнастика",
      category: "Практические упражнения",
      description: "Комплексы упражнений для развития артикуляционного аппарата"
    },
    {
      title: "Рабочие листы для коррекции письма",
      category: "Дидактический материал",
      description: "Набор заданий для профилактики и коррекции дисграфии"
    },
    {
      title: "Речевые игры для групповых занятий",
      category: "Методические материалы",
      description: "Коллекция игр для развития связн��й речи в группе"
    }
  ];

  return (
    <div className="space-y-6">
      <Card className="border-0 shadow-lg bg-white/90 backdrop-blur-sm">
        <CardHeader className="pb-4">
          <CardTitle>Педагогическая копилка</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid gap-4 md:grid-cols-2">
            {materials.map((material, index) => (
              <div 
                key={index} 
                className="p-4 rounded-lg border border-border bg-card hover:shadow-md transition-shadow"
              >
                <h3 className="mb-2">{material.title}</h3>
                <p className="text-muted-foreground mb-3">{material.description}</p>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-primary/70">{material.category}</span>
                  <DownloadButton href={"todo"}>Скачать</DownloadButton>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
