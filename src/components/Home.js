
import Aboutus from "./Aboutus";
import Cards from "./Cards";
import Health from "./Health";



import Herosection from "./Herosection";
const Home = () => {
    return (
         <div className="home"> 
            
            <Herosection />
            
            <Cards />
           
            <h1 className="allblog1">Glance at it!</h1>
            <Health />
            <h1 className="allblog1">Our Aim</h1>
            <Aboutus />            
           

        </div>
      );
}
 
export default Home;
