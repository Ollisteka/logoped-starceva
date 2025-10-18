import { Card, CardContent, CardHeader, CardTitle } from "./SimpleCard";
import { Badge } from "./SimpleBadge";
import { LinkList } from "./LinkList";
import { NBSP } from "../consts/typography";
import { BASE_PATH } from "../consts/paths";

export function PedkopilaSection() {
  const materials = [
    {
      title: "Логопедическая диагностика обучающихся 1 класса",
      category: "Методические материалы",
      year: "2025",
      description: `Сборник упражнений для проведения обследования устной речи у${NBSP}обучающихся с${NBSP}интеллектуальными нарушениями`,
      downloads: [
        {
          href: `${BASE_PATH}/documents/presentation-speech-therapy-diagnostics-grade-1.pptx`,
          text: "Презентация с упражнениями"
        }
      ]
    }
  ];

  return (
    <div className="space-y-6">
      <Card className="border-0 shadow-lg bg-white/90 backdrop-blur-sm">
        <CardHeader className="pb-4">
          <CardTitle>Педагогическая копилка</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {materials.map((material, index) => (
              <div
                key={index}
                className="p-5 rounded-lg border border-border bg-card"
              >
                <div className="flex items-start justify-between gap-4 mb-3">
                  <div className="flex-1">
                    <h3 className="mb-2">{material.title}</h3>
                    <div className="flex flex-wrap gap-2 mb-2">
                      <Badge variant="secondary">{material.year}</Badge>
                      <Badge variant="outline">{material.category}</Badge>
                    </div>
                  </div>
                </div>
                <p className="text-gray-500 mb-4">{material.description}</p>
                {material.downloads && (
                  <LinkList downloads={material.downloads} />
                )}
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
