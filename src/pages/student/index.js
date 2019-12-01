
import React from 'react';

import Layout from '../../components/layout';
import Projects from '../../components/project';
import modifyVariables from '../../components/utilities';

import '../styles/base.scss';

const IndexPage = () => (
  <div id="container">
    {modifyVariables('blue', 'rgba(200, 120, 200, 0.3)', 'rgba(255, 255, 255, 0.5)')}
    <Layout collectionTitle="student work">
      <div id="images">
        <Projects workType="student" />
      </div>
    </Layout>
  </div>
);

export default IndexPage;
