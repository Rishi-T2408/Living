
import { useState } from "react"
import Bloglist from "./Bloglist"

const Home = () => {
    const [blogs,setBlogs]=useState([
        { title: 'My new website', body: 'lorem ipsum...', author: 'mario', id: 1 },
        { title: 'Welcome party!', body: 'lorem ipsum...', author: 'yoshi', id: 2 },
        { title: 'Web dev top tips', body: 'lorem ipsum...', author: 'mario', id: 3 }



    ]
    )  //We gonna set my blogs variable to an array of blogs blogs are of list type    
    //So I passed the parameter list of blogs to the BLoglist component so that we use it to write things
    //So in second Bloglist will pass an different parameter.....By filtering mario's blogs only
    //blogs naam ki array mai jitne bhi blogs hai uska author dhekenge
    //Any blog list we created we send it as an blog type variable only

    const blogDelete = (id) =>{  //When the function is defined and parameter is passed then we use the {}
        const newBlog = blogs.filter((blog)=>(blog.id !== id)
            ) //So we will make an newblogs by filtering the blog and deleting the required one

        setBlogs(newBlog);  //We should use the variable that changes the state
        }
    return (
        <div className="home">
            <Bloglist blogs={blogs}  title="All blogs" blogDelete={blogDelete}/>  
            <Bloglist blogs={blogs.filter((blog)=>(
               blog.author==="mario" 
            ))}  title="Mario's blogs" blogDelete={blogDelete}/>  

        </div>
      );
}
 
export default Home;
