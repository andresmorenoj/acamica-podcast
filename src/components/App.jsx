import React from 'react';
import Layout from './Layout';
import HelloWorld from './HelloWorld';
import Episodes from './Episodes';
import WeSection from './WeSection';
import Guesses from './Guesses';
import TopicsContainer from './TopicsContainer';
import CallToAction from './CallToAction';

const App = () => (
  <Layout>
    <HelloWorld />
    <Episodes />
    <WeSection />
    <Guesses />
    <TopicsContainer />
    <CallToAction />
  </Layout>
);

export default App;
