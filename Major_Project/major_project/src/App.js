
import './App.css';
import { BrowserRouter as Router,Route,Routes} from 'react-router-dom'
import { render } from "react-dom";
import KnowledgeSharing from './components/KnowledgeSharing';
import Quiz from './components/Quiz';
import Rating from './components/Rating';
import Guidance from './components/Guidance';
import Home from './components/Home';
import ProjectProfile from './components/ProjectProfile';

function App() {
  return (
    <Router>
          <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/Quiz" element={<Quiz/>}/>
            <Route path="/Guidance" element={<Guidance/>}/>
            <Route path="/Rating" element={<Rating/>}/>
            <Route path="/KnowledgeSharing" element={<KnowledgeSharing/>}/>
            <Route path="/ProjectProfile" element={<ProjectProfile/>}/>
          </Routes>
    </Router>
  );
}

export default App;
