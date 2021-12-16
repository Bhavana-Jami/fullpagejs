
import './App.css';

import { BrowserRouter as Router,Route,Routes} from 'react-router-dom';

import Navbar from './components/Navbar';
import Home from './components/Home';
import Spiritual from './components/Spiritual';
import Travel from './components/Travel';
import Tech from './components/Tech';
import Love from './components/Love';

function App() {
  return (
    <Router>
    <div className="App">
      <Navbar/>
      <Routes>
        <Route exact path="/"><Home/></Route>
        <Route path="/Spiritual"><Spiritual/></Route>
        <Route path="/Travel"><Travel/></Route>
        <Route path="/Love"><Love/></Route>
        <Route path="/Tech"><Tech/></Route>
      </Routes>
    </div>
    </Router>
  );
}

export default App;
