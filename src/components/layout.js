/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from 'react';
import { Button } from 'react-bootstrap';
import PropTypes from 'prop-types';
import { useStaticQuery, graphql } from 'gatsby';

import Writing from './modal';
import Header from './header';

const Layout = ({ collectionTitle, workType, children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `);

  return (
    <>
      <div id="mobile-site" />
      <Header siteTitle={data.site.siteMetadata.title} />
      <main id="layoutMain">
        {children}
      </main>
      <footer className="footer">
        {collectionTitle}
      </footer>
      <Writing workType={workType} />
      <Button
          variant="outline-light"
          id="contact-link"
          href="mailto:stalgia.grigg@gmail.com"
        >
          contact
        </Button>
    </>
  );
};

Layout.propTypes = {
  collectionTitle: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
  workType: PropTypes.string.isRequired,
};

export default Layout;
