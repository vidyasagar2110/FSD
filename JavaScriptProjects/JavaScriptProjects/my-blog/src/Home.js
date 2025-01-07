import { useState } from "react";
import BlogList from './BlogList';
const Home = () => {
 const [blogs,setBlogs]=useState([
 {title:"My Blog1", body:"Body of Blog1", author:"Sagar", id:1},
 {title:"My Blog2", body:"Body of Blog2", author:"Rahul", id:2},
 {title:"My Blog3", body:"Body of Blog3", author:"Ashish", id:3},
 
 ]);
 const handleDelete = (id) => {
 const newBlogs=blogs.filter(blog =>
blog.id !== id);
 setBlogs(newBlogs);
 }
 return ( 
 <div className="home">
 < BlogList blogs={blogs} title="All 
Blogs!" handleDelete={handleDelete} />
 </div>
 );
}
export default Home;