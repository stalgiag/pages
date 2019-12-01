
import React from 'react';

import Layout from '../../components/layout';
import Projects from '../../components/project';
import modifyVariables from '../../components/utilities';


import '../styles/base.scss';

const UCSD = () => (
  <div id="container">
    {modifyVariables('rgb(106,0,255)', 'rgba(255, 200, 200, 0.3)', 'rgba(255, 255, 255, 0.5)')}
    <Layout collectionTitle="personal work">
      <div id="images">
        <Projects workType="ucsd" />
      </div>
    </Layout>
  </div>
);

export default UCSD;
