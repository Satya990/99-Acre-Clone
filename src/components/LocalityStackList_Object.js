import React from "react";
// import "./LocalityStackList_Object.css";
import pic8 from '../pics/defaultLocality.png'


function LocalityStackListObject(){

    return(
   
        <div className="card2">
        <div className="card2-f">
             <div className="card2-image"> 
                  <img src={pic8}  alt="..."/>     
             </div>
             <div className="card2-body">
                  <p className="card2-title">Arihant South Winds</p>
                  <p className="card2-text">1 BHK from ₹25 Lac</p>
                  <p className="card2-text">2 BHK from ₹85 Lac</p> 
                  <hr></hr>   
             </div>
        </div>
        
        <div className="card2-f">
             <div className="card2-image">  
                  <img src={pic8}  alt="..."/>     
             </div>
             <div className="card2-body">
             <p className="card2-title">Arihant South Winds</p>
                  <p className="card2-text">1 BHK from ₹25 Lac</p>
                  <p className="card2-text">2 BHK from ₹85 Lac</p> 
                  <hr></hr>
             </div>
        </div>
   </div>

    );
}

export default LocalityStackListObject;