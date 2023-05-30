import { Routes, Route } from 'react-router-dom';
// import './assets/css/bootstrap.min.css'
// import 'bootstrap/dist/css/bootstrap.min.css'
import './assets/sass/style.scss';
import './assets/css/responsive.css';
import Home from './pages/Home';
import About from './pages/About';
import Products from './pages/Products';
import Contact from './pages/Contact';
import Footer from './components/layout/Footer';
import Header from './components/layout/Header';
import CategoryPage from './pages/CategoryPage';
import {useState} from 'react';
import CustomHeader from './components/layout/CustomHeader';
function App() {
  const [page,setPage] = useState();

  
  console.log("page is",page);

  return (
    <div className="App">
      {/* <Header page={page} /> */}
      <CustomHeader />
      <Routes>
        <Route path='/' element={<Home setPage={setPage} />}></Route>
        <Route path='/about' element={<About/>}></Route>
        <Route path='/products/' element={<Products/>}></Route>
        <Route path='/products/:category' element={<CategoryPage/>}></Route>
        <Route path='/contact-us' element={<Contact/>}></Route>
      </Routes>
      <Footer/>
    </div>
  );
}

export default App;
