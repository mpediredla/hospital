import './App.css';
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import Menu1 from './Components/Menu';
import { Routes,Route,Navigate } from 'react-router-dom';
import OutBox from './Components/OutBox';
import Login from './Components/Login';
import Register from './Components/Register';
import PatientDetails from './Components/PatientDetails';
import ListOfPatients from './Components/ListOfPatients';
import PatientDetails2 from './Components/PatientDetails2';

function App() {
  return (
    <div className="App">
  <Routes>
  <Route path='/' element={<Login/>} />
  <Route path='register' element={<Register/>} />
    <Route path='menu' element={<Menu1/>} >
    <Route path='patientslist' element={<ListOfPatients/>} />
    <Route path='patientDetails' element={<PatientDetails/>} />
    <Route path='PatientDetails2' element={<PatientDetails2/>}/>
    <Route path='outbox' element={<OutBox/>} />

    </Route>
  </Routes>

    </div>
  );
}

export default App;

