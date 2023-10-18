import './App.css';
import Table from './components/Table';
import { alcoholList } from './utils/utils';

function App() {
  return (
    <div className="App">
      <h1>Wine Data</h1>
      <Table alcoholList = {alcoholList} property = {"Flavanoids"}/>
      <Table alcoholList = {alcoholList} property = {"Gamma"}/>
    </div>
  );
}

export default App;
