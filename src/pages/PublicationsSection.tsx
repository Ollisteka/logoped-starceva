import { Article } from '../components/Article';
import { BasePage } from '../components/BasePage';
import { LinkList } from '../components/LinkList';
import { NBSP } from '../consts/typography';
import { getDocumentPath } from '../helpers/urlBuilders';

export function PublicationsSection() {
  const publications = [
    {
      title: `Логоперемена`,
      year: '2025',
      type: 'Статья',
      description: `Статья о проведении логопедических игр во время перемен для обучающихся с${NBSP}интеллектуальными нарушениями. Описаны подвижные игры с${NBSP}буквами и${NBSP}словами, способствующие закреплению знаний и${NBSP}умений в${NBSP}неформальной обстановке.`,
      downloads: [
        {
          href: 'https://www.1urok.ru/categories/24/articles/100433',
          text: 'Статья на сайте журнала «Современный урок»',
          icon: 'link' as const,
        },
        {
          href: getDocumentPath('logoperemena/diplom-logoperemena.png'),
          text: 'Диплом участника конкурса',
        },
        {
          href: getDocumentPath('logoperemena/smi-publication-certificate.png'),
          text: 'Свидетельство о публикации в СМИ',
        },
        {
          href: getDocumentPath('logoperemena/1urok-journal.pdf'),
          text: 'Журнал «Современный урок»',
        },
      ],
    },
    {
      title: `Особенности организации обучения на${NBSP}дому обучающихся с${NBSP}интеллектуальными нарушениями`,
      year: '2025',
      type: 'Статья',
      description: `В научной статье рассматривается опыт работы образовательной организации, реализующей АООП, а${NBSP}также личный опыт автора в${NBSP}вопросах обучения на${NBSP}дому обучающихся с${NBSP}интеллектуальными нарушениями, в${NBSP}том числе реализуемые формы, методы и${NBSP}приемы работы с${NBSP}обучающимися и${NBSP}их${NBSP}родителями (законными представителями). Указана актуальность научной работы, приведены статистические данные.`,
      downloads: [
        {
          href: getDocumentPath('hospital-pedagogy/materials-UZ-ZSH-2025.docx'),
          text: `Материалы конференции (DOCX)`,
        },
        {
          href: getDocumentPath('hospital-pedagogy/materials-UZ-ZSH-2025.pdf'),
          text: `Материалы конференции (PDF)`,
        },
      ],
    },
    {
      title: `Формирование коммуникативных навыков у${NBSP}обучающихся с${NBSP}интеллектуальными нарушениями»`,
      year: '2025',
      type: 'Статья',
      description: `Работа написана в рамках конкурса «Организация специальных условий, методы и приемы работы обучения и${NBSP}воспитания детей с${NBSP}ОВЗ и с${NBSP}инвалидностью, с${NBSP}учетом целевых ориентиров ФАООП»`,
      downloads: [
        {
          href: `https://xn--80aakcbevmvw9p.xn--p1ai/edu-07-2025-pb-67136/`,
          text: 'Статья на сайте педагогической академии',
          icon: 'link' as const,
        },
        {
          href: getDocumentPath('sbornik_18_july_2025.pdf'),
          text: 'Сборник учебно-методических материалов',
        },
        {
          href: getDocumentPath('formirovanie-kommunikativnyh-navykov/svidetelstvo.pdf'),
          text: `Свидетельство о публикации в СМИ`,
        },
      ],
    },
  ];

  return (
    <BasePage heading="Публикации">
      {publications.map((pub, index) => (
        <Article
          key={index}
          title={pub.title}
          year={pub.year}
          badges={[{ text: pub.type, variant: 'outline' as const }, ...(pub.additionalBadges ?? [])]}
          description={pub.description}
        >
          {Array.isArray(pub.downloads) && pub.downloads.length > 0 && <LinkList downloads={pub.downloads} />}
        </Article>
      ))}
    </BasePage>
  );
}
