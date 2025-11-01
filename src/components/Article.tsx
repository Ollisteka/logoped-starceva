import { Badge } from './SimpleBadge';

interface ArticleProps {
  badges?: Array<{
    text: string;
    variant?: 'secondary' | 'outline' | 'success' | 'default';
  }>;
  children?: React.ReactNode;
  description?: string;
  subtitle?: string;
  title: string;
  year?: string;
}

/**
 * Семантический компонент статьи с заголовком, метаданными и контентом
 */
export function Article({ title, subtitle, year, badges = [], description, children }: ArticleProps) {
  return (
    <article className="p-4 rounded-lg border border-gray-300 shadow-md bg-card">
      <header className="flex flex-col items-start justify-between gap-2 mb-3">
        <h3 className="text-base font-semibold text-gray-900">{title}</h3>
        {subtitle && <p className="text-gray-500">{subtitle}</p>}
        {(badges.length > 0 || year) && (
          <div className="flex flex-wrap gap-2">
            {year && <Badge variant="secondary">{year}</Badge>}
            {badges.map((badge, index) => (
              <Badge key={index} variant={badge.variant || 'default'}>
                {badge.text}
              </Badge>
            ))}
          </div>
        )}
      </header>
      {description && <p className="mb-4">{description}</p>}
      {children}
    </article>
  );
}
