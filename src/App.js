
import './App.css';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import NavBar from './component/NavBar';
import MainContent from './component/MainContent';
import Card from './component/Card';
import Middle from './component/Middle';
import Bio from './component/Bio';
import Female from './component/Female';
import Links from './component/Links';
import Foot from './component/Foot';

function App() {
  return (
    <>
    <NavBar/>
    <MainContent/>
    <Card/>
    <Middle/>
    <Bio/>
    <Female/>
    <Links/>
    <Foot/>
    </>
  );
}

export default App;
