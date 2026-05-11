import { Helmet } from 'react-helmet-async';

interface SEOProps {
  title: string;
  description: string;
  canonical?: string;
  ogType?: string;
}

const SEO = ({ title, description, canonical, ogType = 'website' }: SEOProps) => {
  const siteName = 'SpenzaPrime';
  const fullTitle = `${title} | ${siteName}`;

  return (
    <Helmet>
      {/* Standard metadata tags */}
      <title>{fullTitle}</title>
      <meta name='description' content={description} />
      <link rel='canonical' href={canonical || window.location.href} />

      {/* Open Graph tags (Facebook, LinkedIn) */}
      <meta property='og:type' content={ogType} />
      <meta property='og:title' content={fullTitle} />
      <meta property='og:description' content={description} />
      <meta property='og:site_name' content={siteName} />

      {/* Twitter tags */}
      <meta name='twitter:card' content='summary_large_image' />
      <meta name='twitter:title' content={fullTitle} />
      <meta name='twitter:description' content={description} />
    </Helmet>
  );
};

export default SEO;
