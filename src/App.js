import logo from './logo.svg';
import './App.css';
import Header from './components/Header/Header';
import { Route, Routes } from 'react-router-dom';
import AddProducts from './components/AddProducts/AddProducts';
import Home from './components/Home/Home';

function App() {
  return (
    <div className="App">

      <Header></Header>

      <Routes>

        <Route path='/' element={<Home></Home>}></Route>

        <Route path='/addproducts' element={<AddProducts></AddProducts>}></Route>

      </Routes>

    </div >
  );
}

export default App;
