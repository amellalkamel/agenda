
import './App.css';
import Calender from './pages/Calender';
import DivEvent from './components/DivEvent';
import GoogleTagManager from './GoogleTagManager';
import GoogleTagManagerNoScript from './GoogleTagManagerNoScript';

function App() {
  return (
    <div className="App">
      <GoogleTagManager gtmId="GTM-TBF4R6ZN" />
      <GoogleTagManagerNoScript gtmId="GTM-TBF4R6ZN" />
      <Calender/>
      <DivEvent/>
    </div>
  );
}

export default App;
