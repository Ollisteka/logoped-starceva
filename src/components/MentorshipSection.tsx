import { Card, CardContent, CardHeader, CardTitle } from "./SimpleCard";

export function MentorshipSection() {
  const mentorshipActivities = [
    {
      title: "Наставничество молодых специалистов",
      period: "2023-2025",
      description: "Курирование двух молодых педагогов-логопедов, помощь в адаптации и профессиональном становлении",
      achievements: [
        "Разработка индивидуальных планов развития",
        "Проведение открытых занятий и мастер-классов",
        "Консультационная поддержка"
      ]
    },
    {
      title: "Методическое сопровождение",
      period: "2022-настоящее время",
      description: "Участие в работе методического объединения учителей-логопедов",
      achievements: [
        "Обмен опытом с коллегами",
        "Разработка методических рекомендаций",
        "Консультирование по сложным случаям"
      ]
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
                <div>
                  <h4 className="mb-2">
                    Достижения
                  </h4>
                  <ul className="space-y-2">
                    {activity.achievements.map((achievement, idx) => (
                      <li key={idx} className="flex items-start gap-2">
                        <span className="text-primary mt-1.5">•</span>
                        <span>{achievement}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
