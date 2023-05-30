import React from "react";
import { data, images } from "../../contents";
import Card from "../Card";
import TiltCard from "../TiltCard";

function ProductGrid({ category }) {
  return (
    <section id="product-list-sec">
      {category === "Boat & Kayak" && (
        <div className="product-list-div boat">
          {data.boat.map((item, index) => (
            <div key={index} className="box">
              <div className="box-head">
                <img src={Object.values(item)[0]} alt="boat" />
              </div>
              <div className="box-body">
                <h3>{Object.values(item)[1]}</h3>
                <h4>{Object.values(item)[2].join(",")}</h4>
              </div>
              <div className="box-footer">
                <ul className="list-unstyled boat-info-list">
                 
                  <li>
                    <p>{Object.keys(item)[3]}</p>
                    <p>{Object.values(item)[3]}</p>
                  </li>
                  <li>
                    <p>{Object.keys(item)[4]}</p>
                    <p>{Object.values(item)[4]}</p>
                  </li>
                  <li>
                    <p>{Object.keys(item)[5]}</p>
                    <p>{Object.values(item)[5]}</p>
                  </li>
                  <li>
                    <p>{Object.keys(item)[6]}</p>
                    <p>{Object.values(item)[6]}</p>
                  </li>
                  <li>
                    <p>{Object.keys(item)[7]}</p>
                    <p>{Object.values(item)[7]}</p>
                  </li>
                </ul>
              </div>
            </div>
              // <Card cardImg={Object.values(item)[0]} cardTitle={Object.values(item)[1]} items={data.boat} />
          ))}
          {/* <div className="box">
                <div className="box-head">
                    <img src={images.boat2} alt="boat"/>
                </div>
                <div className="box-body">
                    <h3>Child's Kayak(SF-1002)</h3>
                    <h4>Red</h4>
                </div>
                <div className="box-footer">
                    
                    <ul className="list-unstyled boat-info-list">
                        <li><p>Length</p><p>2.37 MTR</p></li>
                        <li><p>width</p><p>0.78 MTR</p></li>
                        <li><p>Depth</p><p>1.78 KG</p></li>
                        <li><p>Capacity</p><p>125 KG</p></li>
                    </ul>
                </div>
            </div>
            <div className="box">
                <div className="box-head">
                    <img src={images.boat3} alt="boat"/>
                </div>
                <div className="box-body">
                    <h3>Adult's Kayak(SF-1003)</h3>
                    <h4><span>Red</span> <span> Orange</span> <span> Blue</span> <span> Yellow</span></h4>
                </div>
                <div className="box-footer">
                   
                    <ul className="list-unstyled boat-info-list">
                        <li><p>Length</p><p>1.82 MTR</p></li>
                        <li><p>width</p><p>0.60 MTR</p></li>
                        <li><p>Depth</p><p>0.22 KG</p></li>
                        <li><p>Weight</p><p>9.07 KG</p></li>
                        <li><p>Capacity</p><p>55 KG</p></li>
                    </ul>
                </div>
            </div>
            <div className="box">
                <div className="box-head">
                    <img src={images.banner4} alt="boat"/>
                </div>
                <div className="box-body">
                    <h3>Kid's Kayak(SF-1005)</h3>
                    <h4>Blue</h4>
                </div>
                <div className="box-footer">
                    
                    <ul className="list-unstyled boat-info-list">
                        <li><p>Length</p><p>1.82 MTR</p></li>
                        <li><p>width</p><p>0.60 MTR</p></li>
                        <li><p>Depth</p><p>0.22 KG</p></li>
                        <li><p>Weight</p><p>8.16 KG</p></li>
                        <li><p>Capacity</p><p>60 KG</p></li>
                    </ul>
                </div>
            </div>
            <div className="box">
                <div className="box-head">
                    <img src={images.boat5} alt="boat"/>
                </div>
                <div className="box-body">
                    <h3>Fishing Kayak(SF-1007)</h3>
                    <h4>Gray</h4>
                </div>
                <div className="box-footer">
                    
                    <ul className="list-unstyled boat-info-list">
                        <li><p>Length</p><p>3.04 MTR</p></li>
                        <li><p>width</p><p>0.78 MTR</p></li>
                        <li><p>Depth</p><p>0.35 KG</p></li>
                        <li><p>Weight</p><p>26.48 KG</p></li>
                        <li><p>Capacity</p><p>125 KG</p></li>
                    </ul>
                </div>
            </div>
            <div className="box">
                <div className="box-head">
                    <img src={images.boat6} alt="boat"/>
                </div>
                <div className="box-body">
                    <h3>Parent-child Kayak(SF-2002)</h3>
                    <h4>Red</h4>
                </div>
                <div className="box-footer">
                   
                    <ul className="list-unstyled boat-info-list">
                        <li><p>Length</p><p>2.37 MTR</p></li>
                        <li><p>width</p><p>0.78 MTR</p></li>
                        <li><p>Depth</p><p>1.78 KG</p></li>
                        <li><p>Capacity</p><p>125 KG</p></li>
                    </ul>
                </div>
            </div>
            <div className="box">
                <div className="box-head">
                    <img src={images.boat7} alt="boat"/>
                </div>
                <div className="box-body">
                    <h3>SUP</h3>
                    <h4>(SF-IS001s-10)</h4>
                </div>
                <div className="box-footer">
                    
                    <ul className="list-unstyled boat-info-list">
                        <li><p>Length</p><p>3 MTR</p></li>
                        <li><p>width</p><p>0.76 MTR</p></li>
                        <li><p>Depth</p><p>0.15 KG</p></li>
                        <li><p>Weight</p><p>14 KG</p></li>
                        <li><p>Capacity</p><p>120 KG</p></li>
                    </ul>
                </div>
            </div> */}
        </div>
      )}

      {category === "Cleaning Materials" && (
        <div className="product-list-div boat">
          {data.cleaningMaterial.map((item, index) => (
        //     <div class="box clean">
        //     <div class="box-head">
        //         <img src={item.imgUrl} alt="cleaning-materials"/>
        //     </div>
        //     <div class="box-body">
        //         <h3>{item.product}</h3>
        //     </div>
        //     <div class="box-footer">
        //         <h4>{item.modal}</h4>
        //         <p>{item.desc}</p>
        //     </div>
        // </div>
        <Card cardImg={item.imgUrl} cardTitle={item.product} itemModal={item.modal} itemDesc={item.desc} />
          ))}
        </div>
      )}

      {category === "Garden Items" && (
        <div className=" flex-center-column" style={{'minHeight':'40vh'}}>
          <h2 className="text-center">Will Update Soon...</h2>
        </div>
      )}

      {category === "Building Materials" && (
        <div className="product-list-div boat">
          {data.buildingMaterial.map((item, index) => (
            // <div class="box build">
            //   <div class="box-head">
            //     <img
            //       src={item.imgUrl}
            //       alt="building-materials"
            //     />
            //   </div>
            //   <div class="box-body">
            //     <h3>{item.product}</h3>
            //   </div>
            //   <div class="box-footer"></div>
            // </div>
            <Card cardImg={item.imgUrl} cardTitle={item.product}/>
          ))}
        </div>
      )}

      
    </section>
  );
}

export default ProductGrid;
