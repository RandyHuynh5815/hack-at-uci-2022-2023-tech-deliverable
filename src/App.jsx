import Application from "./components/application/Application.jsx"
import Petr from "./components/petr/Petr.jsx";
import "./app.scss";

function App() {
  return (
    <div className="app">
      <div className="left">
        <Application />
      </div>
      <div className="right">
        <Petr />
      </div>
    </div>
  );
}

export default App;
