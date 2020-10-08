import React from 'react';
import { Container } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useState } from 'react';
import Greeting from './component/greeting';
import './styles.css';

const App = () => {

    const [name, setName] = useState();
  
  return (
      <Container>
    <input
    onChange={({target: {value}}) => setName(value)}
    placeholder="Enter your name"
  />
  <Greeting name={name}/>
  </Container>
  );
};

export default App;