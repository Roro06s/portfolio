// React 19 : les balises <title>, <meta>, <link> sont automatiquement
// remontées dans le <head> sans aucune librairie externe.

const SITE_URL = 'https://devkostudio.fr'
const SITE_NAME = 'Devko Studio'
const DEFAULT_IMAGE = `${SITE_URL}/assets/images/bggg.webp`

export default function SEOMeta({
  title,
  description,
  path = '/',
  image = DEFAULT_IMAGE,
  type = 'website',
  article = null,
  noindex = false,
}) {
  const fullTitle = title
    ? `${title} | ${SITE_NAME}`
    : `${SITE_NAME} — Agence web à Cannes`
  const canonical = `${SITE_URL}${path}`

  return (
    <>
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      <link rel="canonical" href={canonical} />
      {noindex
        ? <meta name="robots" content="noindex, nofollow" />
        : <meta name="robots" content="index, follow" />
      }

      {/* Open Graph */}
      <meta property="og:site_name" content={SITE_NAME} />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={canonical} />
      <meta property="og:type" content={type} />
      <meta property="og:image" content={image} />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />
      <meta property="og:locale" content="fr_FR" />

      {/* Twitter Card */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />

      {/* Article (blog) */}
      {article && <meta property="article:published_time" content={article.publishedTime} />}
      {article && <meta property="article:author" content={SITE_NAME} />}
      {article && <meta property="article:section" content={article.section} />}
    </>
  )
}
