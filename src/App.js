
import './App.css';
import Cards from './components/Cards';
import Main from './components/Main';
import Main_Second from './components/Main_Second/Main_Second';
import Nav from './components/Nav/Nav';

function App() {
  return (
    <div>
      <Nav/>
      <Main/>
      <Main_Second/>
      <Cards />
    </div>
  );
}

export default App;