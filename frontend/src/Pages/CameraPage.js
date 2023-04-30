import logo from './../logo.svg';
import Navbar from './../components/Navbar';
import DisplayImage from './../components/Images';
import './../App.css';
import { Link } from 'react-router-dom';




function CameraPage(){
  return (
    <>
    <Navbar/>
    <Link to="https://waste-sorter.herokuapp.com/">Try Out the Sorting Yourself!</Link>
    </>
  );
}

export default CameraPage;
