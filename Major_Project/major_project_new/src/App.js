
import './App.css';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import Home from './components/Home';
import Quiz from './components/Quiz';

function App() {
  return (
   
    <div className="App">
      <Router>
        <Home/>
        <Routes>
            <Route path="/Quiz" component={<Quiz/>}/>
        </Routes>
      </Router>
     </div> 
  );
}

export default App;
