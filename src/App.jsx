import './App.css'
import Planos from './pages/Planos/Planos';
import Treinos from './pages/Treinos/Treinos'
import Acompanhamento from './pages/Acompanhamento/Acompanhamento'
import Home from './pages/Home/Home';
import Cadastro from './pages/Cadastro/Cadastro';
import { BrowserRouter as Roteador, Routes, Route } from 'react-router-dom'


function App() {


  return (
    <>
      <Roteador>
        <Routes>

          <Route exact path='/' Component={Home} />
          <Route exact path='/planos' Component={Planos} />
          <Route exact path='/treinos' Component={Treinos} />
          <Route exact path='/acompanhamento' Component={Acompanhamento} />
          <Route exact path='/cadastro' Component={Cadastro} />

        </Routes>
      </Roteador>
    </>
  );
}

export default App