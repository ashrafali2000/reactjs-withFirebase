import React, { useEffect, useState } from "react";
import { doc, getDoc, getDocs, dbFireStore, where, collection, query } from "../../firebase/conFig";
import { Card } from 'antd';
const AllBlogs = () => {
const [blogs, setBlogs] = useState([]);
let allBlogs = [];

useEffect(() => {

  (async () =>{
    const q = query(collection(dbFireStore, "users"));
    const querySnapshot = await getDocs(q);
    querySnapshot.forEach((doc) => {
      const userBlogs = doc.data().blogs[0];
      console.log(userBlogs)
      allBlogs.push(userBlogs);
    });
    setBlogs(allBlogs)
    console.log(" =====> ", allBlogs);
  })()

},[])

  return (
    <div className="bg-gray-200">
      <div>AllBlogs</div>
      <div >
       {blogs.map(p  => <Card key={Math.random()} className="w-96 md:w-[600px] bg-white-200">
      <h1> {p.title}</h1>
      <p> {p.description}</p>
       
        </Card>)}
      </div>
    </div>
  );
};

export default AllBlogs;
