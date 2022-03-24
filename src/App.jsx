import Application from "./components/application/Application.jsx"
import "./app.scss";

function App() {
  return (
    <div className="app">
      <div className="left">
        <Application />
      </div>
      <div className="right">
        <div className="imgContainer">
          <img src="petr.png"/>
        </div>
      </div>
    </div>
  );
}

export default App;
