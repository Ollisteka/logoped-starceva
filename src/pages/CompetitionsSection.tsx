import { Article } from '../components/Article';
import { BasePage } from '../components/BasePage';
import { LinkList } from '../components/LinkList';
import { PhotoGallery } from '../components/PhotoGallery';
import { NBSP } from '../consts/typography';
import { getDocumentPath } from '../helpers/urlBuilders';

export function CompetitionsSection() {
  const competitions = [
    {
      title: `Конкурс педагогического мастерства «Вдохновение»`,
      year: '2026',
      result: '2 место',
      description: `2026 год назван годом единства народов России. Я приняла участие в${NBSP}конкурсе педмастерства «Вдохновение» на тему «Единство народов России» в${NBSP}номинации «Сценарий урока» «Народы России одна семья»`,
      level: 'Всероссийский',
      downloads: [
        {
          href: getDocumentPath('united-nations/diploma.docx'),
          text: 'Диплом',
        },
        {
          href: getDocumentPath('united-nations/lesson-scenario.docx'),
          text: 'Сценарий урока',
        },
      ],
    },
    {
      title: `«Организация специальных условий, методы и${NBSP}приёмы работы обучения и${NBSP}воспитания детей с${NBSP}ОВЗ и${NBSP}с${NBSP}инвалидностью, с${NBSP}учётом целевых ориентиров ФАООП»`,
      year: '2025',
      result: '1 место',
      description: `Работа «Формирование коммуникативных навыков у${NBSP}обучающихся с${NBSP}интеллектуальными нарушениями»`,
      level: 'Всероссийский',
      downloads: [
        {
          href: `https://xn--80aakcbevmvw9p.xn--p1ai/edu-07-2025-pb-67136/`,
          text: 'Работа на сайте педагогической академии',
          icon: 'link' as const,
        },
        {
          href: getDocumentPath(
            'formirovanie-kommunikativnyh-navykov/award-letter-03-08-2025-formirovanie-kommunikativnyh-navykov.pdf'
          ),
          text: 'Благодарственное письмо',
        },
      ],
    },
    {
      title: 'Конкурс для педагогов «Интеллект»',
      year: '2025',
      result: 'Победитель',
      description: `Технологическая карта урока по теме «Понятия „один", „много"», победила в${NBSP}номинации «Методические разработки»`,
      level: 'Всероссийский',
      downloads: [
        {
          href: getDocumentPath('intellect/diploma.pdf'),
          text: 'Диплом',
        },
        {
          href: getDocumentPath('intellect/tech-map.docx'),
          text: 'Технологическая карта',
        },
      ],
    },
    {
      title: `Творческий конкурс для детей с${NBSP}ограниченными возможностями здоровья «Радуга творчества»`,
      year: '2025',
      result: 'Лауреат I степени',
      description: `Помогла ученику стать лауреатом конкурса в${NBSP}номинации «Поделка»`,
      level: 'Всероссийский',
      downloads: [
        {
          href: getDocumentPath('podelka/podelka-diplom.pdf'),
          text: 'Диплом участника и куратора',
        },
      ],
      photos: {
        basePath: 'podelka',
        images: [
          {
            src: 'podelka.jpg',
            alt: 'На зелёном листочке стоят четыре ёжика, сделанные из пластилина и шишек',
          },
        ],
      },
    },
    {
      title: 'Викторина «Безопасность детей в летний период»',
      year: '2025',
      result: 'Участник',
      description: `Викторина напоминает о правилах безопасного поведения летом`,
      level: 'Всероссийский',
      downloads: [
        {
          href: getDocumentPath('childSafetyQuiz.pdf'),
          text: 'Грамота',
        },
      ],
    },
  ];

  return (
    <BasePage heading="Конкурсы и достижения">
      {competitions.map((competition, index) => (
        <Article
          key={index}
          title={competition.title}
          year={competition.year}
          badges={[
            { text: competition.level, variant: 'outline' },
            { text: competition.result, variant: 'default' },
          ]}
          description={competition.description}
        >
          {competition.downloads && <LinkList downloads={competition.downloads} />}
          {competition.photos && <PhotoGallery photos={competition.photos} title={competition.title} />}
        </Article>
      ))}
    </BasePage>
  );
}
