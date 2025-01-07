import { useState } from "react";
import BlogList from './BlogList';
const Home = () => {
 const [blogs,setBlogs]=useState([
 {title:"My Blog1", body:"Body of Blog1", author:"Sagar", id:1},
 {title:"My Blog2", body:"Body of Blog2", author:"Rahul", id:2},
 {title:"My Blog3", body:"Body of Blog3", author:"Ashish", id:3},
 
 ]);
 return ( 
 <div className="home">
 < BlogList blogs={blogs} title="All Blogs!" />
 < BlogList blogs={blogs.filter((blog) => blog.author === 'Sagar')} title="Sagar's blogs" />
 </div>
 );
}
export default Home;