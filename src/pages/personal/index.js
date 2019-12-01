
import React, { Component } from 'react';

import { Helmet } from 'react-helmet';
import Layout from '../../components/layout';
import Projects from '../../components/project';
import modifyVariables from '../../components/utilities';

import '../styles/base.scss';

class IndexPage extends Component {
  componentDidMount() {
    modifyVariables('rgb(0,0,0)', 'rgba(106, 0, 255, 0.2)', 'rgba(0, 0, 0, 0.3)');
  }

  render() {
    return (
      <div id="container">
        <div id="mobile-site">Sorry this site is only viewable in a non-mobile browser window. Check it out on a laptop or desktop computer.</div>
        <Helmet>
          <meta name="viewport" content="width=device-width, initial-scale=1.0, shrink-to-fit=no" />
        </Helmet>
        <Layout collectionTitle="personal work">
          <div id="images">
            <Projects workType="ucsd" />
          </div>
        </Layout>
      </div>
    );
  }
}

export default IndexPage;
