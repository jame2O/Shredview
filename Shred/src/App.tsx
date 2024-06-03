import ListGroup from "./components/ListGroup";
import Sidebar from "./components/Sidebar";

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
  return <div><Sidebar /></div>;
}

export default App;