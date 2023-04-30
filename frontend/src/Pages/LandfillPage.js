import DisplayImage from "../components/Images";
import Navbar from "../components/Navbar";
import CheckboxGroup from "../components/CheckBoxes";
import "./../components_style/landfill_page_style.css";
import  { useState } from 'react';
import { useEffect } from "react";


function LandFillPage() {
   const [count,setCount] = useState(0);
    const pull_data = (data) => 
    {
        setCount(data);
        if(count["recycle"] === true)
        {
            console.log("recycle is true");
        }
    }


    useEffect(() => {
        //console.log("This is updating land fill");
        // This will be called every time the checkboxes state changes
        // and will trigger a re-render of the component
      },);
  //const [checkboxVisible, setCheckboxVisible] = useState(true);
/*
  return (
    <div>
        <div className={`image-container ${!checkboxVisible ? '' : 'left'}`}>
        <Navbar />
      </div>
      <div className={`image-container ${!checkboxVisible ? '' : 'left'}`}>
      <button onClick={() => setCheckboxVisible(!checkboxVisible)}>
        Toggle Checkboxes
      </button>
      </div>
      <div className={`checkbox-container ${checkboxVisible ? '' : 'hidden'}`}>
        <CheckboxGroup />
      </div>
      <div className={`image-container ${!checkboxVisible ? '' : 'left'}`}>
        <DisplayImage />
      </div>
    </div>
  );*/
  return (
    <div className = {'main_page'}>
        <div className={`image-top`}>
        <Navbar />
      </div>
      <div className={`checkbox-container`}>
        <CheckboxGroup 
        func = {pull_data}/>
      </div>
      {count["recycle"] === true &&
            <div className = {`image-shift`}>
            <DisplayImage props = {'./../testpictures'} />
            </div>
      }
      <div className = {`image-shift`}>
        <DisplayImage  props = {'./../testpictures'} />
      </div>
    </div>
  );
}

export default LandFillPage;
