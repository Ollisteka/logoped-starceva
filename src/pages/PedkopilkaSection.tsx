import { Article } from '../components/Article';
import { BasePage } from '../components/BasePage';
import { LinkList } from '../components/LinkList';
import { NBSP } from '../consts/typography';
import { getDocumentPath } from '../helpers/urlBuilders';

export function PedkopilkaSection() {
  const materials = [
    {
      title: 'Картотека пальчиковых игр',
      category: 'Методические материалы',
      year: '2025',
      description: `Сборник пальчиковых игр для развития мелкой моторики рук и${NBSP}речевой активности у${NBSP}обучающихся`,
      downloads: [
        {
          href: getDocumentPath('finger-games-catalog.docx'),
          text: 'Пальчиковые игры',
        },
      ],
    },
    {
      title: 'Картотека рассказов для чтения',
      category: 'Методические материалы',
      year: '2025',
      description: `Подборка рассказов для развития навыков чтения, понимания текста и${NBSP}расширения словарного запаса у${NBSP}обучающихся`,
      downloads: [
        {
          href: getDocumentPath('reading-stories-catalog.docx'),
          text: 'Рассказы для чтения',
        },
      ],
    },
    {
      title: 'Логопедическая диагностика обучающихся 1 класса',
      category: 'Методические материалы',
      year: '2025',
      description: `Сборник упражнений для проведения обследования устной речи у${NBSP}обучающихся с${NBSP}интеллектуальными нарушениями`,
      downloads: [
        {
          href: getDocumentPath('presentation-speech-therapy-diagnostics-grade-1.pptx'),
          text: 'Презентация с упражнениями',
        },
        {
          href: 'https://vk.com/wall-205395714_1655',
          text: 'Фото с ШМО специалистов',
          icon: 'link' as const,
        },
      ],
    },
    {
      title: `Звук и буква А`,
      category: 'Презентации',
      year: '2025',
      description: `Презентация предназначена для знакомства ребёнка с${NBSP}буквой «А» и${NBSP}формирования познавательных, коммуникативных и${NBSP}регулятивных умений через игровые задания и${NBSP}общение с${NBSP}учителем.`,
      downloads: [
        {
          href: getDocumentPath('a-letter/a-letter-presentation.pptx'),
          text: 'Презентация с упражнениями',
        },
        {
          href: getDocumentPath('a-letter/a-letter-svidetelstvo.jpg'),
          text: 'Свидетельство о размещении материала',
        },
        {
          href: 'https://infourok.ru/prezentaciya-na-temu-zvuk-i-bukva-a-7946372.html',
          text: 'Публикация на сайте Инфоурок',
          icon: 'link' as const,
        },
      ],
    },
  ];

  return (
    <BasePage heading="Педагогическая копилка">
      {materials.map((material, index) => (
        <Article
          key={index}
          title={material.title}
          year={material.year}
          badges={[{ text: material.category, variant: 'outline' }]}
          description={material.description}
        >
          {material.downloads && <LinkList downloads={material.downloads} />}
        </Article>
      ))}
    </BasePage>
  );
}
