import {images} from '../../contents';
import { Link } from 'react-router-dom';
import {useState} from 'react';

function Header({page}) {

  const [navbg,setNavBg] = useState(false);


  const ChangeNavBg = () => {
    if(window.scrollY >= 50){
      setNavBg(true);
    }else{
      setNavBg(false)
    }
  }
// console.log("page from header ",page)
  window.addEventListener('scroll',ChangeNavBg);
  return (
    <header className="sticky-lg-top">
    {/* <nav className="navbar navbar-expand-lg navbar-light bg-nav fixed-top pt-lg-4"> */}
    <nav className={navbg? 'navbar navbar-expand-lg navbar-light bg-nav fixed-top pt-lg-4 bg-white':"navbar navbar-expand-lg navbar-light bg-nav fixed-top pt-lg-4" }>
      <div className="container-lg">
        <a className="navbar-brand" href="index.html"><img src={images.logo} alt="logo" /></a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link to='/' className="nav-link active" aria-current="page" href="index.html">Home</Link>
            </li>
            <li className="nav-item">
              <Link to='/about' className="nav-link" href="about.html">About</Link>
            </li>
            <li className="nav-item">
              <Link to='/products' className="nav-link" href="products.html">Products</Link>
            </li>

          </ul>
          <Link to="/contact-us" className="btn btn-primary nav-btn rounded-pill" >Contact Us</Link>
        </div>
      </div>
    </nav>
  </header>
  )
}

export default Header