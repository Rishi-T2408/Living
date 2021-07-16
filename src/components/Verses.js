import verses from "./Images/verses.png";
import broccoli1 from "./Images/broccoli1.png";
import kiwi from "./Images/kiwi.png";
const Verses = () => {
    return (
        <div className="ver">
           
            <div className="brogrid">
            <img src={kiwi} alt="Kiwi as super fruit" className="bro"/>
            <img src={broccoli1} alt="Broccoli as super food" className="bro"/>
            </div>
            <img src={verses} alt="Natural protein vs Artificial protein" className="verimg"/>
        </div>
      );
}
 
export default Verses;