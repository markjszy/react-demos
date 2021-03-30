import './App.css';
import { useState, useEffect } from 'react';
import Greeting from './components/Greeting';
import logProps from './components/logProps';

const LoggedGreeting = logProps(Greeting);

function App() {
  const [name, setName] = useState('');

  useEffect(() => {
    setTimeout(() => {
      setName('Eliza');
    }, 3000);
  });

  return (
    <LoggedGreeting name={name} />
  );
}


export default App;
