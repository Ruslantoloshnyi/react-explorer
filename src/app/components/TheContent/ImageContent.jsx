"use client";

import he from "he";
import Image from "next/image";
import { useEffect, useState } from "react";

function ImageContent(props) {
  const title = props.title;
  const excerpt = props.excerpt.replace(/<\/?p>/g, "");
  const decodeExcerpt = he.decode(excerpt);

  const [imageUrl, setImageUrl] = useState("");

  useEffect(() => {
    if (props.media) {
      fetch(`http://explorer-wp/wp-json/wp/v2/media/${props.media}`)
        .then((response) => response.json())
        .then((data) => {
          const imageSource = data.guid.rendered;
          setImageUrl(imageSource);
        })
        .catch((error) => {
          console.error(error);
        });
    }
  }, []);

  if (!imageUrl) {
    // Пока запрос выполняется, можно отобразить заглушку или индикатор загрузки
    return <div>Loading...</div>;
  }

  console.log(imageUrl);

  return (
    <div className="content">
      <div className="content__image">
        <div>
          <Image src={imageUrl} alt="futured" width={800} height={330}></Image>
          <div className="content__head">{title}</div>
          <div className="content-autor">
            <img src="/autor_1.png" alt="kik ni sho" />
            <div>
              <div className="content-autor__name">{props.author}</div>
              <div className="content-autor__date">{props.date}</div>
            </div>
          </div>
        </div>
        <div className="content__image_text">
          <p>{decodeExcerpt}</p>
          <p>Continue Reading →</p>
        </div>
      </div>
    </div>
  );
}

export default ImageContent;
