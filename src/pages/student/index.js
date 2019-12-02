
import React, { Component } from 'react';

import { Helmet } from 'react-helmet';
import Layout from '../../components/layout';
import Projects from '../../components/project';
import modifyVariables from '../../components/utilities';

import '../styles/base.scss';

class IndexPage extends Component {
  componentDidMount() {
    modifyVariables('blue', 'rgba(0,0,100,0.1)', 'rgba(255, 255, 255, 0.5)');
  }

  render() {
    return (
      <div id="container">
        <div id="mobile-site">
          <p>Sorry this site is only viewable in a non-mobile browser window. Check it out on a laptop or desktop computer.</p>
        </div>
        <Helmet>
          <meta name="viewport" content="width=device-width, initial-scale=1.0, shrink-to-fit=no" />
        </Helmet>
        <Layout collectionTitle="student work" workType="student">
          <div id="images">
            <Projects workType="student" />
          </div>
        </Layout>
      </div>
    );
  }
}

export default IndexPage;
