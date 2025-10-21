import { Card, CardContent, CardHeader, CardTitle } from "../components/SimpleCard";
import { Badge } from "../components/SimpleBadge";
import { DownloadLink, LinkList } from "../components/LinkList";
import { BASE_PATH } from "../consts/paths";
import { NBSP } from "../consts/typography";

export function PublicationsSection() {
  const publications = [
    {
      title: `Формирование коммуникативных навыков у${NBSP}обучающихся с${NBSP}интеллектуальными нарушениями»`,
      year: "2025",
      type: "Статья",
      description: `Работа написана в рамках конкурса «Организация специальных условий, методы и приемы работы обучения и${NBSP}воспитания детей с${NBSP}ОВЗ и с${NBSP}инвалидностью, с${NBSP}учетом целевых ориентиров ФАОП»`,
      downloads: [
        {
          href: `https://xn--80aakcbevmvw9p.xn--p1ai/edu-07-2025-pb-67136/`,
          text: "Статья на сайте педагогической академии",
          icon: 'link'
        },
        {
          href: `${BASE_PATH}/documents/sbornik_18_july_2025.pdf`,
          text: "Сборник учебно-методических материалов"
        },
        {
          href: `${BASE_PATH}/documents/formirovanie-kommunikativnyh-navykov/svidetelstvo.pdf`,
          text: `Свидетельство о публикации в СМИ`
        }
      ] as DownloadLink[]
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
                <p className="text-gray-500 mb-4">{pub.description}</p>
                {pub.downloads && (
                  <LinkList downloads={pub.downloads} />
                )}
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
