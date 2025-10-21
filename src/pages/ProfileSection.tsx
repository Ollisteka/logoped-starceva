import { Card, CardContent } from "../components/SimpleCard";
import { Avatar, AvatarImage, AvatarFallback } from "../components/SimpleAvatar";
import { NBSP } from "../consts/typography";

export function ProfileSection() {
  const profileData = [
    {
      label: "Профессия",
      value: "Учитель-логопед"
    },
    {
      label: "Профессиональные интересы",
      value: `Диагностика речевых нарушений, коррекция звукопроизношения, развитие речи, коррекция дисграфии и${NBSP}дислексии`
    },
    {
      label: "Увлечения",
      value: `Одно из увлечений это моя работа. Мне нравится быть логопедом, с${NBSP}каждым годом всё больше.`
    },
    {
      label: "Место работы",
      value: `ГБОУ СО «ЕШИ №${NBSP}12, реализующая адаптированные основные общеобразовательные программы», г.${NBSP}Екатеринбург`
    }
  ];

  return (
    <div className="space-y-6">
      <Card className="border-0 shadow-lg bg-white/90 backdrop-blur-sm">
        <CardContent className="p-8">
          <div className="flex flex-col md:flex-row gap-8 items-center md:items-start">
            <div className="flex-shrink-0">
              <Avatar className="w-40 h-40 border-4 border-gray-200">
                <AvatarImage 
                  src="https://images.unsplash.com/photo-1758685845906-6f705cde4fb7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjB3b21hbiUyMHRlYWNoZXIlMjBwb3J0cmFpdHxlbnwxfHx8fDE3NjA1MTE2MDV8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral" 
                  alt="Старцева Светлана Александровна"
                />
                <AvatarFallback>СС</AvatarFallback>
              </Avatar>
            </div>

            <div className="flex-1 space-y-6 w-full">
              {profileData.map((item, index) => (
                <div key={index} className="border-l-4 border-gray-200 pl-4 py-2">
                  <h3 className="text-black font-medium mb-1">{item.label}</h3>
                  <p className="text-foreground/80">{item.value}</p>
                </div>
              ))}
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
