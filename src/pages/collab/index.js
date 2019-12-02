
import React, { Component } from 'react';

import { Helmet } from 'react-helmet';
import Layout from '../../components/layout';
import Projects from '../../components/project';
import modifyVariables from '../../components/utilities';

import '../styles/base.scss';

class IndexPage extends Component {
  componentDidMount() {
    modifyVariables('red', 'rgba(0, 139, 139, 0.3)', 'rgba(255, 255, 255, 0.5)');
  }

  render() {
    return (
      <div id="container">
        <Helmet>
          <meta name="viewport" content="width=device-width, initial-scale=1.0, shrink-to-fit=no" />
        </Helmet>
        <div id="mobile-site">Sorry this site is only viewable in a non-mobile browser window. Check it out on a laptop or desktop computer.</div>
        <Layout collectionTitle="collaborative & commercial work" workType="collab">
          <div id="images">
            <Projects workType="collab" />
          </div>
        </Layout>
      </div>
    );
  }
}

export default IndexPage;
