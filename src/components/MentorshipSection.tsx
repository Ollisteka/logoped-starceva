import { BASE_PATH } from "../consts/paths";
import { DownloadButton } from "./DownloadButton";
import { Card, CardContent, CardHeader, CardTitle } from "./SimpleCard";

export function MentorshipSection() {
  const mentorshipActivities = [
    {
      title: "Кураторство студентов УрГПУ (ИСО)",
      period: "2025",
      description: "Работа над проектом",
      download: {
        href: `${BASE_PATH}/documents/award-letter-nastavnichestvo.pdf`,
        text: "Скачать благодарственное письмо"
      }
    }
  ];

  return (
    <div className="space-y-6">
      <Card className="border-0 shadow-lg bg-white/90 backdrop-blur-sm">
        <CardHeader className="pb-4">
          <CardTitle>Наставничество</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-6">
            {mentorshipActivities.map((activity, index) => (
              <div 
                key={index} 
                className="p-5 rounded-lg border border-border bg-card"
              >
                <div className="flex items-start justify-between gap-4 mb-3">
                  <h3 className="flex-1">{activity.title}</h3>
                  <span className="text-sm text-muted-foreground whitespace-nowrap">{activity.period}</span>
                </div>
                <p className="text-muted-foreground mb-4">{activity.description}</p>
                {activity.download && (
                  <DownloadButton href={activity.download.href}>
                    {activity.download.text || "Скачать"}
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
