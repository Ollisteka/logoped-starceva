import { Card, CardContent, CardHeader, CardTitle } from "./SimpleCard";

export function PortfolioSection() {
  const portfolioStats = [
    {
      title: "Учащиеся",
      value: "45+",
      description: "Детей на коррекционном сопровождении"
    },
    {
      title: "Эффективность",
      value: "92%",
      description: "Учащихся с положительной динамикой"
    },
    {
      title: "Методики",
      value: "15+",
      description: "Авторских разработок и адаптаций"
    },
    {
      title: "Опыт работы",
      value: "8 лет",
      description: "В сфере логопедии"
    }
  ];

  const achievements = [
    "Благодарность Министерства образования Свердловской области (2024)",
    "Почётная грамота Управления образования г. Екатеринбурга (2023)",
    "Благодарственное письмо от родительского комитета (2023)",
    "Диплом победителя школьного конкурса 'Лучший педагог' (2023)",
    "Сертификат эксперта муниципальных профессиональных конкурсов (2022)"
  ];

  return (
    <div className="space-y-6">
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
        {portfolioStats.map((stat, index) => (
          <Card key={index} className="border-0 shadow-lg bg-white/90 backdrop-blur-sm">
            <CardContent className="p-6">
              <div className="flex flex-col items-center text-center">
                <div className="mb-1">{stat.value}</div>
                <h3 className="mb-2">{stat.title}</h3>
                <p className="text-sm text-muted-foreground">{stat.description}</p>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      <Card className="border-0 shadow-lg bg-white/90 backdrop-blur-sm">
        <CardHeader className="pb-4">
          <CardTitle>Награды и благодарности</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-3">
            {achievements.map((achievement, index) => (
              <div 
                key={index} 
                className="flex items-start gap-3 p-4 rounded-lg border border-border bg-card hover:shadow-sm transition-shadow"
              >
                <span className="flex-shrink-0 w-6 h-6 flex items-center justify-center rounded-full bg-primary/10 text-primary">
                  {index + 1}
                </span>
                <p className="flex-1">{achievement}</p>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      <Card className="border-0 shadow-lg bg-white/90 backdrop-blur-sm">
        <CardHeader className="pb-4">
          <CardTitle>Профессиональная философия</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-muted-foreground leading-relaxed">
            Моя работа — это не просто профессия, это призвание. Каждый ребёнок уникален, 
            и моя задача — помочь ему раскрыть свой потенциал через преодоление речевых трудностей. 
            Я верю, что терпение, профессионализм и индивидуальный подход способны творить чудеса. 
            Видеть, как дети начинают говорить правильно и уверенно, чувствовать их радость 
            от собственных успехов — это лучшая награда для меня. С каждым годом моя любовь 
            к профессии логопеда только растёт, ведь не�� ничего важнее, чем дарить детям 
            возможность свободно выражать свои мысли и чувства.
          </p>
        </CardContent>
      </Card>
    </div>
  );
}
