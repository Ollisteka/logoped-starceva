import { Card, CardContent, CardHeader, CardTitle } from "./SimpleCard";
import { Badge } from "./SimpleBadge";
import { Link } from "./Link";
import { NBSP } from "../consts/typography";

export function CoursesSection() {
  const courses = [
    {
      title: `Методика преподавания предмета «Основы безопасности и защиты Родины» (ОБЗР) в${NBSP}условиях реализации ФГОС`,
      institution: "ООО «Московский институт профессиональной переподготовки и повышения квалификации педагогов»",
      hours: `72${NBSP}часа`,
      year: "2025",
      status: "Завершен",
      skills: [
        "Специальные образовательные потребности",
        "Адаптированные образовательные программы",
        "Индивидуальный образовательный маршрут"
      ],
      certificate: `/documents/advanced-training-obzr.pdf`
    },
    {
      title: `Технологии логопедической работы с${NBSP}детьми с${NBSP}расстройством аутистического спектра (РАС)`,
      institution: "ООО «Инфоурок»",
      hours: `144${NBSP}часа`,
      year: "2025",
      status: "Завершен",
      skills: [
        "Логопедическая работа с детьми с РАС",
        "Альтернативная коммуникация",
        "Сенсорная интеграция в логопедии"
      ],
      certificate: `/documents/advanced-training-ras-logoped.pdf`
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
                className="p-5 rounded-lg border border-border bg-card"
              >
                <div className="flex items-start justify-between gap-4 mb-3">
                  <h3 className="flex-1">{course.title}</h3>
                  <Badge variant="secondary">{course.year}</Badge>
                </div>

                <p className="text-gray-500 mb-2">{course.institution}</p>

                <div className="flex gap-2 mb-4">
                  <Badge variant="outline">{course.hours}</Badge>
                  <Badge variant="success">
                    ✓ {course.status}
                  </Badge>
                </div>

                {course.certificate && (
                  <Link href={course.certificate}>
                    Сертификат
                  </Link>
                )}
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
