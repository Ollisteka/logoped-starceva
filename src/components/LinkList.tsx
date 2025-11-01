import { Link } from './Link';

export interface DownloadLink {
  href: string;
  icon?: 'download' | 'link';
  text: string;
}

interface LinkListProps {
  className?: string;
  downloads: DownloadLink[];
}

export function LinkList({ downloads, className = '' }: LinkListProps) {
  if (!downloads || downloads.length === 0) {
    return null;
  }

  return (
    <div className={`flex flex-col gap-2 ${className}`}>
      {downloads.map((download, index) => (
        <Link key={index} href={download.href} icon={download.icon || 'download'}>
          {download.text || 'Скачать'}
        </Link>
      ))}
    </div>
  );
}
