import Sidebar from "./components/Sidebar";
import TitleBar from "./components/TitleBar";
import MapStage from "./components/MapStage";

function App() {
  return (
    <div>
      <div className="row">
        <div className="col-2">
          <TitleBar />
          <Sidebar />
        </div>
        <div className="col-8">
          <MapStage />
        </div>
        
      </div>
    </div>
  );
}

export default App;