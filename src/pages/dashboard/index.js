import React, { useContext, useRef, useEffect, useState } from "react";
import { UserOutlined } from '@ant-design/icons';
import { Avatar, Space } from 'antd';
import {
  setDoc,
  doc,
  dbFireStore,
  updateDoc,
  arrayUnion,
  getDoc,
} from "../../firebase/conFig";
import { AuthContext } from "../../context/authCtx";
import { Card } from "antd";

const Dashboard = () => {
  const [userBlog, setUserBlog] = useState([]);
  const [userDetail, setUserDetail] = useState();
  
  // Use Context API
  const user = useContext(AuthContext);
  const userId = user.userId;

  const titleRef = useRef();
  const descriptionRef = useRef();

  const addBlogHandler = async (event) => {
    event.preventDefault();
    if(userId){
      const title = titleRef.current.value;
      const description = descriptionRef.current.value;
      const blog = {
        title: title,
        description: description,
      };
  
      await updateDoc(doc(dbFireStore, "users", userId), {
        blogs: arrayUnion(blog),
      });
    }

    // JUST FOR SINGLE DATA ADD
    // await setDoc(doc(dbFireStore, "users", "U7jU6YbNmecozzC6DpLyY1lhXzQ2"), {
      //   blogs:[blog]
      // });
      
    };
   
     useEffect(() => {
        async function foo() {
          if(userId){
            const userRef = doc(dbFireStore, "users", userId);
            const docUser = await getDoc(userRef);
        
            if (docUser.exists()) {
              setUserBlog(docUser.data().blogs);
              setUserDetail(docUser.data());
            } else {
              // docSnap.data() will be undefined in this case
              console.log("No such document!");
            }
            return true;
          }
          return false
        }
        foo()
      }, []);

    
    return (
      <div>
      <div className="bg-white p-6 font-bold">Dashboard</div>
      <div className="md:px-18 p-8 bg-red-100 md:mx-60 mx-8 p-12 ">
        <form onSubmit={addBlogHandler}>
          <div className="mt-2">
            <input
              id="firstName"
              name="firstName"
              ref={titleRef}
              type="text"
              defaultValue={"Heading"}
              required
              className="block sm:w-[7
                        00px] w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
            />
          </div>

          <div className="mt-2">
            <textarea
              id="about"
              name="about"
              ref={descriptionRef}
              rows={3}
              className="block sm:w-[7
                    00px] w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              defaultValue={"What is in your mind?"}
            />
          </div>
          <div>
            <button className="flex mt-3 md:w-[160px] w-full justify-center rounded-md bg-indigo-600 px-2 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">
              Publish Blog
            </button>
          </div>
        </form>
      </div>
      <div className="flex justify-center items-center mt-8">

      <h1 className="font-bold text-lg text-start">My Blogs</h1>
      </div>
<div className="flex flex-col items-center gap-10 mt-8">

       {userBlog[0] ? userBlog.map(b =>  { return  <Card key={Math.random()} className="w-3/5 shadow-xl shadow-gray-600/40">
      <div className="w-60 flex gap-4 justify-start items-center"><Avatar size={64} icon={<UserOutlined />} />
      <span>{userDetail.name}</span></div>
         <h1 className="font-bold text-lg">{b.title}</h1>
         <p>{b.description}</p>
          </Card>}) : <div> Please Login First</div>}
</div>
    </div>
  );
};

export default Dashboard;
