// import logo from './logo.svg';
import './App.css';
import data from './components/Data';
import Calendar from './components/Calendar';

function App() {
  return (
    <div id="wrapper">
      <Calendar data={data}/>
    </div>
  );
}

export default App;
