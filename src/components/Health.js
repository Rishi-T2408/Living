import allblog from './Images/allblog.png'
import WeightG from "./Images/weight1.png"
import ProteinG from "./Images/ProteinG.png";
import { Link } from 'react-router-dom';
const Health = () => {
    return ( 
        <div className="Hcontainer">
            <div className="firstimg">
                <Link to="/"><img src={allblog} alt="Read all blogs" className="RLB"/></Link>
            </div>
            <div className="secondimg">
               
                <Link to="/"><img src={ProteinG} alt="Read about plant protein" className="SI2"/></Link>
                <Link to="/"><img src={WeightG} alt="Weight loss tips" className="SI2"/></Link>
            </div>
        </div>
     );
}
 
export default Health;
