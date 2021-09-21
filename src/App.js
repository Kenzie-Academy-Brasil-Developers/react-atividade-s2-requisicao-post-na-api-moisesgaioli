import { useState } from 'react';
import './App.css';
import Display from './components/Display';
import Login from './components/Login';


function App() {

  const [authentification, setAuthentification] = useState(false);
  const [error, setError] = useState(false)

  return (
    <main className="main-container">

      <Login setAuthentification={setAuthentification} setError={setError} /> 

      {authentification && <Display authentification={authentification} />}
      {error && <Display error={error} />}    

    </main>
  );
}

export default App;
