import { Card, CardContent, CardHeader, CardTitle } from "./SimpleCard";
import { Badge } from "./SimpleBadge";

export function CoursesSection() {
  const courses = [
    {
      title: "Современные методы диагностики и коррекции речевых нарушений",
      institution: "ИРРО (Институт развития регионального образования)",
      hours: "72 часа",
      year: "2024",
      status: "Завершен",
      skills: [
        "Нейропсихологический подход в логопедии",
        "Методы диагностики дислексии",
        "Работа с детьми с ОВЗ"
      ]
    },
    {
      title: "Использование цифровых технологий в коррекционной педагогике",
      institution: "Уральский педагогический университет",
      hours: "36 часов",
      year: "2023",
      status: "Завершен",
      skills: [
        "Интерактивные логопедические программы",
        "Онлайн-диагностика речи",
        "Дистанционное сопровождение учащихся"
      ]
    },
    {
      title: "Логопедический массаж в коррекционной работе",
      institution: "Московский институт коррекционной педагогики",
      hours: "48 часов",
      year: "2023",
      status: "Завершен",
      skills: [
        "Техники логопедического массажа",
        "Артикуляционная гимнастика",
        "Работа с дизартрией"
      ]
    },
    {
      title: "Инклюзивное образование: практики и технологии",
      institution: "ИРРО",
      hours: "108 часов",
      year: "2022",
      status: "Завершен",
      skills: [
        "Адаптация образовательных программ",
        "Индивидуальный подход",
        "Междисциплинарное взаимодействие"
      ]
    }
  ];

  return (
    <div className="space-y-6">
      <Card className="border-0 shadow-lg bg-white/90 backdrop-blur-sm">
        <CardHeader className="pb-4">
          <CardTitle>Курсы повышения квалификации</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-5">
            {courses.map((course, index) => (
              <div 
                key={index} 
                className="p-5 rounded-lg border border-border bg-card hover:shadow-md transition-shadow"
              >
                <div className="flex items-start justify-between gap-4 mb-3">
                  <h3 className="flex-1">{course.title}</h3>
                  <Badge variant="secondary">{course.year}</Badge>
                </div>
                
                <p className="text-muted-foreground mb-2">{course.institution}</p>
                
                <div className="flex gap-2 mb-4">
                  <Badge variant="outline">{course.hours}</Badge>
                  <Badge className="bg-green-100 text-green-800 hover:bg-green-200">
                    ✓ {course.status}
                  </Badge>
                </div>

                <div>
                  <h4 className="mb-2">Полученные навыки:</h4>
                  <ul className="space-y-1">
                    {course.skills.map((skill, idx) => (
                      <li key={idx} className="flex items-start gap-2 text-sm">
                        <span className="text-primary mt-1">•</span>
                        <span className="text-muted-foreground">{skill}</span>
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
