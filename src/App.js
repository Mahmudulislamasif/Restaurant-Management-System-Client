import logo from './logo.svg';
import './App.css';
import Navbar from './Pages/Shared/Navbar';
import Home from './Pages/Home/Home';
import Footer from './Pages/Shared/Footer';
import { Route, Routes } from 'react-router-dom';
import FoodItem from './Pages/Home/FoodItem';
import FoodDetails from './Pages/Home/FoodDetails';
import Login from './Pages/Login/Login';
import Registration from './Pages/Login/Registration';
import Profile from './Pages/Profile/Profile';

function App() {
  return (
    <div className="App">
      <Navbar></Navbar>
       <Routes>
              <Route path='/' element={<Home></Home>}></Route>
              <Route path='home' element={<Home></Home>}></Route>
              <Route path='login' element={<Login></Login>}></Route>
              <Route path='signup' element={<Registration></Registration>}></Route>
              <Route path='profile' element={<Profile></Profile>}></Route>
              <Route path='food/:foodId' element={<FoodDetails></FoodDetails>}></Route>
       </Routes>

      <Footer></Footer>
    </div>
  );
}

export default App;
