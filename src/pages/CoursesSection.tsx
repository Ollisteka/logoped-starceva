import { BasePage } from "../components/BasePage";
import { Article } from "../components/Article";
import { Link } from "../components/Link";
import { NBSP } from "../consts/typography";
import { getDocumentPath } from "../helpers/urlBuilders";

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
      certificate: getDocumentPath('advanced-training-obzr.pdf')
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
      certificate: getDocumentPath('advanced-training-ras-logoped.pdf')
    }
  ];

  return (
    <BasePage heading="Курсы повышения квалификации">
      {courses.map((course, index) => (
        <Article
          key={index}
          title={course.title}
          subtitle={course.institution}
          year={course.year}
          badges={[
            { text: course.hours, variant: 'outline' },
            { text: `✓ ${course.status}`, variant: 'success' }
          ]}
        >
          {course.certificate && (
            <Link href={course.certificate}>
              Сертификат
            </Link>
          )}
        </Article>
      ))}
    </BasePage>
  );
}
