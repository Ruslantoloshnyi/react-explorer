function ImageContent() {
  return (
    <div className="content">
      <div className="content__image">
        <div>
          <img src="/image_1.jpg" alt="true" />
          <div className="content__head">
            The 10 most beautiful places you should visit in your life
          </div>
          <div className="content-autor">
            <img src="/autor_1.png" alt="true" />
            <div>
              <div className="content-autor__name">Luke Cage</div>
              <div className="content-autor__date">October 11, 2016</div>
            </div>
          </div>
        </div>
        <div className="content__image_text">
          <p>
            Vestibulum ut placerat nisl. Cras sed purus tellus. Pellentesque
            habitant morbi tristique senectus et netus et malesuada fames ac
            turpis egestas. Duis posuere nisi sit amet neque finibus vestibulum.
            Vivamus at leo ut turpis posuere molestie. Nullam at turpis nec
            metus pharetra bibendum. Vivamus id urna et leo blandit consequat.
          </p>
          <p>Continue Reading →</p>
        </div>
      </div>
    </div>
  );
}

export default ImageContent;
