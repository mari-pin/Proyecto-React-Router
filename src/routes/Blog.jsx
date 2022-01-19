import React from 'react';
import { Link } from 'react-router-dom';
import { useFetch } from '../components/hooks/useFetch';

const Blog = () => {
    const{data,error,loading} = useFetch('https://jsonplaceholder.typicode.com/posts');

    if (loading){
        return<h1>Loading....</h1>;
    }
    if (error){
        return<h1>{error}</h1>
    }
    
    
    
    return (
        <div>
           <h1>Blog</h1> 
           {data.map((item)=> {
               <Link to = {`/blog/${item.id}`}>{item.id} - {item.title} </Link>
           })}
        </div>
    )
}

export default Blog;
