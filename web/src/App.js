import React, { useEffect, useState } from 'react';
import api from './services/api'
import DevItem from './components/DevItem';
import DevForm from './components/DevForm';

import './global.css'
import './App.css'
import './Sidebar.css'
import './Main.css'



function App() {
  const [devs, setDevs] = useState([]);



  useEffect(() => {
    async function loadDevs() {
      const response = await api.get('/devs');
      //console.log(response.data);
      setDevs(response.data);
    }
    loadDevs();
  }, [])

  async function handleAddDev(data) {
    console.log('chama função', data)
    const response = await api.post('/devs', data)

    setDevs([...devs, response.data]);
  }

  return (
    <div id="app">
      <aside>
        <strong>Cadastrar</strong>
        <DevForm onSubmit={handleAddDev} />
      </aside>

      <main>
        <ul>
          {devs.map(value => (
            <DevItem key={value._id} value={value} />
          ))}
        </ul>
      </main>
    </div>
  );
}

export default App;
