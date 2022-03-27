import './App.css';
import Bottomend from './components/Bottomend';
import Bottommain from './components/Bottommain';
import EndingMain from './components/EndingMain';
import Navbar from './components/Navbar';
import Secondmain from './components/Secondmain';
import Topmain from './components/Topmain';

function App() {

  return (
    <div className="App">
      <Navbar/><br/><br/><br/><br/><br/>
      <Topmain />
      <Secondmain />
      <EndingMain />
      <Bottommain />
      <Bottomend />
     
    </div>
  );
}

export default App;
