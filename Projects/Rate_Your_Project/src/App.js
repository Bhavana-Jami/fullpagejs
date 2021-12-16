
import './App.css';
import Particles from 'react-particles-js';

function App() {
  return (
    <div className="App">
      <Particles
        params={{
          particles: {
            color: {
              value: "#000000"
            },
            line_linked: {
              color: {
                value: "#000000"
              }
            },
            number: {
              value: 60
            },
            size: {
              value: 2.4
            },
            interactivity: {
              detect_on: "canvas",
              events: {
                onhover: {
                  enable: true,
                  mode: "bubble"
                }
              }
            }
          }}}
        />
    </div>
  );
        }

export default App;
