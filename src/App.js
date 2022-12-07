import './App.css';
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import Menu1 from './Components/Menu';
import { Routes,Route } from 'react-router-dom';
import Inbox from './Components/Inbox';
import OutBox from './Components/OutBox';
import Login from './Components/Login';

function App() {
  return (
    <div className="App">
  <Routes>
  <Route path='/' element={<Login/>} />
    <Route path='menu' element={<Menu1/>} >
    <Route path='inbox' element={<Inbox/>} />
    <Route path='outbox' element={<OutBox/>} />
    </Route>
  </Routes>

    </div>
  );
}

export default App;
