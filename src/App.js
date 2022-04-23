import logo from './logo.svg';
import './App.css';
import Header from './components/Header/Header';
import { Route, Routes } from 'react-router-dom';
import AddProducts from './components/AddProducts/AddProducts';
import Home from './components/Home/Home';
import ManageProducts from './components/ManageProducts/ManageProducts';
import UpdateProduct from './components/UpdateProduct/UpdateProduct';


function App() {
  return (
    <div className="App">

      <Header></Header>

      <Routes>

        <Route path='/' element={<Home></Home>}></Route>

        <Route path='/addproducts' element={<AddProducts></AddProducts>}></Route>

        <Route path='/update/:id' element={<UpdateProduct></UpdateProduct>}></Route>

        <Route path='/manage-products' element={<ManageProducts></ManageProducts>}></Route>

      </Routes>



    </div >
  );
}

export default App;
