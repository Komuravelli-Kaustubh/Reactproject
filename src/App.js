


// import logo from './logo.svg';
import './App.css';
import Dashboard from './Componenets/Dashboard';
import { Routes, Route } from 'react-router-dom'

import Home from './Componenets/Home';
import Jobrecomm from './Componenets/Jobrecomm';
import Previous from './Componenets/Previous';
import Profile from './Componenets/Profile';
import Updateprof from './Componenets/Updateprof';
import Savedjobs from './Componenets/Savedjobs';
import Signinpage from './Componenets/Signinpage';
import Signuppage from './Componenets/Signuppage';


function App() {
  return (
    <div class="App">
      <Routes>
        <>
          {/* <Home/>
          <Signinpage/>
          <Signuppage/>
          <Dashboard/>
          <Jobrecomm/>
          <Savedjobs/>
          <Profile/> */}
          <Route path="/" element={<Home />} />
          
         
          <Route path="/Signinpage" element={<Signinpage />} />
          <Route path="/Signuppage" element={<Signuppage/>}/>
          <Route path="/Dashboard" element={<Dashboard/>}/>
          <Route path="/Updateprof" element={<Updateprof/>}/>
          <Route path="/Profile" element={<Profile/>}/>
          <Route path="/Jobrecomm" element={<Jobrecomm/>}/>
          <Route path="/Savedjobs" element={<Savedjobs/>}/>
          
        </>
        </Routes>
 
    </div>
  )
}


export default App;
