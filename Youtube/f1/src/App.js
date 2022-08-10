import React from "react";
import ReactFullpage from "@fullpage/react-fullpage";
import './index.css';

const anchors = ["firstPage", "secondPage", "thirdPage"];

const App = () => (
  <ReactFullpage
    anchors={anchors}
    navigation
    navigationTooltips={anchors}
    navigat
    sectionsColor={["#7fff00","#00ffff","#29ab87" ]}
    onLeave={(origin, destination, direction) => {
      console.log("onLeave event", { origin, destination, direction });
    }}
    render={({ state, fullpageApi }) => {
      console.log("render prop change", state, fullpageApi);

      return (
        <div>
          <div className="section"><h3>Section 1</h3></div>
          <div className="section"><h3>Section 2</h3></div>
          <div className="section"><h3>Section 3</h3></div>
        </div>
      );
    }}
  />
);
export default App;