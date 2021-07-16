import { Link } from "react-router-dom"

const Notfound = () => {
    return (
        <div>
        <h1 className="page1">Sorry</h1>
        <h3 className="page2">Page not found</h3>
        <Link to="/">Get to the home page from here</Link>
        </div>
      );
}
 
export default Notfound;