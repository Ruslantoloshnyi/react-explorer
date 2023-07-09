function StoriesContent() {
  return (
    <>
      <div className="stories-content-block">
        <div className="stories-content-block__image">
          <img src="/stories-image_1.jpg" alt="nex start" />
          <div className="stories-content-block__image-autor">
            <img src="/autor_1.png" alt="next start" />
            <p className="stories-content-block__autor">Luke Cage</p>
            <p className="stories-content-block__date">Oct 11, 2016</p>
          </div>
        </div>
        <div className="stories-content-block__text">
          <p>The 10 most beautiful places you should visit in your life</p>
        </div>
      </div>
    </>
  );
}

export default StoriesContent;
