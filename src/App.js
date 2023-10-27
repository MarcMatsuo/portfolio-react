import './App.css';
import About from './components/About';
import Experience from './components/Experience';
import Habilidades from './components/Habilidades';
import Header from './components/Header';
import Inicio from './components/Inicio';
import Italic from './components/Italic';
import Projetos from './components/Projetos';

import { useTranslation } from 'react-i18next';

function App() {
  const {t} = useTranslation()
  return (
    <div className='app'>
      <Header />
      <Inicio />
      <About />
      <Projetos />
      <footer style={{textAlign: "center", backgroundColor: "#393E46", padding: "1em"}}>
        <Italic>{t('Contato')}: mmatsuo460@gmail.com</Italic>
        <Italic>{t('Desenvolvido por')} Marcos Matsuo</Italic>
      </footer>
    </div>
  );
}

export default App;
