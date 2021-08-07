import { useComponents } from '../../hooks/useComponents';
import { ImageProps } from '../../types/props';

export interface MetaProps {
  title: string;
  description: string;
  url: string;
  image: ImageProps;
  index?: boolean;
  follow?: boolean;
  siteName?: string;
  siteTwitter?: string;
}

function constructTitle(title?: string, siteName?: string): string {
  const titleParts = [];
  if (title) {
    titleParts.push(title);
  }
  if (siteName && siteName !== title) {
    titleParts.push(siteName);
  }
  return titleParts.join(' · ');
}

export function Meta({
  title,
  description,
  url,
  image,
  index = true,
  follow = true,
  siteName,
  siteTwitter,
}: MetaProps): JSX.Element {
  const { Head } = useComponents();

  const titleString = constructTitle(title, siteName);
  const indexString = index ? 'index' : 'noindex';
  const followString = follow ? 'follow' : 'nofollow';

  return (
    <Head>
      <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <title>{titleString}</title>
      <meta name="robots" content={`${indexString}, ${followString}`} />
      {url && <link rel="canonical" href={url} />}
      {description && <meta name="description" content={description} />}
      {title && <meta property="og:title" content={title} />}
      {description && <meta property="og:description" content={description} />}
      {url && <meta property="og:url" content={url} />}
      {image.src && <meta property="og:image" content={image.src} />}
      {image.alt && <meta name="twitter:image:alt" content={image.alt} />}
      {siteName && <meta property="og:site_name" content={siteName} />}
      {siteTwitter && (
        <meta name="twitter:creator" content={`@${siteTwitter}`} />
      )}
      <meta
        name="twitter:card"
        content={image ? 'summary_large_image' : 'summary'}
      />
    </Head>
  );
}
