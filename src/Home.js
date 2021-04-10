
import { useState, useEffect } from "react"
import Bloglist from "./Bloglist"
import useFetch from "./useFetch"   //Yehh compoent nhi hai 


//Now using this costum hook so that we can use the fetch logic for the data wrapped in endpoint shown below
//This means grab the data but call it blogs in this contects or in this component
const Home = () => {
    const {data, isloading, err}= useFetch(' http://localhost:8000/blogs')
    
    return (
        <div className="home">
            {err  &&   <div className="Error">{ err }</div>}
            {isloading   && <div className="Loading">Loading blogs!!!</div> }
            {data && <Bloglist blogs={data}  title="All blogs"/>  }      
        </div>
      );
}
 
export default Home;
