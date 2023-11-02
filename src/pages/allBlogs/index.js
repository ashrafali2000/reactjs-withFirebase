import React from "react";
import { doc, getDoc, getDocs, dbFireStore, where, collection, query } from "../../firebase/conFig";

const AllBlogs = () => {
  (async function foo() {

    const q = query(collection(dbFireStore, "users"));
    const querySnapshot = await getDocs(q);
    querySnapshot.forEach((doc) => {
      // doc.data() is never undefined for query doc snapshots
      const userBlogs = doc.data().blogs;
      console.log(" =====> ", userBlogs);
    });
  })();

  return (
    <div>
      <div>AllBlogs</div>
      <div></div>
    </div>
  );
};

export default AllBlogs;
