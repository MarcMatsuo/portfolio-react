import './App.css';
import Habilidades from './components/Habilidades';
import Header from './components/Header';
import Inicio from './components/Inicio';
import Projetos from './components/Projetos';

function App() {
  return (
    <div className='app'>
      <Header />
      <Inicio />
      <Habilidades />
      <Projetos />
    </div>
  );
}

export default App;
