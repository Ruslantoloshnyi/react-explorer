import "./Content.css";
import ImageContent from "./ImageContent";

function TheContent(props) {
  const oldPosts = props.postData;
  console.log(oldPosts);

  const newArr = oldPosts.map(function (item) {
    return (
      <ImageContent
        key={item.id}
        title={item.title.rendered}
        date={item.date}
        author={item.author}
        excerpt={item.excerpt.rendered}
        media={item.featured_media}
      ></ImageContent>
    );
  });

  // const newArr2 = oldPosts.map(function (item) {
  //   return item.title.rendered;
  // });
  // console.log(newArr2);
  return (
    <section>
      <div className="container">
        {newArr}
        <div className="content-read-more">
          <div className="content-read-more__text">Want to read more?</div>
          <div className="content-read-more__button">
            <a href="#">Visit Blog Archive</a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default TheContent;
