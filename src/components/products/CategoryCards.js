import { images } from "../../contents";
import {Link} from 'react-router-dom';
function CategoryCards() {
  const g5 = images.gallery5;
  return (
    <section id="pro-categorie-sec">
      <div className="container">
        <div className="pro-categorie-div">
          <div className="box" style={{ backgroundImage: `url(${images.gallery5})` }}>
            
            <Link to='Boat & Kayak'><h3>Boats & Kayaks</h3></Link>
          </div>
          <div className="box" style={{backgroundImage:`url(${images.cleaning})`}} >
           
            <Link to='Cleaning Materials'><h3>Cleaning Materials</h3></Link>

          </div>
          <div className="box" style={{backgroundImage:`url(${images.garden})`}}>
            
            <Link to='Garden Items'><h3>Garden Items</h3></Link>

          </div>
          <div className="box" style={{backgroundImage:`url(${images.construction})`}}>
            
            <Link to='Building Materials'><h3>Building Materials</h3></Link>

          </div>
        </div>
      </div>
    </section>
  );
}

export default CategoryCards;
