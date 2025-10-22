import { BasePage } from "../components/BasePage";
import { Article } from "../components/Article";
import { LinkList } from "../components/LinkList";
import { NBSP } from "../consts/typography";
import { BASE_PATH } from "../consts/paths";

export function PedkopilkaSection() {
  const materials = [
    {
      title: "Логопедическая диагностика обучающихся 1 класса",
      category: "Методические материалы",
      year: "2025",
      description: `Сборник упражнений для проведения обследования устной речи у${NBSP}обучающихся с${NBSP}интеллектуальными нарушениями`,
      downloads: [
        {
          href: `${BASE_PATH}/documents/presentation-speech-therapy-diagnostics-grade-1.pptx`,
          text: "Презентация с упражнениями"
        }
      ]
    }
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
          {material.downloads && (
            <LinkList downloads={material.downloads} />
          )}
        </Article>
      ))}
    </BasePage>
  );
}
