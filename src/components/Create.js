import { useState } from "react";
import {useHistory} from 'react-router-dom';
const Create = () => {
    const [title,setTitle]=useState('Add title to your blog') 
    const [para1,setPara1]=useState('')
    const [para2,setPara2]=useState('')
    const [para3,setPara3]=useState('')
    const [author,setAuthor]=useState('Rishi Raj Tiwari')  //So by changing the state and using it i have the tite data
    const [category,setCategory]=useState('Select one')
    const [isPending,setIsPending]=useState(false)
    const history=useHistory();
    const handleSubmit = (e) =>{
        setIsPending(true);
        e.preventDefault();
        const blog={title, para1, para2, para3, category, author}
        fetch('http://localhost:8000/blogs',
        {
            method: 'Post',
            headers: {"Content-Type":"application/json"},
            body: JSON.stringify(blog)  //Whatever data iam adding iam converting it into JSON string

        }).then(()=>{
            console.log('new blog added'); 
            setIsPending(false);
            history.push('/')
        })

    }  //In while using handleSubmit do not give () nhi tohh vohh function kaam nhi krega

    return (
        <div className="create">
            <div className="on">
            <h2 className="Create">Add an New blog here</h2>
     
            <form onSubmit={handleSubmit}>
                <label className="blogtitle">Blog title:</label>
                <input
                    required
                    type="text"
                    value={title}
                    onChange={(e)=>setTitle(e.target.value)}
                >
                  </input>


                <label className="blogbody">First paragraph:</label>
                <textarea
                required
                    value={para1}
                    onChange={(e)=>setPara1(e.target.value)}>
                </textarea>
                
                <label className="blogbody">Second paragraph</label>
                <textarea
                    value={para2}
                    onChange={(e)=>setPara2(e.target.value)}>
                </textarea>
                
                <label className="blogbody">Third paragraph</label>
                <textarea
                    value={para3}
                    onChange={(e)=>setPara3(e.target.value)}>
                </textarea>


                <label className="blogauthor">Blog's category:</label>
                <select
                required
                value={category}
                onChange={(e)=>setCategory(e.target.value)}>
                    <option value="Fruit benefits">Fruit benfits</option>
                    <option value="Plant protein">Plant protein</option>
                    <option value="Immunity booster">Immunity booster</option>
                    <option value="Weight loss">Weight loss</option>
                </select>

                
                <label className="blogauthor">Blog's author:</label>
                <select
                value={author}
                onChange={(e)=>setAuthor(e.target.value)}>
                    <option value="Deepak">Deepak</option>
                    <option value="Rishi">Rishi</option>
                    <option value="Kunal">Kunal</option>
                    <option value="Anshima">Anshima</option>
                    <option value="Ankit">Ankit</option>
        
                </select>
                </form>
                
                {!isPending && <button>Add Blog</button>}
                {isPending && <button disabled>Adding new blog...</button>}
                </div>
                
                <div className="tw">
                <h2 className="Pre1">Preview your blog here</h2>
                <div className="Pcover">
                <div className="P1">
                    <p><span>Title-</span> {title}</p></div>
                <div className="P2"><p><span>Paragraph 1</span> {para1}</p></div>
                <div className="P2"><p><span>Paragraph 2</span> {para2}</p></div>
                <div className="P2"><p><span>Paragraph 3</span> {para3}</p></div>
                <div className="P3"><p><span>Author-</span> {author}</p></div>
                </div>


                </div>
           
        </div>
      );
}
 
export default Create;
