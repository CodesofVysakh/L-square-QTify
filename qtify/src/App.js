import logo from './logo.svg';
import './App.css';
import Button from './components/Button/Button';
import SearchBar from './components/SearchBar/SearchBar';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <SearchBar />
        <Button>Give Feedback</Button>
      </header>
    </div>
  );
}

export default App;
