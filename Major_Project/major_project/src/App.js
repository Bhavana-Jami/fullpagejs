
import './App.css';
import { BrowserRouter as Router,Route,Routes} from 'react-router-dom'

import KnowledgeSharing from './components/KnowledgeSharing';
import Quiz from './components/Quiz';
import Rating from './components/Rating';
import Guidance from './components/Guidance';
import Home from './components/Home';

function App() {
  return (
    <Router>
      <div className="App">
          <Routes>
            <Route path="/" exact><Home/></Route>
            <Route path="/Quiz"><Quiz/></Route>
            <Route path="/Guidance"><Guidance/></Route>
            <Route path="/Rating"><Rating/></Route>
            <Route path="/KnowledgeSharing"><KnowledgeSharing/></Route>
          </Routes>
          
      </div>
    </Router>
  );
}

export default App;
