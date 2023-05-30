import React from 'react'
import {Link} from 'react-router-dom';
function SideBar() {
  return (
    <section id="product-list-sidebar">
   
        <div className="product-sidebar-div">
            <ul className="list-unstyled">
                <li><Link to='../products/Boat & Kayak'>Boats & Kayaks</Link></li>
                <li><Link to='../products/Cleaning Materials'>Cleaning Materials</Link></li>
                <li><Link to='../products/Garden Items'>Garden Items</Link></li>
                <li><Link to='../products/Building Materials'>Building Materials</Link></li>
                
            </ul>
        </div>
    
</section>
  )
}

export default SideBar