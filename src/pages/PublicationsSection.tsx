import { Article } from '../components/Article';
import { BasePage } from '../components/BasePage';
import { DownloadLink, LinkList } from '../components/LinkList';
import { NBSP } from '../consts/typography';
import { getDocumentPath } from '../helpers/urlBuilders';

export function PublicationsSection() {
  const publications = [
    {
      title: `Формирование коммуникативных навыков у${NBSP}обучающихся с${NBSP}интеллектуальными нарушениями»`,
      year: '2025',
      type: 'Статья',
      description: `Работа написана в рамках конкурса «Организация специальных условий, методы и приемы работы обучения и${NBSP}воспитания детей с${NBSP}ОВЗ и с${NBSP}инвалидностью, с${NBSP}учетом целевых ориентиров ФАОП»`,
      downloads: [
        {
          href: `https://xn--80aakcbevmvw9p.xn--p1ai/edu-07-2025-pb-67136/`,
          text: 'Статья на сайте педагогической академии',
          icon: 'link',
        },
        {
          href: getDocumentPath('sbornik_18_july_2025.pdf'),
          text: 'Сборник учебно-методических материалов',
        },
        {
          href: getDocumentPath('formirovanie-kommunikativnyh-navykov/svidetelstvo.pdf'),
          text: `Свидетельство о публикации в СМИ`,
        },
      ] as DownloadLink[],
    },
  ];

  return (
    <BasePage heading="Публикации">
      {publications.map((pub, index) => (
        <Article
          key={index}
          title={pub.title}
          year={pub.year}
          badges={[{ text: pub.type, variant: 'outline' }]}
          description={pub.description}
        >
          {pub.downloads && <LinkList downloads={pub.downloads} />}
        </Article>
      ))}
    </BasePage>
  );
}
