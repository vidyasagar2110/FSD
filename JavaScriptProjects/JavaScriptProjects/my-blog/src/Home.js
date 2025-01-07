import { useState } from "react";
const Home = () => {
 const [blogs,setBlogs]=useState([
 {title:"My Blog1", body:"Body of Blog1", author:"Sagar", id:1},
 {title:"My Blog2", body:"Body of Blog2", author:"Rahul", id:2},
 {title:"My Blog3", body:"Body of Blog3", author:"Ashish", id:3}
 ]);
 return ( 
 <div className="home">
 {blogs.map((blog) => (
 <div className="blog-preview" key={blog.id}>
 <h2>{blog.title}</h2>
 <p>Written by: {blog.author}</p>
 </div>
 ))
 }
 </div>
 );
}
export default Home;