'use client'

import React, { useState } from 'react';
import Form from './components/Form';
import Slider from './components/Slider';
import Portfolio from './components/Portfolio'
import InfCatalog from './components/InfCatalog'
import InfPerson from './components/InfPerson';

function App() {
  return (
    <>
      <Slider />
      <InfCatalog/>
      <Portfolio/>
      <InfPerson/>
      <Form />
    </>
  );
}

export default App;