import logo from './logo.svg';
import './App.css';
import FusionChartComponent from './component/FusionChartComponent';
import DataTableComponent from './component/DataTableComponent';


const data = [
  {
    name: 'John',
    age: 28,
    city: 'New York',
  },
  {
    name: 'Alice',
    age: 24,
    city: 'Los Angeles',
  },
  // Add more data rows as needed
];

const columns = [
  {
    Header: 'Name',
    accessor: 'name',
  },
  {
    Header: 'Age',
    accessor: 'age',
  },
  {
    Header: 'City',
    accessor: 'city',
  },
];

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>FusionCharts Example</h1>
        <FusionChartComponent />
      </header>
      <div style={{ height: '50px',  }}></div>
      <header className="App-header">
        <h1>Data Table Example</h1>
        <DataTableComponent data={data} columns={columns} />
      </header>
    </div>
  );
}

export default App;
