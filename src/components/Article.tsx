import { Badge } from "./SimpleBadge";

interface ArticleProps {
  title: string;
  subtitle?: string;
  year?: string;
  badges?: Array<{
    text: string;
    variant?: 'secondary' | 'outline' | 'success' | 'default';
  }>;
  description?: string;
  children?: React.ReactNode;
}

/**
 * Семантический компонент статьи с заголовком, метаданными и контентом
 */
export function Article({ 
  title, 
  subtitle, 
  year, 
  badges = [], 
  description, 
  children
}: ArticleProps) {
  return (
    <article className="p-4 rounded-lg border border-border bg-card">
      <header className="flex items-start justify-between gap-4 mb-3">
        <div className="flex-1">
          <h3 className="mb-2">{title}</h3>
          {subtitle && <p className="text-gray-500 mb-2">{subtitle}</p>}
          {badges.length > 0 && (
            <div className="flex flex-wrap gap-2 mb-2">
              {badges.map((badge, index) => (
                <Badge key={index} variant={badge.variant || 'default'}>
                  {badge.text}
                </Badge>
              ))}
            </div>
          )}
        </div>
        {year && <Badge variant="secondary">{year}</Badge>}
      </header>
      {description && <p className="text-gray-500 mb-4">{description}</p>}
      {children}
    </article>
  );
}
