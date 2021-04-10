import {Link} from 'react-router-dom'
const Navbar = () => {
    return ( 
        <nav className="navbar">
            <h1>Grooters Blog</h1>
            <div className="Links">
                <Link to="/">Home</Link>
                <button className="B1" ><Link to='/Create'>New Blog</Link></button>
            </div>

        </nav>
     );
}
 
export default Navbar;