import pinea from "./Images/pinea.png";
import HM from "./Images/HM.png"
import { Link } from 'react-router-dom';
const Herosection = () => {
    
      
      

    return (
        <div className="Outer">
            <img alt="designed by Freepik" src={HM} className="HM"/>   
        <div className="herosec">
                   
            <div className="inner">
            <h1><span>The Healthy</span> Eating Experience</h1>
         

            <div className="herop">
                <p className="p2hero">Fashions comes and goes, but good health is a treasure to keep.</p>
            </div>

    
            <br></br>
            <Link to='/create'><button className="buttonS">Create your blog</button></Link>
            <div className="design">            
            <p>Glow of Good Health</p>
            <header className="headhero">Living.com</header>
            
            </div>

            </div>
            <img src={pinea} className="pine" />
        
        </div>
        </div>
      );
}
 
export default Herosection;