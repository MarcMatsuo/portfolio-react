import './App.css';
import About from './components/About';
import Habilidades from './components/Habilidades';
import Header from './components/Header';
import Inicio from './components/Inicio';
import Italic from './components/Italic';
import Projetos from './components/Projetos';

function App() {
  return (
    <div className='app'>
      <Header />
      <Inicio />
      <Habilidades />
      <Projetos />
      <About />
      <footer style={{textAlign: "center", backgroundColor: "#393E46", padding: "1em"}}>
        <Italic>Contato: mmatsuo460@gmail.com</Italic>
        <Italic>Desenvolvido por Marcos Matsuo</Italic>
      </footer>
    </div>
  );
}

export default App;
