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
  const [storiesData, setStoriesData] = useState([]);

  function getPosts(posts) {
    setPostData(posts);
  }

  function getStories(stories) {
    setStoriesData(stories);
  }

  return (
    <>
      <div className="background">
        <Client getPosts={getPosts} getStories={getStories}></Client>
        <TheHeader></TheHeader>
        <TheContent postData={postData}></TheContent>
      </div>
      <TheStories storiesData={storiesData}></TheStories>
      <TheFooter></TheFooter>
    </>
  );
}

export default MyApp;
