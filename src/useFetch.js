import { useState, useEffect } from "react"

//Basically this thing is for fetching data and we don't have all the time only the blogs as an data so as it is for fetching data so we should wrote here as data
const useFetch =(url)=>{   //Kyoki yehh logic generalize krne ke liye bnna hai tohh isme custo hook use hrroha hai and therefore component should start with use 
    const [data,setData]=useState(null)     
    const [isloading,setIsloading]=useState(true);
    const [err,setErr]=useState(null);
   
    useEffect(()=>{
        const abortCont = new AbortController();
        fetch(url, { signal: abortCont.signal})  //Now making the dosti of url and abortConst
        .then(res =>{
            console.log(res);
            if(res.ok)
            return res.json();
            else{
                //So if server is not giving data then i will throw an error on screen
                throw Error('could not connect at the moment!!...Try again later')
            }
        })
        .then(data=>{   //Now this that is written in the database will be converted to an javaScript object
            setData(data)
            //This loading should be done till the fetching the data
            setIsloading(false)
            //So if we make subsequnet request if it is should make error again null if we are now able to connect
            setErr(null);
        })
        .catch(err=>{
            if(err.name === 'AbortError')
            {
                console.log('Aborted')  
            }
            else{
            setErr(err.message);
            setIsloading(false)
            } 
        })

        return ()=> console.log('cleanup')  //Whenever from Home page we go on to other route then it activates an cleanup function
    }, []
    )
    return {data,isloading,err};
} //As iam changing state also here so I need that this should have states also defined

export default useFetch;












