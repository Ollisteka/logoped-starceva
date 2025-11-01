import { BasePage } from '../components/BasePage';
import { Avatar, AvatarFallback, AvatarImage } from '../components/SimpleAvatar';
import { NBSP } from '../consts/typography';
import { getPhotoPath } from '../helpers/urlBuilders';

export function ProfileSection() {
  const profileData = [
    {
      label: 'Профессия',
      value: 'Учитель-логопед',
    },
    {
      label: 'Профессиональные интересы',
      value: `Диагностика речевых нарушений, коррекция звукопроизношения, развитие речи, коррекция дисграфии и${NBSP}дислексии`,
    },
    {
      label: 'Увлечения',
      value: `Одно из увлечений это моя работа. Мне нравится быть логопедом, с${NBSP}каждым годом всё больше.`,
    },
    {
      label: 'Место работы',
      value: `ГБОУ СО «ЕШИ №${NBSP}12, реализующая адаптированные основные общеобразовательные программы», г.${NBSP}Екатеринбург`,
    },
  ];

  return (
    <BasePage heading="Профиль">
      <div className="p-8">
        <div className="flex flex-col md:flex-row gap-8 items-center md:items-start">
          <div className="flex-shrink-0">
            <Avatar className="w-40 h-40 border-4 border-gray-200 dark:border-slate-600">
              <AvatarImage src={getPhotoPath('avatar.jpg')} alt="Старцева Светлана Александровна" />
              <AvatarFallback>СС</AvatarFallback>
            </Avatar>
          </div>

          <div className="flex-1 space-y-6 w-full">
            {profileData.map((item, index) => (
              <div key={index} className="border-l-4 border-gray-200 dark:border-slate-600 pl-4 py-2">
                <h3 className="text-black dark:text-gray-100 font-medium mb-1">{item.label}</h3>
                <p className="text-foreground/80 dark:text-gray-100">{item.value}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </BasePage>
  );
}
