import React from 'react';
import PropTypes from 'prop-types';
import Head from 'next/head';

import { childrenPropType, imagePropType } from '../../util/shared-prop-types';

function constructTitle(title, siteName) {
  const titleParts = [];
  if (title) {
    titleParts.push(title);
  }
  if (siteName) {
    titleParts.push(siteName);
  }
  return titleParts.join(' · ');
}

function Meta({
  title,
  description,
  url,
  image,
  alt,
  index,
  follow,
  siteName,
  siteTwitter,
  children
}) {
  const titleString = constructTitle(title, siteName);
  const indexString = index ? 'index' : 'noindex';
  const followString = follow ? 'follow' : 'nofollow';
  return (
    <Head>
      <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <title>{titleString}</title>
      <meta name="robots" content={`${indexString}, ${followString}`} />
      {description && <meta name="description" content={description} />}
      {title && <meta property="og:title" content={title} />}
      {description && <meta property="og:description" content={description} />}
      {url && <meta property="og:url" content={url} />}
      {image.src && <meta property="og:image" content={image.src} />}
      {alt && <meta name="twitter:image:alt" content={alt} />}
      {siteName && <meta property="og:site_name" content={siteName} />}
      {siteTwitter && (
        <meta name="twitter:creator" content={`@${siteTwitter}`} />
      )}
      <meta
        name="twitter:card"
        content={image ? 'summary_large_image' : 'summary'}
      />
      {children}
    </Head>
  );
}

Meta.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string.isRequired,
  url: PropTypes.string,
  image: PropTypes.shape(imagePropType).isRequired,
  alt: PropTypes.string,
  index: PropTypes.bool,
  follow: PropTypes.bool,
  siteName: PropTypes.string.isRequired,
  siteTwitter: PropTypes.string,
  children: childrenPropType
};

Meta.defaultProps = {
  index: true,
  follow: true,
  image: {}
};

/**
 * @component
 */
export default Meta;
