import './App.css';
import WesleyFooter from './Components/WesleyFooter';
import WesleyHeader from "./Components/WesleyHeader";
import WesleyContainer from './Containers/WesleyContainer';

function App() {
  return (
    <div className="App">
      <WesleyHeader />
      <WesleyContainer />
      <WesleyFooter />
    </div>
  );
}

export default App;
