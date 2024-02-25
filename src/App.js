import logo from './logo.svg';
import './App.css';
import OuterComponent from './component/OuterComponent';


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <OuterComponent/>
      </header>
    </div>
  );
}

export default App;
