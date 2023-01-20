import logo from './logo.svg';
import './App.css';
import InputResultProvider from './providers/InputResultProvider';
import Ops from './components/Ops';
import Result from './components/Result';
import UserInput from './components/UserInput';
function App() {
  return (
    <div className="App">
      <InputResultProvider>
        <h1>Simplest Working Calculator</h1>
        <Result />
        <UserInput />
        <Ops />
      </InputResultProvider>
    </div>
  );
}

export default App;
