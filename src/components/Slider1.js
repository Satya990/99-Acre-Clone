import React from "react";
// import "./Slider1.css";
import { useEffect, useState } from "react";
import Slider2 from "./Slider2";
import ProjectStackList1 from "./ProjectStackList";
import axios from "axios";



const serverUrl = "https://fswi-99acres-clone.herokuapp.com/";

function Slider1(){

     const [cities, setCities] = useState([]);
  const [properties, setProperties] = useState([]);
 
  const [pn, setPn] = useState(0);
  const [infp, setInfp] = useState(true);
  const [selectedProperty, setSelectedProperty] = useState({});
  
  const [searchText, setSearchText] = useState("");

  const removePopup = () => {
     setPn(0);
   };
 
   const getCities = () => {
     axios
       .get(serverUrl + "cities")
       .then((res) => setCities(res.data))
       .catch((error) =>
         alert("Something went wrong while trying to fetch cities! " + error)
       );
    
   };
   const getProperties = () => {
     axios
       .get(serverUrl + "properties")
       .then((res) => setProperties(res.data))
       .catch((error) =>
         alert("Something went wrong while trying to fetch properties! " + error)
       );
   };
 
   useEffect(getCities, []);
   useEffect(getProperties, []);
 
   const handleRequestCityForm = (event) => {
     const formData = new FormData(event.currentTarget);
     event.preventDefault();
     let formObject = Object.fromEntries(formData.entries());
     axios
       .post(serverUrl + "cities", formObject)
       .then((res) => {
         console.log(res.data);
         getCities();
        
        })
       .catch((error) =>
         alert("Something went wrong while submitting your request! " + error)
       );
     removePopup();

   };
 
   const handleNewPropertyForm = (event) => {
     const formData = new FormData(event.currentTarget);
     event.preventDefault();
     axios
       .post(serverUrl + "properties", formData)
       .then((res) => {
         console.log(res.data);
         getProperties();
      })
       .catch((error) =>
         alert(
           "Something went wrong while submitting your property details! " +
             error
         )
       );
     removePopup();

   };
 
   const handlePropertyClick = (data) => {
     setSelectedProperty(data);
     setPn(3);
   };

    return(
        
        <div className="projects">
               <h3>Projects in high demand</h3>
               <h6>The most explored projects in Dhanbad</h6>
               <ProjectStackList1
        properties={properties.filter((property) => {

          const val =
            property.address +
            property.type +
            property.price +
            property.title +
            property.description +
            property.pinCode;
          return val.toLowerCase().includes(searchText);
        })}
        serverUrl={serverUrl}
        handlePropertyClick={handlePropertyClick}
        handleEmptyList={setInfp}
      />
               <hr></hr>
                {

                }

               <h3>Popular localities</h3>
               <h6>The most explored localities in Bangalore</h6>
               <Slider2/>
            </div>
    );

}
export default Slider1;
