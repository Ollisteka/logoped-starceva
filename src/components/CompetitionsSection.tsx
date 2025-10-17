import { Card, CardContent, CardHeader, CardTitle } from "./SimpleCard";
import { Badge } from "./SimpleBadge";
import { DownloadButton } from "./DownloadButton";
import { NBSP } from "../consts/typography";

export function CompetitionsSection() {
  const competitions = [
    {
      title: `«Организация специальных условий, методы и${NBSP}приёмы работы обучения и${NBSP}воспитания детей с${NBSP}ОВЗ и${NBSP}с${NBSP}инвалидностью, с${NBSP}учётом целевых ориентиров ФАОП»`,
      year: "2025",
      result: "Участник",
      description: `Работа «Формирование коммуникативных навыков у${NBSP}обучающихся с${NBSP}интеллектуальными нарушениями»`,
      level: "Всероссийский",
      download: {
        href: `/documents/award-letter-03-08-2025-formirovanie-kommunikativnyh-navykov.pdf`,
        text: "Скачать благодарственное письмо"
      }
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
                className="p-5 rounded-lg border border-border bg-card"
              >
                <div className="flex items-start justify-between gap-4 mb-3">
                  <div className="flex-1">
                    <h3 className="mb-2">{competition.title}</h3>
                    <div className="flex flex-wrap gap-2 mb-2">
                      <Badge variant="secondary">{competition.year}</Badge>
                      {competition.level && <Badge variant="outline">{competition.level}</Badge>}
                      <Badge>
                        {competition.result}
                      </Badge>
                    </div>
                  </div>
                </div>
                <p className="text-gray-500 mb-4">{competition.description}</p>
                {competition.download && (
                  <DownloadButton href={competition.download.href}>
                    {competition.download.text || "Скачать"}
                  </DownloadButton>
                )}
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
