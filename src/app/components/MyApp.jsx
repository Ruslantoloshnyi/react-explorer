"use client";

import TheHeader from "./TheHeader/TheHeader";
import TheContent from "./TheContent/TheContent";
import "./MyApp.css";
import TheFooter from "./TheFooter/TheFooter";
import TheStories from "./TheStories/TheStories";
import { useState } from "react";
import Client from "./clients";

function MyApp() {
  const [postData, setPostData] = useState([]);
  function getPosts(posts) {
    setPostData(posts);
  }

  const title = "";

  // for (let arr of postData) {
  //   console.log(arr.content.rendered);
  // }

  return (
    <>
      <div className="background">
        <Client getPosts={getPosts}></Client>
        <TheHeader></TheHeader>
        <TheContent postData={postData}></TheContent>
      </div>
      <TheStories></TheStories>
      <TheFooter></TheFooter>
    </>
  );
}

export default MyApp;
