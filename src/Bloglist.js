const Bloglist = ({blogs, title,blogDelete}) => {  //We can take parameters so that other component can reuse this component with diffrent data
   //So I have written blog delete in home then iam sending the protoytype of that blogdelete as an argument to bloglist 
   
    return ( 
        <div className="bloglist"> 
        <h2>{title}</h2>              
        {blogs.map((blog)=>(
                <div className="blog-preview" key={blog.id}>   
                    <h2>{ blog.title }</h2>
                    <p>Written by - {blog.author}</p>
                   

                </div>
            ))}
        </div>
    );
}
export default Bloglist;