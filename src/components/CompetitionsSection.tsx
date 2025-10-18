import { Card, CardContent, CardHeader, CardTitle } from "./SimpleCard";
import { Badge } from "./SimpleBadge";
import { DownloadButton } from "./DownloadButton";
import { NBSP } from "../consts/typography";
import { BASE_PATH } from "../consts/paths";

export function CompetitionsSection() {
  const competitions = [
    {
      title: `«Организация специальных условий, методы и${NBSP}приёмы работы обучения и${NBSP}воспитания детей с${NBSP}ОВЗ и${NBSP}с${NBSP}инвалидностью, с${NBSP}учётом целевых ориентиров ФАОП»`,
      year: "2025",
      result: "1 место",
      description: `Работа «Формирование коммуникативных навыков у${NBSP}обучающихся с${NBSP}интеллектуальными нарушениями»`,
      level: "Всероссийский",
      downloads: [
        {
          href: `https://xn--80aakcbevmvw9p.xn--p1ai/edu-07-2025-pb-67136/`,
          text: "Перейти к работе",
          icon: 'link'
        },
        {
          href: `${BASE_PATH}/documents/award-letter-03-08-2025-formirovanie-kommunikativnyh-navykov.pdf`,
          text: "Скачать благодарственное письмо"
        }
      ]
    },
    {
      title: 'Конкурс для педагогов «Интеллект»',
      year: "2025",
      result: "Победитель",
      description: `Технологическая карта урока по теме «Понятия „один“, „много“», победила в${NBSP}номинации «Методические разработки»`,
      level: "Всероссийский",
      downloads: [
        {
          href: `${BASE_PATH}/documents/intellect/diploma.pdf`,
          text: "Скачать диплом"
        },
        {
          href: `${BASE_PATH}/documents/intellect/tech-map.docx`,
          text: "Скачать технологическую карту"
        }
      ]
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
                {competition.downloads && (
                  <div className="flex flex-col gap-2">
                    {competition.downloads.map((download, downloadIndex) => (
                      <DownloadButton key={downloadIndex} href={download.href} icon={download.icon}>
                        {download.text || "Скачать"}
                      </DownloadButton>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
