import React, { useEffect, useState } from 'react';

import DevItem from './componentes/DevItem';
import DevForm from './componentes/DevForm';

import './global.css';
import './App.css';
import './Sidebar.css';
import './Main.css';

import api from './services/api';

const App = () => {
  const [dev_list, setDevList] = useState([]);

  const loadDevList = async () => {
    const response = await api.get('./devs') || {};
    setDevList(response.data)
  }

  useEffect(() => {
    loadDevList();
  }, [])

  const handleAddDev = async (data) => {
    const response = await api.post('/devs', data);

    const dev = response.data || {};
    setDevList([...dev_list, dev]);
  }

  return (
    <div id="app">
      <aside>
        <strong>Cadastrar</strong>
        <DevForm onSubmit={handleAddDev} />
      </aside>

      <main>
        <ul>
          {dev_list.map((dev) => (<DevItem key={dev._id} dev={dev} />))}
        </ul>
      </main>
    </div>
  );
}

export default App;
