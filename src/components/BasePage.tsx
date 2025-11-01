import { Card, CardContent, CardHeader, CardTitle } from './SimpleCard';

interface BasePageProps {
  children: React.ReactNode;
  heading: string;
}

/**
 * Базовый компонент страницы с унифицированной структурой карточки и заголовка
 */
export function BasePage({ heading, children }: BasePageProps) {
  return (
    <div className="space-y-6">
      <Card className="border-0 shadow-lg bg-white/90 dark:bg-slate-800/90 backdrop-blur-sm">
        <CardHeader className="pb-4">
          <CardTitle className="text-black dark:text-gray-100">{heading}</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">{children}</div>
        </CardContent>
      </Card>
    </div>
  );
}
