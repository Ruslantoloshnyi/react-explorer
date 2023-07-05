import StoriesContent from "./StoriesContent";

function TheStories() {
  return (
    <section>
      <div className="stories_wrapper">
        <div className="stories">
          <div className="stories__head">Featured Stories</div>
          <div className="stories__subhead">
            Did you read our personal favorites?
          </div>
          <div className="stories-content">
            <StoriesContent></StoriesContent>
            <StoriesContent></StoriesContent>
            <StoriesContent></StoriesContent>
          </div>
          <div className="stories__link">
            <p>Want to read all of our stories?</p>
            <a href="#">Read the full blog</a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default TheStories;
