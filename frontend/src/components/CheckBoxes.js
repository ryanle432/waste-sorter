import React, { useState, useEffect } from "react";
import "./../components_style/check_box_style.css"

function CheckboxGroup(props) {
const [checkedBoxes,setCheckedBoxes] = useState(
    {
        landfill: false,
        recycle: false,
        glass: false,
        metal: false,
        plastic: false,
        paper: false,
        compost: false,
        cardboard:false 
    });

    useEffect(() => {
        props.func(checkedBoxes);     
        // This will be called every time the checkboxes state changes
        // and will trigger a re-render of the component
      }, [checkedBoxes]);

    /*
    const handleCheckboxChange = (event) => {
        const { name, checked } = event.target;
        setCheckedBoxes((prevState) => ({
          ...prevState,
          [name]: checked
        }));
      };
      */
      function handleCheckboxChange(event) {
        const { name } = event.target;
        if((name === "metal" || name ===  "plastic" || name === "paper" || name === "glass" || name === "cardboard" )&& checkedBoxes.recycle === true)
        {
            
        }
        else 
        {
        setCheckedBoxes({ ...checkedBoxes, [name]: !checkedBoxes[name] });
        }
      }

    function handleRecycleChange (event)  
    {
        checkedBoxes.metal = false;
        checkedBoxes.glass = false;
        checkedBoxes.paper = false;
        checkedBoxes.plastic = false;
        checkedBoxes.cardboard = false;
        
        }
    
    
      

  return (
    <div>
        <div className="checkboxes-container">
          <div className="checkbox">
            <label>
              <input type="checkbox" name = "landfill" checked = {checkedBoxes.landfill} onChange = {(e) => {handleCheckboxChange(e);}} value="landfill" />
              <span>LandFill</span>
            </label>
          </div>
          <div className="checkbox">
            <label>
              <input type="checkbox" name = "recycle" checked = {checkedBoxes.recycle} onChange = {(e) => {handleCheckboxChange(e); handleRecycleChange(e);}} value="recycle"  />
              <span>Recycle</span>
            </label>
          </div>
          <div className="checkbox">
            <label>
              <input type="checkbox" name = "metal" checked = {checkedBoxes.metal && !checkedBoxes.recycle} onChange = {(e) => {handleCheckboxChange(e) ;}} value="metal"  />
              <span>Metal</span>
            </label>
          </div>
          <div className="checkbox">
            <label>
              <input type="checkbox" name = "glass" checked = {checkedBoxes.glass&& !checkedBoxes.recycle} onChange = {(e) => {handleCheckboxChange(e);}} value="glass"  />
              <span>Glass</span>
            </label>
          </div>
          <div className="checkbox">
            <label>
              <input type="checkbox" name = "paper" checked = {checkedBoxes.paper&& !checkedBoxes.recycle} onChange = {(e) => {handleCheckboxChange(e);}} value="paper"  />
              <span>Paper</span>
            </label>
          </div>
          <div className="checkbox">
            <label>
              <input type="checkbox" name = "plastic" checked = {checkedBoxes.plastic&& !checkedBoxes.recycle} onChange = {(e) => {handleCheckboxChange(e);}} value="plastic"  />
              <span>Plastic</span>
            </label>
          </div>
          <div className="checkbox">
            <label>
              <input type="checkbox" name = "cardboard" checked = {checkedBoxes.cardboard && !checkedBoxes.recycle} onChange = {(e) => {handleCheckboxChange(e);}} value="cardboard" />
              <span>Cardboard</span>
            </label>
          </div>
          <div className="checkbox">
            <label>
              <input type="checkbox" name = "compost" checked = {checkedBoxes.compost} onChange = {handleCheckboxChange} value="compost"  />
              <span>Compost</span>
            </label>
          </div>
        </div>
      
    </div>
  );
}


export default CheckboxGroup;
