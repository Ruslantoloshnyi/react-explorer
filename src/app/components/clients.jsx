"use client";

import { useState, useEffect } from "react";

function Client(props) {
  useEffect(() => {
    fetch("http://explorer-wp/wp-json/wp/v2/posts")
      .then((response) => response.json())
      .then((data) => {
        props.getPosts(data);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  useEffect(() => {
    fetch("http://explorer-wp/wp-json/wp/v2/stories")
      .then((response) => response.json())
      .then((data) => {
        props.getStories(data);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  return null;
}

export default Client;
