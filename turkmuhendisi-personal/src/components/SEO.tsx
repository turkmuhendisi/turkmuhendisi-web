import * as helmetAsync from 'react-helmet-async';

const { Helmet } = (Reflect.get(helmetAsync as object, 'default') ?? helmetAsync) as typeof import('react-helmet-async');

interface SEOProps {
  title: string;
  description: string;
  keywords?: string | string[];
  canonical?: string;
  type?: 'website' | 'article' | 'profile';
  schemaType?: string;
  image?: string;
  imageAlt?: string;
  imageType?: string;
  imageWidth?: number;
  imageHeight?: number;
  authorName?: string;
  datePublished?: string;
  dateModified?: string;
  section?: string;
  noindex?: boolean;
}

interface SchemaInput {
  title: string;
  description: string;
  keywords?: string | string[];
  canonical: string;
  type: 'website' | 'article' | 'profile';
  schemaType?: string;
  image?: string;
  authorName?: string;
  datePublished?: string;
  dateModified?: string;
  section?: string;
}

const SITE_URL = 'https://turkmuhendisi.com';
const SITE_NAME = 'Turkmuhendisi';
const DEFAULT_AUTHOR = 'Samet Berkant Koca';
const DEFAULT_IMAGE = '/post-bg.jpg';

const normalizeKeywords = (keywords?: string | string[]) => {
  if (!keywords) {
    return [];
  }

  if (Array.isArray(keywords)) {
    return keywords.map((keyword) => keyword.trim()).filter(Boolean);
  }

  return keywords
    .split(',')
    .map((keyword) => keyword.trim())
    .filter(Boolean);
};

const toAbsoluteUrl = (value?: string) => {
  if (!value) {
    return `${SITE_URL}${DEFAULT_IMAGE}`;
  }

  try {
    return new URL(value, SITE_URL).toString();
  } catch {
    return `${SITE_URL}${DEFAULT_IMAGE}`;
  }
};

const inferImageType = (value?: string) => {
  if (!value) {
    return undefined;
  }

  const pathname = new URL(toAbsoluteUrl(value)).pathname.toLowerCase();

  if (pathname.endsWith('.jpg') || pathname.endsWith('.jpeg')) {
    return 'image/jpeg';
  }

  if (pathname.endsWith('.png')) {
    return 'image/png';
  }

  if (pathname.endsWith('.webp')) {
    return 'image/webp';
  }

  return undefined;
};

const toIsoDate = (value?: string) => {
  if (!value) {
    return undefined;
  }

  const trimmedValue = value.trim();
  const dmyMatch = trimmedValue.match(/^(\d{2})-(\d{2})-(\d{4})$/);

  if (dmyMatch) {
    const [, day, month, year] = dmyMatch;
    return `${year}-${month}-${day}T00:00:00+03:00`;
  }

  const isoCandidate = new Date(trimmedValue);
  if (!Number.isNaN(isoCandidate.getTime())) {
    return isoCandidate.toISOString();
  }

  return undefined;
};

const buildSchema = ({
  title,
  description,
  canonical,
  type,
  schemaType,
  image,
  authorName,
  datePublished,
  dateModified,
  section,
  keywords,
}: SchemaInput) => {
  const currentUrl = toAbsoluteUrl(canonical);
  const imageUrl = toAbsoluteUrl(image);
  const keywordList = normalizeKeywords(keywords);

  const personSchema = {
    '@context': 'https://schema.org',
    '@type': 'Person',
    name: DEFAULT_AUTHOR,
    url: SITE_URL,
    image: 'https://avatars.githubusercontent.com/u/74829377?v=4',
    jobTitle: 'Yazılım Mühendisi',
    sameAs: [
      'https://github.com/turkmuhendisi',
      'https://www.linkedin.com/in/turkmuhendisi',
    ],
  };

  if (type === 'article') {
    return [
      personSchema,
      {
        '@context': 'https://schema.org',
        '@type': schemaType || 'BlogPosting',
        headline: title,
        description,
        image: [imageUrl],
        mainEntityOfPage: currentUrl,
        url: currentUrl,
        author: {
          '@type': 'Person',
          name: authorName || DEFAULT_AUTHOR,
        },
        publisher: {
          '@type': 'Person',
          name: DEFAULT_AUTHOR,
          url: SITE_URL,
        },
        datePublished: toIsoDate(datePublished),
        dateModified: toIsoDate(dateModified || datePublished),
        articleSection: section,
        inLanguage: 'tr-TR',
        keywords: keywordList.length > 0 ? keywordList : undefined,
      },
    ];
  }

  return [
    personSchema,
    {
      '@context': 'https://schema.org',
      '@type': schemaType || 'WebPage',
      name: title,
      description,
      url: currentUrl,
      image: imageUrl,
      inLanguage: 'tr-TR',
      author: {
        '@type': 'Person',
        name: DEFAULT_AUTHOR,
      },
      about: keywordList.length > 0 ? keywordList : undefined,
    },
  ];
};

export const SEO = ({
  title,
  description,
  keywords,
  canonical = '/',
  type = 'website',
  schemaType,
  image,
  imageAlt,
  imageType,
  imageWidth,
  imageHeight,
  authorName,
  datePublished,
  dateModified,
  section,
  noindex = false,
}: SEOProps) => {
  const currentUrl = toAbsoluteUrl(canonical);
  const imageUrl = toAbsoluteUrl(image);
  const resolvedImageType = imageType || inferImageType(image);
  const isoPublishedDate = toIsoDate(datePublished);
  const isoModifiedDate = toIsoDate(dateModified || datePublished);
  const robotsContent = noindex
    ? 'noindex, nofollow, noarchive'
    : 'index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1';
  const keywordList = normalizeKeywords(keywords);
  const schema = buildSchema({
    title,
    description,
    keywords,
    canonical,
    type,
    schemaType: schemaType || '',
    image: image || '',
    authorName: authorName || DEFAULT_AUTHOR,
    datePublished: datePublished || '',
    dateModified: dateModified || '',
    section: section || '',
  });

  return (
    <Helmet
      htmlAttributes={{
        lang: 'tr',
      }}
    >
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="author" content={authorName || DEFAULT_AUTHOR} />
      <meta name="robots" content={robotsContent} />
      <meta name="googlebot" content={robotsContent} />
      <meta name="theme-color" content="#000000" />
      {keywordList.length > 0 && (
        <meta name="keywords" content={keywordList.join(', ')} />
      )}
      <link rel="canonical" href={currentUrl} />
      <link rel="alternate" type="application/rss+xml" title="Turkmuhendisi RSS" href={`${SITE_URL}/rss.xml`} />

      <meta property="og:locale" content="tr_TR" />
      <meta property="og:site_name" content={SITE_NAME} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:type" content={type} />
      <meta property="og:url" content={currentUrl} />
      <meta property="og:image" content={imageUrl} />
      <meta property="og:image:secure_url" content={imageUrl} />
      <meta property="og:image:alt" content={imageAlt || title} />
      {resolvedImageType && (
        <meta property="og:image:type" content={resolvedImageType} />
      )}
      {imageWidth && (
        <meta property="og:image:width" content={String(imageWidth)} />
      )}
      {imageHeight && (
        <meta property="og:image:height" content={String(imageHeight)} />
      )}

      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={imageUrl} />
      <meta name="twitter:image:alt" content={imageAlt || title} />

      {isoPublishedDate && (
        <meta property="article:published_time" content={isoPublishedDate} />
      )}
      {isoModifiedDate && (
        <meta property="article:modified_time" content={isoModifiedDate} />
      )}
      {type === 'article' && section && (
        <meta property="article:section" content={section} />
      )}
      {type === 'article' &&
        keywordList.map((keyword) => (
          <meta key={keyword} property="article:tag" content={keyword} />
        ))}

      <script type="application/ld+json">
        {JSON.stringify(schema)}
      </script>
    </Helmet>
  );
};
