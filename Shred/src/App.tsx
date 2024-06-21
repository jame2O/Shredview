import ListGroup from "./components/ListGroup";
import Sidebar from "./components/Sidebar";
import TitleBar from "./components/TitleBar";

let items = [
  'Brechfa',
  'Abergorlech',
  'Llansawel',
  'Llanfynydd'
];
const handleSelectItem = (item: string) => {
  console.log(item);
}
function App() {
  //return <div><ListGroup items={items} heading="Brechfa Forest Villages" onSelectItem={handleSelectItem}/></div>;
  return (
    <div className="container">
      <div className="row">
         <TitleBar />  
      </div>
      <div className="row">
        <Sidebar />
      </div>
      <div className = "row">
        <MapStage />
      </div>
    </div>
  );
}

export default App;