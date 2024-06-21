import Sidebar from "./components/Sidebar";
import TitleBar from "./components/TitleBar";
import MapStage from "./components/MapStage";

function App() {
  return (
    <div className="container">
      <div className="row">
         <TitleBar />  
      </div>
      <div className="row">
        <Sidebar />
      </div>
      <div className="row">
        <MapStage />
      </div>
    </div>
  );
}

export default App;