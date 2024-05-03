import './App.css';
import MailView from './components/MailView';
import NavBar from './components/NavBar';
import SideBar from './components/SideBar';

function App() {
  return (
    <div className="App">
      <NavBar />
      <div className='firstContainer'>
        <SideBar />
        <MailView />
      </div>
    </div>
  );
}

export default App;
