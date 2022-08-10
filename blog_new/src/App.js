
import './App.css';

import { BrowserRouter as Router,Route,Routes} from 'react-router-dom';

import Navbar from './components/Navbar';
import Home from './components/Home';
import Spiritual from './components/Spiritual';
import Travel from './components/Travel';
import Tech from './components/Tech';
import Love from './components/Love';
import BaseComponent from './components/BaseComponent';
import TopNabBar from './components/TopNabBar';
import GlobalStyle from './styles/GlobalStyles';
import Article from './components/Article';



function App() {
  return (
    <Router>
      <GlobalStyle/>
    <div className="App">
    
      <Routes>
       
      <Route path="/" exact element={<Home/>}/>
      <Route path="/Home" exact element={<Home/>}/>
      <Route path="/Spiritual" element={<Spiritual/>}/>
      <Route path="/Travel" element={<Travel/>}/>
      <Route path="/Love" element={<Love/>}/>
      <Route path="/Tech" element={<Tech/>}/>
      <Route path="/Article" element={<Article/>}/>
      <Route path='/BaseComponent' element={<BaseComponent/>}/>
      </Routes>
    </div>
    </Router>
  );
}

export default App;
