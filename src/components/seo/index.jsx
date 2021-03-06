/**
 * SEO component that queries for data with
 *  Gatsby's useStaticQuery React hook
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import { useStaticQuery, graphql } from "gatsby";
import React from "react";
import PropTypes from "prop-types";
import Helmet from "react-helmet";

import mBack from "../../images/m_back.png";

const SEO = ({ description, lang, meta, title }) => {
  const { site } = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            title
            description
            author
          }
        }
      }
    `
  );

  const metaDescription = description || site.siteMetadata.description;

  return (
    <Helmet
      htmlAttributes={{
        lang,
      }}
      title={title}
      titleTemplate={`%s | ${site.siteMetadata.title}`}
      meta={[
        {
          name: `description`,
          content: metaDescription,
        },
        {
          property: `og:title`,
          content: title,
        },
        {
          property: `og:image`,
          content: `https://miceXx.github.io/resume${mBack}`,
        },
        {
          property: `og:description`,
          content: metaDescription,
        },
        {
          property: `og:type`,
          content: `website`,
        },
        {
          name: `twitter:card`,
          content: `summary`,
        },
        {
          name: `twitter:creator`,
          content: site.siteMetadata.author,
        },
        {
          name: `twitter:title`,
          content: title,
        },
        {
          name: `twitter:description`,
          content: metaDescription,
        },
      ].concat(meta)}
    ><meta prefix="og: http://ogp.me/ns#" property="og:type" content="website" />
      <meta prefix="og: http://ogp.me/ns#" property="og:title" content="Michael's Page" />
      <meta prefix="og: http://ogp.me/ns#" property="og:description" content="Michael Xu's Webpage" />
      <meta prefix="og: http://ogp.me/ns#" property="og:image"
        content="https://micexx.github.io/resume/icons/icon-512x512.png?v=481c76cfb42f501a3030f217183a15d5" />
      <meta prefix="og: http://ogp.me/ns#" property="og:url" content="https://micexx.github.io/resume/" />
    </Helmet>
  );
};

SEO.defaultProps = {
  lang: `en`,
  meta: [],
  description: ``,
};

SEO.propTypes = {
  description: PropTypes.string,
  lang: PropTypes.string,
  meta: PropTypes.arrayOf(PropTypes.object),
  title: PropTypes.string.isRequired,
};

export default SEO;
