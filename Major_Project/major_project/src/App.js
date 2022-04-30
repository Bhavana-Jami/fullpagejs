
import './App.css';
import { BrowserRouter as Router,Route,Routes} from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css';
import KnowledgeSharing from './components/KnowledgeSharing';
import Quiz from './components/Quiz';
import Rating from './components/Rating';
import Guidance from './components/Guidance';

import ProjectProfile from './components/ProjectProfile';
import Posts from './components/Posts';
import Navbarr from './components/Navbar';
import Community from './components/Community';
import Home from './components/Home';

function App() {
  return (
    <div className='text'>
    <Router>
      <Navbarr/>
          <Routes>
            <Route path="/" exact element={<Home/>}/>
            <Route path="/Home" exact element={<Home/>}/>
            <Route path="/Quiz" element={<Quiz/>}/>
            <Route path="/Guidance" element={<Guidance/>}/>
            <Route path="/Rating" element={<Rating/>}/>
            <Route path="/KnowledgeSharing" element={<KnowledgeSharing/>}/>
            <Route path="/ProjectProfile" element={<ProjectProfile/>}/>
            <Route path="/Posts" element={<Posts/>}/>
            <Route path="/Community" element={<Community/>}></Route>
            <Route path="/LoginForm" element={<Community/>}></Route>
          </Routes>
    </Router>
    </div>
  );
}

export default App;
