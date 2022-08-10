
import './App.css';
import { BrowserRouter as Router,Route,Routes} from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css';
import KnowledgeSharing from './components/KnowledgeSharing';
import Quiz from './components/Quiz';
import Rating from './components/Rating';
import Guidance from './components/Guidance';
import Register from './components/Register'
import SignIn from './components/SignIn'
import Myprojects from './components/Myprojects'


import ProjectProfile from './components/ProjectProfile';
import Posts from './components/Posts';
import Navbarr from './components/Navbar';
import Community from './components/Community';
import Home from './components/Home';
import LoginForm from './components/Community';
import Frontend from './components/Frontend';
import Backend from './components/Backend';
import Fullstack from './Fullstack';
import Ideas from './components/Ideas';
import Apppp from './Apppp';
import Profile from './components/Profile';
import Fullstack2 from './components/Fullstack2';
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
            <Route path="/LoginForm" element={<LoginForm/>}></Route>
            <Route path="/Frontend" element={<Frontend/>}></Route>
            <Route path="/Backend" element={<Backend/>}></Route>
            <Route path="/Fullstack2" element={<Fullstack2/>}></Route>
            <Route path="/Ideas" element={<Ideas/>}></Route>
            <Route path="/Apppp" element={<Apppp/>}></Route>
            <Route path="/SignIn" element={<SignIn/>}></Route>
            <Route path="/Profile" element={<Profile/>}></Route>
            <Route path='/Myprojects' element={<Myprojects/>}></Route>
          </Routes>
    </Router>
      
    </div>
  );
}

export default App;
