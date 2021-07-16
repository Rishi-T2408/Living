
import Bloglist from "./Bloglist"
import useFetch from "./useFetch"   //Yehh compoent nhi hai 
const Allblogs = () => {
    const {data, isloading, err}= useFetch(' http://localhost:8000/blogs')
    return ( 
        <div className="alla">
        {err  &&   <div className="Error">{ err }</div>}
        {isloading   && <div className="Loading">Loading blogs!!!</div> }
        {data && <Bloglist blogs={data}  title="All blogs"/>  }
        </div> 
     );
}
 
export default Allblogs;