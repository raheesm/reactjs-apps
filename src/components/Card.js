import React from "react";

function Card({ cardTitle, cardImg, itemModal, itemDesc,items }) {
    // console.log(itemModal.length);
  return (
    <div className="box">
      <div className="box-head">
        <img src={cardImg} alt="feature" />
      </div>
      <div className="box-body">
        <h3>{cardTitle}</h3>
      </div>
      
      {/* {itemModal.length>0? */}
      <div class="box-footer">
        <h4>{itemModal}</h4>
        <p>{itemDesc}</p>
        {/* <ul className="list-unstyled boat-info-list">
        {items.map(item=>
            <li>
                <p>{Object.keys(item)[3]}</p>
                <p>{Object.values(item)[3]}</p>
                
            </li>
            
            )}
            <li>
                <p>{keys[4]}</p>
                <p>{values[4]}</p>
            </li>
            <li>
                <p>{keys[5]}</p>
                <p>{values[5]}</p>
            </li>
            <li>
                <p>{keys[6]}</p>
                <p>{values[6]}</p>
            </li>
            <li>
                <p>{keys[7]}</p>
                <p>{values[7]}</p>
            </li>

        </ul> */}
      </div>
     
    </div>
  );
}

export default Card;
