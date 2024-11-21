import { useState,useEffect } from "react";
import BlogList from "./BlogList";
import useFetch from "./useFetch";

const  Home = () => {
    const {data ,isPending,error} = useFetch("http://localhost:8000/blogs")

    

 



    // const handleDelet= (Id) => { 
    //     const newBlog=blogs.filter(blog => blog.id !== Id);
    //     setBlogs(newBlog)
    // };


    //changing the state of useState in useEffect will cuase infinite loop
    
    
    return(
        <div className="home">
            {error && <div>{error}</div>}
            {isPending && <div>Loading...</div>};
           {data && <BlogList blogs={data} title= "All blogs"  />}
        </div>
    );
}

export default Home;











// const fetchBlog = async () => {
//     try {
//         const response =await fetch('');
//         if(!response.ok){
//             throw new error ('network problem')

//         }
//         const data =await response.json();
//         console.log(data)
//     }
//     catch(error){
//         console.error('there was error in fetching ',error)
//     };
    
// }
