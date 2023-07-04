import "./Content.css";
import ImageContent from "./ImageContent";

function TheContent() {
  return (
    <section>
      <div className="container">
        <ImageContent></ImageContent>
        <ImageContent></ImageContent>
        <ImageContent></ImageContent>
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
